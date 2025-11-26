import { useState } from "react";
// No submit button; Enter will submit the form
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/lib/supabaseClient";

export function EmailSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isEmailValid = (value: string) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim()) {
      toast.error("Please enter your first and last name.");
      return;
    }

    if (!isEmailValid(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      setIsSubmitting(true);
      if (!supabase) {
        toast.error("Signup not configured yet. Please set Supabase env vars.");
        return;
      }

      const { error } = await supabase
        .from("email_signups")
        .insert({
          email,
          first_name: firstName.trim(),
          last_name: lastName.trim(),
        });

      if (error) {
        toast.error("Something went wrong. Please try again later.");
        return;
      }

      toast.success("You're in! Check your email for your discount.");
      setFirstName("");
      setLastName("");
      setEmail("");
      setSubmitted(true);
    } catch (err) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="w-full space-y-2">
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-white/90 h-10 text-sm w-full"
            disabled={isSubmitting}
          />
          <Input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="bg-white/90 h-10 text-sm w-full"
            disabled={isSubmitting}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/90 h-10 text-sm w-full"
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            className="h-10 text-sm w-full bg-white text-black hover:bg-gray-100 border border-gray-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Get the Launch Discount"}
          </Button>
        </div>
      </form>
      {submitted && (
        <p className="text-green-100 text-sm mt-2">
          Thanks for joining! Check your inbox for your discount code.
        </p>
      )}
    </div>
  );
}

export default EmailSignup;



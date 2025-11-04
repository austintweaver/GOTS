import { useState } from "react";
// No submit button; Enter will submit the form
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isEmailValid = (value: string) => /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isEmailValid(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      toast.error("Signup not configured yet. Please set EmailJS env vars.");
      return;
    }

    try {
      setIsSubmitting(true);
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        { email },
        { publicKey: PUBLIC_KEY }
      );
      toast.success("You're in! Check your email for your discount.");
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
      <form onSubmit={handleSubmit} className="w-full">
        <Input
          type="email"
          placeholder="Sign up with your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/90 h-10 text-sm"
          disabled={isSubmitting}
        />
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



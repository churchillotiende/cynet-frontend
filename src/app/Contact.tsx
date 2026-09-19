import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/Contact")({
  head: () => ({
    meta: [{ title: "Contact Us | Bluestron Institute" }],
  }),
  component: Contact,
});

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const WP_BASE = "https://cyneteastafrica.com/wp-json";

    try {
      const res = await fetch(`${WP_BASE}/tcr/v1/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          org: data.get("org"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      const json = await res.json();

      if (!json.success) throw new Error(json.message);

      toast.success("Message received", {
        description: "An advisor will reach out within 24 hours.",
      });
      form.reset();
    } catch (err) {
      toast.error("Failed to send message", {
        description: err.message ?? "Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 lg:py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Get in touch
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold mt-2">
          Talk to a Bluestron advisor
        </h1>
        <p className="mt-3 text-muted-foreground">
          Tell us about your training, research, or consultancy needs and we'll
          get back within one business day.
        </p>
      </div>

      <div className="mt-10 grid lg:grid-cols-[1fr_360px] gap-8">
        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card p-6 lg:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Full name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Organisation" name="org" />
            <Field label="Phone" name="phone" />
          </div>
          <div>
            <label className="text-sm font-medium">How can we help?</label>
            <textarea
              name="message"
              required
              rows={5}
              className="mt-1.5 w-full px-3.5 py-2.5 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <button
            disabled={submitting}
            className="inline-flex items-center gap-2 px-5 h-11 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-glow disabled:opacity-60"
          >
            <Send className="size-4" />{" "}
            {submitting ? "Sending…" : "Send message"}
          </button>
        </form>

        <aside className="space-y-4">
          <InfoCard
            icon={MapPin}
            title="Office"
            text="View Park Towers , Nairobi, Kenya"
          />
          <InfoCard
            icon={Mail}
            title="Email"
            text="info@bluestroninstitute.com"
          />
          <InfoCard icon={Phone} title="Phone" text="+254 715 113 519" />
          <div className="rounded-2xl border border-border bg-gradient-card p-6">
            <p className="text-sm font-semibold">Office hours</p>
            <p className="text-sm text-muted-foreground mt-1">
              Mon — Fri · 8:00 AM — 5:00 PM EAT
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

const Field = ({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) => (
  <div>
    <label className="text-sm font-medium">
      {label}
      {required && <span className="text-primary"> *</span>}
    </label>
    <input
      name={name}
      type={type}
      required={required}
      className="mt-1.5 w-full h-11 px-3.5 rounded-lg bg-secondary border border-border text-sm focus:outline-none focus:ring-2 focus:ring-ring/40"
    />
  </div>
);

const InfoCard = ({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) => (
  <div className="rounded-2xl border border-border bg-card p-5 flex items-start gap-3">
    <div className="size-10 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
      <Icon className="size-5" />
    </div>
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-sm text-muted-foreground mt-0.5">{text}</p>
    </div>
  </div>
);

export default Contact;

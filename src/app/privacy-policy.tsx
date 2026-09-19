import { createFileRoute } from "@tanstack/react-router";
import {
  Eye,
  Lock,
  Mail,
  RefreshCw,
  Scale,
  Shield,
  UserCheck,
} from "lucide-react";

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: `We may collect personal information when you interact with our website or services. This includes, but is not limited to, your full name, email address, phone number, organization or company name, and any additional details you voluntarily provide when filling out forms, registering for training programs, or contacting us.

We may also collect non-personal data such as browser type, IP address, pages visited, and time spent on our site through standard web analytics tools. This helps us understand how our visitors engage with our content.`,
  },
  {
    icon: UserCheck,
    title: "How We Use Your Information",
    content: null,
    list: [
      "Provide, operate, and maintain our website and training services.",
      "Process registrations and enrolments for our programs and courses.",
      "Personalize your experience and tailor content to your interests.",
      "Analyze usage trends to improve our website and service offerings.",
      "Develop new training programs, features, and institutional resources.",
      "Communicate with you directly — including course updates, newsletters, and promotional offers.",
      "Respond to your enquiries and deliver customer support.",
      "Detect, prevent, and address fraudulent or unauthorized activity.",
    ],
  },
  {
    icon: Scale,
    title: "Disclosure of Your Information",
    content: `Bluestron Institute treats your personal information with the utmost discretion. We do not sell, trade, or rent your data to third parties for commercial purposes. However, we may disclose your information in the following limited circumstances:

By Law or to Protect Rights: Where required by law or where we believe disclosure is necessary to respond to legal processes, investigate potential violations of our policies, or protect the rights, property, and safety of Bluestron Institute, our clients, or the public.

Service Providers: We may share information with trusted third-party vendors who assist us in operating our website or conducting our business, provided they agree to keep your information confidential.`,
  },
  {
    icon: Lock,
    title: "Security of Your Information",
    content: `Bluestron Institute employs administrative, technical, and physical security measures designed to safeguard your personal information against unauthorized access, disclosure, alteration, or destruction.

We use industry-standard protocols including encrypted data transmission and secure server infrastructure. However, please be aware that no method of electronic storage or data transmission over the Internet is entirely foolproof. While we strive to use commercially acceptable means to protect your personal data, we cannot guarantee its absolute security.`,
  },
  {
    icon: RefreshCw,
    title: "Policy Changes",
    content: `We reserve the right to update or revise this Privacy Policy at any time to reflect changes in our practices, legal obligations, or operational requirements. When we make material changes, we will update the effective date at the top of this page.

We encourage you to review this Privacy Policy periodically to remain informed about how we are protecting your information. Your continued use of our website following the posting of any changes constitutes your acceptance of those changes.`,
  },
  {
    icon: Mail,
    title: "Contact Us",
    content: `If you have any questions, concerns, or comments regarding this Privacy Policy or the way we handle your personal data, we welcome you to reach out to us directly. Our team is committed to addressing your enquiries promptly and transparently.

You may contact us at info@bluestroninstitute.com or call us on +254 715 113 519. Alternatively, you may visit our offices at View Park Towers, Nairobi, Kenya.`,
  },
];

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [{ title: "Privacy Policy | Bluestron Institute" }],
  }),
  component: PrivacyPolicy,
});
function PrivacyPolicy() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute -right-40 -top-32 size-96 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-5 lg:px-8 py-20 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Legal
          </p>
          <h1 className="mt-3 text-4xl lg:text-5xl font-bold leading-tight">
            Your <span className="text-gradient">privacy</span> matters to us.
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl">
            Bluestron Institute is committed to protecting your personal
            information and being transparent about how we collect, use, and
            safeguard your data. This Privacy Policy applies to all visitors and
            users of our website and services. By accessing our site, you agree
            to the terms outlined herein.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-3 gap-10 items-start">
        {/* Sidebar nav */}
        <aside className="hidden lg:block sticky top-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Sections
          </p>
          <ul className="space-y-2">
            {sections.map((s) => (
              <li key={s.title}>
                <a
                  href={`#${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="size-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                  {s.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Compliance badge */}
          <div className="mt-10 rounded-2xl border border-border bg-gradient-card p-5">
            <div className="size-10 rounded-lg bg-gradient-primary grid place-items-center shadow-glow mb-3">
              <Shield className="size-5 text-primary-foreground" />
            </div>
            <p className="text-sm font-semibold">Data Protection</p>
            <p className="text-xs text-muted-foreground mt-1">
              Bluestron Institute handles all personal data in accordance with
              applicable Kenyan data protection laws.
            </p>
          </div>
        </aside>

        {/* Main content */}
        <div className="lg:col-span-2 space-y-12">
          {sections.map((s) => (
            <div
              key={s.title}
              id={s.title.toLowerCase().replace(/\s+/g, "-")}
              className="rounded-2xl border border-border bg-gradient-card p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-lg bg-gradient-primary grid place-items-center shadow-glow shrink-0">
                  <s.icon className="size-5 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-bold">{s.title}</h2>
              </div>

              {s.content && (
                <div className="space-y-4">
                  {s.content.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {s.list && (
                <ul className="space-y-2.5 mt-2">
                  {s.list.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;

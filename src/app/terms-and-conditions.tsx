import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle,
  BadgeCheck,
  Ban,
  BookOpen,
  CreditCard,
  FileText,
  HeartHandshake,
  Info,
  Laptop,
  Lock,
  RefreshCw,
  Shield,
  UserCheck,
  Users,
} from "lucide-react";

const sections = [
  {
    icon: UserCheck,
    title: "Registration with Bluestron Institute",
    id: "registration",
    content: `When booking a training program with Bluestron Institute, you are required to register and provide accurate information about yourself. By completing registration, you agree to provide true, accurate, current, and complete information as prompted by the registration form. Any false or misleading information may result in the cancellation of your booking without a refund.`,
  },
  {
    icon: BookOpen,
    title: "Booking and Confirmation",
    id: "booking",
    content: `Training programs can be booked through the booking forms available on the Bluestron Institute website at bluestroninstitute.com.

When you submit a booking for a training or eLearning course, your submission represents an offer to Bluestron Institute to enrol you onto your selected program. Upon submission, you will receive an automated summary email confirming your selection.

Bluestron Institute will formally accept your offer by entering your booking into our system and sending you a confirmation email, along with all relevant information for commencing your learning journey.`,
  },
  {
    icon: CreditCard,
    title: "Prices & Payment",
    id: "prices-payment",
    content: null,
    list: [
      "Bluestron Institute reserves the right to update training fees at any time. Where possible, advance notice of pricing changes will be communicated.",
      "Groups of three or more participants from the same organisation booking onto the same course qualify for a 5% group discount off the combined course fees. This offer cannot be combined with any other promotion and is subject to availability.",
      "Training course fees include: tuition for all scheduled sessions, all relevant course materials, and — for face-to-face courses — refreshments and lunch where applicable.",
      "All fees must be paid in full before training commences. We are unable to accept instalment payments or issue invoices for deferred payment.",
      "VAT and applicable taxes will be charged at the prevailing rate depending on the course and the participant's location.",
    ],
  },
  {
    icon: FileText,
    title: "Prevailing Terms & Conditions",
    id: "prevailing-terms",
    content: `All services provided by Bluestron Institute are governed exclusively by these Terms and Conditions. No pre-contractual documentation issued by Bluestron Institute constitutes a binding offer.

If you engage Bluestron Institute's services under your own terms and conditions, we will only accept such engagement subject to these Terms and Conditions, which shall prevail over any other terms you may propose. Continued use of our services following booking constitutes full acceptance of these Terms and Conditions.`,
  },
  {
    icon: Shield,
    title: "Intellectual Property Rights",
    id: "intellectual-property",
    content: `All training materials — whether published on the Bluestron Institute website or distributed during training sessions — remain the exclusive property of Bluestron Institute. This includes, without limitation, the design, graphics, text, audio recordings, presentations, course handouts, and all other content produced or delivered by Bluestron Institute or its trainers.

Upon enrolment, participants are granted a non-exclusive, non-transferable, revocable licence to use course materials solely for personal learning purposes. No content may be copied, reproduced, uploaded, posted, shared, or distributed in any form — in whole or in part — without the prior written consent of Bluestron Institute. Unauthorized use constitutes an infringement of our intellectual property rights and may result in legal action.`,
  },
  {
    icon: HeartHandshake,
    title: "Special Requirements",
    id: "special-requirements",
    content: `Bluestron Institute is committed to making our training programs accessible and inclusive. We will make every reasonable effort to accommodate any special requirements — including dietary, accessibility, or other personal needs — that are communicated to us in advance through the booking form.

To ensure we can make appropriate arrangements, please notify us of any special requirements at the time of booking. Requests made after registration may not be possible to accommodate.`,
  },
  {
    icon: AlertTriangle,
    title: "Health & Safety",
    id: "health-safety",
    content: `For face-to-face training courses, all participants must comply with the health and safety rules and regulations in force at the training venue. This includes any security requirements, fire safety procedures, and any guidelines introduced in response to public health circumstances.

Bluestron Institute reserves the right to exclude any participant who fails to comply with applicable health and safety requirements, without liability for any refund of fees or reimbursement of associated costs.`,
  },
  {
    icon: Info,
    title: "Invitation Letters",
    id: "invitation-letters",
    content: `Where a training course is held on a face-to-face basis and a participant requires an official invitation letter from Bluestron Institute — for example, for visa application purposes — we are able to provide such a letter upon receipt of full payment of the course fee.

Please note that Bluestron Institute is not able to act as a representative or agent on behalf of any participant in visa or immigration matters. We accept no responsibility for any costs incurred as a result of a failure to obtain the required visa or travel documentation.`,
  },
  {
    icon: Ban,
    title: "Participant Conduct",
    id: "conduct",
    content: `Bluestron Institute is committed to maintaining a professional, respectful, and inclusive learning environment for all participants and trainers. We reserve the right to remove any participant from a training course whose behaviour is deemed disruptive, inappropriate, or harmful to others, as determined at the sole discretion of Bluestron Institute or its trainers.

In such circumstances, no refund of course fees will be issued, and Bluestron Institute will not be liable for any other costs incurred by the participant.`,
  },
  {
    icon: Users,
    title: "Trainers",
    id: "trainers",
    content: `Bluestron Institute will assign qualified trainers to deliver each course as it deems appropriate. We reserve the right, at our sole discretion, to substitute any trainer with another suitably qualified professional at any time before or during a training course. Such changes do not constitute grounds for cancellation or a refund.

All trainers engaged by Bluestron Institute hold relevant professional certifications and are selected based on their expertise, practical experience, and ability to deliver high-quality learning outcomes.`,
  },
  {
    icon: BadgeCheck,
    title: "Liability",
    id: "liability",
    content: `Bluestron Institute does not accept responsibility for any actions taken by participants as a result of information shared, or opinions expressed, during our training courses or in course materials. Views expressed by individual trainers are their own and do not necessarily represent the position of Bluestron Institute.

Participants are advised to seek independent professional advice when applying training content to specific organisational or operational situations. Bluestron Institute's liability is limited to the direct value of the training course fee paid.`,
  },
  {
    icon: Laptop,
    title: "Technology & Online Platforms",
    id: "technology",
    content: `Bluestron Institute does not warrant that online content, eLearning platforms, or virtual training environments will be continuously available, uninterrupted, or free from errors, bugs, or technical disruptions. While we take reasonable steps to maintain platform stability and security, we cannot guarantee that all content will be accessible at all times.

In the event of significant technical disruption, Bluestron Institute will endeavour to reschedule affected sessions or provide alternative access arrangements. We accept no liability for losses arising from temporary platform unavailability.`,
  },
  {
    icon: Lock,
    title: "Personal Data",
    id: "personal-data",
    content: `The personal information you provide during the booking process will be stored and processed in accordance with applicable data protection legislation. Your data will be used by Bluestron Institute solely for the purpose of delivering your training program and communicating relevant course information.

Your full name, job title, and organisation name may be shared with the assigned trainer in advance of the course to facilitate effective facilitation and group interaction. For full details on how we manage your data, please refer to our Privacy Policy.`,
  },
  {
    icon: RefreshCw,
    title: "Cancellation Policy",
    id: "cancellation",
    content: null,
    subsections: [
      {
        title: "Cancellation by Participant",
        text: "If you wish to cancel your enrolment, you must notify Bluestron Institute in writing via email at least 14 calendar days before the course start date. Cancellations made within this period are eligible for a refund, subject to a 30% administrative fee deducted from the course fee. Cancellations received fewer than 14 days before the course start date will not be eligible for a refund, and the full course fee remains payable.",
      },
      {
        title: "Substitutions",
        text: "If you are unable to attend, you may substitute your place with a colleague from the same organisation. Substitutions notified more than 7 days before the course start date are free of charge. Substitutions made less than 7 days before the start date will incur an administrative fee of KES 6,500.",
      },
      {
        title: "Transfers",
        text: "If you can no longer attend, you may transfer your booking to the next available session of the same course. Transfers must be requested in writing, and the alternative date must be specified at the time of the transfer request. Transfers are only applicable to the same course on a different date.",
      },
      {
        title: "Cancellation by Bluestron Institute",
        text: "In exceptional circumstances, Bluestron Institute reserves the right to alter, postpone, or cancel a training course. Where this occurs, we will endeavour to reschedule and notify all registered participants promptly. If rescheduling is not possible, participants may transfer to the next available session or receive a 100% refund of fees paid. Any travel or accommodation costs remain the sole responsibility of the participant.",
      },
      {
        title: "Non-Attendance",
        text: "Failure to attend a booked course without prior written notice to Bluestron Institute will result in forfeiture of the course fee. No refund or transfer will be offered in cases of non-attendance without notification.",
      },
    ],
  },
];

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [{ title: "Terms and Conditions | Bluestron Institute" }],
  }),
  component: TermsAndConditions,
});

function TermsAndConditions() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute -left-40 -top-32 size-96 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-5 lg:px-8 py-20 lg:py-28">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Legal
          </p>
          <h1 className="mt-3 text-4xl lg:text-5xl font-bold leading-tight">
            Terms & <span className="text-gradient">Conditions</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl">
            These Terms and Conditions govern your use of Bluestron Institute's
            website and the booking of any training programs or services we
            offer. By registering for any course or accessing our services, you
            confirm that you have read, understood, and agreed to be bound by
            these terms.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-3 gap-10 items-start">
        {/* Sidebar */}
        <aside className="hidden lg:block sticky top-24">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">
            Sections
          </p>
          <ul className="space-y-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="size-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                  {s.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-border bg-gradient-card p-5">
            <div className="size-10 rounded-lg bg-gradient-primary grid place-items-center shadow-glow mb-3">
              <FileText className="size-5 text-primary-foreground" />
            </div>
            <p className="text-sm font-semibold">Need Clarification?</p>
            <p className="text-xs text-muted-foreground mt-1">
              For any questions about these terms, contact us at{" "}
              <a
                href="mailto:info@bluestroninstitute.com"
                className="text-primary hover:underline"
              >
                info@bluestroninstitute.com
              </a>
            </p>
          </div>
        </aside>

        {/* Main */}
        <div className="lg:col-span-2 space-y-8">
          {sections.map((s) => (
            <div
              key={s.id}
              id={s.id}
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

              {s.subsections && (
                <div className="space-y-5 mt-2">
                  {s.subsections.map((sub, i) => (
                    <div key={i} className="border-l-2 border-primary/30 pl-4">
                      <p className="text-sm font-semibold mb-1">{sub.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {sub.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default TermsAndConditions;

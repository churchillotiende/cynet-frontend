/**
 * useRegistration.tsx
 *
 * Drop this file alongside CourseDetail.tsx.
 *
 * Wired to the existing "Training Course Registration" WordPress plugin.
 * Uses the localised `tcrReg` object the plugin already injects:
 *   tcrReg.ajax_url  → admin-ajax.php URL
 *   tcrReg.nonce     → wp_create_nonce('tcr_registration_nonce')
 *
 * Usage in CourseDetail:
 *   import { RegistrationModal, useRegistration } from "./useRegistration";
 *
 *   const reg = useRegistration();
 *   ...
 *   <Button onClick={() => reg.open(title, categoryName)}>Reserve my seat</Button>
 *   <RegistrationModal {...reg} />
 */

import { useState } from "react";
import {
  X,
  Loader2,
  CheckCircle2,
  User,
  Mail,
  Phone,
  Building2,
  Briefcase,
  Users,
  MonitorPlay,
  CalendarDays,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* ------------------------------------------------------------------ */
/* Types                                                                */
/* ------------------------------------------------------------------ */

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  jobTitle: string;
  trainingMode: string;
  participants: string;
  startDate: string;
  endDate: string;
  message: string;
}

export interface RegistrationState {
  isOpen: boolean;
  courseName: string;
  courseCategory: string;
  open: (name: string, category?: string) => void;
  close: () => void;
}

/* ------------------------------------------------------------------ */
/* Hook                                                                 */
/* ------------------------------------------------------------------ */

export function useRegistration(): RegistrationState {
  const [isOpen, setIsOpen] = useState(false);
  const [courseName, setCourseName] = useState("");
  const [courseCategory, setCourseCategory] = useState("");

  return {
    isOpen,
    courseName,
    courseCategory,
    open: (name: string, category = "") => {
      setCourseName(name);
      setCourseCategory(category);
      setIsOpen(true);
    },
    close: () => setIsOpen(false),
  };
}

/* ------------------------------------------------------------------ */
/* Submit — posts to your plugin's existing AJAX action                */
/* ------------------------------------------------------------------ */
const WP_BASE = "https://api.bluestroninstitute.com/wp-json";

async function submitRegistration(
  formData: FormData,
  courseName: string,
  courseCategory: string,
) {
  const res = await fetch(`${WP_BASE}/tcr/v1/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...formData,
      courseName,
      courseCategory,
    }),
  });

  const json = await res.json();

  if (!json.success) {
    throw new Error(json.message ?? "Registration failed. Please try again.");
  }

  return json.message;
}

/* ------------------------------------------------------------------ */
/* Form helpers                                                         */
/* ------------------------------------------------------------------ */

const BLANK: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  organization: "",
  jobTitle: "",
  trainingMode: "",
  participants: "1",
  startDate: "",
  endDate: "",
  message: "",
};

const inputCls =
  "w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none " +
  "focus:ring-2 focus:ring-primary/40 transition placeholder:text-muted-foreground/60";

const Field = ({
  label,
  required,
  error,
  className = "",
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) => (
  <div className={`flex flex-col gap-1 ${className}`}>
    <label className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
      {label}
      {required && <span className="ml-0.5 text-destructive">*</span>}
    </label>
    {children}
    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);

/* ------------------------------------------------------------------ */
/* Modal                                                                */
/* ------------------------------------------------------------------ */

export function RegistrationModal({
  isOpen,
  courseName,
  courseCategory,
  close,
}: Pick<
  RegistrationState,
  "isOpen" | "courseName" | "courseCategory" | "close"
>) {
  const [form, setForm] = useState<FormData>({ ...BLANK });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [successMessage, setSuccessMessage] = useState("");
  const [serverError, setServerError] = useState("");

  if (!isOpen) return null;

  const set =
    (k: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      setForm((f) => ({ ...f, [k]: e.target.value }));
      setErrors((err) => ({ ...err, [k]: "" }));
    };

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Valid email required";
    if (!form.phone.trim()) e.phone = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setStatus("loading");
    setServerError("");
    try {
      const msg = await submitRegistration(form, courseName, courseCategory);
      setSuccessMessage(msg);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setServerError(err.message ?? "Something went wrong. Please try again.");
    }
  };

  const handleClose = () => {
    close();
    setTimeout(() => {
      setForm({ ...BLANK });
      setErrors({});
      setStatus("idle");
      setServerError("");
      setSuccessMessage("");
    }, 300);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="reg-modal-title"
    >
      <div className="relative flex w-full max-w-3xl max-h-[92vh] flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl md:flex-row">
        {/* ---- Sidebar ---- */}
        <aside className="flex flex-col justify-between bg-primary p-8 text-primary-foreground md:w-64 md:flex-shrink-0">
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/20 text-lg font-black hidden md:block">
              BI
            </div>
            <h2
              id="reg-modal-title"
              className="mb-2 text-xl font-bold leading-tight hidden md:block"
            >
              Reserve your seat
            </h2>
            <p className="mb-6 text-sm text-primary-foreground/70 hidden md:block">
              Complete the form and we'll confirm your spot within 24 hours.
            </p>

            {courseName && (
              <Badge className="mb-6 bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 whitespace-normal text-left">
                📘 {courseName}
              </Badge>
            )}

            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {[
                "Confirmation email sent instantly",
                "Flexible training modes",
                "Group bookings welcome",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 text-xs text-primary-foreground/50">
            info@bluestroninstitute.com
          </div>
        </aside>

        {/* ---- Right panel ---- */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground transition hover:bg-muted hover:text-foreground"
            aria-label="Close registration form"
          >
            <X className="h-5 w-5" />
          </button>

          {/* ---- Success state ---- */}
          {status === "success" && (
            <div className="flex h-full flex-col items-center justify-center gap-4 py-16 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <CheckCircle2 className="h-9 w-9" />
              </div>
              <h3 className="text-2xl font-bold">Registration Received!</h3>
              <p className="max-w-sm text-muted-foreground">{successMessage}</p>
              <Button variant="outline" onClick={handleClose} className="mt-4">
                Close
              </Button>
            </div>
          )}

          {/* ---- Form ---- */}
          {status !== "success" && (
            <>
              <h3 className="mb-6 text-lg font-semibold">Your details</h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First Name" required error={errors.firstName}>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                      className={`${inputCls} pl-9`}
                      placeholder="John"
                      value={form.firstName}
                      onChange={set("firstName")}
                    />
                  </div>
                </Field>

                <Field label="Last Name" required error={errors.lastName}>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                      className={`${inputCls} pl-9`}
                      placeholder="Doe"
                      value={form.lastName}
                      onChange={set("lastName")}
                    />
                  </div>
                </Field>

                <Field label="Email Address" required error={errors.email}>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                      type="email"
                      className={`${inputCls} pl-9`}
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={set("email")}
                    />
                  </div>
                </Field>

                <Field label="Phone Number" required error={errors.phone}>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                      type="tel"
                      className={`${inputCls} pl-9`}
                      placeholder="+254 700 000 000"
                      value={form.phone}
                      onChange={set("phone")}
                    />
                  </div>
                </Field>

                <Field label="Organization">
                  <div className="relative">
                    <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                      className={`${inputCls} pl-9`}
                      placeholder="Your company"
                      value={form.organization}
                      onChange={set("organization")}
                    />
                  </div>
                </Field>

                <Field label="Job Title">
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                      className={`${inputCls} pl-9`}
                      placeholder="Your role"
                      value={form.jobTitle}
                      onChange={set("jobTitle")}
                    />
                  </div>
                </Field>

                <Field label="Training Mode">
                  <div className="relative">
                    <MonitorPlay className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                    <select
                      className={`${inputCls} pl-9`}
                      value={form.trainingMode}
                      onChange={set("trainingMode")}
                    >
                      <option value="">Select mode</option>
                      <option value="Online">Online</option>
                      <option value="In-Person">In-Person</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                </Field>

                <Field label="No. of Participants">
                  <div className="relative">
                    <Users className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                      type="number"
                      min={1}
                      className={`${inputCls} pl-9`}
                      value={form.participants}
                      onChange={set("participants")}
                    />
                  </div>
                </Field>

                <Field label="Start Date">
                  <div className="relative">
                    <CalendarDays className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                    <input
                      type="date"
                      className={`${inputCls} pl-9`}
                      value={form.startDate}
                      onChange={set("startDate")}
                    />
                  </div>
                </Field>

                <Field label="End Date">
                  <div className="relative">
                    <CalendarDays className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                    <input
                      type="date"
                      className={`${inputCls} pl-9`}
                      value={form.endDate}
                      onChange={set("endDate")}
                    />
                  </div>
                </Field>
              </div>

              <Field label="Additional Information" className="mt-4">
                <textarea
                  rows={3}
                  className={`${inputCls} resize-none`}
                  placeholder="Any specific requirements or questions?"
                  value={form.message}
                  onChange={set("message")}
                />
              </Field>

              {serverError && (
                <p className="mt-3 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-2 text-sm text-destructive">
                  {serverError}
                </p>
              )}

              <Button
                className="mt-6 w-full"
                size="lg"
                onClick={handleSubmit}
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  "Submit Registration"
                )}
              </Button>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

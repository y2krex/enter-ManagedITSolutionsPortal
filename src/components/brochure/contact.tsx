import { useState } from "react";
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "./section-heading";

type FormState = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  message: "",
};

type ContactProps = {
  /** Hide the section heading when the page supplies its own. */
  showHeading?: boolean;
};

export const Contact = ({ showHeading = true }: ContactProps) => {
  const [form, setForm] = useState(initialForm);
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  const updateField =
    (field: keyof typeof initialForm) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email, and message.");
      setState("error");
      return;
    }

    setState("submitting");
    setError("");

    const { error: insertError } = await supabase
      .from("contact_submissions")
      .insert({
        name: form.name.trim(),
        company: form.company.trim() || null,
        email: form.email.trim(),
        phone: form.phone.trim() || null,
        message: form.message.trim(),
      });

    if (insertError) {
      console.error("Contact form submit failed:", insertError);
      setState("error");
      setError(
        "Something went wrong sending your message. Please try again, or email us directly at hello@cloudlab.example.",
      );
      return;
    }

    setState("success");
    setForm(initialForm);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade opacity-40" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand-glow/10 blur-[140px]" />

      <div className="container relative z-10">
        {showHeading && (
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Talk About Your IT"
            description="Book a free IT audit or just ask a question — we'll respond within one business day."
          />
        )}

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-5">
          {/* Contact info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                body: "580 Mission Street, Suite 900\nSan Francisco, CA 94105",
              },
              {
                icon: Phone,
                title: "Call Us",
                body: "+1 (415) 555-0142\nToll-free: 1-800-555-0198",
              },
              {
                icon: Mail,
                title: "Email Us",
                body: "hello@cloudlab.example\nsupport@cloudlab.example",
              },
              {
                icon: Clock,
                title: "Support Hours",
                body: "Help desk: 24/7/365\nSales: Mon–Fri, 9am–6pm PT",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-glow/25 bg-brand-glow/10 text-brand-glow">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="glass-panel rounded-2xl p-7 md:p-9"
            >
              {state === "success" ? (
                <div className="flex flex-col items-center gap-4 py-16 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                    <CheckCircle2 className="h-9 w-9" />
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    Message Sent!
                  </h3>
                  <p className="max-w-sm text-sm text-muted-foreground">
                    Thanks for reaching out — our team will get back to you
                    within one business day.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-2"
                    onClick={() => setState("idle")}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={updateField("name")}
                        placeholder="Jane Smith"
                        autoComplete="name"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={form.company}
                        onChange={updateField("company")}
                        placeholder="Acme Inc."
                        autoComplete="organization"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Work Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={updateField("email")}
                        placeholder="jane@company.com"
                        autoComplete="email"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={updateField("phone")}
                        placeholder="+1 (555) 000-0000"
                        autoComplete="tel"
                      />
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col gap-2">
                    <Label htmlFor="message">How can we help? *</Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={updateField("message")}
                      placeholder="Tell us about your IT challenges, team size, or ask us anything..."
                      rows={5}
                    />
                  </div>

                  {state === "error" && error && (
                    <p className="mt-4 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
                      {error}
                    </p>
                  )}

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                      We usually respond within 1 business day. No spam, ever.
                    </p>
                    <Button
                      type="submit"
                      size="lg"
                      className="glow-soft"
                      disabled={state === "submitting"}
                    >
                      {state === "submitting" ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

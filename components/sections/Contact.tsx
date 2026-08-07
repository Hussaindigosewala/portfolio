"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Character from "@/components/Character";

const EMAIL = "hussain.digosewala@gmail.com";
const PHONE_DISPLAY = "+91 7507835194";
const PHONE_HREF = "+917507835194";
const WHATSAPP_NUMBER = "917507835194"; // country code + number, no +, no spaces

const SERVICE_OPTIONS = [
  "Graphic Design",
  "Social Media Strategy",
  "Website Design (Wix)",
  "Content Creation",
  "Art Direction & Visualisation",
  "Other",
];

const MAX_NAME = 100;
const COOLDOWN_MS = 5000;

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "success" | "error";
type Step = 1 | 2 | 3;

export default function Contact() {
  const [step, setStep] = useState<Step>(1);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [otherService, setOtherService] = useState("");
  const [phone, setPhone] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [stepError, setStepError] = useState("");
  const [cooldown, setCooldown] = useState(false);

  const cooldownTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (cooldownTimer.current !== null) window.clearTimeout(cooldownTimer.current);
    };
  }, []);

  function startCooldown() {
    setCooldown(true);
    cooldownTimer.current = window.setTimeout(() => setCooldown(false), COOLDOWN_MS);
  }

  function goNext() {
    setStepError("");
    if (step === 1) {
      const n = name.trim();
      if (!n) return setStepError("Please enter your name.");
      if (n.length > MAX_NAME) return setStepError(`Name must be under ${MAX_NAME} characters.`);
      setStep(2);
    } else if (step === 2) {
      if (!service) return setStepError("Please select an option.");
      if (service === "Other" && !otherService.trim())
        return setStepError("Please tell us what you're looking for.");
      setStep(3);
    }
  }

  function goBack() {
    setStepError("");
    if (step > 1) setStep((s) => (s - 1) as Step);
  }

  const finalService = service === "Other" ? otherService.trim() : service;

  function buildWhatsappMessage() {
    const lines = [
      `Hi, I'm ${name.trim()}${company.trim() ? ` from ${company.trim()}` : ""}.`,
      `I'm interested in: ${finalService || "getting in touch"}.`,
      phone.trim() ? `You can reach me at ${phone.trim()}.` : "",
    ].filter(Boolean);
    return encodeURIComponent(lines.join(" "));
  }

  async function handleSubmit() {
    setStepError("");
    const p = phone.trim();
    if (!p) return setStepError("Please enter your phone number.");
    if (honeypot) return; // silent bot rejection
    if (cooldown) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      setErrorMessage("Contact form isn't fully configured yet — please email or WhatsApp directly.");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: name.trim(),
          company: company.trim() || "—",
          service: finalService,
          phone: p,
          message: `New inquiry from the portfolio site.`,
        },
        { publicKey: PUBLIC_KEY },
      );
      setStatus("success");
      startCooldown();
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong sending that. Try WhatsApp or email instead.");
    }
  }

  function resetAll() {
    setStep(1);
    setName("");
    setCompany("");
    setService("");
    setOtherService("");
    setPhone("");
    setHoneypot("");
    setStatus("idle");
    setErrorMessage("");
    setStepError("");
  }

  return (
    <section id="contact" data-section="contact" aria-labelledby="contact-heading" className="bg-bg px-6 py-28">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-accent-soft">
            06 / Contact
          </span>
          <h2 id="contact-heading" className="font-display text-3xl font-bold text-text sm:text-5xl">
            Let&rsquo;s work together
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-14">
          <div className="flex flex-col items-center gap-8 md:items-start">
            <div className="w-full max-w-90 sm:max-w-115">
              <Character pose="wave" fit="cover" className="aspect-3/2 w-full" />
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 font-body text-sm text-muted transition-colors hover:text-text"
              >
                {EMAIL}
              </a>
              <a
                href={`tel:${PHONE_HREF}`}
                className="flex items-center gap-2 font-body text-sm text-muted transition-colors hover:text-text"
              >
                {PHONE_DISPLAY}
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-line px-4 py-2 font-body text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.11.11-1.79-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.71-4.08-4.85-4.27-.14-.19-1.16-1.54-1.16-2.94s.72-2.09.98-2.37c.24-.27.53-.34.71-.34s.35 0 .5.01c.16.01.38-.06.59.45.24.58.81 2 .88 2.14.07.15.12.32.02.51-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.19-.27.37-.22.62-.13.25.09 1.6.75 1.87.89.28.14.46.21.53.32.07.12.07.68-.17 1.36Z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            {status === "success" ? (
              <div className="flex flex-col items-center gap-4 py-8 text-center">
                <h3 className="font-display text-xl font-bold text-text">Your query has been sent</h3>
                <p className="font-body text-sm text-muted">I&rsquo;ll get back to you shortly.</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsappMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-body text-sm font-semibold text-bg transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Also message on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={resetAll}
                  className="mt-1 font-body text-xs text-muted underline-offset-4 hover:underline"
                >
                  Send another
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6 flex items-center gap-2" aria-hidden="true">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-1.5 flex-1 rounded-full transition-colors ${
                        s <= step ? "bg-accent" : "bg-line"
                      }`}
                    />
                  ))}
                </div>

                {step === 1 && (
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="c-name" className="font-body text-sm text-muted">
                        Your name
                      </label>
                      <input
                        id="c-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        maxLength={MAX_NAME}
                        className="rounded-lg border border-line bg-bg px-4 py-3 font-body text-text outline-none focus:border-accent"
                        placeholder="Riya Sharma"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="c-company" className="font-body text-sm text-muted">
                        Company name (optional)
                      </label>
                      <input
                        id="c-company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="rounded-lg border border-line bg-bg px-4 py-3 font-body text-text outline-none focus:border-accent"
                        placeholder="Studio Bloom"
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <fieldset className="flex flex-col gap-3">
                    <legend className="mb-1 font-body text-sm text-muted">
                      What do you want to build with us?
                    </legend>
                    {SERVICE_OPTIONS.map((opt) => (
                      <label
                        key={opt}
                        className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 font-body text-sm transition-colors ${
                          service === opt
                            ? "border-accent bg-accent/10 text-text"
                            : "border-line text-muted hover:border-accent/40"
                        }`}
                      >
                        <input
                          type="radio"
                          name="service"
                          value={opt}
                          checked={service === opt}
                          onChange={(e) => setService(e.target.value)}
                          className="sr-only"
                        />
                        {opt}
                      </label>
                    ))}
                    {service === "Other" && (
                      <input
                        value={otherService}
                        onChange={(e) => setOtherService(e.target.value)}
                        placeholder="Tell us what you need"
                        className="mt-1 rounded-lg border border-line bg-bg px-4 py-3 font-body text-text outline-none focus:border-accent"
                      />
                    )}
                  </fieldset>
                )}

                {step === 3 && (
                  <div className="flex flex-col gap-2">
                    <label htmlFor="c-phone" className="font-body text-sm text-muted">
                      Phone / WhatsApp number
                    </label>
                    <input
                      id="c-phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="rounded-lg border border-line bg-bg px-4 py-3 font-body text-text outline-none focus:border-accent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                )}

                <div
                  aria-hidden="true"
                  className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden"
                >
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {stepError && (
                  <p role="alert" className="mt-3 font-body text-sm text-red-400">
                    {stepError}
                  </p>
                )}
                {status === "error" && (
                  <p role="alert" className="mt-3 font-body text-sm text-red-400">
                    {errorMessage}
                  </p>
                )}

                <div className="mt-6 flex items-center justify-between gap-3">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={goBack}
                      className="font-body text-sm text-muted hover:text-text"
                    >
                      Back
                    </button>
                  ) : (
                    <span />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={goNext}
                      className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-body text-sm font-semibold text-bg transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={status === "sending" || cooldown}
                      className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 font-body text-sm font-semibold text-bg transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-60"
                    >
                      {status === "sending" ? "Sending…" : "Send query"}
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
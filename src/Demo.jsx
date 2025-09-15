// RequestDemo.jsx
import React, { useState } from "react";

const COUNTRIES = ["Saudi Arabia", "Egypt", "United Arab Emirates", "Kuwait", "Qatar", "Bahrain", "Oman"];
const ROLES = ["Clinic Owner", "Medical Director", "Physician", "Operations Manager", "IT/Admin", "Other"];
const SIZES = ["1–3 providers", "4–10 providers", "11–30 providers", "31–100 providers", "100+ providers"];
const SPECIALTIES = [
  "General Practice",
  "Pediatrics",
  "Dermatology",
  "Dentistry",
  "OB/GYN",
  "Cardiology",
  "Orthopedics",
  "Physiotherapy",
  "Psychiatry",
  "Other",
];
const MODULES = ["Appointments", "EMR/EHR", "Billing & Invoicing", "Inventory & Pharmacy", "Telemedicine", "Analytics & Reports", "Multi-branch Management"];

export default function RequestDemo() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      // Trigger native validation UI
      form.reportValidity();
      return;
    }
    setLoading(true);

    // Collect payload
    const data = Object.fromEntries(new FormData(form).entries());
    data.specialties = form.querySelectorAll("input[name='specialties']:checked");
    data.specialties = Array.from(data.specialties).map((i) => i.value);
    data.modules = form.querySelectorAll("input[name='modules']:checked");
    data.modules = Array.from(data.modules).map((i) => i.value);

    try {
      // TODO: Replace with your real endpoint
      // await fetch("/api/demo-requests", { method: "POST", body: JSON.stringify(data) });
      await new Promise((r) => setTimeout(r, 800)); // mock delay
      setSubmitted(true);
      form.reset();
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-white">
        <section className="container mx-auto px-4 py-20">
          <div className="mx-auto max-w-2xl rounded-3xl border border-gray-100 p-10 text-center shadow-sm">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100">
              <svg viewBox="0 0 24 24" className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold">Request received</h1>
            <p className="mt-3 text-gray-600">
              Thanks for your interest! Our team will reach out shortly to schedule your live demo and tailor it to your clinic’s workflow.
            </p>
            <a href="/" className="mt-8 inline-flex items-center justify-center rounded-2xl bg-gray-900 px-6 py-3 font-semibold text-white hover:opacity-90">
              Back to Home
            </a>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Top header / hero strip */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-white" />
        <div className="container mx-auto px-4 pt-16 pb-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Request a Live Demo</h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              See how our system streamlines <span className="font-medium">appointments, EMR, billing, inventory, and telemedicine</span> for single and multi-branch medical clinics.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 pb-24">
          <div className="lg:order-2 order-1">
            <form
              noValidate
              onSubmit={onSubmit}
              className="rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm"
            >
              <h2 className="text-xl font-bold">Tell us about your clinic</h2>

              {/* Contact info */}
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full name</label>
                  <input name="name" type="text" required placeholder="Dr. Sarah Ahmed"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Work email</label>
                  <input name="email" type="email" required placeholder="sarah@yourclinic.com"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input name="phone" type="tel" required placeholder="+966 5x xxx xxxx"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Role</label>
                  <select name="role" required className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 bg-white focus:border-gray-900 focus:outline-none">
                    <option value="">Select your role</option>
                    {ROLES.map((r) => <option key={r}>{r}</option>)}
                  </select>
                </div>
              </div>

              {/* Clinic details */}
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Clinic / Organization</label>
                  <input name="organization" type="text" required placeholder="Al Noor Medical Center"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Country</label>
                  <select name="country" required className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 bg-white focus:border-gray-900 focus:outline-none">
                    <option value="">Select country</option>
                    {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">City</label>
                  <input name="city" type="text" required placeholder="Riyadh / Cairo / Dubai"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Clinic size</label>
                  <select name="size" required className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 bg-white focus:border-gray-900 focus:outline-none">
                    <option value="">Select</option>
                    {SIZES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              {/* Specialties */}
              <fieldset className="mt-6">
                <legend className="text-sm font-medium text-gray-700">Specialties (select all that apply)</legend>
                <div className="mt-3 grid sm:grid-cols-2 gap-2">
                  {SPECIALTIES.map((sp) => (
                    <label key={sp} className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-2 hover:bg-gray-50">
                      <input type="checkbox" name="specialties" value={sp} className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"/>
                      <span className="text-sm text-gray-700">{sp}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Modules of interest */}
              <fieldset className="mt-6">
                <legend className="text-sm font-medium text-gray-700">Modules you’re interested in</legend>
                <div className="mt-3 grid sm:grid-cols-2 gap-2">
                  {MODULES.map((m) => (
                    <label key={m} className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-2 hover:bg-gray-50">
                      <input type="checkbox" name="modules" value={m} className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"/>
                      <span className="text-sm text-gray-700">{m}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Current systems / integrations */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">Current systems / integrations</label>
                <input
                  name="systems"
                  type="text"
                  placeholder="e.g., Existing EMR, accounting, lab, or payment gateways"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none"
                />
              </div>

              {/* Preferred time */}
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Preferred date</label>
                  <input name="date" type="date" required className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Preferred time</label>
                  <input name="time" type="time" required className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none"/>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Timezone</label>
                  <input name="timezone" type="text" defaultValue="Africa/Cairo (GMT+3)" className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none"/>
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">Anything specific to cover?</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your workflow, pain points, or questions."
                  className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none"
                />
              </div>

              {/* Consent */}
              <label className="mt-6 flex items-start gap-3">
                <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"/>
                <span className="text-sm text-gray-600">
                  I agree to be contacted about this demo request and understand my data will be handled according to the Privacy Policy.
                </span>
              </label>

              {/* Submit */}
              <div className="mt-8 flex flex-col md:flex-row items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center rounded-2xl bg-gray-900 px-5 py-3 font-semibold text-white shadow hover:opacity-90 disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Request Demo"}
                </button>
                <span className="text-xs text-gray-500">We’ll reply within 1 business day.</span>
              </div>
            </form>
          </div>
      </section>
    </main>
  );
}

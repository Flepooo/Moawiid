import React, { useRef } from "react";

const clients = [
  { name: "Client One", logo: "/client1.png" },
  { name: "Client Two", logo: "/client1.png" },
  { name: "Client Three", logo: "/client1.png" },
  { name: "Client Four", logo: "/client1.png" },
  { name: "Client Five", logo: "/client1.png" },
  { name: "Client Six", logo: "/client1.png" },
];

const featureSections = [
  {
    title: "Unified Dashboard",
    body:
      "Monitor performance, usage, and health in one clean interface with real-time insights and alerts.",
    image: "/gp1.png",
  },
  {
    title: "Automations & Workflows",
    body:
      "Build no-code workflows that connect your tools and eliminate repetitive tasks in minutes.",
    image: "/gp1.png",
  },
  {
    title: "Team Collaboration",
    body:
      "Assign roles, share context, and comment inline. Keep everyone aligned from kickoff to delivery.",
    image: "/gp1.png",
  },
  {
    title: "Security & Compliance",
    body:
      "Enterprise-grade controls, SSO, and audit logs—so IT can sleep at night and teams can move fast.",
    image: "/gp1.png",
  },
];

const testimonials = [
  {
    quote:
      "This system simplified our ops overnight. Deployment time dropped by 60% and our team finally loves the tools.",
    author: "Nihal Yehia",
    role: "Ops Lead, Vision Arabia",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
  {
    quote:
      "Clear UI, powerful automations, and rock-solid reliability. Exactly what we needed to scale.",
    author: "Mahmoud Hassan",
    role: "CTO, Snackly",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    quote:
      "Onboarding took less than a day. Our reporting and handoffs are finally smooth.",
    author: "Ola Ahmed",
    role: "Product Manager, Home Station Lounge",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    quote:
      "We finally have one place for ops, alerts, and workflows. Huge win for the team.",
    author: "Marina",
    role: "Engineering Manager",
    avatar: "https://i.pravatar.cc/100?img=21",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$19",
    cadence: "/mo",
    features: ["Up to 3 projects", "Basic automations", "Email support"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    price: "$49",
    cadence: "/mo",
    features: [
      "Unlimited projects",
      "Advanced automations",
      "Team roles & SSO",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    features: ["Dedicated success", "SLA & audit logs", "SAML/SCIM"],
    cta: "Contact Sales",
    popular: false,
  },
];

const blogPosts = [
  {
    title: "How to ship faster with better rituals",
    excerpt:
      "Five lightweight ceremonies that keep velocity high without burning the team.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
    date: "Sep 10, 2025",
  },
  {
    title: "Designing dashboards that actually help",
    excerpt: "Principles to make metrics readable, relevant, and actionable.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1600&auto=format&fit=crop",
    date: "Sep 6, 2025",
  },
  {
    title: "Automation pitfalls and how to avoid them",
    excerpt:
      "From race conditions to flaky triggers—here’s how to keep flows reliable.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop",
    date: "Aug 28, 2025",
  },
];

export default function Home() {
  // Refs for sliders
  const clientsRef = useRef(null);
  const testiRef = useRef(null);

  const scrollByAmount = (ref, amt = 320) => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: amt, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* 1) Hero (centered, full-width text) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-white" />
        <div className="container mx-auto px-4 pt-10 pb-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Run your system <br /> with clarity &amp; speed
            </h1>
            <p className="mt-5 text-lg text-gray-600">
              A modern platform to monitor, automate, and scale your operations <br/>
              built with a developer-friendly API and a beautiful UI your team will love.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-2xl border border-gray-200 px-5 py-3 font-semibold shadow-sm hover:shadow transition"
              >
                View Pricing
              </a>
              <a
                href="/demo"
                className="inline-flex items-center justify-center rounded-2xl bg-gray-900 text-white px-5 py-3 font-semibold shadow hover:opacity-90 transition"
              >
                Get a Demo
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                99.99% uptime
              </span>
              <span>•</span>
              <span>No credit card required</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2) Full width image of the system */}
      <section
        aria-label="Product screenshot"
        className="container mx-auto px-4 pb-20"
      >
        <img src="/gp1.png" alt="Full width system screenshot" className="w-full" />
      </section>

      {/* 3) Our Clients — SLIDER */}
      <section className="py-12 bg-gray-50 rounded-2xl relative">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-medium text-gray-500 tracking-widest uppercase">
            Trusted by teams everywhere
          </p>

          {/* Slider viewport */}
          <div className="relative mt-6">
            {/* Left/Right arrows (hidden on small screens if you want) */}
            <button
              aria-label="Previous clients"
              onClick={() => scrollByAmount(clientsRef, -360)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 border border-gray-200 shadow p-2 hover:bg-white"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              aria-label="Next clients"
              onClick={() => scrollByAmount(clientsRef, 360)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 border border-gray-200 shadow p-2 hover:bg-white"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Scrollable row */}
            <div
              ref={clientsRef}
              className="flex gap-10 overflow-x-auto snap-x snap-mandatory scroll-smooth py-6 px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {clients.map((c, i) => (
                <div
                  key={`${c.name}-${i}`}
                  className="snap-start shrink-0 flex items-center justify-center"
                >
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="h-10 w-auto opacity-70 hover:opacity-100 transition filter grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4) Four alternating image/text sections */}
      <section className="container mx-auto px-4 py-24 space-y-20">
        {featureSections.map((f, idx) => (
          <div
            key={f.title}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
            }`}
          >
            {/* Image */}
            <div>
              <div className="aspect-[16/11]">
                <img src={f.image} alt={f.title} className="h-full w-full object-cover" />
              </div>
            </div>
            {/* Text */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold">{f.title}</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">{f.body}</p>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gray-900" />
                  Actionable insights
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gray-900" />
                  Customizable views
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gray-900" />
                  Fast, secure, reliable
                </li>
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* 5) Testimonials — SLIDER */}
      <section id="testimonials" className="bg-gray-50 py-16 rounded-2xl">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center">What customers say</h2>

          <div className="relative mt-8">
            {/* Arrows */}
            <button
              aria-label="Previous testimonial"
              onClick={() => scrollByAmount(testiRef, -360)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 border border-gray-200 shadow p-2 hover:bg-white"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <button
              aria-label="Next testimonial"
              onClick={() => scrollByAmount(testiRef, 360)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/90 border border-gray-200 shadow p-2 hover:bg-white"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
                <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Scrollable row */}
            <div
              ref={testiRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-6 px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              {testimonials.map((t, i) => (
                <figure
                  key={i}
                  className="snap-start shrink-0 w-[320px] sm:w-[360px] rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
                >
                  <blockquote className="text-gray-700">“{t.quote}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt=""
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{t.author}</div>
                      <div className="text-sm text-gray-500">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6) Pricing */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center">Simple pricing</h2>
          <p className="mt-3 text-center text-gray-600">Start free and upgrade any time.</p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pricing.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-6 ring-1 ring-gray-100 shadow-sm bg-white ${
                  p.popular ? "md:scale-[1.02] border border-gray-900" : ""
                }`}
              >
                <div className="flex items-baseline gap-2">
                  <h3 className="text-xl font-bold">{p.name}</h3>
                  {p.popular && (
                    <span className="rounded-full bg-gray-900 text-white text-xs px-2 py-1">
                      Most Popular
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-4xl font-extrabold">{p.price}</span>
                  <span className="text-gray-500">{p.cadence}</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-gray-700">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gray-900" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`mt-8 block w-full text-center rounded-xl px-4 py-3 font-semibold transition ${
                    p.popular
                      ? "bg-gray-900 text-white hover:opacity-90"
                      : "border border-gray-300 hover:border-gray-900"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7) CTA */}
      <section id="cta" className="relative overflow-hidden bg-gray-900 rounded-2xl">
        <div className="container mx-auto px-4 py-20 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Ready to supercharge your operations?
          </h2>
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            Book a 20-minute walkthrough and see how teams launch faster with our platform.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a
              href="#"
              className="rounded-2xl bg-white text-gray-900 px-5 py-3 font-semibold hover:opacity-90"
            >
              Book a demo
            </a>
            <a
              href="#pricing"
              className="rounded-2xl border border-white/30 px-5 py-3 font-semibold hover:bg-white/10"
            >
              See pricing
            </a>
          </div>
        </div>
      </section>

      {/* 8) Blogs */}
      <section id="blogs" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center">From the blog</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((b, i) => (
              <article
                key={i}
                className="rounded-2xl overflow-hidden ring-1 ring-gray-100 shadow-sm bg-white"
              >
                <img src={b.image} alt="" className="h-48 w-full object-cover" />
                <div className="p-6">
                  <time className="text-xs uppercase tracking-wide text-gray-500">
                    {b.date}
                  </time>
                  <h3 className="mt-2 text-lg font-bold">{b.title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{b.excerpt}</p>
                  <a
                    href="#"
                    className="mt-4 inline-block text-sm font-semibold underline underline-offset-4"
                  >
                    Read more
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// ComingSoon.jsx
import React, { useEffect, useState } from "react";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Example: Launch date in 30 days
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="container min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 via-white to-white text-gray-900 px-4 py-8">
      {/* Headline */}
      <div className="w-full flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center">
          Mowaiid - <span id="ar" className="text-blue-600">مواعيد</span>
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-600 text-center max-w-xl">
          We're working hard to launch our new platform for managing medical clinics. Stay tuned!
        </p>
      </div>

      {/* Countdown */}
      <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:flex gap-3 sm:gap-4 text-center w-full max-w-md">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div key={unit} className="flex flex-col rounded-xl bg-white px-4 py-3 sm:px-6 sm:py-4 shadow-sm ring-1 ring-gray-100">
            <span className="text-2xl sm:text-3xl font-extrabold">{timeLeft[unit]}</span>
            <span className="text-xs uppercase tracking-widest text-gray-500">{unit}</span>
          </div>
        ))}
      </div>

      {/* Email capture */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Subscribed!");
        }}
        className="mt-8 sm:mt-10 w-full max-w-md flex flex-col sm:flex-row rounded-2xl shadow-sm ring-1 ring-gray-200 overflow-hidden"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 focus:outline-none text-sm sm:text-base"
        />
        <button
          type="submit"
          className="bg-gray-900 px-4 py-3 sm:px-6 text-white font-semibold hover:opacity-90 text-sm sm:text-base"
        >
          Notify me
        </button>
      </form>

      {/* Footer */}
      <footer className="mt-12 sm:mt-16 text-xs text-gray-500 text-center">
        © {new Date().getFullYear()} Mowaiid. All rights reserved.
      </footer>
    </main>
  );
}
// Header.jsx
import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [mobileCitiesOpen, setMobileCitiesOpen] = useState(false);

  const menuItems = ["HOME", "FEATURES", "PRICING", "ABOUT", "CONTACT"];
  const featuresItems = [
    { label: "Overview", href: "#" },
    { label: "Automations", href: "#" },
    { label: "Integrations", href: "#" },
    { label: "Security", href: "#" },
  ];
  const cities = [
    "Saudi Arabia",
    "Egypt",
    "United Arab Emirates",
  ];

  // Refs for outside-click handling
  const featuresRef = useRef(null);
  const citiesRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") {
        setFeaturesOpen(false);
        setCitiesOpen(false);
        setMobileFeaturesOpen(false);
        setMobileCitiesOpen(false);
      }
    }
    function onClick(e) {
      if (featuresRef.current && !featuresRef.current.contains(e.target)) {
        setFeaturesOpen(false);
      }
      if (citiesRef.current && !citiesRef.current.contains(e.target)) {
        setCitiesOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 relative z-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo (Left) */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="font-bold text-xl text-gray-800">LOGO</span>
            </div>
          </div>

          {/* Desktop Menu (Middle) */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => {
              if (item === "FEATURES") {
                return (
                  <div
                    key={index}
                    className="relative"
                    ref={featuresRef}
                    onMouseEnter={() => setFeaturesOpen(true)}
                    onMouseLeave={() => setFeaturesOpen(false)}
                  >
                    <button
                      type="button"
                      className="text-gray-700 hover:text-gray-900 font-medium uppercase text-sm transition inline-flex items-center gap-1"
                      aria-haspopup="menu"
                      aria-expanded={featuresOpen}
                      onClick={() => setFeaturesOpen((v) => !v)}
                    >
                      FEATURES
                      <svg
                        className={`h-4 w-4 transition-transform ${featuresOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    <div
                      role="menu"
                      className={`absolute left-0 mt-3 w-56 rounded-xl border border-gray-100 bg-white shadow-lg ring-1 ring-black/5 overflow-hidden transition ${
                        featuresOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"
                      }`}
                    >
                      <ul className="py-2">
                        {featuresItems.map((f) => (
                          <li key={f.label}>
                            <a
                              href={f.href}
                              className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                              role="menuitem"
                            >
                              <span className="inline-block h-2 w-2 rounded-full bg-gray-900" />
                              {f.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={index}
                  href="#"
                  className="text-gray-700 hover:text-gray-900 font-medium uppercase text-sm transition"
                >
                  {item}
                </a>
              );
            })}
          </nav>

          {/* Right: Split CTA with Cities dropdown (Desktop) */}
          <div className="hidden md:flex flex-shrink-0 items-center gap-2" ref={citiesRef}>
            {/* Main CTA uses the same design as the page CTA button */}
            <button
              className="rounded-2xl bg-gray-900 text-white px-5 py-3 font-semibold shadow hover:opacity-90 transition"
            >
              Request Free Trial
            </button>

            {/* Cities dropdown trigger */}
            <button
              onClick={() => setCitiesOpen((v) => !v)}
              className="rounded-2xl border border-gray-300 px-4 py-3 font-semibold text-gray-900 hover:border-gray-900 transition inline-flex items-center gap-2"
              aria-haspopup="menu"
              aria-expanded={citiesOpen}
            >
              Cities
              <svg
                className={`h-4 w-4 transition-transform ${citiesOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Cities dropdown menu */}
            <div
              role="menu"
              className={`absolute right-4 top-[72px] w-64 rounded-xl border border-gray-100 bg-white shadow-lg ring-1 ring-black/5 overflow-hidden transition ${
                citiesOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"
              }`}
            >
              <ul className="py-2">
                {cities.map((c) => (
                  <li key={c}>
                    <button
                      className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => {
                        // Do whatever you need with the selected city
                        // e.g., setCity(c)
                        setCitiesOpen(false);
                      }}
                      role="menuitem"
                    >
                      {c}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-700 focus:outline-none"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel (Slides from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5">
          {/* Close button */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu items */}
          <nav className="space-y-1">
            {menuItems.map((item, index) => {
              if (item === "FEATURES") {
                return (
                  <div key={index} className="border-b border-gray-100 pb-2 mb-2">
                    <button
                      className="w-full flex items-center justify-between text-gray-700 font-medium uppercase text-sm py-3 px-4 rounded hover:bg-gray-50 transition duration-300"
                      onClick={() => setMobileFeaturesOpen((v) => !v)}
                      aria-expanded={mobileFeaturesOpen}
                    >
                      FEATURES
                      <svg
                        className={`h-4 w-4 transition-transform ${mobileFeaturesOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`${mobileFeaturesOpen ? "block" : "hidden"} pl-4`}>
                      {featuresItems.map((f) => (
                        <a
                          key={f.label}
                          href={f.href}
                          className="block text-gray-700 hover:text-gray-900 text-sm py-2 px-4 rounded hover:bg-gray-50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {f.label}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={index}
                  href="#"
                  className="block text-gray-700 hover:text-gray-900 font-medium uppercase text-sm py-3 px-4 rounded hover:bg-gray-50 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              );
            })}

            {/* CTA + Cities (Mobile) */}
            <div className="pt-4 mt-2 border-t border-gray-100">
              <button
                className="w-full rounded-2xl bg-gray-900 text-white px-4 py-3 font-semibold shadow hover:opacity-90 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Request Free Trial
              </button>

              <button
                className="w-full mt-3 rounded-2xl border border-gray-300 px-4 py-3 font-semibold text-gray-900 hover:border-gray-900 transition inline-flex items-center justify-between"
                onClick={() => setMobileCitiesOpen((v) => !v)}
                aria-expanded={mobileCitiesOpen}
              >
                Cities
                <svg
                  className={`h-4 w-4 transition-transform ${mobileCitiesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`${mobileCitiesOpen ? "block" : "hidden"} mt-2`}>
                {cities.map((c) => (
                  <button
                    key={c}
                    className="w-full text-left px-4 py-2.5 text-sm text-gray-700 rounded hover:bg-gray-50"
                    onClick={() => {
                      // handle selected city (if needed)
                      setMobileCitiesOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;

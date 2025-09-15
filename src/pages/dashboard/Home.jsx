import React, { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { key: "overview", label: "Overview", icon: OverviewIcon },
  { key: "appointments", label: "Appointments", icon: CalendarIcon },
  { key: "patients", label: "Patients", icon: UsersIcon },
  { key: "emr", label: "EMR / EHR", icon: FolderIcon },
  { key: "billing", label: "Billing", icon: CreditCardIcon },
  { key: "inventory", label: "Inventory", icon: BoxIcon },
  { key: "analytics", label: "Analytics", icon: ChartIcon },
  { key: "settings", label: "Settings", icon: CogIcon },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false); // desktop collapse
  const [active, setActive] = useState("overview");
  const drawerRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setSidebarOpen(false);
    }
    function onClick(e) {
      if (drawerRef.current && !drawerRef.current.contains(e.target)) {
        setSidebarOpen(false);
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
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                className="md:hidden rounded-xl border border-gray-300 p-2 hover:border-gray-900"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open navigation"
              >
                <MenuIcon className="h-5 w-5" />
              </button>
              <a href="#" className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-gray-900 text-white font-bold">L</div>
                <span className="text-lg font-bold">ClinicsOS</span>
              </a>
            </div>

            {/* Search */}
            <div className="hidden md:flex items-center w-full max-w-lg">
              <div className="relative w-full">
                <SearchIcon className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                <input
                  type="search"
                  placeholder="Search patients, appointments, invoices…"
                  className="w-full rounded-2xl border border-gray-300 pl-9 pr-4 py-2.5 focus:border-gray-900 focus:outline-none"
                />
              </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <button className="hidden sm:inline-flex items-center gap-2 rounded-2xl border border-gray-300 px-3 py-2 font-semibold hover:border-gray-900">
                <PlusIcon className="h-4 w-4" /> New
              </button>
              <button className="rounded-xl border border-gray-300 p-2 hover:border-gray-900" aria-label="Notifications">
                <BellIcon className="h-5 w-5" />
              </button>
              <div className="relative">
                <button className="flex items-center gap-2 rounded-2xl border border-gray-300 px-2 py-1.5 hover:border-gray-900">
                  <img src="https://i.pravatar.cc/64?img=13" alt="User" className="h-7 w-7 rounded-full object-cover" />
                  <span className="hidden sm:inline text-sm font-semibold">Youssef</span>
                  <ChevronDownIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Layout */}
      <div className="container mx-auto px-4">
        <div className="flex gap-4 py-4">
          {/* Sidebar (desktop) */}
          <aside className={`hidden md:flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-all ${
            collapsed ? "w-[84px]" : "w-64"
          }`}>
            <div className="flex items-center justify-between px-3 py-3 border-b border-gray-100">
              <span className={`text-sm font-semibold text-gray-500 ${collapsed ? "sr-only" : ""}`}>Navigation</span>
              <button
                className="rounded-lg border border-gray-300 p-1 hover:border-gray-900"
                onClick={() => setCollapsed((v) => !v)}
                aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                <SidebarCollapseIcon className="h-4 w-4" />
              </button>
            </div>
            <nav className="p-2">
              {NAV_ITEMS.map(({ key, label, icon: Icon }) => {
                const isActive = active === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActive(key)}
                    className={`group relative flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium ${
                      isActive
                        ? "bg-gray-900 text-white"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? "text-white" : "text-gray-600 group-hover:text-gray-900"}`} />
                    <span className={`${collapsed ? "sr-only" : ""}`}>{label}</span>
                  </button>
                );
              })}
            </nav>
            <div className="mt-auto p-3 border-t border-gray-100">
              <div className={`rounded-xl bg-gray-50 p-3 ${collapsed ? "text-center" : ""}`}>
                <p className={`text-xs text-gray-600 ${collapsed ? "sr-only" : ""}`}>
                  Storage used
                </p>
                <div className="mt-2 h-2 w-full rounded bg-white ring-1 ring-gray-200">
                  <div className="h-2 rounded bg-gray-900" style={{ width: "42%" }} />
                </div>
                <p className={`mt-2 text-xs text-gray-500 ${collapsed ? "sr-only" : ""}`}>4.2 GB / 10 GB</p>
              </div>
            </div>
          </aside>

          {/* Drawer (mobile) */}
          <div className={`fixed inset-0 z-50 md:hidden ${sidebarOpen ? "" : "pointer-events-none"}`}>
            {/* overlay */}
            <div className={`absolute inset-0 bg-black/50 transition-opacity ${sidebarOpen ? "opacity-100" : "opacity-0"}`} />
            {/* panel */}
            <div ref={drawerRef} className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <span className="text-sm font-semibold text-gray-500">Navigation</span>
                <button className="rounded-lg border border-gray-300 p-1 hover:border-gray-900" onClick={() => setSidebarOpen(false)} aria-label="Close navigation">
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>
              <nav className="p-2">
                {NAV_ITEMS.map(({ key, label, icon: Icon }) => {
                  const isActive = active === key;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        setActive(key);
                        setSidebarOpen(false);
                      }}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium ${
                        isActive ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${isActive ? "text-white" : "text-gray-600"}`} />
                      {label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main content */}
          <main className="flex-1">
            {/* Page title + actions */}
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight capitalize">{active}</h1>
                <p className="text-sm text-gray-600">Quick snapshot of your clinic operations.</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-2xl border border-gray-300 px-3 py-2 font-semibold hover:border-gray-900">Export</button>
                <button className="rounded-2xl bg-gray-900 px-3 py-2 font-semibold text-white hover:opacity-90">Add record</button>
              </div>
            </div>

            {/* Demo widgets */}
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              <Card title="Today’s Appointments">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-center justify-between"><span>09:00 • John Doe (Dermatology)</span><span className="text-gray-500">#A-203</span></li>
                  <li className="flex items-center justify-between"><span>10:30 • Maryam Ali (Pediatrics)</span><span className="text-gray-500">#A-204</span></li>
                  <li className="flex items-center justify-between"><span>12:00 • Omar Saleh (Cardiology)</span><span className="text-gray-500">#A-205</span></li>
                </ul>
              </Card>
              <Card title="Revenue (This Month)">
                <div className="mt-1 text-3xl font-extrabold">SAR 128,450</div>
                <p className="text-sm text-emerald-600 mt-1">+12.8% vs last month</p>
                <div className="mt-4 h-24 rounded-xl bg-gray-50 ring-1 ring-gray-100 grid place-items-center text-xs text-gray-500">Chart placeholder</div>
              </Card>
              <Card title="Inventory Alerts">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-center justify-between"><span>Gloves (M) — Low</span><span className="text-orange-600 font-semibold">Reorder</span></li>
                  <li className="flex items-center justify-between"><span>Syringes 5ml — Low</span><span className="text-orange-600 font-semibold">Reorder</span></li>
                  <li className="flex items-center justify-between"><span>Paracetamol 500mg — Exp. soon</span><span className="text-red-600 font-semibold">Replace</span></li>
                </ul>
              </Card>
              <Card title="Waiting Room">
                <div className="text-3xl font-extrabold">7</div>
                <p className="text-sm text-gray-600">Avg. wait 14 min</p>
              </Card>
              <Card title="Outstanding Invoices">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-center justify-between"><span>#INV-1024</span><span className="font-semibold">SAR 1,200</span></li>
                  <li className="flex items-center justify-between"><span>#INV-1027</span><span className="font-semibold">SAR 950</span></li>
                  <li className="flex items-center justify-between"><span>#INV-1031</span><span className="font-semibold">SAR 2,300</span></li>
                </ul>
              </Card>
              <Card title="Tasks">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-center gap-2"><input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-gray-900"/> Call lab about results</li>
                  <li className="flex items-center gap-2"><input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-gray-900"/> Confirm tomorrow appointments</li>
                  <li className="flex items-center gap-2"><input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-gray-900"/> Update inventory counts</li>
                </ul>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

/* ---------------------- Small UI building blocks ---------------------- */
function Card({ title, children }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <header className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        <button className="rounded-lg border border-gray-300 p-1 hover:border-gray-900" aria-label="More options">
          <DotsIcon className="h-4 w-4" />
        </button>
      </header>
      {children}
    </section>
  );
}

/* ---------------------- Icons (inline SVG) ---------------------- */
function MenuIcon(props) { return (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);} 
function CloseIcon(props) { return (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);} 
function SearchIcon(props) { return (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
  </svg>
);} 
function BellIcon(props) { return (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.4-1.4A2 2 0 0118 14.172V11a6 6 0 00-12 0v3.172a2 2 0 01-.6 1.428L4 17h5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.73 21a2 2 0 01-3.46 0" />
  </svg>
);} 
function PlusIcon(props) { return (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
  </svg>
);} 
function ChevronDownIcon(props) { return (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);} 
function SidebarCollapseIcon(props) { return (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M10 6l-6 6 6 6" />
  </svg>
);} 
function DotsIcon(props) { return (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
  </svg>
);} 
function OverviewIcon(props) { return (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="3" y="3" width="7" height="7" rx="2" /><rect x="14" y="3" width="7" height="7" rx="2" />
    <rect x="14" y="14" width="7" height="7" rx="2" /><rect x="3" y="14" width="7" height="7" rx="2" />
  </svg>
);} 
function CalendarIcon(props) { return (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
  </svg>
);} 
function UsersIcon(props) { return (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
  </svg>
);} 
function FolderIcon(props) { return (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M3 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
  </svg>
);} 
function CreditCardIcon(props) { return (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </svg>
);} 
function BoxIcon(props) { return (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    <path d="M3.27 6.96L12 12l8.73-5.04" />
  </svg>
);} 
function ChartIcon(props) { return (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M3 3v18h18" />
    <rect x="7" y="12" width="3" height="6" /><rect x="12" y="9" width="3" height="9" /><rect x="17" y="6" width="3" height="12" />
  </svg>
);} 
function CogIcon(props) { return (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06A1.65 1.65 0 0015 19.4a1.65 1.65 0 00-1 .6 1.65 1.65 0 00-.33 1.82l.02.07a2 2 0 01-3.38 2.01l-.05-.06A1.65 1.65 0 008.6 21a1.65 1.65 0 00-1.82-.33l-.07.02a2 2 0 01-2.01-3.38l.06-.05A1.65 1.65 0 004.6 15a1.65 1.65 0 00-.6-1 1.65 1.65 0 00-1.82-.33l-.06.02a2 2 0 01-2.01-3.38l.05-.06A1.65 1.65 0 003 8.6a1.65 1.65 0 001-.6 1.65 1.65 0 00.33-1.82l-.02-.07A2 2 0 014.28 4.1l.05.06A1.65 1.65 0 006 4.6a1.65 1.65 0 001-.6 1.65 1.65 0 001.82-.33l.07-.02a2 2 0 012.01 3.38l-.06.05A1.65 1.65 0 0015.4 9c.37.24.77.4 1.2.46a1.65 1.65 0 001.82-.33l.06-.06A2 2 0 0121.1 12l-.06.05c-.5.41-.86.97-1 1.6a4.77 4.77 0 00-.64-.05z" />
  </svg>
);} 

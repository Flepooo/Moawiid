import React, { useState } from "react";

export default function Login({ onSubmit }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const formData = new FormData(form);
    const payload = {
      email: formData.get("email")?.toString().trim(),
      password: formData.get("password")?.toString(),
      remember: formData.get("remember") === "on",
    };

    try {
      setLoading(true);
      if (onSubmit) {
        await onSubmit(payload);
      } else {
        // TODO: Replace with your auth endpoint
        // await fetch("/api/login", { method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(payload) });
        await new Promise((r) => setTimeout(r, 900));
      }
      // Redirect or show success toast here
      // window.location.href = "/dashboard";
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Top banner / brand */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-white" />
        <div className="container mx-auto px-4 pt-12 pb-8">
          
        </div>
      </section>

      {/* Card */}
      <section className="container mx-auto px-4 pb-24">
        <div className="mx-auto w-full max-w-md rounded-3xl border border-gray-100 shadow-sm p-6 sm:p-8">
          <header className="text-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Sign in to your account</h1>
            <p className="mt-2 text-sm text-gray-600">Access appointments, EMR, billing, inventory, and more.</p>
          </header>

          {/* OAuth (optional) */}
          <div className="mt-6 grid gap-3">
            <button
              type="button"
              className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-900 hover:border-gray-900 transition inline-flex items-center justify-center gap-2"
              onClick={() => alert("Hook Google OAuth here")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303C33.242,32.091,29.027,35,24,35c-6.075,0-11-4.925-11-11 s4.925-11,11-11c2.803,0,5.367,1.058,7.313,2.787l5.657-5.657C33.044,6.053,28.745,4,24,4C12.954,4,4,12.954,4,24 s8.954,20,20,20s20-8.954,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,16.108,18.961,13,24,13c2.803,0,5.367,1.058,7.313,2.787l5.657-5.657 C33.044,6.053,28.745,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c4.943,0,9.409-1.897,12.783-4.993l-5.893-4.981C29.018,35.969,26.641,37,24,37 c-5.005,0-9.206-2.892-10.994-6.961l-6.567,5.061C9.693,39.556,16.299,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-1.599,4.091-5.814,7-11.303,7c-6.075,0-11-4.925-11-11 s4.925-11,11-11c2.803,0,5.367,1.058,7.313,2.787l5.657-5.657C33.044,6.053,28.745,4,24,4C12.954,4,4,12.954,4,24 s8.954,20,20,20s20-8.954,20-20C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
              Continue with Google
            </button>
            <button
              type="button"
              className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-900 hover:border-gray-900 transition inline-flex items-center justify-center gap-2"
              onClick={() => alert("Hook Microsoft OAuth here")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 23" className="h-4 w-4"><path fill="#f25022" d="M1 1h10v10H1z"/><path fill="#00a4ef" d="M1 12h10v10H1z"/><path fill="#7fba00" d="M12 1h10v10H12z"/><path fill="#ffb900" d="M12 12h10v10H12z"/></svg>
              Continue with Microsoft
            </button>
          </div>

          <div className="my-6 flex items-center gap-4">
            <div className="h-px w-full bg-gray-200" />
            <span className="text-xs uppercase tracking-wider text-gray-500">or</span>
            <div className="h-px w-full bg-gray-200" />
          </div>

          {/* Email / Password form */}
          <form noValidate onSubmit={handleSubmit} className="grid gap-4">
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Work email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@clinic.com"
                className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 focus:border-gray-900 focus:outline-none"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <a href="/forgot-password" className="text-sm font-medium text-gray-700 hover:text-gray-900">Forgot?</a>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={6}
                  placeholder="••••••••"
                  className="w-full rounded-2xl border border-gray-300 px-4 py-3 pr-12 focus:border-gray-900 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 2l20 20" strokeLinecap="round" strokeLinejoin="round"/><path d="M10.58 10.58A2 2 0 0112 8a2 2 0 012 2"/><path d="M16.12 16.12A10.94 10.94 0 0112 18C7 18 2.73 14.11 1 9c.74-2.04 2.02-3.86 3.64-5.24"/><path d="M22.94 12.94A10.94 10.94 0 0012 6c-1.09 0-2.14.15-3.12.44"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/></svg>
                  )}
                </button>
              </div>
            </div>

            <label className="mt-1 inline-flex items-center gap-3">
              <input type="checkbox" name="remember" className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900" />
              <span className="text-sm text-gray-600">Remember me on this device</span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-gray-900 px-5 py-3 font-semibold text-white shadow hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>

            <p className="mt-2 text-sm text-gray-600 text-center">
              Don’t have an account? <a href="/register" className="font-semibold text-gray-900 hover:underline">Create one</a>
            </p>
          </form>
        </div>
      </section>

    </main>
  );
}

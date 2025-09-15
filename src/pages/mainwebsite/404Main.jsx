import React from "react";

export function NotFoundMain() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4">
      <h1 className="text-7xl font-extrabold tracking-tight text-gray-900">404</h1>
      <p className="mt-3 text-lg text-gray-600">Oops! The page you are looking for doesn’t exist.</p>
      <a
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-2xl bg-gray-900 px-6 py-3 font-semibold text-white shadow hover:opacity-90"
      >
        Back to Home
      </a>
    </main>
  );
}



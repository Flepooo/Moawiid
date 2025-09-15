export function NotFoundDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <main className="flex flex-1 items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">404</h1>
          <p className="mt-3 text-lg text-gray-600">This dashboard page was not found.</p>
          <a
            href="/dashboard"
            className="mt-8 inline-flex items-center justify-center rounded-2xl bg-gray-900 px-6 py-3 font-semibold text-white shadow hover:opacity-90"
          >
            Back to Dashboard
          </a>
        </div>
      </main>
    </div>
  );
}
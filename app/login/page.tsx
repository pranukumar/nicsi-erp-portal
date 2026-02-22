export default function LoginPage() {
  return (
    <main className="max-w-xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-[var(--dsci-primary)]">Secure Login</h1>
      <p className="mt-3 text-gray-600">
        Sign in to access vendor, tender, and project workflow modules.
      </p>

      <form className="mt-8 space-y-4 rounded-lg border bg-white p-6 shadow-sm">
        <div>
          <label htmlFor="userId" className="mb-1 block text-sm font-medium text-gray-700">
            User ID
          </label>
          <input
            id="userId"
            type="text"
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-[var(--dsci-primary)]"
            placeholder="Enter user ID"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-[var(--dsci-primary)]"
            placeholder="Enter password"
          />
        </div>

        <button
          type="button"
          className="w-full rounded-md bg-[var(--dsci-primary)] px-4 py-2 font-semibold text-white transition hover:bg-[var(--dsci-primary-light)]"
        >
          Sign In
        </button>
      </form>
    </main>
  );
}

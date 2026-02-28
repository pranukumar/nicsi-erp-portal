"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, Lock, ShieldCheck, User } from "lucide-react";
import PageTitle from "@/components/layout/PageTitle";

type FormState = {
  identifier: string;
  password: string;
  captcha: string;
};

type ErrorState = Partial<Record<keyof FormState | "api", string>>;

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState<FormState>({ identifier: "", password: "", captcha: "" });
  const [errors, setErrors] = useState<ErrorState>({});
  const [loading, setLoading] = useState(false);

  const captchaChallenge = useMemo(() => {
    const left = 8;
    const right = 5;
    return {
      label: `${left} + ${right}`,
      answer: String(left + right),
    };
  }, []);

  const validate = (): ErrorState => {
    const nextErrors: ErrorState = {};

    if (!form.identifier.trim()) {
      nextErrors.identifier = "User ID or official email is required.";
    }

    if (!form.password) {
      nextErrors.password = "Password is required.";
    } else if (form.password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    if (!form.captcha.trim()) {
      nextErrors.captcha = "Security verification is required.";
    } else if (form.captcha.trim() !== captchaChallenge.answer) {
      nextErrors.captcha = "Security code is incorrect.";
    }

    return nextErrors;
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: form.identifier.trim(),
          password: form.password,
        }),
      });

      const payload = (await response.json()) as { error?: string; redirectPath?: string };
      if (!response.ok) {
        setErrors({ api: payload.error ?? "Login failed." });
        return;
      }

      router.push(payload.redirectPath ?? "/");
    } catch {
      setErrors({ api: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pb-12">
      <PageTitle title="Login" />
      <section className="mx-auto mt-8 grid max-w-6xl gap-6 px-6 lg:grid-cols-[1.15fr_1fr]">
        <article className="rounded-xl bg-gradient-to-br from-[#0A2E73] via-[#0F4BB8] to-[#0A2E73] p-6 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">NICSI Authorized Sign-In</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight">Enterprise Resource Platform (ERP)</h1>
          <p className="mt-4 text-sm leading-7 text-blue-100">
            Authorized Government Departments, NICSI Officials, and Empanelled Vendor Personnel may sign in using
            their registered credentials.
          </p>

          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3 rounded-lg bg-white/10 p-3">
              <ShieldCheck size={18} className="mt-0.5 shrink-0 text-cyan-200" />
              <p className="text-sm text-blue-100">
                Role-based access is automatically determined by the system. Manual role selection is not permitted.
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-lg bg-white/10 p-3">
              <Lock size={18} className="mt-0.5 shrink-0 text-cyan-200" />
              <p className="text-sm text-blue-100">
                Use official credentials only. Unauthorized access attempts are monitored and logged.
              </p>
            </div>
          </div>
        </article>

        <article className="rounded-xl border border-blue-100 bg-[#FCFDFF] p-5 md:p-6">
          <h2 className="text-xl font-bold text-[#0F172A]">Sign In</h2>
          <p className="mt-1 text-sm text-gray-600">Use your user ID or official email and password.</p>

          <form className="mt-5 space-y-4" onSubmit={onSubmit} noValidate>
            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-gray-700">User ID / Official Email</span>
              <div className="relative">
                <User size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={form.identifier}
                  onChange={(event) => setForm((prev) => ({ ...prev, identifier: event.target.value }))}
                  className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 text-sm outline-none focus:border-[#0F4BB8]"
                  placeholder="e.g. dept.user or name@gov.in"
                  autoComplete="username"
                />
              </div>
              {errors.identifier ? <p className="mt-1 text-xs text-red-600">{errors.identifier}</p> : null}
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-gray-700">Password</span>
              <div className="relative">
                <Lock size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  value={form.password}
                  onChange={(event) => setForm((prev) => ({ ...prev, password: event.target.value }))}
                  className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 text-sm outline-none focus:border-[#0F4BB8]"
                  placeholder="Enter password"
                  autoComplete="current-password"
                />
              </div>
              {errors.password ? <p className="mt-1 text-xs text-red-600">{errors.password}</p> : null}
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-semibold text-gray-700">Security Code ({captchaChallenge.label})</span>
              <input
                type="text"
                inputMode="numeric"
                value={form.captcha}
                onChange={(event) => setForm((prev) => ({ ...prev, captcha: event.target.value }))}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#0F4BB8]"
                placeholder="Enter answer"
              />
              {errors.captcha ? <p className="mt-1 text-xs text-red-600">{errors.captcha}</p> : null}
            </label>

            {errors.api ? (
              <div className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                <AlertTriangle size={16} className="mt-0.5 shrink-0" />
                <span>{errors.api}</span>
              </div>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-md bg-gradient-to-r from-[#0A2E73] to-[#0F4BB8] px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </article>
      </section>
    </main>
  );
}

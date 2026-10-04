import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { AuthShell, Field, goldButton } from "@/components/AuthShell";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register — Business Tour: Six Kingdoms" },
      { name: "description", content: "Create your Business Tour: Six Kingdoms account and join six-player matches." },
      { property: "og:title", content: "Register — Business Tour: Six Kingdoms" },
      { property: "og:description", content: "Create your Business Tour: Six Kingdoms account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: RegisterPage,
});

const schema = z
  .object({
    username: z
      .string()
      .trim()
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be at most 20 characters")
      .regex(/^[a-zA-Z0-9_]+$/, "Only letters, numbers and underscores"),
    email: z.string().trim().min(1, "Email is required").email("Enter a valid email address").max(255),
    password: z.string().min(8, "Password must be at least 8 characters").max(72),
    confirm: z.string().min(1, "Please confirm your password"),
  })
  .refine((d) => d.password === d.confirm, { path: ["confirm"], message: "Passwords do not match" });

function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState<Partial<Record<"username" | "email" | "password" | "confirm" | "identifier" | "form" | "pw", string>>>({});
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [busy, setBusy] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [k]: e.target.value });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMsg(null);
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Partial<Record<"username" | "email" | "password" | "confirm" | "identifier" | "form" | "pw", string>> = {};
      r.error.issues.forEach((i) => (errs[String(i.path[0]) as keyof typeof errs] ??= i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    setBusy(true);
    const { data: free } = await supabase.rpc("username_available", { _username: r.data.username });
    if (free === false) {
      setErrors({ username: "This username is already taken" });
      setBusy(false);
      return;
    }
    const { data, error } = await supabase.auth.signUp({
      email: r.data.email,
      password: r.data.password,
      options: { emailRedirectTo: window.location.origin, data: { username: r.data.username } },
    });
    setBusy(false);
    if (error) return setMsg({ ok: false, text: error.message });
    if (data.session) return navigate({ to: "/profile" });
    setMsg({ ok: true, text: "Account created! Check your inbox to confirm your email, then log in." });
  }

  return (
    <AuthShell eyebrow="Join Six Kingdoms" title="Create Your Account">
      <form onSubmit={submit} noValidate className="space-y-5">
        <Field label="Username" value={form.username} onChange={set("username")} error={errors.username} autoComplete="username" />
        <Field label="Email" type="email" value={form.email} onChange={set("email")} error={errors.email} autoComplete="email" />
        <Field label="Password" type="password" value={form.password} onChange={set("password")} error={errors.password} autoComplete="new-password" />
        <Field label="Confirm Password" type="password" value={form.confirm} onChange={set("confirm")} error={errors.confirm} autoComplete="new-password" />
        {msg && (
          <p className={`rounded-lg border p-3 text-sm ${msg.ok ? "border-primary/40 text-primary" : "border-destructive/50 text-destructive"}`}>
            {msg.text}
          </p>
        )}
        <button type="submit" disabled={busy} className={goldButton}>
          {busy ? "Creating…" : "Create Account"}
        </button>
      </form>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link to="/login" className="font-semibold text-primary hover:underline">
          Login
        </Link>
      </p>
    </AuthShell>
  );
}

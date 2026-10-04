import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { signInWithIdentifier } from "@/lib/auth.functions";
import { AuthShell, Field, goldButton } from "@/components/AuthShell";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — Business Tour: Six Kingdoms" },
      { name: "description", content: "Log in to your Business Tour: Six Kingdoms account." },
      { property: "og:title", content: "Login — Business Tour: Six Kingdoms" },
      { property: "og:description", content: "Log in to your Business Tour: Six Kingdoms account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const signIn = useServerFn(signInWithIdentifier);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);
  const [errors, setErrors] = useState<Partial<Record<"username" | "email" | "password" | "confirm" | "identifier" | "form" | "pw", string>>>({});
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Partial<Record<"username" | "email" | "password" | "confirm" | "identifier" | "form" | "pw", string>> = {};
    if (!identifier.trim()) errs.identifier = "Email or username is required";
    if (!password) errs.password = "Password is required";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setBusy(true);
    try {
      const res = await signIn({ data: { identifier, password } });
      if (res.error || !res.access_token) {
        setErrors({ form: res.error ?? "Login failed" });
        return;
      }
      localStorage.setItem("sk-remember", remember ? "1" : "0");
      sessionStorage.setItem("sk-active", "1");
      const { error } = await supabase.auth.setSession({
        access_token: res.access_token,
        refresh_token: res.refresh_token!,
      });
      if (error) return setErrors({ form: error.message });
      navigate({ to: "/profile" });
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <AuthShell eyebrow="Welcome Back" title="Login">
      <form onSubmit={submit} noValidate className="space-y-5">
        <Field label="Email or Username" value={identifier} onChange={(e) => setIdentifier(e.target.value)} error={errors.identifier} autoComplete="username" />
        <Field label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} error={errors.password} autoComplete="current-password" />
        <div className="flex items-center justify-between text-sm">
          <label className="flex cursor-pointer items-center gap-2 text-muted-foreground">
            <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="size-4 accent-[var(--primary)]" />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-primary hover:underline">
            Forgot password?
          </Link>
        </div>
        {errors.form && (
          <p className="rounded-lg border border-destructive/50 p-3 text-sm text-destructive">{errors.form}</p>
        )}
        <button type="submit" disabled={busy} className={goldButton}>
          {busy ? "Logging in…" : "Login"}
        </button>
      </form>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Don't have an account?{" "}
        <Link to="/register" className="font-semibold text-primary hover:underline">
          Register
        </Link>
      </p>
    </AuthShell>
  );
}

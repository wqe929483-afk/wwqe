import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { AuthShell, Field, goldButton } from "@/components/AuthShell";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Forgot Password — Business Tour: Six Kingdoms" },
      { name: "description", content: "Reset the password of your Business Tour: Six Kingdoms account." },
      { property: "og:title", content: "Forgot Password — Business Tour: Six Kingdoms" },
      { property: "og:description", content: "Reset your Business Tour: Six Kingdoms password." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!z.string().email().safeParse(email.trim()).success) return setError("Enter a valid email address");
    setError("");
    setBusy(true);
    await supabase.auth.resetPasswordForEmail(email.trim(), {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    setBusy(false);
    setSent(true);
  }

  return (
    <AuthShell eyebrow="Account" title="Forgot Password">
      {sent ? (
        <p className="text-sm leading-relaxed text-muted-foreground">
          If an account exists for that email, a reset link is on its way.
        </p>
      ) : (
        <form onSubmit={submit} noValidate className="space-y-5">
          <Field label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} error={error} />
          <button type="submit" disabled={busy} className={goldButton}>
            {busy ? "Sending…" : "Send Reset Link"}
          </button>
        </form>
      )}
      <p className="mt-8 text-center text-sm text-muted-foreground">
        <Link to="/login" className="font-semibold text-primary hover:underline">Back to Login</Link>
      </p>
    </AuthShell>
  );
}

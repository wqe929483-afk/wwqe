import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AuthShell, Field, goldButton } from "@/components/AuthShell";

export const Route = createFileRoute("/reset-password")({
  head: () => ({
    meta: [
      { title: "Set New Password — Business Tour: Six Kingdoms" },
      { name: "description", content: "Choose a new password for your Business Tour: Six Kingdoms account." },
      { property: "og:title", content: "Set New Password — Business Tour: Six Kingdoms" },
      { property: "og:description", content: "Choose a new password for your account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});

function Page() {
  const navigate = useNavigate();
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<Partial<Record<"username" | "email" | "password" | "confirm" | "identifier" | "form" | "pw", string>>>({});
  const [busy, setBusy] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const errs: Partial<Record<"username" | "email" | "password" | "confirm" | "identifier" | "form" | "pw", string>> = {};
    if (pw.length < 8) errs.pw = "Password must be at least 8 characters";
    if (pw !== confirm) errs.confirm = "Passwords do not match";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setBusy(true);
    const { error } = await supabase.auth.updateUser({ password: pw });
    setBusy(false);
    if (error) return setErrors({ form: error.message });
    navigate({ to: "/profile" });
  }

  return (
    <AuthShell eyebrow="Account" title="Set New Password">
      <form onSubmit={submit} noValidate className="space-y-5">
        <Field label="New Password" type="password" value={pw} onChange={(e) => setPw(e.target.value)} error={errors.pw} />
        <Field label="Confirm Password" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} error={errors.confirm} />
        {errors.form && <p className="text-sm text-destructive">{errors.form}</p>}
        <button type="submit" disabled={busy} className={goldButton}>
          {busy ? "Saving…" : "Save Password"}
        </button>
      </form>
    </AuthShell>
  );
}

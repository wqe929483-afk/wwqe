import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";
import { AuthShell } from "@/components/AuthShell";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — Business Tour: Six Kingdoms" },
      { name: "description", content: "Your Business Tour: Six Kingdoms player profile." },
      { property: "og:title", content: "Profile — Business Tour: Six Kingdoms" },
      { property: "og:description", content: "Your Business Tour: Six Kingdoms player profile." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: ProfilePage,
});

function ProfilePage() {
  const { session, profile, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !session) navigate({ to: "/login" });
  }, [loading, session, navigate]);

  const rows = [
    { label: "Username", value: profile?.username },
    { label: "Email", value: profile?.email ?? session?.user.email },
    {
      label: "Member Since",
      value: profile ? new Date(profile.created_at).toLocaleDateString(undefined, { dateStyle: "long" }) : undefined,
    },
  ];

  return (
    <AuthShell eyebrow="Player Profile" title={profile ? `Welcome, ${profile.username}` : "Your Profile"}>
      <dl className="divide-y divide-border">
        {rows.map((r) => (
          <div key={r.label} className="flex items-center justify-between gap-4 py-4">
            <dt className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">{r.label}</dt>
            <dd className="truncate text-sm text-foreground">{r.value ?? "…"}</dd>
          </div>
        ))}
      </dl>
      <button
        type="button"
        onClick={async () => {
          await signOut();
          navigate({ to: "/" });
        }}
        className="mt-8 w-full rounded-lg border border-primary/60 px-7 py-3.5 text-[13px] tracking-[0.14em] uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
      >
        Logout
      </button>
    </AuthShell>
  );
}

import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SixDots } from "./SixDots";
import bg from "@/assets/sk-board-six.jpg";

export function AuthShell({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="relative overflow-hidden pt-[72px]">
        <img
          src={bg}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-background/85 to-background" />
        <div className="container-page relative flex justify-center py-20 lg:py-28">
          <div className="panel w-full max-w-md p-8 shadow-[var(--shadow-elevated)] sm:p-10">
            <SixDots />
            <p className="eyebrow mt-6">{eyebrow}</p>
            <h1 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.5rem)] leading-tight">{title}</h1>
            <div className="mt-8">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export function Field({
  label,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string | undefined }) {
  return (
    <label className="block">
      <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
        {label}
      </span>
      <input
        {...props}
        aria-invalid={!!error}
        className="mt-2 w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/60 aria-[invalid=true]:border-destructive"
      />
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}

export const goldButton =
  "flex w-full items-center justify-center gap-3 rounded-lg bg-[image:var(--gradient-gold)] px-8 py-4 text-[13px] font-extrabold tracking-[0.14em] uppercase text-primary-foreground shadow-[var(--glow-gold)] transition-transform hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0";

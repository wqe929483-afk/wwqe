import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/six-kingdoms-logo.png.asset.json";
import { useAuth } from "@/hooks/use-auth";

const links = [
  { label: "Six Kingdoms", href: "/#six-kingdoms" },
  { label: "The Game", href: "/#board" },
  { label: "Game Modes", href: "/#modes" },
  { label: "Features", href: "/#features" },
];

const linkCls =
  "text-[13px] tracking-[0.12em] uppercase text-muted-foreground transition-colors hover:text-primary";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { session, profile, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logout = async () => {
    setOpen(false);
    await signOut();
    navigate({ to: "/" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <a href="/#top" className="flex items-center" aria-label="Business Tour: Six Kingdoms home">
          <img src={logo.url} alt="Business Tour: Six Kingdoms" width={1221} height={569} className="h-12 w-auto" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={linkCls}>
              {l.label}
            </a>
          ))}
          <span className="h-5 w-px bg-border" />
          {session ? (
            <>
              {profile && (
                <span className="text-[13px] text-muted-foreground">
                  Welcome, <span className="text-primary">{profile.username}</span>
                </span>
              )}
              <Link to="/profile" className={linkCls}>Profile</Link>
              <button type="button" onClick={logout} className={linkCls}>Log Out</button>
            </>
          ) : (
            <>
              <Link to="/login" className={linkCls}>Login</Link>
              <Link to="/register" className={linkCls}>Register</Link>
            </>
          )}
          <a
            href="/#play"
            className="rounded-md border border-primary/60 px-5 py-2.5 text-[13px] tracking-[0.12em] uppercase text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Download
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="text-foreground lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm tracking-[0.12em] uppercase text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <div className="my-2 h-px bg-border" />
            {session ? (
              <>
                {profile && (
                  <p className="py-2 text-sm text-muted-foreground">
                    Welcome, <span className="text-primary">{profile.username}</span>
                  </p>
                )}
                <Link to="/profile" onClick={() => setOpen(false)} className="py-3 text-sm tracking-[0.12em] uppercase text-muted-foreground">
                  Profile
                </Link>
                <button type="button" onClick={logout} className="py-3 text-left text-sm tracking-[0.12em] uppercase text-muted-foreground">
                  Log Out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)} className="py-3 text-sm tracking-[0.12em] uppercase text-muted-foreground">
                  Login
                </Link>
                <Link to="/register" onClick={() => setOpen(false)} className="py-3 text-sm tracking-[0.12em] uppercase text-muted-foreground">
                  Register
                </Link>
              </>
            )}
            <a
              href="/#play"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md bg-[image:var(--gradient-gold)] py-3 text-center text-sm font-bold tracking-[0.12em] uppercase text-primary-foreground"
            >
              Download
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

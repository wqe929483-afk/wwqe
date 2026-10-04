import { Download } from "lucide-react";
import heroImg from "@/assets/sk-board-close.jpg";
import logo from "@/assets/six-kingdoms-logo.png.asset.json";
import { DOWNLOAD_URL, GAME_NAME } from "@/lib/site-config";
import { Reveal } from "./Reveal";
import { SixDots } from "./SixDots";

const stats = [
  { value: "6", label: "Players" },
  { value: "6", label: "Kingdoms" },
  { value: "1", label: "Empire" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[72px]">
      <div className="container-page grid items-center gap-14 py-16 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:py-24">
        <div>
          <Reveal>
            <img src={logo.url} alt={GAME_NAME} width={1221} height={569} className="h-24 w-auto" />
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-primary/35 px-4 py-2">
              <SixDots className="size-1.5" />
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary/90">
                The 6-Player Version · Multiplayer · Strategy
              </span>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="mt-8 font-display text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.05] tracking-tight">
              Business Tour:{" "}
              <span className="block text-gold-gradient italic">Six Kingdoms</span>
            </h1>
            <p className="mt-5 font-display text-[clamp(1.15rem,2.2vw,1.5rem)] text-foreground/90">
              Six Players. One Empire. Total Domination.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Experience Business Tour like never before with support for six players. Build
              your empire, compete with your rivals and fight for control of the board.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div id="play" className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={DOWNLOAD_URL}
                download
                className="flex items-center gap-3 rounded-lg bg-[image:var(--gradient-gold)] px-8 py-4 text-[13px] font-extrabold tracking-[0.14em] uppercase text-primary-foreground shadow-[var(--glow-gold)] transition-transform hover:-translate-y-0.5"
              >
                <Download className="size-4" />
                Download {GAME_NAME}
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-border pt-7">
              {stats.map((s) => (
                <div key={s.label} className="flex items-baseline gap-2">
                  <span className="font-display text-lg text-primary">{s.value}</span>
                  <span className="text-sm text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="relative">
          <div className="pointer-events-none absolute -inset-10 rounded-full bg-primary/10 blur-3xl" />
          <img
            src={heroImg}
            alt="Six Kingdoms concept art: six colorful player tokens around a six-kingdom board"
            width={1280}
            height={720}
            className="relative w-full rounded-2xl border border-border shadow-[var(--shadow-elevated)]"
          />
          <div className="pointer-events-none absolute -top-6 -right-3 grid size-20 place-items-center rounded-full bg-[image:var(--gradient-gold)] font-display text-4xl text-primary-foreground shadow-[var(--glow-gold)]">
            6
          </div>
          <p className="relative mt-3 text-xs text-muted-foreground">Six Kingdoms concept art</p>
        </Reveal>
      </div>
    </section>
  );
}

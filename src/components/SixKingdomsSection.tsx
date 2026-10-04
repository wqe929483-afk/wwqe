import sixPlayers from "@/assets/sk-kingdoms-close.jpg";
import { PLAYER_COLORS } from "@/lib/site-config";
import { Reveal } from "./Reveal";

const pillars = ["More Competition", "More Strategy", "More Chaos"];

export function SixKingdomsSection() {
  return (
    <section id="six-kingdoms" className="border-y border-border bg-surface/40 py-24 lg:py-32">
      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Welcome to Six Kingdoms</p>
            <div className="mt-6 flex items-end gap-5">
              <span className="font-display text-[clamp(7rem,16vw,11rem)] leading-[0.8] text-gold-gradient">
                6
              </span>
              <span className="pb-3 text-[13px] font-extrabold tracking-[0.3em] uppercase text-primary">
                Players
              </span>
            </div>
            <p className="mt-6 font-display text-xl leading-snug">
              Play with up to six players in the ultimate multiplayer board game experience.
            </p>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Six Kingdoms expands the classic Business Tour experience into a larger
              multiplayer battle where up to six players compete for control of the board.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              More players means more competition, more strategic decisions and more
              unexpected moments.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {pillars.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-primary/25 px-3 py-1 text-[11px] tracking-[0.12em] uppercase text-primary/85"
                >
                  {p}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="pointer-events-none absolute -inset-10 rounded-full bg-primary/10 blur-3xl" />
            <img
              src={sixPlayers}
              alt="Six Kingdoms concept art: six rivals competing around the kingdom board"
              width={1280}
              height={720}
              loading="lazy"
              className="relative w-full rounded-2xl border border-border shadow-[var(--shadow-elevated)]"
            />
            <div className="relative mt-5 grid grid-cols-6 gap-2">
              {PLAYER_COLORS.map((c, i) => (
                <div key={c} className="panel flex flex-col items-center gap-2 p-3">
                  <span className={`size-4 rounded-full ${c}`} />
                  <span className="text-[10px] tracking-[0.16em] uppercase text-muted-foreground">
                    P{i + 1}
                  </span>
                </div>
              ))}
            </div>
            <p className="relative mt-3 text-xs text-muted-foreground">
              Six Kingdoms concept art — this project's 6-player version of Business Tour.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

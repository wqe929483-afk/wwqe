import { Home, Building2, Dices, Plane, Trophy } from "lucide-react";
import boardBuildings from "@/assets/sk-hud.jpg";
import boardClassic from "@/assets/sk-six-gameplay.jpg";
import { Reveal } from "./Reveal";

const highlights = [
  {
    icon: Home,
    title: "Buy Properties",
    text: "claim cities across the world and collect rent from rivals",
  },
  {
    icon: Building2,
    title: "Build Your Empire",
    text: "upgrade your cities with houses and hotels to raise the stakes",
  },
  {
    icon: Dices,
    title: "Chance & Luck",
    text: "roll the dice, draw chance cards and turn the game around",
  },
  { icon: Plane, title: "World Tour", text: "travel around the board to any city you want" },
  {
    icon: Trophy,
    title: "Monopolies",
    text: "complete a set of cities to multiply your income",
  },
];

export function BoardSection() {
  return (
    <section id="board" className="py-24 lg:py-32">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <img
            src={boardBuildings}
            alt="Six Kingdoms concept art: six player panels above the kingdom board"
            width={1280}
            height={720}
            loading="lazy"
            className="w-full rounded-2xl border border-border shadow-[var(--shadow-elevated)]"
          />
          <p className="mt-3 text-xs text-muted-foreground">Six Kingdoms concept art</p>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">The Game</p>
            <p className="mt-3 font-display text-sm text-muted-foreground">Business Tour: Six Kingdoms</p>
            <h2 className="mt-2 font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.1]">
              Strategy Meets Luck
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
              Business Tour: Six Kingdoms is a 6-player version of the Business Tour experience. Roll the dice, buy
              properties, build your empire and bankrupt your rivals with smart decisions
              and perfect timing.
            </p>
          </Reveal>

          <div className="mt-10 space-y-3">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 70}>
                <div className="panel flex items-start gap-4 p-4 transition-colors hover:border-primary/40">
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary">
                    <h.icon className="size-4" />
                  </span>
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold text-foreground">{h.title}</span>{" "}
                    <span className="text-muted-foreground">— {h.text}</span>
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="container-page mt-24 grid items-center gap-14 lg:mt-32 lg:grid-cols-2 lg:gap-20">
        <Reveal className="lg:order-2">
          <img
            src={boardClassic}
            alt="Six Kingdoms concept art: six players compete beside the castles"
            width={1280}
            height={720}
            loading="lazy"
            className="w-full rounded-2xl border border-border shadow-[var(--shadow-elevated)]"
          />
          <p className="mt-3 text-xs text-muted-foreground">Six Kingdoms concept art</p>
        </Reveal>
        <Reveal delay={80} className="lg:order-1">
          <p className="eyebrow">Every Match Is Different</p>
          <h3 className="mt-4 font-display text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight">
            Compete for the Top
          </h3>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">
            With six rivals at the table, no two matches play out the same. Climb the
            leaderboards and fight for the top spot. Every roll, trade and upgrade brings you closer to victory.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import { Dices, Home, Crown } from "lucide-react";
import cardsHand from "@/assets/sk-friends.jpg";
import { Reveal } from "./Reveal";

const modes = [
  { name: "Six Player Mode", tier: "Gold", text: "Play Business Tour with up to six players in the ultimate multiplayer experience." },
  { name: "Private Match", tier: "Gold", text: "Create a private game and invite your friends." },
  { name: "Online Multiplayer", tier: "Silver", text: "Compete with players online in large multiplayer matches." },
  { name: "Vs Bots", tier: "Bronze", text: "Fill empty seats with bots and practice your strategy." },
  { name: "2v2 Teams", tier: "Bronze", text: "Team up with a partner and outsmart your rivals." },
];

const tierClass: Record<string, string> = {
  Bronze: "text-bronze border-bronze/40",
  Silver: "text-silver border-silver/40",
  Gold: "text-primary border-primary/50",
};

const steps = [
  {
    icon: Dices,
    title: "Roll",
    text: "Throw the dice and move around the board",
  },
  { icon: Home, title: "Buy", text: "Purchase cities and build houses and hotels" },
  {
    icon: Crown,
    title: "Win",
    text: "Bankrupt five rivals and climb the leaderboards",
  },
];

const stats = [
  { value: "6", label: "Players" },
  { value: "5", label: "Game Modes" },
  { value: "1", label: "Empire" },
];

export function ModesSection() {
  return (
    <section id="modes" className="border-y border-border bg-surface/40 py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Game Modes</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.1]">
            Play Your Way
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Six Player Mode is the heart of Six Kingdoms. Create a private match for your
            friends, compete online in large matches, or practice against bots.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {modes.map((k, i) => (
            <Reveal key={k.name} delay={i * 70}>
              <div className="group panel overflow-hidden p-3 transition-transform duration-500 hover:-translate-y-2">
                <div className="aspect-[3/4] rounded-lg border border-primary/25 bg-[radial-gradient(120%_90%_at_50%_0%,oklch(0.34_0.09_88/_0.5),oklch(0.16_0.02_95))] p-3">
                  <div className="flex h-full flex-col items-center justify-center gap-3 rounded-md border border-primary/15">
                    <span className="font-display text-3xl text-primary/80">
                      {k.name === "Six Player Mode" ? "6" : k.name.charAt(0)}
                    </span>
                    <span className="px-2 text-center font-display text-sm">{k.name}</span>
                    <span className="px-2 text-center text-[11px] leading-snug text-muted-foreground">{k.text}</span>
                  </div>
                </div>
                <p
                  className={`mt-3 border-t pt-3 text-center text-[11px] font-semibold tracking-[0.2em] uppercase ${tierClass[k.tier]}`}
                >
                  {k.tier}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <img
              src={cardsHand}
              alt="Six Kingdoms concept art: six friends playing around one table"
              width={1280}
              height={720}
              loading="lazy"
              className="w-full rounded-2xl border border-border shadow-[var(--shadow-elevated)]"
            />
            <p className="mt-4 text-sm text-muted-foreground">
              Six friends, one board — Six Kingdoms concept art
            </p>
          </Reveal>

          <div>
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="flex items-start gap-5 border-b border-border py-6">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-primary/35 text-primary">
                    <s.icon className="size-4" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {s.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-10">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-3xl text-primary">{s.value}</p>
                    <p className="mt-1 text-xs tracking-[0.16em] uppercase text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
              <a
                href="#features"
                className="mt-10 inline-block rounded-lg border border-primary/60 px-7 py-3.5 text-[13px] tracking-[0.14em] uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Explore Features
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

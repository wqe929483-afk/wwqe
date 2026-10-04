import { Bot } from "lucide-react";
import skBoard from "@/assets/sk-board-showcase.jpg";
import skTokens from "@/assets/sk-tokens.jpg";
import skSixPlayers from "@/assets/sk-six-players.jpg";
import skKingdomZone from "@/assets/sk-kingdom-zone.jpg";
import skOnline from "@/assets/sk-online.jpg";
import skBots from "@/assets/sk-bots.jpg";
import skLocal from "@/assets/sk-local.jpg";
import skStrategy from "@/assets/sk-strategy.jpg";
import skPodium from "@/assets/sk-podium.jpg";
import { Reveal } from "./Reveal";

type Feature = {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  tags: string[];
  text: string;
  note?: string;
};

const features: Feature[] = [
  { image: skTokens, imageAlt: "Six Kingdoms concept art: six player tokens", eyebrow: "Six Kingdoms", title: "6 Player Multiplayer", tags: ["6 Players", "Friends", "Online"], text: "Bring five friends into the same match and compete for control of the board." },
  { image: skBoard, imageAlt: "Six Kingdoms concept art: six tokens on one board", eyebrow: "Strategy", title: "More Players. More Strategy.", tags: ["Properties", "Negotiation", "Decisions"], text: "With six players competing at once, every property, decision and negotiation matters." },
  { image: skKingdomZone, imageAlt: "Six Kingdoms concept art: snow, fire and desert kingdom zones", eyebrow: "Domination", title: "Six Kingdoms", tags: ["6 Rivals", "1 Winner", "Total Domination"], text: "Six players enter. One empire dominates." },
  { image: skOnline, imageAlt: "Six Kingdoms concept art: players joining from around the world", eyebrow: "Multiplayer", title: "Online Multiplayer", tags: ["Worldwide", "Public Tables", "Up to 6 Players"], text: "Compete with players from around the world in exciting multiplayer matches." },
  { image: skSixPlayers, imageAlt: "Six Kingdoms concept art: players gathered around the table", eyebrow: "Teamwork", title: "2v2 Team Mode", tags: ["Teams", "Cooperation", "Tactics"], text: "Team up with another player and work together to outsmart your opponents." },
  { image: skBots, imageAlt: "Six Kingdoms concept art: a friendly robot opponent at the board", eyebrow: "Practice", title: "Play Against Bots", tags: ["AI Opponents", "Offline", "Training"], text: "Practice your strategy and play against computer-controlled opponents.", note: "Missing a player? Bots can fill empty seats so the game always goes on." },
  { image: skLocal, imageAlt: "Six Kingdoms concept art: six controllers around one screen", eyebrow: "Together", title: "Local Multiplayer", tags: ["Same Computer", "Friends", "Family"], text: "Enjoy Business Tour: Six Kingdoms together with friends on the same computer." },
  { image: skStrategy, imageAlt: "Six Kingdoms concept art: colorful properties with houses and hotels", eyebrow: "Strategy", title: "Strategy & Competition", tags: ["Properties", "Upgrades", "Monopolies"], text: "Buy properties, build your empire and make smart decisions to stay ahead." },
  { image: skPodium, imageAlt: "Six Kingdoms concept art: six player pawns on a victory podium", eyebrow: "Compete", title: "Leaderboards & Tournaments", tags: ["Rankings", "Tournaments", "Rewards"], text: "Compete for higher rankings and take part in competitive matches." },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What You Get</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3rem)] leading-[1.1]">
            Built for Players
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Everything that makes Business Tour: Six Kingdoms the ultimate six-player board game.
          </p>
        </Reveal>

        <div className="mt-16 space-y-8">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={40}>
              <article
                className={`panel grid items-center gap-10 overflow-hidden p-6 lg:grid-cols-2 lg:gap-14 lg:p-10 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                }`}
              >
                <figure className="m-0">
                  <img
                    src={f.image}
                    alt={f.imageAlt}
                    width={1280}
                    height={720}
                    loading="lazy"
                    className="w-full rounded-xl border border-border"
                  />
                  <figcaption className="mt-3 text-xs text-muted-foreground">Six Kingdoms concept art</figcaption>
                </figure>

                <div>
                  <p className="eyebrow">{f.eyebrow}</p>
                  <h3 className="mt-3 font-display text-[clamp(1.5rem,3vw,2rem)]">
                    {f.title}
                  </h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {f.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-primary/25 px-3 py-1 text-[11px] tracking-[0.12em] uppercase text-primary/85"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 leading-relaxed text-muted-foreground">{f.text}</p>
                  {f.note && (
                    <p className="mt-6 flex gap-3 rounded-xl border border-border bg-secondary/40 p-4 text-sm leading-relaxed text-muted-foreground">
                      <Bot className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{f.note}</span>
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

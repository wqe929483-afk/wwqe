import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SixKingdomsSection } from "@/components/SixKingdomsSection";
import { BoardSection } from "@/components/BoardSection";
import { ModesSection } from "@/components/ModesSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const D =
  "Business Tour: Six Kingdoms is a multiplayer board game experience built for up to six players. Build your empire, compete with friends and fight for control of the board.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Business Tour: Six Kingdoms - 6 Player Multiplayer Board Game" },
      { name: "description", content: D },
      { property: "og:title", content: "Business Tour: Six Kingdoms - 6 Player Multiplayer Board Game" },
      { property: "og:description", content: D },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Business Tour: Six Kingdoms - 6 Player Multiplayer Board Game" },
      { name: "twitter:description", content: D },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SixKingdomsSection />
        <BoardSection />
        <ModesSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

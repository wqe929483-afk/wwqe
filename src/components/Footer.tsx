import logo from "@/assets/six-kingdoms-logo.png.asset.json";
import discordLogo from "@/assets/discord-logo.png.asset.json";

const columns = [
  { title: "Game", links: ["Six Kingdoms", "The Game", "Game Modes", "Features"] },
  { title: "Play", links: ["Six Player Mode", "Private Match", "Online Multiplayer", "Bots"] },
  { title: "About", links: ["Leaderboards", "Tournaments", "Privacy", "Contact"] },
];

export function Footer() {
  return (
    <footer className="py-16">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <img src={logo.url} alt="Business Tour: Six Kingdoms" width={1221} height={569} className="h-20 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Business Tour: Six Kingdoms — a 6-player version of the Business Tour
              experience. Not an official Business Tour release.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://discord.gg/businesstour"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join our Discord community"
                className="transition-opacity duration-300 hover:opacity-75"
              >
                <img
                  src={discordLogo.url}
                  alt="Discord"
                  width={128}
                  height={96}
                  className="h-8 w-auto"
                />
              </a>
              <span className="text-sm text-muted-foreground">Join our Discord</span>
            </div>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-primary">
                {c.title}
              </p>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#top"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-7 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Business Tour: Six Kingdoms.
        </div>
      </div>
    </footer>
  );
}

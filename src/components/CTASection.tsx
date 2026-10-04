import { Download } from "lucide-react";
import { DOWNLOAD_URL, GAME_NAME } from "@/lib/site-config";
import { Reveal } from "./Reveal";

export function CTASection() {
  return (
    <section className="border-y border-border bg-surface/40 py-28 lg:py-36">
      <div className="container-page text-center">
        <Reveal>
          <p className="eyebrow">Ready?</p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-[clamp(2.25rem,5.5vw,3.5rem)] leading-[1.08]">
            Enter the <span className="text-gold-gradient italic">Six Kingdoms</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md leading-relaxed text-muted-foreground">
            Six players enter. One empire dominates. Gather five friends and fight for
            control of the board.
          </p>
          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <a
              href={DOWNLOAD_URL}
              download
              className="flex items-center gap-3 rounded-lg bg-[image:var(--gradient-gold)] px-9 py-4 text-[13px] font-extrabold tracking-[0.14em] uppercase text-primary-foreground shadow-[var(--glow-gold)] transition-transform hover:-translate-y-0.5"
            >
              <Download className="size-4" />
              Download {GAME_NAME}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

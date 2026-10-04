import { PLAYER_COLORS } from "@/lib/site-config";

export function SixDots({ className = "size-2.5" }: { className?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5" aria-hidden>
      {PLAYER_COLORS.map((c) => (
        <span key={c} className={`rounded-full ${c} ${className}`} />
      ))}
    </span>
  );
}

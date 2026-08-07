interface PlaceholderBadgeProps {
  /** Display name (also used as img alt when a logo is supplied). */
  name: string;
  /**
   * Real logo image. When `null` (default) a text badge is rendered in the
   * exact spot a logo would occupy — so swapping in a real logo later is a
   * one-line data change (`logoSrc: "/assets/…"`).
   */
  logoSrc?: string | null;
  /** Add a lift + soft accent glow on hover (used by the Software section). */
  glow?: boolean;
  className?: string;
}

/**
 * Shared bordered badge/chip used by both the Clients and Software sections.
 * Muted, restrained by default; brightens on hover.
 */
export default function PlaceholderBadge({
  name,
  logoSrc = null,
  glow = false,
  className = "",
}: PlaceholderBadgeProps) {
  const hover = glow
    ? "hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_14px_44px_-14px_var(--accent)]"
    : "hover:border-accent-soft/40";

  return (
    <div
      className={`group flex h-full w-full items-center justify-center rounded-xl border border-line bg-surface px-4 py-4 text-center transition-all duration-300 ${hover} ${className}`}
    >
      {logoSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logoSrc}
          alt={name}
          className="max-h-9 w-auto object-contain opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
        />
      ) : (
        <span className="font-body text-xs font-semibold uppercase leading-tight tracking-[0.2em] text-muted transition-colors duration-300 group-hover:text-text">
          {name}
        </span>
      )}
    </div>
  );
}

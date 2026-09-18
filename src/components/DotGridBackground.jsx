// Subtle technical dot grid behind the hero, plus two soft brand-colored
// glows for warmth. Dot color and opacity follow the active theme through
// CSS variables, so no JS is needed to react to light or dark mode.
export default function DotGridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--dot-color) 1.4px, transparent 1.4px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-crimson-500/15 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
    </div>
  );
}

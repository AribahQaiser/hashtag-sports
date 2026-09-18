import logo from "../assets/logo_01.jpeg";

// "mark" (default) crops the emblem into a circular badge for tight
// spots like the navbar and footer. "full" shows the whole lockup with
// the name and tagline, uncropped, for the hero where there is room.
export default function Logo({ size = 44, className = "", variant = "mark" }) {
  if (variant === "full") {
    return (
      <img
        src={logo}
        alt="Hashtag Sports, Where Health Begins"
        className={`object-contain ${className}`}
        style={{ height: size, width: "auto" }}
      />
    );
  }

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full border border-gold-500/40 bg-ink-950 ${className}`}
      style={{ height: size, width: size }}
    >
      <img
        src={logo}
        alt="Hashtag Sports emblem"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: "50% 30%", transform: "scale(1.9)" }}
      />
    </div>
  );
}

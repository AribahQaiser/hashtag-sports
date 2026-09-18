import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import useTheme from "../hooks/useTheme";
import { NAV_LINKS, VENUE } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const scrollTo = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-3 z-40 px-3">
      <div className="mx-auto max-w-5xl rounded-full border border-gold-500/20 bg-deep/85 backdrop-blur shadow-lg shadow-black/20">
        <div className="px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 shrink-0">
            <Logo size={44} />
            <span className="hidden sm:flex flex-col items-start leading-tight">
              <span className="font-display text-lg text-on-deep">{VENUE.name}</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-on-deep/50">
                {VENUE.secondaryTaglineBottom}
              </span>
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="font-display text-base tracking-wide text-on-deep/75 hover:text-gold-400 transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} onToggle={toggle} />
            <button
              onClick={() => scrollTo("contact")}
              className="hidden sm:inline-flex rounded-full bg-crimson-500 px-5 py-2 font-display text-lg text-bone-50 hover:bg-crimson-400 transition-colors"
            >
              Book Now
            </button>
            <button
              className="lg:hidden text-on-deep"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-gold-500/15 px-5 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="font-display text-lg text-left text-on-deep/80 hover:text-gold-400 transition-colors"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full bg-crimson-500 px-5 py-2 font-display text-lg text-bone-50 text-center"
            >
              Book Now
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

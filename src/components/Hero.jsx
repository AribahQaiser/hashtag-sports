import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Logo from "./Logo";
import DotGridBackground from "./DotGridBackground";
import { VENUE } from "../data/site";

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative overflow-hidden bg-deep">
      <DotGridBackground />
      <div className="relative z-10 mx-auto max-w-6xl px-5 pt-14 pb-24 md:pt-16 md:pb-32 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center rounded-full border border-gold-500/30 px-4 py-1.5 text-xs tracking-[0.3em] uppercase text-gold-400"
        >
          {VENUE.secondaryTaglineBottom}
        </motion.span>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6 flex items-center justify-center"
        >
          <div
            className="absolute h-52 w-52 rounded-full blur-2xl"
            style={{ background: "radial-gradient(circle, rgba(13,13,13,0.85) 0%, transparent 72%)" }}
            aria-hidden="true"
          />
          <Logo size={200} variant="full" className="relative mix-blend-screen" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 text-sm text-gold-400 font-medium mb-4"
        >
          <MapPin size={15} /> H13, Islamabad
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl leading-[0.95] text-on-deep"
        >
          Where Health <span className="text-crimson-400">Begins</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 max-w-xl text-on-deep/70 text-base md:text-lg"
        >
          Hashtag Sports is an indoor arena in Islamabad built for box cricket, turf cricket,
          futsal, badminton, volleyball, table tennis and foosball, all on one site with
          floodlit courts open late into the night.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="group inline-flex items-center gap-2 rounded-full bg-crimson-500 px-7 py-3.5 font-display text-xl text-bone-50 hover:bg-crimson-400 transition-colors"
          >
            Book Now
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href={VENUE.youtube}
            target="_blank"
            rel="noreferrer"
            className="font-display text-xl text-on-deep/70 hover:text-on-deep underline underline-offset-4 decoration-gold-500/30"
          >
            Watch highlights
          </a>
        </motion.div>
      </div>
    </section>
  );
}

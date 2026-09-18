import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, Video, Play } from "lucide-react";

const SWIPE_UNIT = 220; // px of drag that equals one full slide step
const SPACING = 190; // horizontal px between adjacent cards
const ANGLE = 32; // degrees of tilt per step away from center
const MAX_STEPS = 3; // cards beyond this offset are fully hidden

function CoverflowCard({ item, i, index, dragX, total, onSelect }) {
  const rawRelative = useTransform(dragX, (d) => i - index - d / SWIPE_UNIT);
  const relative = useSpring(rawRelative, { stiffness: 260, damping: 32, mass: 0.6 });

  const x = useTransform(relative, (r) => `calc(-50% + ${r * SPACING}px)`);
  const rotateY = useTransform(relative, (r) => Math.max(-MAX_STEPS, Math.min(MAX_STEPS, -r)) * ANGLE);
  const scale = useTransform(relative, (r) => Math.max(0.55, 1 - Math.min(Math.abs(r), MAX_STEPS) * 0.18));
  const opacity = useTransform(relative, (r) => (Math.abs(r) > MAX_STEPS ? 0 : 1 - Math.min(Math.abs(r), MAX_STEPS) * 0.32));
  const zIndex = useTransform(relative, (r) => Math.round((total - Math.abs(r)) * 10));

  const isActive = i === index;

  return (
    <motion.button
      onClick={() => onSelect(i)}
      className="absolute top-1/2 left-1/2 h-64 w-48 md:h-80 md:w-60 -translate-y-1/2 cursor-pointer overflow-hidden rounded-2xl border border-gold-500/25 bg-deep-alt shadow-2xl shadow-black/60"
      style={{ x, y: "-50%", rotateY, scale, opacity, zIndex }}
      aria-label={item.alt}
      aria-current={isActive}
    >
      {item.type === "video" && (
        <video src={item.src} className="h-full w-full object-cover" muted loop autoPlay playsInline />
      )}
      {item.type === "image" && (
        <img src={item.src} alt={item.alt} loading="lazy" className="h-full w-full object-cover" />
      )}
      {item.type === "youtube" && (
        <>
          <img
            src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
            alt={item.alt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-crimson-500/90 text-bone-50 shadow-lg">
              <Play size={20} fill="currentColor" className="ml-0.5" />
            </span>
          </div>
        </>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-deep/95 via-deep/40 to-transparent" />

      <div className="pointer-events-none absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1 rounded-full bg-crimson-500/90 px-2.5 py-1 text-[11px] font-display tracking-wide text-bone-50">
          {(item.type === "video" || item.type === "youtube") && <Video size={11} />}
          {item.tag}
        </span>
      </div>
    </motion.button>
  );
}

export default function CoverflowGallery({ items }) {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(null);
  const [paused, setPaused] = useState(false);
  const dragX = useMotionValue(0);
  const total = items.length;

  const goTo = useCallback(
    (next) => setIndex(((next % total) + total) % total),
    [total]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => goTo(index + 1), 4200);
    return () => clearInterval(id);
  }, [index, paused, goTo]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") goTo(index - 1);
      if (e.key === "ArrowRight") goTo(index + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, goTo]);

  const handleSelect = (i) => {
    if (i === index) setActive(items[i]);
    else setIndex(i);
  };

  const handleDragEnd = (_, info) => {
    const distance = info.offset.x;
    const velocity = info.velocity.x;
    if (distance < -80 || velocity < -400) goTo(index + 1);
    else if (distance > 80 || velocity > 400) goTo(index - 1);
    dragX.set(0);
  };

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="select-none"
    >
      <div
        className="relative h-80 md:h-[28rem] w-full"
        style={{ perspective: 1400 }}
      >
        <motion.div
          className="absolute inset-0"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDrag={(_, info) => dragX.set(info.offset.x)}
          onDragEnd={handleDragEnd}
          style={{ touchAction: "pan-y" }}
        >
          {items.map((item, i) => (
            <CoverflowCard
              key={item.src || item.videoId}
              item={item}
              i={i}
              index={index}
              dragX={dragX}
              total={total}
              onSelect={handleSelect}
            />
          ))}
        </motion.div>

        <button
          onClick={() => goTo(index - 1)}
          aria-label="Previous"
          className="absolute left-1 md:left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-deep/70 border border-gold-500/30 p-2 text-on-deep hover:border-gold-400 hover:text-gold-400 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => goTo(index + 1)}
          aria-label="Next"
          className="absolute right-1 md:right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-deep/70 border border-gold-500/30 p-2 text-on-deep hover:border-gold-400 hover:text-gold-400 transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-6 flex flex-col items-center gap-3">
        <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-md">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-crimson-500" : "w-2 bg-on-deep/25 hover:bg-on-deep/50"
              }`}
            />
          ))}
        </div>
        <p className="font-display text-sm tracking-widest text-on-deep/50">
          {index + 1} / {total}
        </p>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-deep/90 p-6"
            onClick={() => setActive(null)}
          >
            {active.type === "video" && (
              <video src={active.src} className="max-h-[85vh] max-w-full rounded-xl" controls autoPlay />
            )}
            {active.type === "image" && (
              <img src={active.src} alt={active.alt} className="max-h-[85vh] max-w-full rounded-xl object-contain" />
            )}
            {active.type === "youtube" && (
              <iframe
                className="aspect-video w-full max-w-3xl rounded-xl"
                src={`https://www.youtube.com/embed/${active.videoId}?autoplay=1&rel=0`}
                title={active.alt}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Clock, Navigation, Star } from "lucide-react";
import { WhatsAppIcon } from "./SocialIcons";
import { VENUE, SPORTS_SUMMARY } from "../data/site";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", sport: SPORTS_SUMMARY[0].name, date: "", time: "" });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const sendOnWhatsApp = (e) => {
    e.preventDefault();
    const message =
      `Hello Hashtag Sports, I would like to book a slot.\n` +
      `Name: ${form.name}\n` +
      `Phone: ${form.phone}\n` +
      `Sport: ${form.sport}\n` +
      `Date: ${form.date}\n` +
      `Time: ${form.time}`;
    window.open(`${VENUE.whatsappPrimary}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="bg-bone-50 text-ink-950 py-24">
      <div className="mx-auto max-w-6xl px-5 grid gap-12 lg:grid-cols-2">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl md:text-5xl"
          >
            Book your slot
          </motion.h2>
          <p className="mt-3 text-ink-950/70 max-w-md">
            Send us your details on WhatsApp and our team will confirm the nearest open slot for
            you, or call us directly for a same day match.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={VENUE.whatsappPrimary}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-crimson-500 px-5 py-2.5 font-display text-lg text-bone-50 hover:bg-crimson-400 transition-colors"
            >
              <WhatsAppIcon size={18} />
              {VENUE.phonePrimary}
            </a>
            <a
              href={VENUE.whatsappSecondary}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-2.5 font-display text-lg text-bone-50 hover:bg-charcoal-800 transition-colors"
            >
              <WhatsAppIcon size={18} className="text-gold-400" />
              {VENUE.phoneSecondary}
            </a>
          </div>

          <div className="mt-8 space-y-3 text-sm">
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-crimson-500" />
              {VENUE.address}
            </p>
            <p className="flex items-center gap-2">
              <Clock size={16} className="text-crimson-500" />
              {VENUE.hours}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={VENUE.mapsLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-950/15 px-4 py-2 text-sm hover:border-crimson-500 hover:text-crimson-500 transition-colors"
            >
              <Navigation size={16} />
              Get Directions
            </a>
            <a
              href={VENUE.googleReviewLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-950/15 px-4 py-2 text-sm hover:border-gold-500 hover:text-gold-500 transition-colors"
            >
              <Star size={16} />
              Leave a Google Review
            </a>
          </div>

          <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-ink-950/10">
            <iframe
              className="h-full w-full"
              src={VENUE.mapsEmbedSrc}
              title="Hashtag Sports location on Google Maps"
              loading="lazy"
            />
          </div>
        </div>

        <motion.form
          onSubmit={sendOnWhatsApp}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-ink-950/10 bg-white p-6 h-fit space-y-4"
        >
          <div>
            <label className="text-sm text-ink-950/60">Name</label>
            <input
              required
              value={form.name}
              onChange={update("name")}
              className="mt-1 w-full rounded-lg border border-ink-950/15 px-3 py-2 focus:outline-none focus:border-crimson-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-sm text-ink-950/60">Phone</label>
            <input
              required
              value={form.phone}
              onChange={update("phone")}
              className="mt-1 w-full rounded-lg border border-ink-950/15 px-3 py-2 focus:outline-none focus:border-crimson-500"
              placeholder="03xx xxxxxxx"
            />
          </div>
          <div>
            <label className="text-sm text-ink-950/60">Sport</label>
            <select
              value={form.sport}
              onChange={update("sport")}
              className="mt-1 w-full rounded-lg border border-ink-950/15 px-3 py-2 focus:outline-none focus:border-crimson-500"
            >
              {SPORTS_SUMMARY.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-ink-950/60">Date</label>
              <input
                required
                type="date"
                value={form.date}
                onChange={update("date")}
                className="mt-1 w-full rounded-lg border border-ink-950/15 px-3 py-2 focus:outline-none focus:border-crimson-500"
              />
            </div>
            <div>
              <label className="text-sm text-ink-950/60">Time</label>
              <input
                required
                type="time"
                value={form.time}
                onChange={update("time")}
                className="mt-1 w-full rounded-lg border border-ink-950/15 px-3 py-2 focus:outline-none focus:border-crimson-500"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-crimson-500 px-5 py-3 font-display text-lg text-bone-50 hover:bg-crimson-400 transition-colors"
          >
            <WhatsAppIcon size={18} />
            Send on WhatsApp
          </button>
        </motion.form>
      </div>
    </section>
  );
}

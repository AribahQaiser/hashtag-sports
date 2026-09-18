import { motion } from "framer-motion";
import { MapPin, Clock, Users } from "lucide-react";
import { VENUE } from "../data/site";

export default function AboutSection() {
  return (
    <section id="about" className="bg-bone-50 text-ink-950 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl md:text-5xl max-w-xl"
        >
          Welcome to the best indoor sports experience in Islamabad
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 max-w-2xl text-ink-950/70 text-lg"
        >
          Hashtag Sports sits on Malik Aurangzeb Road near NUST University in H13, Islamabad,
          across from Motor Expert at Gate 6. Players from all over the twin cities come here
          for box cricket, turf cricket, futsal, badminton, volleyball, table tennis and
          foosball on courts built for real matches, not just casual knockabouts. Whether it is
          a weekday evening game with colleagues or a weekend tournament with friends, our
          floodlit courts stay open late so the games do not have to stop.
        </motion.p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="rounded-xl bg-ink-950 text-bone-50 p-5"
          >
            <MapPin className="text-gold-400 mb-2" size={20} />
            <p className="text-sm text-bone-50/60">Location</p>
            <p className="font-display text-lg mt-1">{VENUE.address}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="rounded-xl bg-ink-950 text-bone-50 p-5"
          >
            <Clock className="text-gold-400 mb-2" size={20} />
            <p className="text-sm text-bone-50/60">Hours</p>
            <p className="font-display text-lg mt-1">{VENUE.hours}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-xl bg-ink-950 text-bone-50 p-5"
          >
            <Users className="text-gold-400 mb-2" size={20} />
            <p className="text-sm text-bone-50/60">Community</p>
            <p className="font-display text-lg mt-1">{VENUE.community}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

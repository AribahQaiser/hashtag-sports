import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TikTokIcon, InstagramIcon } from "./SocialIcons";
import { VENUE } from "../data/site";
import CoverflowGallery from "./CoverflowGallery";

import heroVideo from "../assets/hashtahsports_video_01.mp4";
import hashtagImg from "../assets/hashtagsport_image_01.jpeg";
import turf2 from "../assets/turf_image_02.jpeg";
import badminton2 from "../assets/badminton_court_image_2.png";
import foos1 from "../assets/foosball_01.jpeg";
import football1 from "../assets/football_turf_image_01.jpeg";
import table2 from "../assets/tabletennis_image_02.jpeg";
import cricketTurf from "../assets/cricket_turf_image_01.jpeg";
import badminton1 from "../assets/badminton_court_image.png";
import turf1 from "../assets/turf_image_01.jpeg";
import football2 from "../assets/football_turf_image_02.jpeg";
import table1 from "../assets/tabletennis_image_01.jpeg";
import foos2 from "../assets/foosball_02.jpeg";

const UPLOADS_PLAYLIST = "UUbXCzzDywBSs15jCpzxT3pw";
const HIGHLIGHT_VIDEO = "https://youtu.be/W-Yaj18HsrY?si=mvigKjDhPDUVGbSQ";

const ITEMS = [
  { type: "video", src: heroVideo, alt: "Hashtag Sports arena walkthrough", tag: "Arena Tour" },
  { type: "image", src: hashtagImg, alt: "Hashtag Sports arena entrance in Islamabad", tag: "Arena" },
  { type: "image", src: turf2, alt: "Box cricket net at Hashtag Sports", tag: "Box Cricket" },
  { type: "image", src: badminton2, alt: "Indoor badminton court lit for a match", tag: "Badminton" },
  { type: "image", src: foos1, alt: "Foosball table at Hashtag Sports", tag: "Foosball" },
  { type: "image", src: football1, alt: "Futsal court at Hashtag Sports", tag: "Futsal" },
  { type: "image", src: table2, alt: "Table tennis table at Hashtag Sports", tag: "Table Tennis" },
  { type: "image", src: cricketTurf, alt: "Turf cricket pitch under floodlights", tag: "Turf Cricket" },
  { type: "image", src: badminton1, alt: "Badminton court with wooden finish flooring", tag: "Badminton" },
  { type: "image", src: turf1, alt: "Astroturf cricket pitch at Hashtag Sports", tag: "Turf Cricket" },
  { type: "image", src: football2, alt: "Five a side football court", tag: "Football" },
  { type: "image", src: table1, alt: "Tournament grade table tennis table", tag: "Table Tennis" },
  { type: "image", src: foos2, alt: "Players at the foosball table", tag: "Foosball" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-deep py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-12 md:mb-16">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-on-deep">Gallery</h2>
            <p className="mt-2 text-on-deep/60 max-w-lg">
              Match nights, courts and highlight clips from Hashtag Sports.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={VENUE.googleReviewLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 px-4 py-2 text-sm text-on-deep/80 hover:border-gold-400 hover:text-gold-400 transition-colors"
            >
              <Star size={16} className="text-gold-400" />
              Google Reviews
            </a>
            <a
              href={VENUE.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 px-4 py-2 text-sm text-on-deep/80 hover:border-gold-400 hover:text-gold-400 transition-colors"
            >
              <InstagramIcon size={16} className="text-gold-400" />
              Instagram
            </a>
            <a
              href={VENUE.tiktok}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 px-4 py-2 text-sm text-on-deep/80 hover:border-gold-400 hover:text-gold-400 transition-colors"
            >
              <TikTokIcon size={16} className="text-gold-400" />
              TikTok
            </a>
          </div>
        </div>

        <CoverflowGallery items={ITEMS} />

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
          <h3 className="font-display text-2xl text-on-deep">Latest from our channel</h3>
          <a
            href={HIGHLIGHT_VIDEO}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-crimson-500 px-4 py-2 text-sm font-display text-bone-50 hover:bg-crimson-400 transition-colors"
          >
            Watch our latest highlight
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-4 aspect-video w-full overflow-hidden rounded-2xl border border-gold-500/15 bg-deep-alt"
        >
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/videoseries?list=${UPLOADS_PLAYLIST}`}
            title="Hashtag Sports latest videos"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}

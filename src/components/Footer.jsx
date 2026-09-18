import { MapPin, Clock } from "lucide-react";
import { TikTokIcon, WhatsAppIcon, InstagramIcon, FacebookIcon, YoutubeIcon } from "./SocialIcons";
import Logo from "./Logo";
import { VENUE } from "../data/site";

const SOCIALS = [
  { href: VENUE.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: VENUE.tiktok, label: "TikTok", Icon: TikTokIcon },
  { href: VENUE.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: VENUE.facebook, label: "Facebook", Icon: FacebookIcon },
];

export default function Footer() {
  return (
    <footer className="bg-deep text-on-deep/80 border-t border-gold-500/15">
      <div className="mx-auto max-w-6xl px-5 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <Logo size={72} className="mb-3" />
          <p className="text-sm max-w-xs">
            {VENUE.secondaryTaglineTop}
            <br />
            {VENUE.secondaryTaglineBottom}
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="flex items-start gap-2">
            <MapPin size={16} className="mt-0.5 shrink-0 text-gold-400" />
            {VENUE.address}
          </p>
          <p className="flex items-center gap-2">
            <Clock size={16} className="text-gold-400" />
            {VENUE.hours}
          </p>
          <a href={VENUE.whatsappPrimary} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
            <WhatsAppIcon size={16} className="text-gold-400" />
            {VENUE.phonePrimary}
          </a>
          <a href={VENUE.whatsappSecondary} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold-400 transition-colors">
            <WhatsAppIcon size={16} className="text-gold-400" />
            {VENUE.phoneSecondary}
          </a>
        </div>

        <div className="flex flex-wrap content-start gap-3">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex items-center gap-2 rounded-full border border-on-deep/15 px-4 py-2 hover:border-gold-400 hover:text-gold-400 transition-colors"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-gold-500/10 py-4 text-center text-xs text-on-deep/40">
        © {new Date().getFullYear()} {VENUE.name}. All rights reserved.
      </div>
    </footer>
  );
}

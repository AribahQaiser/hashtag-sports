# Hashtag Sports

Vite, React, Tailwind CSS v4 and Framer Motion. Single page marketing site for an
indoor sports arena in Islamabad.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## What's here

- `src/data/site.js` holds every contact detail: phone numbers, WhatsApp links,
  Google Maps and review links, and the four social links. Update numbers or
  links here only, nothing else needs to change.
- `src/components/Hero.jsx`, `AboutSection.jsx`, `ContactSection.jsx`,
  `GallerySection.jsx`, `Footer.jsx` are the shared sections.
- `src/components/sports/` has one section per sport. Cricket, football and
  badminton carry a scroll triggered trajectory animation (bat swing and six,
  spinning football, racket swing), the rest use a simpler fade and slide reveal.
  Every trajectory animation is skipped on small screens in favor of a plain fade.
- `src/assets/` holds the arena photos and the walkthrough video used across the
  sport sections and the gallery. Replace a file there to swap the photo.
- There is no booking page or backend. The Book Now button scrolls to the
  contact section, and the contact form there opens a prefilled WhatsApp chat
  with the details typed in, so every booking request lands directly on the
  arena's phone.

## Notes

- Colors, fonts and the texture used behind dark sections are Tailwind v4
  theme tokens in `src/index.css` (`@theme` block).
- The gallery embeds the Hashtag Sports YouTube channel's uploads as a
  playlist, alongside the arena's own photos and video.

// lucide-react ships Instagram, Facebook and Youtube, but not TikTok,
// so TikTok gets a small inline mark instead.
export function TikTokIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.6 5.82c-1.02-.9-1.6-2.19-1.6-3.58h-3.14v13.44c0 1.55-1.26 2.8-2.8 2.8a2.8 2.8 0 0 1-2.8-2.8c0-1.55 1.26-2.8 2.8-2.8.27 0 .53.04.78.11V9.75a5.9 5.9 0 0 0-.78-.05 5.94 5.94 0 1 0 5.94 5.94V8.7a8.7 8.7 0 0 0 4.8 1.44V7c-1.1 0-2.14-.44-3.2-1.18z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 21v-7.5H16l.4-3H13.5V8.4c0-.87.24-1.46 1.5-1.46H16.5V4.35C16.24 4.32 15.35 4.24 14.31 4.24c-2.16 0-3.64 1.32-3.64 3.75v2.51H8v3H10.67V21z" />
    </svg>
  );
}

export function YoutubeIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.6 7.2c-.24-1.02-1.02-1.8-2.04-2.04C17.76 4.8 12 4.8 12 4.8s-5.76 0-7.56.36c-1.02.24-1.8 1.02-2.04 2.04C2 9 2 12 2 12s0 3 .4 4.8c.24 1.02 1.02 1.8 2.04 2.04 1.8.36 7.56.36 7.56.36s5.76 0 7.56-.36c1.02-.24 1.8-1.02 2.04-2.04.4-1.8.4-4.8.4-4.8s0-3-.4-4.8zM10 15.5v-7l6 3.5z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.17c-.24.68-1.4 1.33-1.93 1.4-.5.07-1.1.1-1.78-.11a16 16 0 0 1-1.62-.6c-2.85-1.23-4.7-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.94s.72-2.09.98-2.38c.24-.27.53-.33.7-.33h.51c.16 0 .38-.06.6.45.24.57.8 1.98.87 2.12.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.29.29-.12.57.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.7-.82.88-1.1.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.13.07.72-.17 1.4z" />
    </svg>
  );
}

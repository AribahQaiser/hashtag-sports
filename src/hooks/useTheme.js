import { useEffect, useState } from "react";

function readStored() {
  try {
    return localStorage.getItem("hashtag-sports-theme");
  } catch {
    return null;
  }
}

export default function useTheme() {
  const [theme, setTheme] = useState(() => readStored() || "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("hashtag-sports-theme", theme);
    } catch {
      /* ignore, private browsing or blocked storage */
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggle };
}

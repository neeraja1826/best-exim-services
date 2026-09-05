import { useEffect, useState } from "react";

/**
 * Returns the current vertical scroll position in pixels.
 * Updates on scroll (passive) and on mount.
 */
export function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState<number>(() =>
    typeof window === "undefined" ? 0 : window.scrollY,
  );

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollY;
}

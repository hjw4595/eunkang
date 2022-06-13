import { useState, useEffect } from "react";

export function useScroll() {
  const [scrollY, setScrollY] = useState<number>(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.pageYOffset);
    });
  }, []);

  return {
    scrollY,
  };
}

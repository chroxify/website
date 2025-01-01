"use client";

import { useEffect, useState } from "react";

export function BlurOverlay() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.min(scrollY / 150, 0.35);
  const maxBlur = Math.min(scrollY / 10, 3);

  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 h-20 pointer-events-none z-50"
        style={{
          background: `linear-gradient(to bottom, 
            rgba(255,255,255,${opacity}) 0%, 
            rgba(255,255,255,${opacity * 0.7}) 15%, 
            rgba(255,255,255,${opacity * 0.4}) 30%,
            rgba(255,255,255,${opacity * 0.2}) 50%,
            rgba(255,255,255,${opacity * 0.08}) 70%,
            rgba(255,255,255,${opacity * 0.02}) 85%,
            rgba(255,255,255,0) 100%
          )`,
          backdropFilter: `blur(${maxBlur}px)`,
          WebkitMaskImage: `linear-gradient(to bottom,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0.95) 20%,
            rgba(0,0,0,0.85) 40%,
            rgba(0,0,0,0.6) 60%,
            rgba(0,0,0,0.2) 80%,
            rgba(0,0,0,0) 100%
          )`,
          maskImage: `linear-gradient(to bottom,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0.95) 20%,
            rgba(0,0,0,0.85) 40%,
            rgba(0,0,0,0.6) 60%,
            rgba(0,0,0,0.2) 80%,
            rgba(0,0,0,0) 100%
          )`,
        }}
      />
      <div
        className="fixed top-0 left-0 right-0 h-24 pointer-events-none z-50 opacity-50"
        style={{
          background: `linear-gradient(to bottom,
            rgba(255,255,255,${opacity * 0.4}) 0%,
            rgba(255,255,255,0) 100%
          )`,
          filter: "blur(8px)",
        }}
      />
    </>
  );
}

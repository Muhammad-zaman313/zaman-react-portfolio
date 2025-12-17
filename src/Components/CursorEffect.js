import { useEffect } from "react";

export default function CursorEffect() {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
      // ===== Desktop Cursor =====
      const cursor = document.createElement("div");
      cursor.className = "glow-cursor";
      document.body.appendChild(cursor);

      const moveCursor = (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      };

      document.addEventListener("mousemove", moveCursor);

      const hoverTargets = "a, button, img, .hoverable";
      document.querySelectorAll(hoverTargets).forEach((el) => {
        el.addEventListener("mouseenter", () => cursor.classList.add("glow-hover"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("glow-hover"));
      });

      // Cleanup
      return () => {
        document.removeEventListener("mousemove", moveCursor);
        cursor.remove();
      };
    } else {
      // ===== Mobile Touch Effect =====
      const touchRipple = (e) => {
        const ripple = document.createElement("div");
        ripple.className = "touch-ripple";
        ripple.style.left = e.touches[0].clientX + "px";
        ripple.style.top = e.touches[0].clientY + "px";
        document.body.appendChild(ripple);

        // remove ripple after animation
        setTimeout(() => ripple.remove(), 600);
      };

      document.addEventListener("touchstart", touchRipple);

      return () => {
        document.removeEventListener("touchstart", touchRipple);
      };
    }
  }, []);

  return null;
}

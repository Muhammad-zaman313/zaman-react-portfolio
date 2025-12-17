import { useEffect } from "react";

export default function CursorEffect() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "glow-cursor";
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });

    const hoverTargets = "a, button, img, .hoverable";
    document.querySelectorAll(hoverTargets).forEach((el) => {
      el.addEventListener("mouseenter", () =>
        cursor.classList.add("glow-hover")
      );
      el.addEventListener("mouseleave", () =>
        cursor.classList.remove("glow-hover")
      );
    });
  }, []);

  return null;
}

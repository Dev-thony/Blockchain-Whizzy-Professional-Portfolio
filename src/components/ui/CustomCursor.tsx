import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, { stiffness: 450, damping: 30 });
  const y = useSpring(mouseY, { stiffness: 450, damping: 30 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");

    const update = () => {
      setEnabled(media.matches);

      if (media.matches) {
        document.body.classList.add("desktop-cursor");
      } else {
        document.body.classList.remove("desktop-cursor");
      }
    };

    update();
    media.addEventListener("change", update);

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
    };

    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    window.addEventListener("mousemove", move);

    const interactive = document.querySelectorAll("a, button, .cursor-hover");

    interactive.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      media.removeEventListener("change", update);
      window.removeEventListener("mousemove", move);

      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });

      document.body.classList.remove("desktop-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ x, y }}
      animate={{
        scale: hovering ? 1.8 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="pointer-events-none fixed left-0 top-0 z-9999"
    >
      {/* Outer Ring */}
      <div className="absolute inset-0 h-6 w-6 rounded-full border border-white/70" />

      {/* Inner Dot */}
      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
    </motion.div>
  );
}

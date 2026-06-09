import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics settings for high-end lagging tracking ring
  const springConfig = { damping: 40, stiffness: 350, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if the device has a mouse/pointer (typically desktop)
    const isMobile = window.matchMedia("(max-width: 1024px)").matches;
    if (isMobile) return;

    const handleFirstMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
      document.body.classList.add("custom-cursor-active");
      window.removeEventListener("mousemove", handleFirstMove);
    };

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const interactiveEl = e.target.closest("[data-cursor]");
      if (interactiveEl) {
        setCursorType(interactiveEl.getAttribute("data-cursor"));
      } else {
        setCursorType("");
      }
    };

    window.addEventListener("mousemove", handleFirstMove);
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleFirstMove);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-gold pointer-events-none z-[9999] flex items-center justify-center -translate-x-1/2 -translate-y-1/2"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          width: cursorType ? 80 : 32,
          height: cursorType ? 80 : 32,
          backgroundColor: cursorType ? "rgba(212, 175, 55, 0.15)" : "rgba(0,0,0,0)",
          borderColor: cursorType ? "var(--color-brand-gold)" : "var(--color-brand-gold)",
          borderWidth: cursorType ? "1.5px" : "1px",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 25 }}
      >
        {cursorType && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-bold tracking-widest text-brand-gold font-sans uppercase"
          >
            {cursorType}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-brand-gold rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: cursorType ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function EmberBackground() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Only run on client
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowSize.width === 0) return null;

  // Reduced amount of embers for performance
  const embers = Array.from({ length: 15 }).map((_, i) => {
    const size = Math.random() * 2 + 1;
    const startX = Math.random() * windowSize.width;
    const delay = Math.random() * 15;
    const duration = Math.random() * 10 + 15;
    
    return (
      <motion.div
        key={i}
        className="absolute rounded-full bg-gold shrink-0 pointer-events-none transform-gpu"
        style={{
          width: size,
          height: size,
          left: startX,
          bottom: -20,
          boxShadow: `0 0 8px 1px rgba(218, 175, 55, 0.6)`
        }}
        initial={{ y: 0, opacity: 0, x: 0 }}
        animate={{
          y: -windowSize.height - 100,
          opacity: [0, 1, 0.8, 0],
          x: (Math.random() * 100 - 50)
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          delay: delay
        }}
      />
    );
  });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#0A0A0A]">
      {/* Replaced expensive animated blurs with static CSS radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(107,13,26,0.1),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(218,175,55,0.05),transparent_40%)]" />
      
      {embers}
    </div>
  );
}

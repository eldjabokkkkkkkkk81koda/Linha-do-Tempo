import { useState, MouseEvent } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "motion/react";
import { getMilestoneIcon } from "./Icons";

interface TimelineCardProps {
  milestone: any;
  index: number;
}

export default function TimelineCard({ milestone, index }: TimelineCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isEven = index % 2 === 0;

  // Spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`relative flex w-full max-md:pl-[4.5rem] max-md:justify-end ${
        isEven ? "md:flex-row-reverse" : "md:flex-row"
      } md:items-center group perspective-1000`}
    >
      {/* Desktop spacer */}
      <div className="hidden md:block w-[45%] shrink-0"></div>

      {/* Node (Absolute positioned on the timeline) */}
      <motion.div
        initial={{ scale: 0, opacity: 0, rotate: -90 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ type: "spring", stiffness: 150, damping: 15, delay: 0.1 }}
        className={`absolute left-6 md:left-1/2 top-4 md:top-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center w-10 md:w-14 h-10 md:h-14 rounded-full bg-[#0A0A0A] border-[2px] transition-all duration-500 z-10 transform-gpu ${
          isExpanded ? "border-gold shadow-[0_0_20px_rgba(218,175,55,0.8),inset_0_0_15px_rgba(218,175,55,0.4)]" : "border-white/20 shadow-[0_0_10px_rgba(0,0,0,0.8)] group-hover:border-gold/60"
        }`}
      >
        {/* Glow behind icon */}
        <div className={`absolute inset-0 rounded-full bg-gold/20 blur-md transition-opacity duration-500 ${isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`} />
        <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
          {getMilestoneIcon(milestone.icon)}
        </div>
      </motion.div>

      {/* Card Content */}
      <motion.div
        layout
        onMouseMove={handleMouseMove}
        initial={{ opacity: 0, y: 50, rotateX: 5 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // smooth spring-like ease
        className={`interactive w-full md:w-[45%] bg-[#111111] p-6 sm:p-8 md:p-10 rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.6)] border border-white/5 relative overflow-hidden transform-gpu ${
          isEven
            ? "md:-ml-12"
            : "md:-mr-12"
        }`}
      >
        {/* Spotlight Effect overlay */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100 z-0"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                rgba(218, 175, 55, 0.1),
                transparent 80%
              )
            `,
          }}
        />

        {/* Gradient Line Accent */}
        <div className={`absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold to-transparent opacity-50 ${isEven ? 'right-0' : 'left-0'}`} />

        <motion.div layout className="flex flex-col relative z-10">
          <motion.div layout className="flex items-center gap-4 mb-2">
            <span className="font-montserrat font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#FFF0C2] text-xs md:text-sm tracking-[0.2em] uppercase">
              {milestone.date}
            </span>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent" />
          </motion.div>
          
          <motion.h3
            layout
            className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wide text-light group-hover:text-gold transition-colors duration-500 mt-2 shadow-black drop-shadow-md"
          >
            {milestone.title}
          </motion.h3>
          
          <motion.p
            layout
            className="text-light/60 mt-4 leading-relaxed font-montserrat text-sm sm:text-base font-medium"
          >
            {milestone.description}
          </motion.p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0, filter: "blur(10px)" }}
                animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
                exit={{ height: 0, opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pt-6 mt-6 border-t border-white/10 relative">
                  <div className="absolute left-0 top-0 w-16 h-[1px] bg-gold" />
                  <p className="text-light/90 italic leading-relaxed text-sm md:text-base font-light">
                    "{milestone.details}"
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            layout
            onClick={() => setIsExpanded(!isExpanded)}
            className="self-start mt-8 text-white/50 hover:text-white font-montserrat text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 flex items-center gap-3 group/btn relative"
          >
            <span className="relative z-10">
              {isExpanded ? "Ocultar" : "Expandir Visão"}
            </span>
            <motion.div 
              className="relative flex items-center justify-center w-6 h-6 rounded-full border border-white/20 group-hover/btn:border-gold group-hover/btn:bg-gold/10 transition-colors z-10"
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.4, ease: "backOut" }}
            >
               ↓
            </motion.div>
            {/* Magnetic highlight for button */}
            <div className="absolute inset-y-[-8px] inset-x-[-16px] bg-white/5 rounded-lg opacity-0 group-hover/btn:opacity-100 transition-opacity z-0 scale-95 group-hover/btn:scale-100" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

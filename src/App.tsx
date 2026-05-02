import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import TimelineCard from "./components/TimelineCard";
import PhoenixAscending from "./components/PhoenixAscending";
import { EmberBackground } from "./components/EmberBackground";
import { CustomCursor } from "./components/CustomCursor";
import { milestones } from "./data/milestones";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start bottom", "end center"], 
  });

  // Phoenix vertical tracking
  const phoenixY = useTransform(scrollYProgress, [0, 1], ["80vh", "30vh"]);
  const phoenixColor = useTransform(scrollYProgress, [0, 1], ["#6B0D1A", "#DAAF37"]);
  const phoenixOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-light font-sans selection:bg-wine selection:text-white overflow-hidden relative">
      <CustomCursor />
      <EmberBackground />

      <header className="relative w-full max-w-6xl mx-auto px-6 py-8 flex items-center justify-between z-20">
        <motion.a 
          href="https://osvingadores.netlify.app/"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="interactive text-gold/70 hover:text-gold transition-colors font-montserrat flex items-center gap-2 group text-xs sm:text-sm uppercase tracking-widest bg-black/40 px-4 py-2 rounded-full border border-white/5 backdrop-blur-md cursor-pointer no-underline"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          Retornar à Base
        </motion.a>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex bg-[#111111]/60 px-5 py-2 rounded-full border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(107,13,26,0.3)]"
        >
          <span className="font-bebas text-lg md:text-xl text-gold tracking-widest relative">
            Paz e Justiça
            <span className="absolute -inset-1 blur-md bg-gold/20 z-0"></span>
          </span>
        </motion.div>
      </header>

      <main className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-24 z-10">
        
        {/* Intro */}
        <div className="text-center mb-32 md:mb-48 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-wine/30 rounded-full blur-[80px] pointer-events-none"
          />
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative font-bebas text-7xl md:text-9xl xl:text-[10rem] tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-[#FFF0C2] via-gold to-[#8B6A1A] drop-shadow-[0_0_15px_rgba(218,175,55,0.3)] mb-6"
          >
            A Jornada
            <br/>da Fênix
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-montserrat text-light/70 max-w-2xl mx-auto tracking-widest uppercase text-xs md:text-sm leading-relaxed"
          >
            Renascendo dos desafios para espalhar luz, empatia e coragem em cada ação da nossa equipe.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative w-full pb-8 md:pb-16" ref={containerRef}>
          
          {/* Central Line with Glow */}
          <div className="absolute left-[34px] md:left-1/2 top-0 bottom-0 w-[1px] md:w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/30 to-transparent">
            <motion.div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[15vh] bg-gold rounded-full blur-[2px]"
              style={{
                y: useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"])
              }}
            />
          </div>
          
          {/* Floating Phoenix Companion */}
          <motion.div 
            className="fixed right-4 sm:right-8 md:right-16 z-50 pointer-events-none hidden sm:block" 
            style={{ 
              y: phoenixY, 
              color: phoenixColor,
              opacity: phoenixOpacity
            }}
          >
            <div className="relative transform-gpu">
              {/* Extra glow behind the floating phoenix */}
              <motion.div 
                 className="absolute inset-0 bg-gold/20 rounded-full blur-2xl pointer-events-none"
                 style={{ opacity: useTransform(scrollYProgress, [0, 1], [0, 0.4]) }}
              />
              <PhoenixAscending progress={scrollYProgress} />
            </div>
          </motion.div>

          {/* Cards mapping */}
          <div className="relative z-10 flex flex-col gap-24 md:gap-32">
            {milestones.map((milestone, index) => (
              <TimelineCard 
                key={milestone.id} 
                milestone={milestone} 
                index={index} 
              />
            ))}
          </div>

        </div>
      </main>

      <footer className="w-full text-center py-16 relative z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-wine/20 to-transparent opacity-50" />
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-bebas text-2xl md:text-4xl text-wine tracking-widest transition-colors relative"
        >
          Os Vingadores <span className="text-gold mx-4 drop-shadow-[0_0_8px_rgba(218,175,55,1)]">✦</span> Juntos somos mais fortes
        </motion.p>
      </footer>
    </div>
  );
}

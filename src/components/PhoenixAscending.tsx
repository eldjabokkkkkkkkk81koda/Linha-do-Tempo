import { motion, MotionValue, useTransform } from "motion/react";

interface PhoenixAscendingProps {
  progress: MotionValue<number>;
}

export default function PhoenixAscending({ progress }: PhoenixAscendingProps) {
  // Use scroll progress to animate wings and inner flame
  const wingRotationRight = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [0, 15, 0, 15, 0]);
  const wingRotationLeft = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [0, -15, 0, -15, 0]);
  
  // Transform colors from a dimmer hue to bright gold
  const glowOpacity = useTransform(progress, [0, 1], [0.3, 1]);
  const fillScale = useTransform(progress, [0, 1], [0.9, 1.1]);

  return (
    <div className="relative flex justify-center items-center">
      {/* Abstract Animated Phoenix using precise SVG paths */}
      <motion.svg
        viewBox="0 0 100 100"
        className="w-20 h-20 md:w-32 md:h-32 drop-shadow-[0_0_15px_rgba(218,175,55,0.7)]"
        style={{
          scale: fillScale,
        }}
      >
        <defs>
          <radialGradient id="phoenix-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DAAF37" stopOpacity="1" />
            <stop offset="100%" stopColor="#DAAF37" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Glow behind Phoenix */}
        <motion.circle 
          cx="50" cy="50" r="30" 
          fill="url(#phoenix-glow)" 
          style={{ opacity: glowOpacity }}
        />

        {/* Left Wing */}
        <motion.path
          d="M 45 60 C 20 50, 10 20, 5 30 C 15 45, 25 70, 48 70 Z"
          fill="currentColor"
          style={{ originX: "50px", originY: "60px", rotate: wingRotationLeft }}
          className="text-wine transition-colors duration-500"
        />

        {/* Right Wing */}
        <motion.path
          d="M 55 60 C 80 50, 90 20, 95 30 C 85 45, 75 70, 52 70 Z"
          fill="currentColor"
          style={{ originX: "50px", originY: "60px", rotate: wingRotationRight }}
          className="text-wine transition-colors duration-500"
        />

        {/* Body/Head */}
        <motion.path
          d="M 50 20 C 45 40, 40 60, 50 85 C 60 60, 55 40, 50 20 Z"
          fill="#DAAF37"
        />
        
        {/* Core spark (bright center) */}
        <motion.circle
          cx="50" cy="55" r="4"
          fill="#FFF"
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.svg>
    </div>
  );
}

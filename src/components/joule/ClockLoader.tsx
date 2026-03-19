import { motion } from 'motion/react';

export function ClockLoader() {
  return (
    <div className="relative w-[16px] h-[16px]">
      {/* Clock circle outline with dashed border */}
      <svg className="absolute inset-0" viewBox="0 0 16 16" fill="none">
        <circle
          cx="8"
          cy="8"
          r="6"
          stroke="#0070f2"
          strokeWidth="1.5"
          strokeDasharray="2 2"
          fill="none"
        />
      </svg>
      
      {/* Hour hand */}
      <motion.div
        className="absolute top-[8px] left-[8px] w-[1px] h-[4px] bg-[#0070f2] origin-top"
        style={{ transformOrigin: '0.5px 0px' }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Minute hand */}
      <motion.div
        className="absolute top-[8px] left-[8px] w-[1px] h-[5px] bg-[#0070f2] origin-top"
        style={{ transformOrigin: '0.5px 0px' }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Center dot */}
      <div className="absolute top-[7px] left-[7px] w-[2px] h-[2px] bg-[#0070f2] rounded-full" />
    </div>
  );
}

import { motion } from 'motion/react';

export function DecorativeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 30%, #ec4899 60%, #f59e0b 100%)'
        }}
      />
      
      {/* Animated Clouds */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-20 rounded-full opacity-30"
        style={{
          background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
          filter: 'blur(20px)'
        }}
        animate={{
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-40 h-24 rounded-full opacity-25"
        style={{
          background: 'linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)',
          filter: 'blur(25px)'
        }}
        animate={{
          x: [0, -15, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-32 left-1/4 w-36 h-28 rounded-full opacity-20"
        style={{
          background: 'linear-gradient(135deg, #34d399 0%, #60a5fa 100%)',
          filter: 'blur(30px)'
        }}
        animate={{
          x: [0, 25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Stars */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      
      {/* Sparkles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0L11 9L10 20L9 9L10 0Z" fill="white" opacity="0.8" />
            <path d="M0 10L9 11L20 10L9 9L0 10Z" fill="white" opacity="0.8" />
          </svg>
        </motion.div>
      ))}
      
      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-8 h-8 border-2 border-white/30 rotate-12"
        animate={{
          rotate: [12, 192, 12],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-6 h-6 rounded-full border-2 border-white/40"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
      
      {/* Triangles */}
      <motion.div
        className="absolute top-1/3 left-1/4"
        animate={{
          y: [0, 15, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L22 22H2L12 2Z" fill="white" opacity="0.15" />
        </svg>
      </motion.div>
    </div>
  );
}

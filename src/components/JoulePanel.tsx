import { motion } from 'motion/react';
import WelcomeScreen from '../imports/WelcomeScreen-2007-1240';

interface JoulePanelProps {
  onClose: () => void;
  scenarioPrompt?: string;
}

export function JoulePanel({ onClose, scenarioPrompt }: JoulePanelProps) {
  return (
    <>
      {/* Joule Panel Container */}
      <motion.div
        initial={{ 
          opacity: 0,
          x: 40,
          y: 10,
          scale: 0.92
        }}
        animate={{ 
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1
        }}
        exit={{ 
          opacity: 0,
          x: 40,
          y: 10,
          scale: 0.95
        }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8,
          opacity: { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
        }}
        className="fixed bottom-6 right-6 z-[70] max-h-[calc(100vh-80px)]"
        style={{
          filter: 'drop-shadow(0px 32px 64px rgba(91, 115, 139, 0.24))'
        }}
      >
        <WelcomeScreen onClose={onClose} scenarioPrompt={scenarioPrompt} />
      </motion.div>
    </>
  );
}
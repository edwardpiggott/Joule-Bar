import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import gusImage from 'figma:asset/0c6ef392efb330c81e2c50ebf6688b74ce1be2b0.png';
import jadaImage from 'figma:asset/b55ac1493ee90923b32a184474288098d5ab8fb4.png';
import tflLogo from 'figma:asset/ae5e5a46d70c25faf5b6d5800050a318a9799cdd.png';
import { useTranslation } from '../../contexts/TranslationContext';

interface ScenarioCompleteProps {
  persona: 'Employee' | 'Manager';
  message: string;
  onClose: () => void;
  scenarioId?: string;
}

export function ScenarioComplete({ persona, message, onClose, scenarioId }: ScenarioCompleteProps) {
  const [showContent, setShowContent] = useState(false);
  const { t } = useTranslation();
  
  useEffect(() => {
    // Trigger confetti
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    
    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        particleCount,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#7b2cbf', '#5a189a', '#3c096c', '#9d4edd', '#c77dff'],
        startVelocity: 30,
        gravity: 0.8,
        drift: randomInRange(-0.5, 0.5),
        ticks: 200
      });
    }, 250);

    // Show content after a brief delay
    setTimeout(() => setShowContent(true), 500);

    return () => clearInterval(interval);
  }, []);

  // Check if this is the special customer reference scenario
  const isCustomerReference = scenarioId === 'EMP_GUS_01_FIRST_DAY';
  
  const personaImage = isCustomerReference ? tflLogo : (persona === 'Employee' ? gusImage : jadaImage);
  const personaName = isCustomerReference ? 'Transport for London' : (persona === 'Employee' ? 'Gus' : 'Jada');

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-6">
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
            className="bg-white rounded-[24px] p-12 max-w-2xl w-full shadow-2xl relative"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke="#1d2d3e" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            {/* Content */}
            <div className="text-center space-y-8">
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h1 className="text-4xl font-['72:Bold',sans-serif] text-[#1d2d3e] mb-2">
                  {t('common.scenarioComplete')}
                </h1>
              </motion.div>

              {/* Persona Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: 'spring', bounce: 0.5 }}
                className="flex justify-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-xl ring-4 ring-purple-200">
                  <img src={personaImage} alt={personaName} className="w-full h-full object-cover" />
                </div>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-[16px] p-8 border border-purple-100"
              >
                <p className="text-xl font-['72:Regular',sans-serif] text-[#1d2d3e] leading-relaxed italic">
                  "{message}"
                </p>
                <p className="mt-4 text-sm font-['72:Bold',sans-serif] text-[#7b2cbf]">
                  - {personaName}
                </p>
              </motion.div>

              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <button
                  onClick={onClose}
                  className="bg-gradient-to-r from-[#7b2cbf] to-[#5a189a] hover:from-[#6a24af] hover:to-[#4a1880] text-white px-8 py-4 rounded-[12px] font-['72:Bold',sans-serif] text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {t('common.backToScenarios')}
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
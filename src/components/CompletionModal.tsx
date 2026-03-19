import { CheckCircle, Clock, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

interface CompletionModalProps {
  timeInSeconds: number;
  onTryWithJoule: () => void;
}

export function CompletionModal({ timeInSeconds, onTryWithJoule }: CompletionModalProps) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full mx-4"
      >
        {/* Success Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
          className="flex justify-center mb-6"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-center text-gray-900 mb-2"
        >
          Manual Task Completed!
        </motion.h2>

        {/* Time Display */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6"
        >
          <div className="flex items-center justify-center gap-3">
            <Clock className="w-6 h-6 text-blue-600" />
            <div className="text-center">
              <div className="text-sm text-blue-700 mb-1">Time Taken</div>
              <div className="text-blue-900 font-mono">
                {minutes > 0 ? `${minutes}:${seconds.toString().padStart(2, '0')} minutes` : `${seconds} seconds`}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-center text-gray-600 mb-6 text-sm"
        >
          You've successfully gathered all the information manually. Now see how much faster it is with SAP Joule!
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <Button
            onClick={onTryWithJoule}
            className="w-full bg-gradient-to-b from-[#5d36ff] to-[#a100c2] hover:from-[#4d26ef] hover:to-[#9100b2] text-white h-12"
          >
            <Zap className="w-5 h-5 mr-2" />
            Now Let's Try with Joule
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

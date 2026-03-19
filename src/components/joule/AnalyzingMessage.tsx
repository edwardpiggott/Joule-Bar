import { motion } from 'motion/react';
import { useTranslation } from '../../contexts/TranslationContext';

export function AnalyzingMessage({ showText = true }: { showText?: boolean }) {
  const { t } = useTranslation();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full flex justify-start px-[24px] mb-[12px]"
    >
      <div className="flex items-center gap-[12px]">
        {/* Purple gradient spinning circle - smaller and full circle */}
        <div className="relative w-[24px] h-[24px]">
          {/* Outer circle border */}
          <div className="absolute inset-0 rounded-full border-2 border-gray-200" />
          
          {/* Rotating gradient inside */}
          <motion.div
            className="absolute inset-[2px] rounded-full"
            style={{
              background: 'conic-gradient(from 0deg, #7b2cbf 0%, #a78bfa 25%, #7b2cbf 50%, #5a189a 75%, #7b2cbf 100%)'
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* White center to create ring effect */}
          <div className="absolute inset-[6px] rounded-full bg-white" />
        </div>
        
        {/* Text - only show if showText is true */}
        {showText && (
          <p className="font-['72:Regular',sans-serif] text-[14px] text-[#1d2d3e]">
            {t('common.analyzingRequest')}
          </p>
        )}
      </div>
    </motion.div>
  );
}
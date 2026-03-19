import React from 'react';
import { X } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

interface JouleComparisonModalProps {
  manualTime: number; // in seconds
  jouleTime: number; // in seconds
  onClose: () => void;
  onGoToStartPage: () => void;
}

export function JouleComparisonModal({ manualTime, jouleTime, onClose, onGoToStartPage }: JouleComparisonModalProps) {
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const timeSaved = manualTime - jouleTime;
  const percentageFaster = Math.round((timeSaved / manualTime) * 100);

  const { t } = useTranslation();

  return (
    <>
      {/* Blur Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-md z-[80]"
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[90] max-w-3xl w-full"
      >
        {/* Compact Card similar to StartPage */}
        <div className="bg-white rounded-xl shadow-[0px_0px_2px_0px_rgba(91,115,139,0.16),0px_32px_64px_0px_rgba(91,115,139,0.16)] border border-black/10 mx-4">
          {/* Header with Joule Gradient */}
          <div className="bg-gradient-to-b from-[#5d36ff] to-[#6431fa] rounded-t-xl px-8 py-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h2 className="font-['72:Light',sans-serif] text-white text-[28px] leading-[36px] tracking-[-0.5px]">
                Challenge Results
              </h2>
            </div>
            <p className="font-['72:Regular',sans-serif] text-white/90 text-[14px]">
              See how Joule transformed your workflow
            </p>
          </div>

          {/* Content */}
          <div className="px-8 py-6 space-y-5">
            {/* Time Comparison */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-b from-[#5d36ff] to-[#a100c2] rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-['72:Bold',sans-serif] text-[#1d2d3e] text-[14px] mb-3">Performance Comparison</h3>
                <div className="grid grid-cols-2 gap-3">
                  {/* Manual Time Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="border border-[#d9e0e6] rounded-lg p-4 bg-[#f5f6f7]"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 bg-[#556b82] rounded-full flex items-center justify-center">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-['72:Bold',sans-serif] text-[#1d2d3e] text-[13px]">Manual</span>
                    </div>
                    <div className="font-['72:Bold',sans-serif] text-[28px] text-[#1d2d3e]">
                      {formatTime(manualTime)}
                    </div>
                    <p className="font-['72:Regular',sans-serif] text-[#556b82] text-[11px]">
                      Time to complete
                    </p>
                  </motion.div>

                  {/* Joule Time Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="border-2 border-[#5d36ff] rounded-lg p-4 bg-gradient-to-b from-[#faf9ff] to-[#f5f3ff] relative"
                  >
                    <div className="absolute top-2 right-2">
                      <div className="bg-gradient-to-r from-[#5d36ff] to-[#a100c2] rounded-full px-2 py-0.5">
                        <span className="text-[10px] text-white font-['72:Bold',sans-serif]">AI</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 bg-gradient-to-b from-[#5d36ff] to-[#a100c2] rounded-full flex items-center justify-center">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-['72:Bold',sans-serif] text-[#1d2d3e] text-[13px]">Joule</span>
                    </div>
                    <div className="font-['72:Bold',sans-serif] text-[28px] bg-gradient-to-r from-[#5d36ff] to-[#a100c2] bg-clip-text text-transparent">
                      {formatTime(jouleTime)}
                    </div>
                    <p className="font-['72:Regular',sans-serif] text-[#556b82] text-[11px]">
                      AI-powered completion
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Savings Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg px-5 py-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="font-['72:Bold',sans-serif] text-[20px] text-emerald-700">
                    {percentageFaster}% Faster
                  </div>
                  <div className="font-['72:Regular',sans-serif] text-[12px] text-emerald-600">
                    You saved {formatTime(timeSaved)} with Joule
                  </div>
                </div>
              </div>
              <div className="text-[32px]">✨</div>
            </motion.div>

            {/* Insights Section */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-b from-[#5d36ff] to-[#a100c2] rounded-lg flex items-center justify-center">
                <span className="text-white text-[18px]">💡</span>
              </div>
              <div className="flex-1">
                <h3 className="font-['72:Bold',sans-serif] text-[#1d2d3e] text-[14px] mb-2">How Joule Helped</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-gradient-to-r from-[#5d36ff] to-[#a100c2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-[10px] font-['72:Bold',sans-serif]">1</span>
                    </div>
                    <span className="font-['72:Regular',sans-serif] text-[#556b82] text-[13px] leading-[18px]">
                      <strong className="text-[#1d2d3e]">Instant Data Retrieval:</strong> Accessed all compensation data across systems in seconds
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-gradient-to-r from-[#5d36ff] to-[#a100c2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-[10px] font-['72:Bold',sans-serif]">2</span>
                    </div>
                    <span className="font-['72:Regular',sans-serif] text-[#556b82] text-[13px] leading-[18px]">
                      <strong className="text-[#1d2d3e]">Automated Documentation:</strong> Filled your notebook with accurate data automatically
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-gradient-to-r from-[#5d36ff] to-[#a100c2] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-[10px] font-['72:Bold',sans-serif]">3</span>
                    </div>
                    <span className="font-['72:Regular',sans-serif] text-[#556b82] text-[13px] leading-[18px]">
                      <strong className="text-[#1d2d3e]">Intelligent Insights:</strong> Provided contextual analysis of compensation trends
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons centered */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-3 pt-2"
            >
              <button
                onClick={onGoToStartPage}
                className="border-2 border-[#5d36ff] hover:border-[#4d26ef] bg-white hover:bg-[#faf9ff] text-[#5d36ff] hover:text-[#4d26ef] rounded-lg px-8 py-3 font-['72:Bold',sans-serif] text-[16px] text-center transition-all duration-200 shadow-[0px_0px_2px_0px_rgba(93,54,255,0.16),0px_4px_8px_0px_rgba(93,54,255,0.24)] hover:shadow-[0px_0px_2px_0px_rgba(93,54,255,0.24),0px_8px_16px_0px_rgba(93,54,255,0.32)] transform hover:-translate-y-0.5"
              >
                Go to Start Page
              </button>
              <button
                onClick={onClose}
                className="bg-gradient-to-b from-[#5d36ff] to-[#a100c2] hover:from-[#4d26ef] hover:to-[#9100b2] text-white rounded-lg px-8 py-3 font-['72:Bold',sans-serif] text-[16px] text-center transition-all duration-200 shadow-[0px_0px_2px_0px_rgba(93,54,255,0.16),0px_4px_8px_0px_rgba(93,54,255,0.24)] hover:shadow-[0px_0px_2px_0px_rgba(93,54,255,0.24),0px_8px_16px_0px_rgba(93,54,255,0.32)] transform hover:-translate-y-0.5"
              >
                Challenge Again!
              </button>
            </motion.div>

            {/* Footer */}
            <p className="font-['72:Regular',sans-serif] text-[#89969f] text-[11px] text-center">
              {t('common.aiDisclaimer')}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
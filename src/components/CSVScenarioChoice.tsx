import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { DecorativeBackground } from './DecorativeBackground';
import { SAPSuccessFactorsLogo } from './SAPSuccessFactorsLogo';
import { useTranslation } from '../contexts/TranslationContext';
import svgPaths from '../imports/svg-0b73em4nnl';

interface CSVScenarioChoiceProps {
  scenarioTitle: string;
  scenarioDescription: string;
  choiceALabel: string;
  choiceBLabel: string;
  onChoiceA: () => void;
  onChoiceB: () => void;
  onBack: () => void;
  onNavigateToProfile: () => void;
}

export function CSVScenarioChoice({ 
  scenarioTitle, 
  scenarioDescription,
  choiceALabel, 
  choiceBLabel, 
  onChoiceA, 
  onChoiceB,
  onBack,
  onNavigateToProfile
}: CSVScenarioChoiceProps) {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen p-8 overflow-hidden">
      <DecorativeBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with Back Button and Logo */}
        <div className="flex items-center justify-between mb-8">
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-white hover:text-white/80 transition-colors font-['72:Bold',sans-serif] bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ArrowLeft className="w-5 h-5" />
            {t('common.backToScenarios')}
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SAPSuccessFactorsLogo className="h-[21px]" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex items-center justify-center min-h-[calc(100vh-140px)]">
          <div className="max-w-4xl w-full">
            {/* Scenario Info */}
            <div className="text-center mb-12">
              <motion.h2 
                className="text-5xl text-white font-['72:Bold',sans-serif] mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {scenarioTitle}
              </motion.h2>
              <motion.p 
                className="text-2xl text-white/90 font-['72:Regular',sans-serif] mb-8"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              >
                {scenarioDescription}
              </motion.p>
              
              <motion.div 
                className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <p className="text-xl text-white font-['72:Bold',sans-serif]">
                  {t('common.howToFindOut')}
                </p>
              </motion.div>
            </div>

            {/* Choice Buttons */}
            <div className="flex flex-col gap-6">
              {/* Option A - Manual/Non-Joule Path */}
              <motion.button
                onClick={onChoiceA}
                className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 text-left overflow-hidden"
                initial={{ x: -300, opacity: 0, rotate: -3 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.3,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-500/10 to-gray-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-1">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-400 to-slate-500 flex items-center justify-center text-white font-['72:Bold',sans-serif] text-lg shadow-lg">
                        A
                      </div>
                      <h3 className="text-2xl text-[#1d2d3e] font-['72:Bold',sans-serif]">
                        {choiceALabel}
                      </h3>
                    </div>
                    <p className="text-[#556b82] font-['72:Regular',sans-serif] ml-16">
                      {t('common.continueWithoutJoule')}
                    </p>
                  </div>
                  <svg 
                    className="w-8 h-8 text-[#556b82] group-hover:translate-x-2 transition-transform flex-shrink-0 ml-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>

              {/* Option B - Joule Path */}
              <motion.button
                onClick={onChoiceB}
                className="group relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 text-left overflow-hidden"
                initial={{ x: 300, opacity: 0, rotate: 3 }}
                animate={{ x: 0, opacity: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-1">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-['72:Bold',sans-serif] text-lg shadow-lg">
                        B
                      </div>
                      <h3 className="text-2xl text-white font-['72:Bold',sans-serif]">
                        {choiceBLabel}
                      </h3>
                    </div>
                    <p className="text-white/90 font-['72:Regular',sans-serif] ml-16">
                      {t('common.getInstantHelp')}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                    <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg animate-pulse">
                      <svg className="w-5 h-5" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                        <g>
                          <path d={svgPaths.p34106400} fill="white" />
                          <path clipRule="evenodd" d={svgPaths.p3ccea780} fill="white" fillRule="evenodd" />
                        </g>
                      </svg>
                    </div>
                    <svg 
                      className="w-8 h-8 text-white group-hover:translate-x-2 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
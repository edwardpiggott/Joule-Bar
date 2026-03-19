import { XCircle, ArrowLeft } from 'lucide-react';
import { DecorativeBackground } from './DecorativeBackground';
import { SAPSuccessFactorsLogo } from './SAPSuccessFactorsLogo';
import { useTranslation } from '../contexts/TranslationContext';

interface CSVSystemMessageProps {
  scenarioTitle: string;
  message: string;
  onContinue: () => void;
  onBackToChoice: () => void;
}

export function CSVSystemMessage({ scenarioTitle, message, onContinue, onBackToChoice }: CSVSystemMessageProps) {
  const { t } = useTranslation();
  
  return (
    <div className="relative min-h-screen p-8 overflow-hidden">
      <DecorativeBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="absolute top-0 right-0">
          <SAPSuccessFactorsLogo className="h-12" />
        </div>

        {/* Message Overlay */}
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-2xl w-full">
            {/* Message Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-12 shadow-2xl text-center">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center">
                  <XCircle className="w-14 h-14 text-orange-600" />
                </div>
              </div>

              {/* Scenario Title */}
              <h2 className="text-3xl text-[#1d2d3e] font-['72:Bold',sans-serif] mb-4">
                {scenarioTitle}
              </h2>

              {/* Message */}
              <p className="text-xl text-[#556b82] font-['72:Regular',sans-serif] leading-relaxed mb-8">
                {message}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={onBackToChoice}
                  className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-['72:Bold',sans-serif] text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {t('common.tryAgainWithJoule')}
                </button>
                <button
                  onClick={onContinue}
                  className="bg-white hover:bg-gray-50 text-[#556b82] border-2 border-gray-300 px-10 py-4 rounded-xl font-['72:Bold',sans-serif] text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {t('common.backToScenarios')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
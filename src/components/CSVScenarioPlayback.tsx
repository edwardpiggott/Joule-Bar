import { useState, useEffect, useRef } from 'react';
import { CSVInteractionEngine } from './joule/CSVInteractionEngine';
import { CSVScenarioChoice } from './CSVScenarioChoice';
import { CSVSystemMessage } from './CSVSystemMessage';
import { StaticBackground } from './StaticBackground';
import { ProfileNavigationContext } from './joule/ProfileNavigationContext';
import { PDFNavigationContext } from './joule/PDFNavigationContext';
import { PublicProfileView } from './joule/CSVResponseComponents';
import { X } from 'lucide-react';
import { getStep } from '../data/csv-scenarios';
import { useTranslation } from '../contexts/TranslationContext';
import { getTranslatedStepContent } from '../utils/scenarioTranslations';

interface CSVScenarioPlaybackProps {
  scenarioId: string;
  scenarioTitle: string;
  scenarioDescription: string;
  persona: 'Employee' | 'Manager';
  onComplete: () => void;
  onBack: () => void;
  onNavigateToProfile: () => void;
  onNavigateToPDF: (onComplete?: () => void) => void;
}

export function CSVScenarioPlayback({ scenarioId, scenarioTitle, scenarioDescription, persona, onComplete, onBack, onNavigateToProfile, onNavigateToPDF }: CSVScenarioPlaybackProps) {
  const [currentView, setCurrentView] = useState<'choice' | 'system-message' | 'homepage' | 'joule'>('choice');
  const [systemMessage, setSystemMessage] = useState('');
  const [jouleStartStep, setJouleStartStep] = useState(4); // Default step for Joule path
  const [showProfileOverlay, setShowProfileOverlay] = useState(false);
  const [jouleActive, setJouleActive] = useState(false);
  const { language, t } = useTranslation();

  // Get translated scenario title and description
  const translatedTitle = t(`scenario.${scenarioId}.title`) || scenarioTitle;
  const translatedDescription = t(`scenario.${scenarioId}.description`) || scenarioDescription;

  // Get the first step to extract choice labels, with translation
  const originalStep1 = getStep(scenarioId, 1);
  const step1 = originalStep1 ? getTranslatedStepContent(scenarioId, 1, language, originalStep1) : null;

  const handleChoiceA = () => {
    // Option A leads to SYSTEM_MESSAGE
    const originalStep2 = getStep(scenarioId, 2);
    const step2 = originalStep2 ? getTranslatedStepContent(scenarioId, 2, language, originalStep2) : null;
    if (step2 && step2.step_type === 'SYSTEM_MESSAGE') {
      setSystemMessage(step2.joule_response_text || '');
      setCurrentView('system-message');
    } else {
      // Fallback if no system message
      onComplete();
    }
  };

  const handleChoiceB = () => {
    // Option B shows homepage first, then user clicks Joule icon to continue
    // Find the step number for choice_b_next_step
    if (step1 && step1.choice_b_next_step) {
      setJouleStartStep(step1.choice_b_next_step as number);
      setCurrentView('homepage');
    }
  };

  const handleJouleIconClick = () => {
    // User clicked Joule icon on homepage, activate it and show Joule interaction
    setJouleActive(true);
    setCurrentView('joule');
  };

  const handleSystemMessageContinue = () => {
    // Return to scenario selection
    onComplete();
  };

  const handleSystemMessageBackToChoice = () => {
    // Return to the choice screen
    setCurrentView('choice');
  };

  const handleJouleComplete = () => {
    // Return to scenario selection
    onComplete();
  };

  const handleOpenProfile = () => {
    setShowProfileOverlay(true);
  };

  const handleCloseProfile = () => {
    setShowProfileOverlay(false);
  };

  if (!step1 || step1.step_type !== 'SCENARIO_CHOICE') {
    return (
      <div 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #7b2cbf 0%, #5a189a 50%, #3c096c 100%)'
        }}
      >
        <p className="text-white text-xl">Invalid scenario structure</p>
      </div>
    );
  }

  return (
    <>
      {currentView === 'choice' && (
        <CSVScenarioChoice
          scenarioTitle={translatedTitle}
          scenarioDescription={translatedDescription}
          choiceALabel={step1.choice_a_label || 'Option A'}
          choiceBLabel={step1.choice_b_label || 'Option B'}
          onChoiceA={handleChoiceA}
          onChoiceB={handleChoiceB}
          onBack={onBack}
          onNavigateToProfile={handleOpenProfile}
        />
      )}

      {currentView === 'system-message' && (
        <CSVSystemMessage
          scenarioTitle={translatedTitle}
          message={systemMessage}
          onContinue={handleSystemMessageContinue}
          onBackToChoice={handleSystemMessageBackToChoice}
        />
      )}

      {currentView === 'homepage' && (
        <StaticBackground persona={persona} onJouleClick={handleJouleIconClick} jouleActive={false} />
      )}

      {currentView === 'joule' && (
        <ProfileNavigationContext.Provider value={{ onNavigateToProfile: handleOpenProfile }}>
          <PDFNavigationContext.Provider value={{ onNavigateToPDF }}>
            <div className="relative min-h-screen">
              <StaticBackground persona={persona} jouleActive={true} />
              <div className="fixed inset-0 z-50 pointer-events-none">
                <div className="pointer-events-auto fixed bottom-6 right-6">
                  <CSVInteractionEngine 
                    scenarioId={scenarioId}
                    startStep={jouleStartStep}
                    onClose={handleJouleComplete}
                    onComplete={handleJouleComplete}
                  />
                </div>
              </div>
            </div>
          </PDFNavigationContext.Provider>
        </ProfileNavigationContext.Provider>
      )}

      {showProfileOverlay && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-[24px]">
          <div className="relative bg-[#f7f7f7] rounded-[12px] shadow-2xl max-w-[1200px] w-full max-h-[90vh] overflow-auto">
            {/* Close Button */}
            <button
              onClick={handleCloseProfile}
              className="absolute top-[16px] right-[16px] z-10 w-[40px] h-[40px] bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <X className="w-[20px] h-[20px] text-[#556b82]" />
            </button>
            
            {/* Profile Content */}
            <PublicProfileView />
          </div>
        </div>
      )}
    </>
  );
}
import { useState } from 'react';
import { CSVPersonaSelection } from './components/CSVPersonaSelection';
import { CSVScenarioSelection } from './components/CSVScenarioSelection';
import { CSVScenarioPlayback } from './components/CSVScenarioPlayback';
import { ProfilePage } from './components/ProfilePage';
import { PDFViewer } from './components/PDFViewer';
import { getScenariosByPersona, ScenarioMetadata } from './data/csv-scenarios';
import { TranslationProvider } from './contexts/TranslationContext';

type Screen = 'persona-selection' | 'scenario-selection' | 'scenario-playback' | 'profile-view' | 'pdf-view';

export default function CSVApp() {
  const [currentScreen, setCurrentScreen] = useState<'persona-selection' | 'scenario-selection' | 'scenario-playback' | 'profile-view' | 'pdf-view'>('persona-selection');
  const [selectedPersona, setSelectedPersona] = useState<'Employee' | 'Manager'>('Employee');
  const [selectedScenario, setSelectedScenario] = useState<ScenarioMetadata | null>(null);
  const [scenarios, setScenarios] = useState<ScenarioMetadata[]>([]);
  const [isJoulePanelOpen, setIsJoulePanelOpen] = useState(false);
  const [showPDFOverlay, setShowPDFOverlay] = useState(false);
  const [pdfCompletionHandler, setPdfCompletionHandler] = useState<(() => void) | null>(null);

  // Get scenarios for selected persona
  const fetchScenarios = (persona: 'Employee' | 'Manager') => {
    const fetchedScenarios = getScenariosByPersona(persona);
    setScenarios(fetchedScenarios);
  };

  const handleSelectPersona = (persona: 'Employee' | 'Manager') => {
    setSelectedPersona(persona);
    fetchScenarios(persona);
    setCurrentScreen('scenario-selection');
  };

  const handleSelectScenario = (scenarioId: string) => {
    const scenario = scenarios.find(s => s.scenario_id === scenarioId);
    if (scenario) {
      setSelectedScenario(scenario);
      setCurrentScreen('scenario-playback');
    }
  };

  const handleScenarioComplete = () => {
    setCurrentScreen('scenario-selection');
  };

  const handleBackFromScenario = () => {
    setCurrentScreen('scenario-selection');
  };

  const handleBackToPersonaSelection = () => {
    setCurrentScreen('persona-selection');
  };

  const handleNavigateToProfile = () => {
    setCurrentScreen('profile-view');
  };

  const handleBackFromProfile = () => {
    setCurrentScreen('scenario-playback');
  };

  const handleNavigateToPDF = (onPDFComplete?: () => void) => {
    if (onPDFComplete) {
      setPdfCompletionHandler(() => onPDFComplete);
    }
    setCurrentScreen('pdf-view');
  };

  const handleBackFromPDF = () => {
    if (pdfCompletionHandler) {
      pdfCompletionHandler();
      setPdfCompletionHandler(null);
    }
    setCurrentScreen('scenario-playback');
  };

  const handleToggleJoule = () => {
    setIsJoulePanelOpen(!isJoulePanelOpen);
  };

  // Render current screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'persona-selection':
        return <CSVPersonaSelection onSelectPersona={handleSelectPersona} />;
      
      case 'scenario-selection':
        return (
          <CSVScenarioSelection
            persona={selectedPersona}
            scenarios={scenarios}
            onSelectScenario={handleSelectScenario}
            onBack={handleBackToPersonaSelection}
          />
        );
      
      case 'scenario-playback':
        if (!selectedScenario) return null;
        return (
          <CSVScenarioPlayback
            scenarioId={selectedScenario.scenario_id}
            scenarioTitle={selectedScenario.scenario_title}
            scenarioDescription={selectedScenario.scenario_description}
            persona={selectedPersona}
            onComplete={handleScenarioComplete}
            onBack={handleBackFromScenario}
            onNavigateToProfile={handleNavigateToProfile}
            onNavigateToPDF={handleNavigateToPDF}
          />
        );

      case 'profile-view':
        return (
          <ProfilePage 
            onBack={handleBackFromProfile}
            onToggleJoule={handleToggleJoule}
          />
        );
      
      case 'pdf-view':
        return (
          <PDFViewer 
            onBack={handleBackFromPDF}
          />
        );
      
      default:
        return <CSVPersonaSelection onSelectPersona={handleSelectPersona} />;
    }
  };

  return (
    <TranslationProvider>
      <div className="size-full">
        {renderScreen()}
      </div>
    </TranslationProvider>
  );
}
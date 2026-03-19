import { useState, useEffect } from 'react';
import { JouleInteractionEngine } from './joule/JouleInteractionEngine';
import { StaticBackground } from './StaticBackground';

interface JouleScenarioProps {
  onComplete: () => void;
  scenarioId: string;
}

export function JouleScenario({ onComplete, scenarioId }: JouleScenarioProps) {
  const [showJoule, setShowJoule] = useState(false);

  useEffect(() => {
    // Show Joule panel after brief delay for smooth transition
    const timer = setTimeout(() => {
      setShowJoule(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Static Background */}
      <StaticBackground />
      
      {/* Joule Panel Overlay */}
      {showJoule && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="pointer-events-auto fixed bottom-6 right-6">
            <JouleInteractionEngine 
              scenarioId={scenarioId}
              onClose={onComplete}
              onComplete={onComplete}
            />
          </div>
        </div>
      )}

      {/* Optional: Skip button for testing */}
      <button
        onClick={onComplete}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 text-gray-500 hover:text-gray-700 text-sm underline bg-white px-4 py-2 rounded-full shadow-lg"
      >
        Skip to outcome
      </button>
    </div>
  );
}
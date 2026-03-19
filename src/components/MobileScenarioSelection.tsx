import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { ScenarioMetadata } from '../data/csv-scenarios';
import gusImage from 'figma:asset/0c6ef392efb330c81e2c50ebf6688b74ce1be2b0.png';
import jadaImage from 'figma:asset/b55ac1493ee90923b32a184474288098d5ab8fb4.png';

interface MobileScenarioSelectionProps {
  persona: 'Employee' | 'Manager';
  scenarios: ScenarioMetadata[];
  onSelectScenario: (scenarioId: string) => void;
  onBack: () => void;
}

export function MobileScenarioSelection({
  persona,
  scenarios,
  onSelectScenario,
  onBack,
}: MobileScenarioSelectionProps) {
  const personaImage = persona === 'Employee' ? gusImage : jadaImage;
  const personaName = persona === 'Employee' ? 'Gus' : 'Jada';
  const personaTitle = persona === 'Employee' ? 'Employee at TechWave Inc' : 'Manager at TechWave Inc';

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between px-4 py-3">
          <button
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors active:scale-95"
          >
            <ArrowLeft className="w-5 h-5 text-gray-700" />
          </button>
          <h1 className="text-lg font-['72:Bold',sans-serif] text-gray-900">Scenarios</h1>
          <div className="w-9" /> {/* Spacer for alignment */}
        </div>
      </div>

      {/* Persona Info Card */}
      <div className="px-4 pt-4 pb-2">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 border-gray-100">
              <img src={personaImage} alt={personaName} className="w-full h-full object-cover object-top" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl mb-0.5 font-['72:Bold',sans-serif] text-gray-900">
                {personaName}
              </h2>
              <p className="text-sm text-gray-600 font-['72',sans-serif]">
                {personaTitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scenarios List */}
      <div className="flex-1 px-4 pt-2 pb-24 overflow-y-auto">
        <div className="mb-3 px-1">
          <p className="text-sm text-gray-500 font-['72',sans-serif]">
            {scenarios.length} scenarios available
          </p>
        </div>

        <div className="space-y-3">
          {scenarios.map((scenario, index) => (
            <motion.button
              key={scenario.scenario_id}
              onClick={() => onSelectScenario(scenario.scenario_id)}
              className="w-full bg-white rounded-2xl p-4 shadow-sm border border-gray-200 text-left active:scale-[0.98] transition-transform"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[#7b2cbf] to-[#5a189a] flex items-center justify-center text-white font-['72:Bold',sans-serif] text-lg shadow-sm">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base mb-1 font-['72:Bold',sans-serif] text-gray-900 line-clamp-2">
                    {scenario.scenario_title}
                  </h3>
                  <p className="text-sm text-gray-600 font-['72',sans-serif] line-clamp-2">
                    {scenario.scenario_description}
                  </p>
                </div>
                <div className="flex-shrink-0 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 pb-6">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 text-blue-600">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </div>
            <span className="text-xs text-blue-600 font-['72:Bold',sans-serif]">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 relative">
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-6 h-6 text-gray-400">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <span className="text-xs text-gray-400 font-['72',sans-serif]">Inbox</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 text-gray-400">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <span className="text-xs text-gray-400 font-['72',sans-serif]">Search</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 text-gray-400">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <span className="text-xs text-gray-400 font-['72',sans-serif]">Profile</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <div className="w-6 h-6 text-gray-400">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <span className="text-xs text-gray-400 font-['72',sans-serif]">More</span>
          </button>
        </div>
      </div>
    </div>
  );
}

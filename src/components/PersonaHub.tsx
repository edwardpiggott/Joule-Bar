import { Button } from './ui/button';
import { ArrowLeft, Play, User, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Scenario } from '../types/scenarios';

interface PersonaHubProps {
  persona: 'employee' | 'manager';
  scenarios: Scenario[];
  onStartScenario: (scenarioId: string) => void;
  onBack: () => void;
}

export function PersonaHub({ persona, scenarios, onStartScenario, onBack }: PersonaHubProps) {
  const isEmployee = persona === 'employee';
  const gradientFrom = isEmployee ? '#0070f2' : '#5d36ff';
  const gradientTo = isEmployee ? '#5d36ff' : '#a100c2';
  const Icon = isEmployee ? User : Users;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f6f7] to-[#e5e7eb]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={onBack}
            className="gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Change Persona
          </Button>
          
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`
              }}
            >
              <Icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-gray-900">{isEmployee ? 'Employee' : 'Manager'} Scenarios</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-gray-900 mb-4">
            {isEmployee ? 'Employee' : 'Manager'} Experience
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            {isEmployee 
              ? 'Explore how Joule transforms everyday employee tasks' 
              : 'Discover how Joule empowers effective people management'}
          </p>
        </motion.div>

        {/* Scenario Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              {/* Card Header with gradient */}
              <div 
                className="h-3"
                style={{
                  background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`
                }}
              />
              
              <div className="p-6">
                {/* Scenario Number Badge */}
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700 mb-4">
                  {index + 1}
                </div>

                {/* Title */}
                <h3 className="text-gray-900 mb-3">
                  {scenario.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {scenario.description}
                </p>

                {/* Button */}
                <Button
                  onClick={() => onStartScenario(scenario.id)}
                  className="w-full gap-2"
                  style={{
                    background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`
                  }}
                >
                  <Play className="w-4 h-4" />
                  Start Scenario
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

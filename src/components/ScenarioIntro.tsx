import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ScenarioIntroProps {
  title: string;
  introText: string;
  persona: 'employee' | 'manager';
  onContinue: () => void;
}

export function ScenarioIntro({ title, introText, persona, onContinue }: ScenarioIntroProps) {
  const isEmployee = persona === 'employee';
  const gradientFrom = isEmployee ? '#0070f2' : '#5d36ff';
  const gradientTo = isEmployee ? '#5d36ff' : '#a100c2';

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f6f7] to-[#e5e7eb] flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Header with gradient */}
          <div 
            className="h-2"
            style={{
              background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`
            }}
          />
          
          <div className="p-8 lg:p-12">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm mb-6"
            >
              Scenario Setup
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-900 mb-6"
            >
              {title}
            </motion.h1>

            {/* Intro Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 rounded-2xl p-6 mb-8"
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                {introText}
              </p>
            </motion.div>

            {/* Continue Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                onClick={onContinue}
                size="lg"
                className="w-full gap-2 text-white"
                style={{
                  background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`
                }}
              >
                Continue to Decision
                <ArrowRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

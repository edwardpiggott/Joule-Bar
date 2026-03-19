import { Button } from './ui/button';
import { CheckCircle, XCircle, Sparkles, Home, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';

interface OutcomeScreenProps {
  title: string;
  text: string;
  isJoulePath: boolean;
  persona: 'employee' | 'manager';
  onBackToHub: () => void;
  onTryAnother: () => void;
}

export function OutcomeScreen({ 
  title, 
  text, 
  isJoulePath,
  persona,
  onBackToHub,
  onTryAnother 
}: OutcomeScreenProps) {
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
          {/* Success/Neutral Header */}
          {isJoulePath ? (
            <div 
              className="h-2"
              style={{
                background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`
              }}
            />
          ) : (
            <div className="h-2 bg-gray-400" />
          )}
          
          <div className="p-8 lg:p-12">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex justify-center mb-6"
            >
              {isJoulePath ? (
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`
                  }}
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
              ) : (
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                  <XCircle className="w-10 h-10 text-gray-600" />
                </div>
              )}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-900 text-center mb-6"
            >
              {title}
            </motion.h1>

            {/* Outcome Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`rounded-2xl p-6 mb-6 ${
                isJoulePath ? 'bg-gradient-to-br from-blue-50 to-purple-50' : 'bg-gray-50'
              }`}
            >
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                {text}
              </p>
            </motion.div>

            {/* Powered by Joule Badge */}
            {isJoulePath && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center mb-8"
              >
                <div 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white shadow-lg"
                  style={{
                    background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`
                  }}
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Powered by Joule</span>
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid md:grid-cols-2 gap-4"
            >
              <Button
                onClick={onBackToHub}
                size="lg"
                variant="outline"
                className="gap-2 border-2"
              >
                <Home className="w-5 h-5" />
                Back to Hub
              </Button>
              
              <Button
                onClick={onTryAnother}
                size="lg"
                className="gap-2 text-white"
                style={{
                  background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`
                }}
              >
                <RotateCcw className="w-5 h-5" />
                Try Another Scenario
              </Button>
            </motion.div>

            {/* Compare Note */}
            {!isJoulePath && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-6 text-center"
              >
                <p className="text-gray-500 text-sm">
                  Want to see the difference? Try this scenario again with Joule!
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

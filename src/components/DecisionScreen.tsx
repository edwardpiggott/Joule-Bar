import { Button } from './ui/button';
import { AlertCircle, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface DecisionScreenProps {
  question: string;
  optionALabel: string;
  optionBLabel: string;
  persona: 'employee' | 'manager';
  onSelectOption: (option: 'A' | 'B') => void;
}

export function DecisionScreen({ 
  question, 
  optionALabel, 
  optionBLabel,
  persona,
  onSelectOption 
}: DecisionScreenProps) {
  const isEmployee = persona === 'employee';
  const gradientFrom = isEmployee ? '#0070f2' : '#5d36ff';
  const gradientTo = isEmployee ? '#5d36ff' : '#a100c2';

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f6f7] to-[#e5e7eb] flex items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full"
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
            {/* Question */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center mb-12"
            >
              <h1 className="text-gray-900 mb-4">
                {question}
              </h1>
              <p className="text-gray-600 text-lg">
                Choose your approach to complete this task
              </p>
            </motion.div>

            {/* Options Grid */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Option A - Manual Path */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 border-2 border-gray-200 hover:border-gray-400 transition-all cursor-pointer h-full flex flex-col"
                  onClick={() => onSelectOption('A')}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
                    <AlertCircle className="w-8 h-8 text-gray-600" />
                  </div>

                  {/* Label */}
                  <div className="flex-1 mb-6">
                    <h3 className="text-gray-900 mb-3">Manual Process</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {optionALabel}
                    </p>
                  </div>

                  {/* Button */}
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-2 border-gray-300 hover:bg-gray-100"
                  >
                    Choose Manual Path
                  </Button>
                </div>
              </motion.div>

              {/* Option B - Joule Path */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                {/* "Recommended" Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div 
                    className="px-4 py-1 rounded-full text-white text-sm shadow-lg"
                    style={{
                      background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`
                    }}
                  >
                    ✨ Recommended
                  </div>
                </div>

                <div 
                  className="rounded-2xl p-6 lg:p-8 border-2 transition-all cursor-pointer h-full flex flex-col relative overflow-hidden"
                  style={{
                    borderColor: gradientTo,
                    background: `linear-gradient(135deg, rgba(0, 112, 242, 0.05), rgba(161, 0, 194, 0.05))`
                  }}
                  onClick={() => onSelectOption('B')}
                >
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`
                    }}
                  >
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>

                  {/* Label */}
                  <div className="flex-1 mb-6">
                    <h3 className="text-gray-900 mb-3">Use Joule</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {optionBLabel}
                    </p>
                  </div>

                  {/* Button */}
                  <Button
                    size="lg"
                    className="w-full text-white shadow-lg"
                    style={{
                      background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`
                    }}
                  >
                    Choose Joule
                  </Button>

                  {/* Decorative shimmer effect */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl -z-10" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

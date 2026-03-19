import { motion } from 'motion/react';
import { SAPSuccessFactorsLogo } from './SAPSuccessFactorsLogo';
import gusImage from 'figma:asset/0c6ef392efb330c81e2c50ebf6688b74ce1be2b0.png';
import jadaImage from 'figma:asset/b55ac1493ee90923b32a184474288098d5ab8fb4.png';

interface MobilePersonaSelectionProps {
  onSelectPersona: (persona: 'Employee' | 'Manager') => void;
}

export function MobilePersonaSelection({ onSelectPersona }: MobilePersonaSelectionProps) {
  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-[#f5f5f5] to-[#e8e8e8]">
      {/* Header with SAP Logo */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <SAPSuccessFactorsLogo className="h-6" />
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="px-6 pt-8 pb-6">
        <h1 className="text-3xl mb-2 font-['72:Bold',sans-serif] text-gray-900">
          Good afternoon!
        </h1>
        <p className="text-gray-600 font-['72',sans-serif]">
          Choose your persona to begin
        </p>
      </div>

      {/* Quick Actions Icons */}
      <div className="px-6 pb-6">
        <div className="flex gap-4 overflow-x-auto pb-2">
          {[
            { icon: '📋', label: 'Request', color: 'bg-cyan-500' },
            { icon: '💬', label: 'Give Feedback', color: 'bg-blue-500' },
            { icon: '🎨', label: 'Create Activity', color: 'bg-pink-500' },
            { icon: '👁️', label: 'View Company Documents', color: 'bg-fuchsia-500' },
            { icon: '🔔', label: 'Reminders', color: 'bg-purple-500' },
          ].map((action, index) => (
            <div key={index} className="flex flex-col items-center min-w-[80px]">
              <div className={`w-14 h-14 ${action.color} rounded-xl flex items-center justify-center text-2xl mb-2 shadow-sm`}>
                {action.icon}
              </div>
              <span className="text-xs text-center text-gray-700 font-['72',sans-serif] leading-tight">
                {action.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Persona Selection Cards */}
      <div className="flex-1 px-6 pb-24 overflow-y-auto">
        <h2 className="text-lg mb-4 font-['72:Bold',sans-serif] text-gray-900">
          Choose Your Experience
        </h2>

        <div className="space-y-4">
          {/* Gus Card */}
          <motion.button
            onClick={() => onSelectPersona('Employee')}
            className="w-full bg-white rounded-2xl p-5 shadow-sm border border-gray-200 active:scale-[0.98] transition-transform"
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 border-gray-100">
                <img src={gusImage} alt="Gus" className="w-full h-full object-cover object-top" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-xl mb-1 font-['72:Bold',sans-serif] text-gray-900">
                  Meet Gus
                </h3>
                <p className="text-sm text-gray-600 mb-2 font-['72',sans-serif]">
                  A new employee at TechWave Inc
                </p>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-xs font-['72:Bold',sans-serif]">
                  <span>4 Employee Scenarios</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.button>

          {/* Jada Card */}
          <motion.button
            onClick={() => onSelectPersona('Manager')}
            className="w-full bg-white rounded-2xl p-5 shadow-sm border border-gray-200 active:scale-[0.98] transition-transform"
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 border-gray-100">
                <img src={jadaImage} alt="Jada" className="w-full h-full object-cover object-top" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-xl mb-1 font-['72:Bold',sans-serif] text-gray-900">
                  Meet Jada
                </h3>
                <p className="text-sm text-gray-600 mb-2 font-['72',sans-serif]">
                  A Manager at TechWave, Inc
                </p>
                <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-3 py-1.5 rounded-full text-xs font-['72:Bold',sans-serif]">
                  <span>4 Manager Scenarios</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.button>
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

import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0070f2] via-[#5d36ff] to-[#a100c2] flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center">
        {/* Animated Joule Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl animate-[pulse_2s_ease-in-out_infinite]">
              <svg className="w-14 h-14" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <defs>
                  <linearGradient id="jouleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0070f2" />
                    <stop offset="50%" stopColor="#5d36ff" />
                    <stop offset="100%" stopColor="#a100c2" />
                  </linearGradient>
                </defs>
                <path 
                  d="M9 0L18 9L9 18L0 9L9 0Z" 
                  fill="url(#jouleGrad)" 
                />
              </svg>
            </div>
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-8 h-8 text-yellow-300 animate-[spin_3s_ease-in-out_infinite]" />
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-['72:Bold',sans-serif] text-white text-[90px] leading-[1] mb-6 animate-[fadeIn_0.8s_ease-out]">
          Experience the Future of Work
        </h1>
        
        {/* Subheadline */}
        <p className="font-['72:Regular',sans-serif] text-white/90 text-[24px] mb-4 animate-[fadeIn_1s_ease-out] max-w-2xl mx-auto">
          Discover how Joule transforms everyday tasks into instant actions
        </p>
        
        <p className="font-['72:Regular',sans-serif] text-white/80 text-[18px] mb-12 animate-[fadeIn_1.2s_ease-out] max-w-xl mx-auto">
          Explore interactive scenarios and see the power of AI-assisted workflows in SuccessFactors
        </p>

        {/* CTA Button */}
        <Button
          onClick={onStart}
          size="lg"
          className="font-['72:Bold',sans-serif] bg-white text-[#0070f2] hover:bg-white/90 px-12 py-6 text-[20px] shadow-2xl animate-[fadeIn_1.4s_ease-out] hover:scale-105 transition-transform"
        >
          Begin Experience
        </Button>

        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}
      </style>
    </div>
  );
}

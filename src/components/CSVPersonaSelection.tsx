import { Users, Briefcase, Sparkles, Smartphone } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';
import { DecorativeBackground } from './DecorativeBackground';
import { SAPSuccessFactorsLogo } from './SAPSuccessFactorsLogo';
import { QRCodeModal } from './QRCodeModal';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from '../contexts/TranslationContext';
import SparklingIconAnimated from '../imports/SparklingIconAnimated';
import gusImage from 'figma:asset/0c6ef392efb330c81e2c50ebf6688b74ce1be2b0.png';
import jadaImage from 'figma:asset/b55ac1493ee90923b32a184474288098d5ab8fb4.png';

interface CSVPersonaSelectionProps {
  onSelectPersona: (persona: 'Employee' | 'Manager') => void;
}

export function CSVPersonaSelection({ onSelectPersona }: CSVPersonaSelectionProps) {
  const [selectedPersona, setSelectedPersona] = useState<'Employee' | 'Manager' | null>(null);
  const [showQRModal, setShowQRModal] = useState(false);
  const { t } = useTranslation();
  
  // Mobile app URL
  const mobileAppUrl = 'https://heap-code-75926741.figma.site/';
  
  const handlePersonaClick = (persona: 'Employee' | 'Manager') => {
    setSelectedPersona(persona);
    // Wait for animation to complete before navigating
    setTimeout(() => {
      onSelectPersona(persona);
    }, 500);
  };

  const handleMobileClick = () => {
    setShowQRModal(true);
  };
  
  return (
    <div className="relative min-h-screen flex items-center justify-center p-8 overflow-hidden">
      <DecorativeBackground />
      
      {/* Language Selector - Top Right */}
      <div className="absolute top-8 right-8 z-20">
        <LanguageSelector />
      </div>
      
      <div className="relative z-10 max-w-6xl w-full">
        {/* Title */}
        <div className="text-center mb-8">
          <motion.h1 
            layoutId="joule-experience-title"
            className="text-[52px] leading-[1] font-['72:Light',sans-serif] mb-6 relative inline-block" 
            style={{animation: selectedPersona ? 'none' : 'floatAndExpand 24s ease-in-out infinite'}}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              mass: 0.8
            }}
          >
            {!selectedPersona && (
              <>
                {/* Sparkling Icon - Left */}
                <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[calc(100%+1rem)] w-8 h-8" style={{animation: 'floatAndExpand 24s ease-in-out infinite'}}>
                  <SparklingIconAnimated />
                </span>
                {/* Sparkling Icon - Right */}
                <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[calc(100%+1rem)] w-8 h-8" style={{animation: 'floatAndExpand 24s ease-in-out infinite'}}>
                  <SparklingIconAnimated />
                </span>
                {/* Outer glow layers */}
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-[#7b2cbf] via-[#e0aaff] to-[#7b2cbf] blur-3xl opacity-60 scale-110 animate-pulse">
                  JOULE EXPERIENCE
                </span>
                <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-[#9d4edd] via-white to-[#9d4edd] blur-xl opacity-80" style={{backgroundSize: '200% 200%', animation: 'gradientShift 24s ease infinite'}}>
                  JOULE EXPERIENCE
                </span>
                {/* Multiple accent lines */}
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-64 h-2 bg-gradient-to-r from-transparent via-[#c77dff] to-transparent rounded-full blur-md shadow-[0_0_20px_rgba(199,125,255,0.8)] animate-pulse"></span>
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#e0aaff] to-transparent rounded-full blur-sm animate-pulse"></span>
                {/* Side sparkles */}
                <span className="absolute top-1/2 -left-12 w-3 h-3 bg-white rounded-full blur-sm animate-ping"></span>
                <span className="absolute top-1/4 -right-16 w-2 h-2 bg-[#e0aaff] rounded-full blur-sm animate-pulse"></span>
                <span className="absolute bottom-1/4 -left-16 w-2 h-2 bg-[#c77dff] rounded-full blur-sm animate-pulse delay-75"></span>
              </>
            )}
            {/* Main text */}
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#e0aaff] via-white to-[#e0aaff]" style={{backgroundSize: '200% 200%', animation: selectedPersona ? 'none' : 'gradientShift 24s ease infinite, glowPulse 24s ease-in-out infinite'}}>
              JOULE EXPERIENCE
            </span>
          </motion.h1>
        </div>

        <div className="text-center mb-12">
          <motion.h2
            className="text-5xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
            style={{ fontFamily: "'72:Bold', sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              damping: 20,
              stiffness: 100,
              mass: 0.8
            }}
          >
            {t('persona.choose')}
          </motion.h2>
        </div>

        {/* Persona Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Gus Card */}
          <motion.button
            onClick={() => handlePersonaClick('Employee')}
            className="group relative rounded-3xl p-8 shadow-2xl hover:shadow-[0_20px_60px_rgba(123,44,191,0.4)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] text-left overflow-hidden"
            animate={{
              opacity: selectedPersona && selectedPersona !== 'Employee' ? 0 : 1,
              scale: selectedPersona && selectedPersona !== 'Employee' ? 0.8 : 1,
            }}
            transition={{ duration: 0.6 }}
          >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#a855f7] opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {/* Glow Border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-300" />
            
            {/* Sparkle Elements */}
            <div className="absolute top-6 right-6 w-2 h-2 bg-white rounded-full animate-pulse opacity-60" />
            <div className="absolute top-12 right-12 w-1.5 h-1.5 bg-[#e0aaff] rounded-full animate-pulse opacity-80" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-20 left-8 w-2 h-2 bg-[#c77dff] rounded-full animate-pulse opacity-70" style={{ animationDelay: '1s' }} />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <motion.div 
                  className="w-20 h-20 rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl ring-4 ring-white/30 group-hover:ring-white/50"
                  layoutId="gus-image"
                >
                  <img src={gusImage} alt="Gus" className="w-full h-full object-cover object-top" />
                </motion.div>
                <div className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-5 py-2.5 rounded-full font-['72:Bold',sans-serif] shadow-lg group-hover:bg-white/30 transition-all duration-300">
                  4 {t('persona.scenarios')}
                </div>
              </div>
              
              <h3 className="text-4xl mb-3 text-white font-['72:Bold',sans-serif] drop-shadow-lg">
                {t('persona.gus.name')}
              </h3>
              
              <p className="text-lg text-white/90 mb-8 font-['72:Regular',sans-serif] leading-relaxed">
                {t('persona.gus.description')}
              </p>
              
              <div className="flex items-center text-white font-['72:Bold',sans-serif] group-hover:gap-4 gap-3 transition-all bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/20 group-hover:bg-white/20 group-hover:border-white/40">
                <span>{t('persona.gus.button')}</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.button>

          {/* Jada Card */}
          <motion.button
            onClick={() => handlePersonaClick('Manager')}
            className="group relative rounded-3xl p-8 shadow-2xl hover:shadow-[0_20px_60px_rgba(123,44,191,0.4)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] text-left overflow-hidden"
            animate={{
              opacity: selectedPersona && selectedPersona !== 'Manager' ? 0 : 1,
              scale: selectedPersona && selectedPersona !== 'Manager' ? 0.8 : 1,
            }}
            transition={{ duration: 0.6 }}
          >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7] via-[#c026d3] to-[#d946ef] opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {/* Glow Border */}
            <div className="absolute inset-0 rounded-3xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-300" />
            
            {/* Sparkle Elements */}
            <div className="absolute top-6 right-6 w-2 h-2 bg-white rounded-full animate-pulse opacity-60" />
            <div className="absolute top-12 right-12 w-1.5 h-1.5 bg-[#e0aaff] rounded-full animate-pulse opacity-80" style={{ animationDelay: '0.5s' }} />
            <div className="absolute bottom-20 left-8 w-2 h-2 bg-[#fae8ff] rounded-full animate-pulse opacity-70" style={{ animationDelay: '1s' }} />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <motion.div 
                  className="w-20 h-20 rounded-2xl overflow-hidden transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-xl ring-4 ring-white/30 group-hover:ring-white/50"
                  layoutId="jada-image"
                >
                  <img src={jadaImage} alt="Jada" className="w-full h-full object-cover object-top" />
                </motion.div>
                <div className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-5 py-2.5 rounded-full font-['72:Bold',sans-serif] shadow-lg group-hover:bg-white/30 transition-all duration-300">
                  4 {t('persona.scenarios')}
                </div>
              </div>
              
              <h3 className="text-4xl mb-3 text-white font-['72:Bold',sans-serif] drop-shadow-lg">
                {t('persona.jada.name')}
              </h3>
              
              <p className="text-lg text-white/90 mb-8 font-['72:Regular',sans-serif] leading-relaxed">
                {t('persona.jada.description')}
              </p>
              
              <div className="flex items-center text-white font-['72:Bold',sans-serif] group-hover:gap-4 gap-3 transition-all bg-white/10 backdrop-blur-sm px-5 py-3 rounded-xl border border-white/20 group-hover:bg-white/20 group-hover:border-white/40">
                <span>{t('persona.jada.button')}</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.button>
        </div>

        {/* Mobile App Button */}
        <motion.div 
          className="text-center mt-10"
          animate={{ opacity: selectedPersona ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={handleMobileClick}
            disabled={!mobileAppUrl}
            className={`group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl shadow-xl transition-all duration-500 ${
              mobileAppUrl 
                ? 'bg-gradient-to-r from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 border-2 border-white/30 hover:border-white/50 hover:-translate-y-1 hover:shadow-2xl cursor-pointer' 
                : 'bg-white/10 border-2 border-white/20 cursor-not-allowed opacity-50'
            }`}
          >
            <div className="relative">
              <Smartphone className="w-6 h-6 text-white" />
              {mobileAppUrl && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#c77dff] rounded-full animate-pulse" />
              )}
            </div>
            <span className="text-white font-['72:Bold',sans-serif] text-lg">
              {t('persona.mobile')}
            </span>
            {mobileAppUrl && (
              <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            )}
          </button>
        </motion.div>

        {/* Footer Text */}
        <div className="text-center mt-12">
          <motion.div 
            className="flex justify-center mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SAPSuccessFactorsLogo className="h-8" />
          </motion.div>
          <motion.p 
            className="text-white/70 text-sm font-['72:Regular',sans-serif]"
            animate={{ opacity: selectedPersona ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            {t('persona.footer')}
          </motion.p>
        </div>
      </div>

      {/* QR Code Modal */}
      <QRCodeModal 
        isOpen={showQRModal}
        onClose={() => setShowQRModal(false)}
        url={mobileAppUrl}
      />
    </div>
  );
}
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { ScenarioMetadata } from '../data/csv-scenarios';
import { DecorativeBackground } from './DecorativeBackground';
import { SAPSuccessFactorsLogo } from './SAPSuccessFactorsLogo';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from '../contexts/TranslationContext';
import gusImage from 'figma:asset/0c6ef392efb330c81e2c50ebf6688b74ce1be2b0.png';
import jadaImage from 'figma:asset/b55ac1493ee90923b32a184474288098d5ab8fb4.png';

// Gus imports
import svgPathsGus from '../imports/svg-ovnhrz1262';
import imgImage15 from 'figma:asset/3315b8c76ae656e692d03738a81f84f5ec0e66cb.png';
import imgImage16 from 'figma:asset/4ec21c95dd292db55e1a75f106e826f658cfed43.png';
import imgImage17 from 'figma:asset/06d4f5439b5aa3c1552a01b8237479eaec492761.png';
import imgImage18 from 'figma:asset/c0779e1bf1533755ddf775e6801a9bcb563cc617.png';

// Jada imports
import svgPathsJada from '../imports/svg-ct8iritx5k';
import imgImage19 from 'figma:asset/fd69f2033d24d516a7627c5eca51bb8d1f8a4053.png';
import imgJadaCover11 from 'figma:asset/32407ce9dbc6e7fc4169c12afa6cdb45a76a0f35.png';
import imgJadaCover21 from 'figma:asset/2936f4bf1ac1118ce74840349bd21820cf91bfc3.png';

interface CSVScenarioSelectionProps {
  persona: 'Employee' | 'Manager';
  scenarios: ScenarioMetadata[];
  onSelectScenario: (scenarioId: string) => void;
  onBack: () => void;
}

// Photo mapping for Gus scenarios (Employee)
const gusScenarioPhotos: Record<string, string> = {
  'EMP_GUS_01_FIRST_DAY': imgImage15,
  'EMP_GUS_02_TRAVEL': imgImage16,
  'EMP_GUS_03_PAYROLL': imgImage17,
  'EMP_GUS_04_PRESENTATION': imgImage18,
};

// Photo mapping for Jada scenarios (Manager)
const jadaScenarioPhotos: Record<string, string> = {
  'MGR_JADA_01_ONBOARDING': imgJadaCover11,
  'MGR_JADA_02_COMP': imgImage19,
  'MGR_JADA_03_RECRUIT': imgJadaCover21,
  'MGR_JADA_04_PERFORMANCE': imgJadaCover11,
};

// Sparkle icon component configurations for Gus (Employee)
const gusSparkleConfigs = [
  // Card 1 - First Day
  [
    { left: 'calc(50% + 92px)', top: '151px', size: { w: 80, h: 74 }, paths: ['p22912180', 'p308a0800', 'p1ee3e400', 'p1ef20500'] },
    { left: 'calc(50% - 113.5px)', top: '0', size: { w: 113, h: 113 }, paths: ['p884b380', 'p2dd36a00', 'p378e6600', 'p2020c700'] },
    { left: 'calc(50% - 107.5px)', top: '184px', size: { w: 75, h: 75 }, paths: ['p8253200', 'p12b67c80', 'p45b870', 'p2c0bba80'] },
  ],
  // Card 2 - Travel
  [
    { left: 'calc(50% + 75px)', top: '134px', size: { w: 80, h: 74 }, paths: ['p22912180', 'p308a0800', 'p1ee3e400', 'p1ef20500'] },
    { left: 'calc(50% - 64px)', top: '5px', size: { w: 80, h: 74 }, paths: ['p22912180', 'p308a0800', 'p1ee3e400', 'p1ef20500'] },
  ],
  // Card 3 - Payroll
  [
    { left: 'calc(50% + 96px)', top: '0', size: { w: 80, h: 74 }, paths: ['p22912180', 'p308a0800', 'p1ee3e400', 'p1ef20500'] },
    { left: 'calc(50% - 106px)', top: '178px', size: { w: 80, h: 74 }, paths: ['p22912180', 'p308a0800', 'p1ee3e400', 'p1ef20500'] },
  ],
  // Card 4 - Presentation
  [
    { left: 'calc(50% + 82.5px)', top: '-10px', size: { w: 143, h: 132 }, paths: ['ped67080', 'pee82480', 'p1e84aff0', 'p35cf78f0'] },
    { left: 'calc(50% - 145.5px)', top: '86px', size: { w: 75, h: 75 }, paths: ['p8253200', 'p12b67c80', 'p45b870', 'p2c0bba80'] },
  ],
];

// Sparkle icon component configurations for Jada (Manager)
const jadaSparkleConfigs = [
  // Card 1 - Onboarding
  [
    { left: 'calc(50% + 93px)', top: '0', size: { w: 80, h: 74 }, paths: ['p22912180', 'p308a0800', 'p1ee3e400', 'p1ef20500'] },
    { left: 'calc(50% - 94px)', top: '177px', size: { w: 113, h: 113 }, paths: ['p884b380', 'p2dd36a00', 'p378e6600', 'p2020c700'] },
  ],
  // Card 2 - Comp
  [
    { left: 'calc(50% + 62px)', top: '123px', size: { w: 143, h: 132 }, paths: ['ped67080', 'pee82480', 'p1e84aff0', 'p35cf78f0'] },
    { left: 'calc(50% - 120px)', top: '87px', size: { w: 75, h: 75 }, paths: ['p8253200', 'p12b67c80', 'p45b870', 'p2c0bba80'] },
  ],
  // Card 3 - Recruit
  [
    { left: 'calc(50% - 93px)', top: '156px', size: { w: 75, h: 75 }, paths: ['p8253200', 'p12b67c80', 'p45b870', 'p2c0bba80'] },
  ],
  // Card 4 - Performance
  [
    { left: 'calc(50% + 93px)', top: '0', size: { w: 80, h: 74 }, paths: ['p22912180', 'p308a0800', 'p1ee3e400', 'p1ef20500'] },
    { left: 'calc(50% - 94px)', top: '177px', size: { w: 113, h: 113 }, paths: ['p884b380', 'p2dd36a00', 'p378e6600', 'p2020c700'] },
  ],
];

function SparklingIcon({ config, svgPaths, index }: { config: any; svgPaths: any; index: number }) {
  const { left, top, size, paths } = config;
  
  return (
    <div 
      className="absolute translate-x-[-50%] sparkle-icon" 
      style={{ left, top, width: size.w, height: size.h }}
      data-index={index}
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={`0 0 ${size.w} ${size.h}`}>
        <g opacity="0.8">
          <path 
            clipRule="evenodd" 
            d={svgPaths[paths[0]]} 
            fill="white" 
            fillRule="evenodd" 
          />
          <path d={svgPaths[paths[1]]} fill="white" />
          <path d={svgPaths[paths[2]]} fill="white" />
          <path d={svgPaths[paths[3]]} fill="white" />
        </g>
      </svg>
    </div>
  );
}

export function CSVScenarioSelection({ persona, scenarios, onSelectScenario, onBack }: CSVScenarioSelectionProps) {
  const [isExiting, setIsExiting] = useState(false);
  const [selectedScenarioId, setSelectedScenarioId] = useState<string | null>(null);
  const { t } = useTranslation();
  
  const personaImage = persona === 'Employee' ? gusImage : jadaImage;
  const personaName = persona === 'Employee' ? 'Gus' : 'Jada';
  const isEmployee = persona === 'Employee';
  
  // Select appropriate data based on persona
  const scenarioPhotos = isEmployee ? gusScenarioPhotos : jadaScenarioPhotos;
  const sparkleConfigs = isEmployee ? gusSparkleConfigs : jadaSparkleConfigs;
  const svgPaths = isEmployee ? svgPathsGus : svgPathsJada;
  
  const personaLayoutId = isEmployee ? 'gus-image' : 'jada-image';
  
  const handleBack = () => {
    setIsExiting(true);
    // Wait for exit animations to complete
    setTimeout(() => {
      onBack();
    }, 600);
  };
  
  const handleScenarioClick = (scenarioId: string) => {
    setSelectedScenarioId(scenarioId);
    setIsExiting(true);
    // Wait for exit animations to complete
    setTimeout(() => {
      onSelectScenario(scenarioId);
    }, 800);
  };
  
  return (
    <div className="relative min-h-screen p-8 overflow-hidden">
      <DecorativeBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with Back Button and Logo */}
        <div className="flex items-center justify-between mb-8">
          <motion.button
            onClick={handleBack}
            className="flex items-center gap-2 text-white hover:text-white/80 transition-colors font-['72:Bold',sans-serif] bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20"
            initial={{ x: -100, opacity: 0 }}
            animate={isExiting ? { x: -100, opacity: 0 } : { x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] }}
          >
            <ArrowLeft className="w-5 h-5" />
            {t('scenarios.back')}
          </motion.button>
          
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <LanguageSelector />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <SAPSuccessFactorsLogo className="h-[21px]" />
            </motion.div>
          </div>
        </div>

        {/* Meet Gus/Jada section */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <motion.img 
            layoutId={personaLayoutId}
            src={personaImage} 
            alt={personaName}
            className="w-24 h-24 rounded-full object-cover object-top border-4 border-white/30 shadow-xl"
          />
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, x: -20 }}
            animate={isExiting ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-4xl text-white font-['72:Bold',sans-serif] mb-1">
              {persona === 'Employee' ? t('persona.gus.name') : t('persona.jada.name')}
            </h1>
            <p className="text-2xl text-white/80 font-['72:Regular',sans-serif]">
              {persona === 'Employee' ? t('common.employee') : t('common.manager')}
            </p>
          </motion.div>
        </div>

        {/* Title Section */}
        <div className="text-center mb-12">
          <motion.p 
            layoutId="joule-experience-title"
            className="font-['72:Light',sans-serif] text-[64px] mb-4 relative inline-block tracking-[0.2em]"
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              mass: 0.8
            }}
          >
            {/* Glow layer */}
            <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-[#e0aaff] via-white to-[#e0aaff] blur-xl opacity-60">
              JOULE EXPERIENCE
            </span>
            {/* Main text */}
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#e0aaff] via-white to-[#e0aaff]">
              JOULE EXPERIENCE
            </span>
          </motion.p>
          <motion.h2 
            layoutId="choose-your-heading"
            className="font-['72',sans-serif] text-[52px] leading-[1] text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] opacity-85" 
            style={{ fontWeight: 600 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              mass: 0.8
            }}
          >
            {t('scenarios.choose')} <motion.span layoutId="choose-type-word">{t('scenarios.scenario')}</motion.span>
          </motion.h2>
        </div>

        {/* Scenario Cards - Horizontal Layout */}
        <div className="flex gap-6 justify-center mb-12 flex-wrap">
          {scenarios.slice(0, 4).map((scenario, index) => {
            const photoSrc = scenarioPhotos[scenario.scenario_id];
            // Get translated card titles from translation context
            const cardTitle1 = t(`scenario.${scenario.scenario_id}.card1`) || 'Scenario';
            const cardTitle2 = t(`scenario.${scenario.scenario_id}.card2`) || 'Title';
            const shortTitles = [cardTitle1, cardTitle2];
            const sparkles = sparkleConfigs[index] || [];
            
            // Gradient colors for each card
            const gradients = [
              'from-[#6366f1] via-[#8b5cf6] to-[#a855f7]',     // Card 1: Blue-purple
              'from-[#8b5cf6] via-[#a855f7] to-[#c026d3]',     // Card 2: Purple
              'from-[#a855f7] via-[#c026d3] to-[#d946ef]',     // Card 3: Purple-pink
              'from-[#c026d3] via-[#d946ef] to-[#ec4899]',     // Card 4: Pink
            ];
            const gradient = gradients[index] || gradients[0];
            
            // Determine direction for flying in animation
            const directions = [
              { x: -400, y: 200 },   // Card 1: from bottom-left
              { x: -200, y: -300 },  // Card 2: from top-left
              { x: 200, y: -300 },   // Card 3: from top-right
              { x: 400, y: 200 },    // Card 4: from bottom-right
            ];
            const direction = directions[index] || { x: 0, y: -300 };
            
            // Exit delay in reverse order (card 4 exits first, then 3, 2, 1)
            const exitDelay = isExiting ? (3 - index) * 0.08 : 0;
            
            return (
              <motion.button
                key={scenario.scenario_id}
                onClick={() => handleScenarioClick(scenario.scenario_id)}
                className="group relative h-[357px] w-[273px] rounded-[37.5px] overflow-hidden shadow-2xl hover:scale-[1.08] hover:shadow-[0_20px_60px_rgba(123,44,191,0.5)] transition-all duration-500 hover:-translate-y-2"
                initial={{ x: direction.x, y: direction.y, opacity: 0, rotate: index % 2 === 0 ? -15 : 15 }}
                animate={isExiting 
                  ? { x: direction.x * 0.6, y: direction.y * 0.6, opacity: 0, rotate: index % 2 === 0 ? -5 : 5 }
                  : { x: 0, y: 0, opacity: 1, rotate: 0 }
                }
                transition={{ 
                  duration: 0.6, 
                  delay: exitDelay,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
              >
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-95 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                {/* Glow Border */}
                <div className="absolute inset-0 rounded-[37.5px] border-2 border-white/30 group-hover:border-white/50 transition-all duration-300" />
                
                {/* Additional Sparkle Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-pulse opacity-70" />
                <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-[#e0aaff] rounded-full animate-pulse opacity-80" style={{ animationDelay: '0.3s' }} />
                <div className="absolute top-6 left-6 w-1.5 h-1.5 bg-[#fae8ff] rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.6s' }} />
                
                {/* Sparkle Icons */}
                {sparkles.map((sparkle, idx) => (
                  <div 
                    key={idx}
                    className="sparkle-wrapper"
                    style={{
                      animationDelay: `${idx * 0.15}s`
                    }}
                  >
                    <SparklingIcon config={sparkle} svgPaths={svgPaths} index={idx} />
                  </div>
                ))}

                {/* Title Pills */}
                <div className="absolute top-0 left-0 right-0 z-10 flex flex-col items-center gap-2 pt-5">
                  {shortTitles.map((titlePart, idx) => (
                    <div 
                      key={idx}
                      className="backdrop-blur-md backdrop-filter box-border px-[14px] py-[4px] rounded-[10px] border-2 border-white/40 bg-white/10 group-hover:bg-white/20 group-hover:border-white/60 transition-all duration-300 shadow-lg"
                    >
                      <p className="font-['72:Bold',sans-serif] text-[22.5px] text-white text-center leading-normal drop-shadow-lg">
                        {titlePart}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Photo - Bottom portion with overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-[195px] flex items-end justify-center overflow-hidden">
                  {/* Gradient overlay for better photo integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-[1]" />
                  <img
                    src={photoSrc}
                    alt={scenario.scenario_title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:via-white/70 transition-all duration-300" />
              </motion.button>
            );
          })}
        </div>


      </div>
    </div>
  );
}
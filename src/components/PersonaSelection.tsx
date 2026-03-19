import { DecorativeBackground } from './DecorativeBackground';
import { SAPSuccessFactorsLogo } from './SAPSuccessFactorsLogo';
import { motion } from 'motion/react';
import { useTranslation } from '../contexts/TranslationContext';
import svgPaths from '../imports/svg-3ij8hdzpqi';
import imgJadaProfilePic1 from 'figma:asset/e7596a9aeed84f7bf35f607453098dedbb52fca7.png';
import imgImage2 from 'figma:asset/64a60670f053f5f6072796a7250d0083ad88e077.png';

interface PersonaSelectionProps {
  onSelectPersona: (persona: 'employee' | 'manager') => void;
}

function Intro() {
  return <div className="absolute bg-gradient-to-b from-[#6135fe] inset-0 to-[#a100c2]" data-name="Intro - 6" />;
}

function PanelGradient() {
  return (
    <div className="absolute bg-gradient-to-b from-[#5d36ff] from-[6.464%] h-[619px] left-px overflow-x-clip overflow-y-auto rounded-[60px] to-[#a100c2] to-[93.756%] top-0 w-[472px]" data-name="Panel - gradient">
      <div className="absolute bg-[#f7f7f7] inset-0" data-name="BG - white (default)" />
      <Intro />
    </div>
  );
}

function SparklingIconAnimated() {
  return (
    <div className="sparkle-icon absolute h-[120px] left-[calc(50%+146.5px)] top-[206px] translate-x-[-50%] w-[130px]" data-name="Sparkling icon (animated)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 130 120">
        <g id="Sparkling icon (animated)" opacity="0.8">
          <path clipRule="evenodd" d={svgPaths.pe771100} fill="var(--fill-0, white)" fillRule="evenodd" id="Diamond" />
          <path d={svgPaths.p2a0e6300} fill="var(--fill-0, white)" id="Star 3" />
          <path d={svgPaths.p3e255c00} fill="var(--fill-0, white)" id="Star 2" />
          <path d={svgPaths.p1a15beb0} fill="var(--fill-0, white)" id="Star 1" />
        </g>
      </svg>
    </div>
  );
}

function SparklingIconAnimated1() {
  return (
    <div className="sparkle-icon absolute left-[calc(50%-185.5px)] size-[102px] top-[107px] translate-x-[-50%]" data-name="Sparkling icon (animated)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 102 102">
        <g id="Sparkling icon (animated)" opacity="0.8">
          <path clipRule="evenodd" d={svgPaths.pc2c5480} fill="var(--fill-0, white)" fillRule="evenodd" id="Diamond" />
          <path d={svgPaths.p1df7d880} fill="var(--fill-0, white)" id="Star 3" />
          <path d={svgPaths.pfe7c180} fill="var(--fill-0, white)" id="Star 2" />
          <path d={svgPaths.p30f8c100} fill="var(--fill-0, white)" id="Star 1" />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['72:Light',sans-serif] leading-[normal] ml-[101.75px] mt-0 not-italic relative text-[40px] text-center text-white translate-x-[-50%] w-[203.5px]">Jada Baker</p>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute backdrop-blur-[8.072px] backdrop-filter bottom-[487px] box-border content-stretch flex gap-[4.019px] h-[56px] items-center justify-center left-[118px] px-[12.056px] py-[3.014px] rounded-[7.55px] w-[238px]" data-name="Title">
      <div aria-hidden="true" className="absolute border border-[#89d1ff] border-solid inset-0 pointer-events-none rounded-[7.55px]" />
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['72:Light',sans-serif] leading-[normal] ml-[101.75px] mt-0 not-italic relative text-[40px] text-center text-white translate-x-[-50%] w-[203.5px]">Manager</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="absolute backdrop-blur-[8.072px] backdrop-filter bottom-[414px] box-border content-stretch flex gap-[4.019px] h-[56px] items-center justify-center left-[118px] px-[12.056px] py-[3.014px] rounded-[7.55px] w-[238px]" data-name="Title">
      <div aria-hidden="true" className="absolute border border-[#89d1ff] border-solid inset-0 pointer-events-none rounded-[7.55px]" />
      <Group1 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-0 top-0">
      <PanelGradient />
      <div className="sparkle-wrapper" style={{ animationDelay: '0s' }}>
        <SparklingIconAnimated />
      </div>
      <div className="sparkle-wrapper" style={{ animationDelay: '0.15s' }}>
        <SparklingIconAnimated1 />
      </div>
      <div className="absolute h-[405px] left-[3px] rounded-[60px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[219px] w-[466px]" data-name="Jada profile pic  1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[60px]">
          <img alt="" className="absolute h-full left-[-6.88%] max-w-none top-0 w-[112.69%]" src={imgJadaProfilePic1} />
        </div>
      </div>
      <Title />
      <Title1 />
    </div>
  );
}

function PersonaJada({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="group absolute h-[619px] left-[349px] top-[338px] w-[473px] transition-transform duration-300 hover:scale-105" data-name="Persona_Jada">
      <Group4 />
    </button>
  );
}

function Intro1() {
  return <div className="absolute bg-gradient-to-b from-[#6135fe] inset-0 to-[#a100c2]" data-name="Intro - 6" />;
}

function PanelGradient1() {
  return (
    <div className="absolute bg-gradient-to-b from-[#5d36ff] from-[6.464%] h-[672px] left-0 overflow-x-clip overflow-y-auto to-[#a100c2] to-[93.756%] top-[-1px] w-[513px]" data-name="Panel - gradient">
      <div className="absolute bg-[#f7f7f7] inset-0" data-name="BG - white (default)" />
      <Intro1 />
    </div>
  );
}

function SparklingIconAnimated2() {
  return (
    <div className="sparkle-icon absolute h-[74px] left-[calc(50%+180px)] top-[167px] translate-x-[-50%] w-[80px]" data-name="Sparkling icon (animated)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 74">
        <g id="Sparkling icon (animated)" opacity="0.8">
          <path clipRule="evenodd" d={svgPaths.p22912180} fill="var(--fill-0, white)" fillRule="evenodd" id="Diamond" />
          <path d={svgPaths.p308a0800} fill="var(--fill-0, white)" id="Star 3" />
          <path d={svgPaths.p1ee3e400} fill="var(--fill-0, white)" id="Star 2" />
          <path d={svgPaths.p1ef20500} fill="var(--fill-0, white)" id="Star 1" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['72:Light',sans-serif] leading-[normal] ml-[125px] mt-0 not-italic relative text-[40px] text-center text-white translate-x-[-50%] w-[250px]">Gus Revesz</p>
    </div>
  );
}

function Title2() {
  return (
    <div className="absolute backdrop-blur-[8.072px] backdrop-filter bottom-[486px] box-border content-stretch flex gap-[4.019px] h-[56px] items-center justify-center left-[117px] px-[12.056px] py-[3.014px] rounded-[7.554px] w-[238px]" data-name="Title">
      <div aria-hidden="true" className="absolute border border-[#89d1ff] border-solid inset-0 pointer-events-none rounded-[7.554px]" />
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['72:Light',sans-serif] leading-[normal] ml-[101.75px] mt-0 not-italic relative text-[40px] text-center text-white translate-x-[-50%] w-[203.5px]">Employee</p>
    </div>
  );
}

function Title3() {
  return (
    <div className="absolute backdrop-blur-[8.072px] backdrop-filter bottom-[413px] box-border content-stretch flex gap-[4.019px] h-[56px] items-center justify-center left-[117px] px-[12.056px] py-[3.014px] rounded-[7.554px] w-[238px]" data-name="Title">
      <div aria-hidden="true" className="absolute border border-[#89d1ff] border-solid inset-0 pointer-events-none rounded-[7.554px]" />
      <Group3 />
    </div>
  );
}

function SparklingIconAnimated3() {
  return (
    <div className="sparkle-icon absolute inset-[-8.41%_71.61%_78.16%_-11.23%]" data-name="Sparkling icon (animated)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 187 187">
        <g id="Sparkling icon (animated)" opacity="0.8">
          <path clipRule="evenodd" d={svgPaths.p277e0980} fill="var(--fill-0, white)" fillRule="evenodd" id="Diamond" />
          <path d={svgPaths.p110c2f00} fill="var(--fill-0, white)" id="Star 3" />
          <path d={svgPaths.p18438040} fill="var(--fill-0, white)" id="Star 2" />
          <path d={svgPaths.p11473af0} fill="var(--fill-0, white)" id="Star 1" />
        </g>
      </svg>
    </div>
  );
}

function PersonaGus({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="group absolute bg-white inset-[31.39%_18.54%_11.39%_56.88%] overflow-clip rounded-[50px] transition-transform duration-300 hover:scale-105" data-name="Persona_Gus">
      <PanelGradient1 />
      <div className="sparkle-wrapper" style={{ animationDelay: '0s' }}>
        <SparklingIconAnimated2 />
      </div>
      <Title2 />
      <Title3 />
      <div className="absolute h-[415px] left-[-19px] top-[217px] w-[493px]" data-name="image 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="sparkle-wrapper" style={{ animationDelay: '0.15s' }}>
        <SparklingIconAnimated3 />
      </div>
    </button>
  );
}

export function PersonaSelection({ onSelectPersona }: PersonaSelectionProps) {
  const { t } = useTranslation();
  return (
    <div className="relative size-full min-h-screen" data-name="Persona selection">
      <DecorativeBackground />
      
      {/* Logo */}
      <motion.div 
        className="absolute top-8 right-8 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <SAPSuccessFactorsLogo className="h-12" />
      </motion.div>

      <div className="relative z-10 h-screen max-w-[1920px] mx-auto">
        <motion.p 
          layoutId="joule-experience-title"
          className="absolute font-['72:Light',sans-serif] leading-[1] left-[calc(50%+3px)] not-italic text-[#0057d2] text-[40px] text-center top-[117px] tracking-[20px] translate-x-[-50%] w-[1920px]"
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            mass: 0.8
          }}
        >
          {t('persona.title')}
        </motion.p>
        <motion.p 
          layoutId="choose-your-heading"
          className="absolute font-['72:Bold',sans-serif] leading-[1] left-1/2 not-italic text-[#0057d2] text-[90px] text-center top-[210px] translate-x-[-50%] w-[1920px]"
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            mass: 0.8
          }}
        >
          {t('persona.choose')}
        </motion.p>
        <PersonaJada onClick={() => onSelectPersona('manager')} />
        <PersonaGus onClick={() => onSelectPersona('employee')} />
      </div>
    </div>
  );
}
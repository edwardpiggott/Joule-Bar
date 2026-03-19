import { useState, useEffect, useRef } from 'react';
import svgPaths from "./svg-iywut3mmp1";
import { motion } from 'motion/react';

interface WelcomeScreenProps {
  onClose?: () => void;
  scenarioPrompt?: string;
  onNotebookAutoFill?: (data: any) => void;
}

function Title() {
  return (
    <div className="basis-0 grow h-[33px] min-h-px min-w-px relative shrink-0" data-name="Title">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[33px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <p className="font-['72:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Joule</p>
        </div>
      </div>
    </div>
  );
}

function RightButton({ onClose }: { onClose?: () => void }) {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-end pl-0 pr-[16px] py-[10px] relative shrink-0" data-name="Right button">
      <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex items-center justify-center min-h-[36px] p-[10px] relative rounded-[8px] shrink-0" data-name="Fullscreen">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute bottom-0 left-0 right-0 top-[0.06%]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p3ec0b670} fill="var(--fill-0, white)" id="Icon" />
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,0,0,0)] box-border content-stretch flex items-center justify-center min-h-[36px] p-[10px] relative rounded-[8px] shrink-0" data-name="Overflow menu">
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute bottom-[37.5%] left-0 right-0 top-[37.5%]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 4">
              <path d={svgPaths.p29461680} fill="var(--fill-0, white)" id="Icon" />
            </svg>
          </div>
        </div>
      </div>
      <button 
        onClick={onClose}
        className="bg-[rgba(0,0,0,0)] hover:bg-white/10 box-border content-stretch flex items-center justify-center min-h-[36px] p-[10px] relative rounded-[8px] shrink-0 transition-colors cursor-pointer" 
        data-name="Close (should be minimize)"
      >
        <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute inset-[18.86%_18.8%_18.73%_18.8%]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
              <path d={svgPaths.p60d100} fill="var(--fill-0, white)" id="Icon" />
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}

function PanelHeader({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex from-[#5d36ff] h-[56px] items-center justify-center max-h-[56px] min-h-[56px] min-w-[416px] px-0 py-[10px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 to-[#6431fa] w-full" data-name="Panel / Header">
      <Title />
      <RightButton onClose={onClose} />
    </div>
  );
}

function Intro() {
  return <div className="absolute bg-gradient-to-b from-[#6135fe] inset-0 to-[#a100c2]" data-name="Intro - 6" />;
}

function TextMessage() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[6px] bottom-[12px] left-[24px] right-[24px] items-start overflow-clip px-[16px] py-[10px] rounded-[12px] shadow-md" data-name="Text Message">
      <p className="font-['72:Regular',sans-serif] leading-[18px] not-italic relative text-[#1d2d3e] text-[12px]">{`Talk to me naturally. For example, 'I want to give feedback'`}</p>
    </div>
  );
}

function JouleAnimatedText() {
  const [currentWord, setCurrentWord] = useState('assist');
  const words = ['assist', 'help', 'guide', 'support', 'serve'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(prev => {
        const currentIndex = words.indexOf(prev);
        const nextIndex = (currentIndex + 1) % words.length;
        return words[nextIndex];
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
      <div className="absolute bottom-[50px] left-[24px] right-[24px] z-10" data-name="joule animated text">
        <div className="flex flex-col font-['72:Light',sans-serif] justify-center leading-[0] not-italic text-[28px] text-white tracking-[-0.5px]">
          <p className="leading-[38px] animate-[float_3s_ease-in-out_infinite]">
            How can I{' '}
            <span className="inline-block animate-[fadeIn_0.5s_ease-in-out]" key={currentWord}>
              {currentWord}
            </span>
            {' '}you?
          </p>
        </div>
      </div>
    </>
  );
}

function WelcomeMessage() {
  return (
    <div className="[grid-area:1_/_1] h-full ml-0 mt-0 relative w-full" data-name="Welcome message">
      <div className="absolute bottom-[95px] left-[24px] flex flex-col font-['72:Light',sans-serif] justify-center leading-[0] not-italic text-[18px] text-nowrap text-white/90 z-10">
        <p className="leading-[28px] whitespace-pre">Hello Geoff,</p>
      </div>
      <JouleAnimatedText />
      <TextMessage />
    </div>
  );
}

function WelcomeMessage1() {
  return (
    <>
      <style>
        {`
          @keyframes shine {
            0%, 100% { 
              opacity: 1;
              filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8));
            }
            50% { 
              opacity: 0.7;
              filter: drop-shadow(0 0 15px rgba(255, 255, 255, 1));
            }
          }
          @keyframes twinkle {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.4; transform: scale(0.8); }
          }
        `}
      </style>
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Welcome message">
        <div className="[grid-area:1_/_1] bg-gradient-to-b from-[#5d36ff] from-[6.464%] h-[308px] ml-0 mt-0 overflow-x-clip overflow-y-auto relative to-[#a100c2] to-[93.756%] w-[416px]" data-name="Panel - gradient">
          <div className="absolute bg-[#f7f7f7] inset-0" data-name="BG - white (default)" />
          <Intro />
        </div>
        <WelcomeMessage />
        <div className="[grid-area:1_/_1] ml-[158px] mt-[30px] overflow-clip relative size-[80px]" data-name="Joule-Loop">
          <div className="absolute inset-[30.83%_11.67%_1.67%_20%] animate-[shine_2s_ease-in-out_infinite]" data-name="Diamond">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 82 81">
              <path clipRule="evenodd" d={svgPaths.p1b500880} fill="var(--fill-0, white)" fillRule="evenodd" id="Diamond" />
            </svg>
          </div>
          <div className="absolute inset-[16.75%_8.25%_68.75%_77%] animate-[twinkle_1.5s_ease-in-out_infinite]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p34f8d380} fill="var(--fill-0, white)" id="Star 3" />
            </svg>
          </div>
          <div className="absolute bottom-[78.25%] left-[24%] right-[54.25%] top-0 animate-[twinkle_1.8s_ease-in-out_infinite_0.3s]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 27">
              <path d={svgPaths.p24343580} fill="var(--fill-0, white)" id="Star 2" />
            </svg>
          </div>
          <div className="absolute inset-[21.75%_79%_63.5%_6.5%] animate-[twinkle_2s_ease-in-out_infinite_0.6s]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.p3a8fa300} fill="var(--fill-0, white)" id="Star 1" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

function JouleMessageBubble() {
  return (
    <div className="bg-[#eff1f2] max-w-[288px] relative rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px] shrink-0" data-name="Joule message bubble">
      <div className="box-border content-stretch flex flex-col gap-[10px] items-center max-w-inherit overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
        <p className="font-['72:Regular',sans-serif] leading-[22px] not-italic relative shrink-0 text-[#1d2d3e] text-[14px] text-nowrap whitespace-pre">Get started with Joule</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eff1f2] border-solid inset-0 pointer-events-none rounded-br-[8px] rounded-tl-[8px] rounded-tr-[8px]" />
    </div>
  );
}

function ButtonQuickReply() {
  return (
    <button className="bg-white hover:bg-gray-50 box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[20px] shadow-[0px_0px_2px_0px_rgba(27,144,255,0.16),0px_2px_6px_0px_rgba(27,144,255,0.12)] cursor-pointer transition-colors" data-name="Button/Quick reply">
      <p className="font-['72:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0064d9] text-[14px] text-center text-nowrap whitespace-pre">View Required Learning</p>
    </button>
  );
}

function ButtonQuickReply1() {
  return (
    <button className="bg-white hover:bg-gray-50 box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[20px] shadow-[0px_0px_2px_0px_rgba(27,144,255,0.16),0px_2px_6px_0px_rgba(27,144,255,0.12)] cursor-pointer transition-colors" data-name="Button/Quick reply">
      <p className="font-['72:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0064d9] text-[14px] text-center text-nowrap whitespace-pre">Create Activity</p>
    </button>
  );
}

function ButtonQuickReply2() {
  return (
    <button className="bg-white hover:bg-gray-50 box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[20px] shadow-[0px_0px_2px_0px_rgba(27,144,255,0.16),0px_2px_6px_0px_rgba(27,144,255,0.12)] cursor-pointer transition-colors" data-name="Button/Quick reply">
      <p className="font-['72:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0064d9] text-[14px] text-center text-nowrap whitespace-pre">Give Feedback</p>
    </button>
  );
}

function ButtonQuickReply3() {
  return (
    <button className="bg-white hover:bg-gray-50 box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[20px] shadow-[0px_0px_2px_0px_rgba(27,144,255,0.16),0px_2px_6px_0px_rgba(27,144,255,0.12)] cursor-pointer transition-colors" data-name="Button/Quick reply">
      <p className="font-['72:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0064d9] text-[14px] text-center text-nowrap whitespace-pre">View Peers</p>
    </button>
  );
}

function ButtonQuickReply4() {
  return (
    <button className="bg-white hover:bg-gray-50 box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[20px] shadow-[0px_0px_2px_0px_rgba(27,144,255,0.16),0px_2px_6px_0px_rgba(27,144,255,0.12)] cursor-pointer transition-colors" data-name="Button/Quick reply">
      <p className="font-['72:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0064d9] text-[14px] text-center text-nowrap whitespace-pre">Request Feedback</p>
    </button>
  );
}

function Content() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] items-center max-w-[1200px] min-w-[416px] overflow-x-clip overflow-y-auto px-0 py-[20px] relative shrink-0" data-name="content">
      <div className="content-stretch flex flex-col gap-[12px] items-start justify-center overflow-clip relative shrink-0 w-[384px]" data-name="Message type / text / Joule">
        <JouleMessageBubble />
      </div>
    </div>
  );
}

function BodyAutoLayout() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-start justify-center min-h-px min-w-px overflow-x-clip overflow-y-auto relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-[416px]" data-name="Body_Auto layout">
      <Content />
    </div>
  );
}

function Frame3() {
  return (
    <div className="box-border content-stretch flex items-start px-0 py-[2px] relative shrink-0">
      <div className="h-[24px] shrink-0 w-[2px]" data-name="Cursor" />
    </div>
  );
}

function Text({ typedText }: { typedText: string }) {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[7px] pt-[5px] px-0 relative shrink-0" data-name="Text">
      <div className="flex flex-col font-['72:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1d2d3e] text-[14px]">
        <p className="leading-[normal]">{typedText || <span className="italic text-[#556b82]">Message Joule...</span>}</p>
      </div>
    </div>
  );
}

function Frame4({ typedText }: { typedText: string }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[303px]">
      <Frame3 />
      <Text typedText={typedText} />
    </div>
  );
}

function Actions({ showPulse, onClick }: { showPulse: boolean; onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[4px] h-[28px] items-center justify-end relative shrink-0 w-[66px]" data-name="Actions">
      <motion.button 
        onClick={onClick}
        className="bg-[#0070f2] hover:bg-[#005fd1] box-border content-stretch flex gap-[6px] items-center justify-center min-h-[26px] px-[6px] py-0 relative rounded-[24px] shrink-0 cursor-pointer" 
        data-name="Icon Button"
        animate={showPulse ? {
          scale: [1, 1.1, 1],
          boxShadow: [
            '0 0 0 0 rgba(0, 112, 242, 0.7)',
            '0 0 0 8px rgba(0, 112, 242, 0)',
            '0 0 0 0 rgba(0, 112, 242, 0)'
          ]
        } : {}}
        transition={{
          duration: 1.5,
          repeat: showPulse ? Infinity : 0,
          ease: "easeInOut"
        }}
      >
        <div aria-hidden="true" className="absolute border border-[#0070f2] border-solid inset-0 pointer-events-none rounded-[24px]" />
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
          <div className="absolute inset-[6.25%_6.31%_6.25%_6.25%]" data-name="Icon">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <path d={svgPaths.p28439e00} fill="var(--fill-0, white)" id="Icon" />
            </svg>
          </div>
        </div>
      </motion.button>
    </div>
  );
}

function InputField({ typedText, showPulse, onSendClick }: { typedText: string; showPulse: boolean; onSendClick?: () => void }) {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Input Field">
      <div aria-hidden="true" className="absolute border-2 border-[#0064d9] border-solid inset-[-2px] pointer-events-none rounded-[10px] shadow-[0px_0px_2px_0px_rgba(27,144,255,0.16),0px_4px_8px_0px_rgba(27,144,255,0.16)]" />
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex items-end justify-between px-[6px] py-[4px] relative w-full">
          <Frame4 typedText={typedText} />
          <Actions showPulse={showPulse} onClick={onSendClick} />
        </div>
      </div>
    </div>
  );
}

function QuickStartButtons() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8px] items-start px-[16px] py-[12px] relative shrink-0 w-full bg-white border-t border-gray-100" data-name="Quick Start Buttons">
      <div className="content-stretch flex gap-[6px] items-start leading-[0] relative shrink-0 flex-wrap justify-start">
        <ButtonQuickReply />
        <ButtonQuickReply1 />
      </div>
      <div className="content-stretch flex gap-[6px] items-start leading-[0] relative shrink-0 flex-wrap justify-start">
        <ButtonQuickReply2 />
        <ButtonQuickReply3 />
      </div>
      <div className="content-stretch flex gap-[6px] items-start leading-[0] relative shrink-0 flex-wrap justify-start">
        <ButtonQuickReply4 />
      </div>
    </div>
  );
}

// Conversation Components
function UserMessage({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full flex justify-end px-[24px] mb-[12px]"
    >
      <div className="bg-[#0070f2] text-white px-[16px] py-[10px] rounded-[12px] rounded-br-[4px] max-w-[80%]">
        <p className="font-['72:Regular',sans-serif] text-[14px] leading-[20px]">{text}</p>
      </div>
    </motion.div>
  );
}

function JouleThinking() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full flex justify-start px-[24px] mb-[12px]"
    >
      <div className="bg-[#f5f6f7] px-[16px] py-[10px] rounded-[12px] rounded-bl-[4px] flex items-center gap-[8px]">
        <div className="flex gap-[4px]">
          <motion.div
            className="w-[6px] h-[6px] bg-[#556b82] rounded-full"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="w-[6px] h-[6px] bg-[#556b82] rounded-full"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className="w-[6px] h-[6px] bg-[#556b82] rounded-full"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
          />
        </div>
        <p className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">Joule is thinking...</p>
      </div>
    </motion.div>
  );
}

// Separate response components for sequential display
function SalaryHistoryResponse() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full flex justify-start px-[24px] mb-[12px]"
    >
      <div className="bg-[#f5f6f7] px-[16px] py-[12px] rounded-[12px] rounded-bl-[4px] max-w-[85%]">
        <p className="font-['72:Regular',sans-serif] text-[14px] leading-[20px] text-[#1d2d3e] mb-[8px]">
          Here's Jada Baker's <strong>Salary History</strong> for the last 4 years:
        </p>
        <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] space-y-[4px]">
          <div className="flex justify-between">
            <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">2024</span>
            <span className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e]">$153,973</span>
          </div>
          <div className="flex justify-between">
            <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">2023</span>
            <span className="font-['72:Regular',sans-serif] text-[13px] text-[#1d2d3e]">$142,300</span>
          </div>
          <div className="flex justify-between">
            <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">2022</span>
            <span className="font-['72:Regular',sans-serif] text-[13px] text-[#1d2d3e]">$134,500</span>
          </div>
          <div className="flex justify-between">
            <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">2021</span>
            <span className="font-['72:Regular',sans-serif] text-[13px] text-[#1d2d3e]">$126,300</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function BonusHistoryResponse() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full flex justify-start px-[24px] mb-[12px]"
    >
      <div className="bg-[#f5f6f7] px-[16px] py-[12px] rounded-[12px] rounded-bl-[4px] max-w-[85%]">
        <p className="font-['72:Regular',sans-serif] text-[14px] leading-[20px] text-[#1d2d3e] mb-[8px]">
          And here's her <strong>Bonus History</strong> for the last 2 years:
        </p>
        <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] space-y-[4px]">
          <div className="flex justify-between">
            <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">2024</span>
            <span className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e]">$23,095 (15%)</span>
          </div>
          <div className="flex justify-between">
            <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">2023</span>
            <span className="font-['72:Regular',sans-serif] text-[13px] text-[#1d2d3e]">$21,345 (15%)</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PerformanceRatingResponse() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full flex justify-start px-[24px] mb-[12px]"
    >
      <div className="bg-[#f5f6f7] px-[16px] py-[12px] rounded-[12px] rounded-bl-[4px] max-w-[85%]">
        <p className="font-['72:Regular',sans-serif] text-[14px] leading-[20px] text-[#1d2d3e] mb-[8px]">
          Her most recent <strong>Performance Rating</strong> is:
        </p>
        <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6]">
          <div className="flex justify-between items-center">
            <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">Latest Rating</span>
            <span className="font-['72:Bold',sans-serif] text-[13px] text-[#0070f2]">4.5 / 5.0 - Exceeds Expectations</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function QuickInsightsPrompt() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full flex justify-start px-[24px] mb-[12px]"
    >
      <div className="bg-[#f5f6f7] px-[16px] py-[12px] rounded-[12px] rounded-bl-[4px] max-w-[85%]">
        <p className="font-['72:Regular',sans-serif] text-[14px] leading-[20px] text-[#1d2d3e]">
          Would you like me to provide quick insights about Jada's compensation trends?
        </p>
      </div>
    </motion.div>
  );
}

function InsightsResponse() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full flex justify-start px-[24px] mb-[12px]"
    >
      <div className="bg-[#f5f6f7] px-[16px] py-[12px] rounded-[12px] rounded-bl-[4px] max-w-[85%]">
        <p className="font-['72:Regular',sans-serif] text-[14px] leading-[20px] text-[#1d2d3e] mb-[8px]">
          Here are key insights for Jada's compensation:
        </p>
        <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] space-y-[8px]">
          <div>
            <p className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e] mb-1">📈 Salary Growth</p>
            <p className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">21.9% increase over 4 years ($27,673 total growth)</p>
          </div>
          <div className="border-t border-[#e5e7eb] pt-2">
            <p className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e] mb-1">💰 Consistent Bonuses</p>
            <p className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">15% annual performance bonus maintained for 2 years</p>
          </div>
          <div className="border-t border-[#e5e7eb] pt-2">
            <p className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e] mb-1">⭐ Strong Performance</p>
            <p className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">4.5/5.0 rating - Exceeds Expectations</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function NotebookMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full flex justify-start px-[24px] mb-[12px]"
    >
      <div className="bg-[#f5f6f7] px-[16px] py-[12px] rounded-[12px] rounded-bl-[4px] max-w-[85%]">
        <p className="font-['72:Regular',sans-serif] text-[14px] leading-[20px] text-[#1d2d3e]">
          ✨ I've pasted all the details into your notebook!
        </p>
      </div>
    </motion.div>
  );
}

interface ConversationViewProps {
  onClose?: () => void;
  onNotebookAutoFill?: (data: any) => void;
}

function ConversationView({ onClose, onNotebookAutoFill }: ConversationViewProps) {
  const [step, setStep] = useState(0);
  const [autoTypedYes, setAutoTypedYes] = useState('');
  const [showYesInput, setShowYesInput] = useState(false);
  const [showPulse, setShowPulse] = useState(false);
  const conversationRef = useRef<HTMLDivElement>(null);
  // Steps: 0=thinking1, 1=salary, 2=thinking2, 3=bonus, 4=thinking3, 5=performance, 6=thinking4, 7=insights_prompt, 8=auto_type_yes, 9=user_yes, 10=thinking5, 11=insights_response, 12=thinking6, 13=notebook_message
  
  // Auto-scroll when step changes
  useEffect(() => {
    if (conversationRef.current) {
      conversationRef.current.scrollTo({
        top: conversationRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [step]);
  
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    // Step 0->1: Show salary after 2s
    timers.push(setTimeout(() => setStep(1), 2000));
    
    // Step 1->2: Show thinking2 after 2.5s
    timers.push(setTimeout(() => setStep(2), 2500));
    
    // Step 2->3: Show bonus after 4.5s
    timers.push(setTimeout(() => setStep(3), 4500));
    
    // Step 3->4: Show thinking3 after 5s
    timers.push(setTimeout(() => setStep(4), 5000));
    
    // Step 4->5: Show performance after 7s
    timers.push(setTimeout(() => setStep(5), 7000));
    
    // Step 5->6: Show thinking4 after 7.5s
    timers.push(setTimeout(() => setStep(6), 7500));
    
    // Step 6->7: Show insights prompt after 9.5s
    timers.push(setTimeout(() => setStep(7), 9500));
    
    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);
  
  // Auto-type "Yes" in the input field
  useEffect(() => {
    if (step === 8) {
      const yesText = "Yes";
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= yesText.length) {
          setAutoTypedYes(yesText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          // Show pulse animation after typing is complete
          setTimeout(() => {
            setShowPulse(true);
          }, 300);
        }
      }, 100);
      
      return () => clearInterval(typingInterval);
    }
  }, [step]);
  
  const handleYesSend = () => {
    setShowPulse(false);
    setShowYesInput(false);
    setStep(9); // Show user message
    
    // Scroll to bottom when user sends message
    setTimeout(() => {
      if (conversationRef.current) {
        conversationRef.current.scrollTo({
          top: conversationRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, 100);
    
    // After showing user message, proceed with thinking and insights
    setTimeout(() => setStep(10), 500); // thinking5
    setTimeout(() => setStep(11), 2500); // insights response
    setTimeout(() => setStep(12), 3000); // thinking6
    setTimeout(() => {
      setStep(13); // notebook message
      // Trigger notebook auto-fill
      onNotebookAutoFill?.({
        payHistory: {
          year2021: '126,300',
          year2022: '134,500',
          year2023: '142,300',
          year2024: '153,973',
        },
        performanceRating: 4.5,
        bonusHistory: {
          year2023: '21,345',
          year2024: '23,095',
        }
      });
    }, 5000);
  };
  
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end justify-end relative rounded-[16px] shadow-[0px_0px_2px_0px_rgba(91,115,139,0.16),0px_32px_64px_0px_rgba(91,115,139,0.16)] w-[416px] h-[750px]" data-name="Conversation screen">
      <PanelHeader onClose={onClose} />
      
      {/* Conversation Area */}
      <div ref={conversationRef} className="flex-1 w-full overflow-y-auto pt-[20px] bg-white">
        <UserMessage text="Show me Jada Baker's compensation review" />
        
        {/* Step 0: First thinking animation */}
        {step === 0 && <JouleThinking />}
        
        {/* Step 1+: Salary History */}
        {step >= 1 && <SalaryHistoryResponse />}
        
        {/* Step 2: Second thinking animation */}
        {step === 2 && <JouleThinking />}
        
        {/* Step 3+: Bonus History */}
        {step >= 3 && <BonusHistoryResponse />}
        
        {/* Step 4: Third thinking animation */}
        {step === 4 && <JouleThinking />}
        
        {/* Step 5+: Performance Rating */}
        {step >= 5 && <PerformanceRatingResponse />}
        
        {/* Step 6: Fourth thinking animation */}
        {step === 6 && <JouleThinking />}
        
        {/* Step 7+: Insights Prompt */}
        {step >= 7 && <QuickInsightsPrompt />}
        
        {/* Step 9+: User responds "Yes" */}
        {step >= 9 && <UserMessage text="Yes" />}
        
        {/* Step 10: Fifth thinking animation */}
        {step === 10 && <JouleThinking />}
        
        {/* Step 11+: Insights Response */}
        {step >= 11 && <InsightsResponse />}
        
        {/* Step 12: Sixth thinking animation */}
        {step === 12 && <JouleThinking />}
        
        {/* Step 13+: Notebook Message */}
        {step >= 13 && <NotebookMessage />}
      </div>
      
      {/* Bottom Input - Show auto-typed "Yes" or disabled */}
      <div className="box-border content-stretch flex items-end justify-center min-w-[416px] pb-[12px] pt-[8px] px-[16px] relative shrink-0 w-[416px]" data-name="blinkenlight">
        {showYesInput ? (
          <InputField typedText={autoTypedYes} showPulse={showPulse} onSendClick={handleYesSend} />
        ) : (
          <div className="basis-0 bg-[#f5f6f7] grow min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Input Field Disabled">
            <div className="flex flex-row items-end size-full">
              <div className="box-border content-stretch flex items-end justify-between px-[6px] py-[4px] relative w-full">
                <div className="content-stretch flex items-start relative shrink-0 w-[303px]">
                  <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[7px] pt-[5px] px-0 relative shrink-0">
                    <div className="flex flex-col font-['72:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[#89969f] text-[14px] text-nowrap">
                      <p className="leading-[normal] whitespace-pre">Message Joule...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="box-border content-stretch flex gap-[10px] items-end justify-center max-w-[416px] pb-[16px] pt-[4px] px-[16px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0" data-name="Disclaimer">
        <div className="flex flex-col font-['72:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#32363a] text-[11px] text-center w-[386px]">
          <p className="leading-[14px]">Joule uses AI, verify results.</p>
        </div>
      </div>
    </div>
  );
}

export default function WelcomeScreen({ onClose, scenarioPrompt, onNotebookAutoFill }: WelcomeScreenProps = {}) {
  const [typedText, setTypedText] = useState('');
  const [showPulse, setShowPulse] = useState(false);
  const [showConversation, setShowConversation] = useState(false);
  const [startTyping, setStartTyping] = useState(false);
  const fullText = scenarioPrompt || "Show me Jada Baker's compensation review";
  
  useEffect(() => {
    if (startTyping) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          // Show pulse animation after typing is complete
          setTimeout(() => {
            setShowPulse(true);
          }, 500);
        }
      }, 50); // 50ms per character for smooth typing
      
      return () => clearInterval(typingInterval);
    }
  }, [startTyping, fullText]);
  
  const handleInputClick = () => {
    if (!startTyping && !typedText) {
      setStartTyping(true);
    }
  };
  
  const handleSendClick = () => {
    setShowConversation(true);
  };
  
  // Show conversation view if triggered
  if (showConversation) {
    return <ConversationView onClose={onClose} onNotebookAutoFill={onNotebookAutoFill} />;
  }
  
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end justify-end relative rounded-[16px] shadow-[0px_0px_2px_0px_rgba(91,115,139,0.16),0px_32px_64px_0px_rgba(91,115,139,0.16)] w-[416px] h-[750px]" data-name="Welcome screen">
      <PanelHeader onClose={onClose} />
      <WelcomeMessage1 />
      <BodyAutoLayout />
      <QuickStartButtons />
      <div 
        className="box-border content-stretch flex items-end justify-center min-w-[416px] pb-[12px] pt-[8px] px-[16px] relative shrink-0 w-[416px]" 
        data-name="blinkenlight"
        onClick={handleInputClick}
      >
        <InputField typedText={typedText} showPulse={showPulse} onSendClick={handleSendClick} />
      </div>
      <div className="box-border content-stretch flex gap-[10px] items-end justify-center max-w-[416px] pb-[16px] pt-[4px] px-[16px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0" data-name="Disclaimer">
        <div className="flex flex-col font-['72:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#32363a] text-[11px] text-center w-[386px]">
          <p className="leading-[14px]">Joule uses AI, verify results.</p>
        </div>
      </div>
    </div>
  );
}
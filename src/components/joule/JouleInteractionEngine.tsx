import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { JouleStep, getStep } from '../../data/joule-scenarios';
import { componentRegistry } from './ResponseComponents';
import { ClockLoader } from './ClockLoader';
import { AnalyzingMessage } from './AnalyzingMessage';
import svgPaths from '../../imports/svg-iywut3mmp1';
import { useTranslation } from 'react-i18next';

interface Message {
  type: 'user' | 'joule';
  text?: string;
  component?: string;
}

interface JouleInteractionEngineProps {
  scenarioId: string;
  onClose?: () => void;
  onComplete?: () => void;
}

export function JouleInteractionEngine({ scenarioId, onClose, onComplete }: JouleInteractionEngineProps) {
  const [currentStepNumber, setCurrentStepNumber] = useState(1);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showPulse, setShowPulse] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const [showSystemMessage, setShowSystemMessage] = useState(false);
  const [systemMessageText, setSystemMessageText] = useState('');
  const [jouleThinking, setJouleThinking] = useState(false);
  const [showAnalyzing, setShowAnalyzing] = useState(false);
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
  const conversationRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const currentStep = getStep(scenarioId, currentStepNumber);

  // Auto-scroll on new messages
  useEffect(() => {
    if (conversationRef.current) {
      conversationRef.current.scrollTo({
        top: conversationRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, jouleThinking]);

  // Execute current step
  useEffect(() => {
    if (!currentStep) {
      // Scenario complete
      if (onComplete) {
        setTimeout(onComplete, 1000);
      }
      return;
    }

    executeStep(currentStep);
  }, [currentStepNumber]);

  const executeStep = (step: JouleStep) => {
    switch (step.step_type) {
      case 'USER_PROMPT':
        handleUserPromptStep(step);
        break;
      case 'JOULE_TEXT_RESPONSE':
        handleJouleTextResponse(step);
        break;
      case 'JOULE_RICH_RESPONSE':
        handleJouleRichResponse(step);
        break;
      case 'SCENARIO_CHOICE':
        handleScenarioChoice(step);
        break;
      case 'SYSTEM_MESSAGE':
        handleSystemMessage(step);
        break;
      default:
        // Move to next step for unhandled types
        if (step.next_step && step.next_step !== 'END') {
          setTimeout(() => setCurrentStepNumber(step.next_step as number), 500);
        }
    }
  };

  const handleUserPromptStep = (step: JouleStep) => {
    setShowChoices(false);
    setShowSystemMessage(false);
    
    // Auto-type the user input
    if (step.user_input_text) {
      setIsTyping(true);
      setTypedText('');
      
      let currentIndex = 0;
      const text = step.user_input_text;
      
      const typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setTypedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          setTimeout(() => {
            setShowPulse(true);
          }, 300);
        }
      }, 50);
    }
  };

  const handleSendMessage = () => {
    if (!currentStep || !typedText) return;

    // Add user message to chat
    setMessages(prev => [...prev, { type: 'user', text: typedText }]);
    setTypedText('');
    setShowPulse(false);
    setIsWaitingForResponse(true);

    // Move to next step after a brief delay
    if (currentStep.next_step && currentStep.next_step !== 'END') {
      setTimeout(() => {
        setCurrentStepNumber(currentStep.next_step as number);
      }, 500);
    }
  };

  const handleJouleTextResponse = (step: JouleStep) => {
    setShowChoices(false);
    setShowSystemMessage(false);
    
    // Show thinking animation (dots)
    setJouleThinking(true);
    
    // After 800ms, show analyzing message
    setTimeout(() => {
      setJouleThinking(false);
      setShowAnalyzing(true);
      
      // After another short delay, show actual response
      setTimeout(() => {
        setShowAnalyzing(false);
        
        // Add Joule message
        if (step.joule_response_text) {
          setMessages(prev => [...prev, { 
            type: 'joule', 
            text: step.joule_response_text 
          }]);
        }

        // Reset waiting state after response is shown
        setIsWaitingForResponse(false);

        // Move to next step
        if (step.next_step && step.next_step !== 'END') {
          setTimeout(() => {
            setCurrentStepNumber(step.next_step as number);
          }, 800);
        }
      }, 1000);
    }, 800);
  };

  const handleJouleRichResponse = (step: JouleStep) => {
    setShowChoices(false);
    setShowSystemMessage(false);
    
    // Show thinking animation (dots)
    setJouleThinking(true);
    
    // After 800ms, show analyzing message
    setTimeout(() => {
      setJouleThinking(false);
      setShowAnalyzing(true);
      
      // After another short delay, show actual response
      setTimeout(() => {
        setShowAnalyzing(false);
        
        // Add Joule message with component
        if (step.joule_response_text) {
          setMessages(prev => [...prev, { 
            type: 'joule', 
            text: step.joule_response_text,
            component: step.response_component
          }]);
        }

        // Reset waiting state after response is shown
        setIsWaitingForResponse(false);

        // Move to next step
        if (step.next_step && step.next_step !== 'END') {
        setTimeout(() => {
          setCurrentStepNumber(step.next_step as number);
        }, 1000);
      }
    }, 800);
  };

  const handleScenarioChoice = (step: JouleStep) => {
    setShowSystemMessage(false);
    setShowChoices(true);
  };

  const handleChoiceClick = (choice: 'A' | 'B') => {
    if (!currentStep) return;
    
    setShowChoices(false);
    const nextStep = choice === 'A' ? currentStep.choice_a_next_step : currentStep.choice_b_next_step;
    
    if (nextStep && nextStep !== 'END') {
      setTimeout(() => {
        setCurrentStepNumber(nextStep as number);
      }, 300);
    }
  };

  const handleSystemMessage = (step: JouleStep) => {
    setShowChoices(false);
    setSystemMessageText(step.joule_response_text || '');
    setShowSystemMessage(true);
  };

  const handleSystemContinue = () => {
    if (!currentStep) return;
    
    setShowSystemMessage(false);
    if (currentStep.next_step && currentStep.next_step !== 'END') {
      setTimeout(() => {
        setCurrentStepNumber(currentStep.next_step as number);
      }, 300);
    }
  };

  const handleInputClick = () => {
    if (currentStep?.step_type === 'USER_PROMPT' && !isTyping && !typedText) {
      // Trigger auto-typing
      if (currentStep.user_input_text) {
        handleUserPromptStep(currentStep);
      }
    }
  };

  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end justify-end relative rounded-[16px] shadow-[0px_0px_2px_0px_rgba(91,115,139,0.16),0px_32px_64px_0px_rgba(91,115,139,0.16)] w-[416px] h-[750px]">
      {/* Header */}
      <PanelHeader onClose={onClose} />
      
      {/* Conversation Area */}
      <div ref={conversationRef} className="flex-1 w-full overflow-y-auto pt-[20px] bg-white">
        {messages.map((message, index) => (
          <div key={index}>
            {message.type === 'user' ? (
              <UserMessage text={message.text || ''} />
            ) : (
              <JouleMessage text={message.text} component={message.component} />
            )}
          </div>
        ))}
        
        {jouleThinking && <JouleThinking />}
        {showAnalyzing && <AnalyzingMessage />}
      </div>
      
      {/* System Message Overlay */}
      {showSystemMessage && (
        <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-10 rounded-[16px]">
          <div className="max-w-[320px] text-center space-y-[16px]">
            <p className="font-['72:Regular',sans-serif] text-[14px] text-[#1d2d3e]">
              {systemMessageText}
            </p>
            <button
              onClick={handleSystemContinue}
              className="bg-[#0070f2] hover:bg-[#005fd1] text-white px-[20px] py-[10px] rounded-[8px] font-['72:Regular',sans-serif] text-[14px]"
            >
              Continue
            </button>
          </div>
        </div>
      )}
      
      {/* Choice Buttons */}
      {showChoices && currentStep && (
        <div className="w-full px-[24px] pb-[16px]">
          <div className="flex gap-[8px]">
            <button
              onClick={() => handleChoiceClick('A')}
              className="flex-1 bg-white hover:bg-gray-50 border-2 border-[#0070f2] text-[#0070f2] px-[16px] py-[10px] rounded-[8px] font-['72:Bold',sans-serif] text-[14px] transition-colors"
            >
              {currentStep.choice_a_label}
            </button>
            <button
              onClick={() => handleChoiceClick('B')}
              className="flex-1 bg-white hover:bg-gray-50 border-2 border-[#0070f2] text-[#0070f2] px-[16px] py-[10px] rounded-[8px] font-['72:Bold',sans-serif] text-[14px] transition-colors"
            >
              {currentStep.choice_b_label}
            </button>
          </div>
        </div>
      )}
      
      {/* Input Field */}
      {!showChoices && !showSystemMessage && (
        <div 
          className="box-border content-stretch flex items-end justify-center min-w-[416px] pb-[12px] pt-[8px] px-[16px] relative shrink-0 w-[416px]"
          onClick={handleInputClick}
        >
          <InputField 
            typedText={typedText} 
            showPulse={showPulse} 
            onSendClick={handleSendMessage}
            disabled={currentStep?.step_type !== 'USER_PROMPT'}
            isWaitingForResponse={isWaitingForResponse}
          />
        </div>
      )}
      
      {/* Disclaimer */}
      <div className="box-border content-stretch flex gap-[10px] items-end justify-center max-w-[416px] pb-[16px] pt-[4px] px-[16px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0" data-name="Disclaimer">
        <div className="flex flex-col font-['72:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#32363a] text-[11px] text-center w-[386px]">
          <p className="leading-[14px]">{t('common.aiDisclaimer')}</p>
        </div>
      </div>
    </div>
  );
}

// Sub-components
function PanelHeader({ onClose }: { onClose?: () => void }) {
  return (
    <div className="bg-gradient-to-b box-border content-stretch flex from-[#5d36ff] h-[56px] items-center justify-center max-h-[56px] min-h-[56px] min-w-[416px] px-0 py-[10px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 to-[#6431fa] w-full">
      <div className="basis-0 grow h-[33px] min-h-px min-w-px relative shrink-0">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex gap-[8px] h-[33px] items-center pl-[16px] pr-0 py-0 relative w-full">
            <p className="font-['72:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Joule</p>
          </div>
        </div>
      </div>
      <div className="box-border content-stretch flex gap-[8px] items-center justify-end pl-0 pr-[16px] py-[10px] relative shrink-0">
        <button 
          onClick={onClose}
          className="bg-[rgba(0,0,0,0)] hover:bg-white/10 box-border content-stretch flex items-center justify-center min-h-[36px] p-[10px] relative rounded-[8px] shrink-0 transition-colors cursor-pointer"
        >
          <div className="overflow-clip relative shrink-0 size-[16px]">
            <div className="absolute inset-[18.86%_18.8%_18.73%_18.8%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
                <path d={svgPaths.p60d100} fill="var(--fill-0, white)" />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

function UserMessage({ text }: { text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full flex justify-end px-[24px] mb-[12px]"
    >
      <div className="bg-[#e5deff] text-[#1d2d3e] px-[16px] py-[10px] rounded-[12px] rounded-br-[4px] max-w-[80%]">
        <p className="font-['72:Regular',sans-serif] text-[14px] leading-[20px]">{text}</p>
      </div>
    </motion.div>
  );
}

function formatJouleText(text: string) {
  const lines = text.split('\n');
  const elements: JSX.Element[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip empty lines
    if (line.trim() === '') {
      elements.push(<div key={key++} className="h-[8px]" />);
      continue;
    }

    // Check for numbered list items (e.g., "1. Base Salary:" or "1) Pace of delivery:")
    const numberedMatch = line.match(/^(\d+)[.)]\s*(.+)$/);
    if (numberedMatch) {
      const content = numberedMatch[2];
      // Check if content has a bold part (ends with :)
      const boldMatch = content.match(/^(.+?:)(.*)$/);
      if (boldMatch) {
        elements.push(
          <div key={key++} className="flex gap-[8px] mb-[6px]">
            <span className="font-['72:Bold',sans-serif] text-[14px] leading-[20px] text-[#1d2d3e] shrink-0">{numberedMatch[1]}.</span>
            <div>
              <span className="font-['72:Bold',sans-serif] text-[14px] leading-[20px] text-[#1d2d3e]">{boldMatch[1]}</span>
              <span className="font-['72:Regular',sans-serif] text-[14px] leading-[20px] text-[#1d2d3e]">{boldMatch[2]}</span>
            </div>
          </div>
        );
      } else {
        elements.push(
          <div key={key++} className="flex gap-[8px] mb-[6px]">
            <span className="font-['72:Bold',sans-serif] text-[14px] leading-[20px] text-[#1d2d3e] shrink-0">{numberedMatch[1]}.</span>
            <span className="font-['72:Regular',sans-serif] text-[14px] leading-[20px] text-[#1d2d3e]">{content}</span>
          </div>
        );
      }
      continue;
    }

    // Check for bullet points
    if (line.trim().startsWith('•')) {
      const content = line.trim().substring(1).trim();
      // Check if content has a bold part (ends with :)
      const boldMatch = content.match(/^(.+?:)(.*)$/);
      if (boldMatch) {
        elements.push(
          <div key={key++} className="flex gap-[8px] mb-[4px] ml-[24px]">
            <span className="shrink-0">•</span>
            <div>
              <span className="font-['72:Bold',sans-serif] text-[14px] leading-[20px] text-[#1d2d3e]">{boldMatch[1]}</span>
              <span className="font-['72:Regular',sans-serif] text-[14px] leading-[20px] text-[#1d2d3e]">{boldMatch[2]}</span>
            </div>
          </div>
        );
      } else {
        elements.push(
          <div key={key++} className="flex gap-[8px] mb-[4px] ml-[24px]">
            <span className="shrink-0">•</span>
            <span className="font-['72:Regular',sans-serif] text-[14px] leading-[20px] text-[#1d2d3e]">{content}</span>
          </div>
        );
      }
      continue;
    }

    // Check for lines ending with colon (headers)
    if (line.trim().endsWith(':')) {
      elements.push(
        <p key={key++} className="font-['72:Bold',sans-serif] text-[14px] leading-[20px] text-[#1d2d3e] mb-[6px]">
          {line.trim()}
        </p>
      );
      continue;
    }

    // Regular text
    elements.push(
      <p key={key++} className="font-['72:Regular',sans-serif] text-[14px] leading-[20px] text-[#1d2d3e] mb-[4px]">
        {line}
      </p>
    );
  }

  return <div>{elements}</div>;
}

function JouleMessage({ text, component }: { text?: string; component?: string }) {
  const Component = component ? componentRegistry[component] : null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full flex justify-start px-[24px] mb-[12px]"
    >
      <div className="bg-[#f5f6f7] px-[16px] py-[12px] rounded-[12px] rounded-bl-[4px] max-w-[85%]">
        {text && formatJouleText(text)}
        {Component && (
          <div className={text ? "mt-[8px]" : ""}>
            <Component />
          </div>
        )}
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
            className="w-[8px] h-[8px] bg-[#a78bfa] rounded-full"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="w-[8px] h-[8px] bg-[#a78bfa] rounded-full"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className="w-[8px] h-[8px] bg-[#a78bfa] rounded-full"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function InputField({ typedText, showPulse, onSendClick, disabled, isWaitingForResponse }: { 
  typedText: string; 
  showPulse: boolean; 
  onSendClick?: () => void;
  disabled?: boolean;
  isWaitingForResponse?: boolean;
}) {
  if (disabled) {
    return (
      <div className="basis-0 bg-[#f5f6f7] grow min-h-px min-w-px relative rounded-[8px] shrink-0">
        <div className="flex flex-row items-end size-full">
          <div className="box-border content-stretch flex items-end justify-between px-[6px] py-[4px] relative w-full">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[7px] pt-[5px] px-0 relative shrink-0">
              <div className="flex flex-col font-['72:Italic',sans-serif] italic justify-center leading-[0] relative shrink-0 text-[#89969f] text-[14px] text-nowrap">
                <p className="leading-[normal] whitespace-pre">Message Joule...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border-2 border-[#0064d9] border-solid inset-[-2px] pointer-events-none rounded-[10px] shadow-[0px_0px_2px_0px_rgba(27,144,255,0.16),0px_4px_8px_0px_rgba(27,144,255,0.16)]" />
      <div className="flex flex-row items-end size-full">
        <div className="box-border content-stretch flex items-end justify-between px-[6px] py-[4px] relative w-full">
          <div className="content-stretch flex items-start relative shrink-0 w-[303px]">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center pb-[7px] pt-[5px] px-0 relative shrink-0 w-full">
              <div className="flex flex-col font-['72:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#1d2d3e] text-[14px] w-full">
                <p className="leading-[20px] break-words whitespace-pre-wrap">{typedText || <span className="italic text-[#556b82]">Message Joule...</span>}</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[4px] h-[28px] items-center justify-end relative shrink-0 w-[66px]">
            <motion.button 
              onClick={typedText && !isWaitingForResponse ? onSendClick : undefined}
              disabled={!typedText || isWaitingForResponse}
              className={`box-border content-stretch flex gap-[6px] items-center justify-center min-h-[26px] px-[6px] py-0 relative rounded-[24px] shrink-0 transition-colors ${
                typedText && !isWaitingForResponse
                  ? 'bg-[#0070f2] hover:bg-[#005fd1] cursor-pointer' 
                  : 'bg-[#d1d5db] cursor-not-allowed'
              }`}
              animate={showPulse && typedText && !isWaitingForResponse ? {
                scale: [1, 1.1, 1],
                boxShadow: [
                  '0 0 0 0 rgba(0, 112, 242, 0.7)',
                  '0 0 0 8px rgba(0, 112, 242, 0)',
                  '0 0 0 0 rgba(0, 112, 242, 0)'
                ]
              } : {}}
              transition={{
                duration: 1.5,
                repeat: showPulse && typedText && !isWaitingForResponse ? Infinity : 0,
                ease: "easeInOut"
              }}
            >
              {isWaitingForResponse ? (
                <ClockLoader />
              ) : (
                <div className="overflow-clip relative shrink-0 size-[16px]">
                  <div className="absolute inset-[6.25%_6.31%_6.25%_6.25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                      <path d={svgPaths.p28439e00} fill="var(--fill-0, white)" />
                    </svg>
                  </div>
                </div>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
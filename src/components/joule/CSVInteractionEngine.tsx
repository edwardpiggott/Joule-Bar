import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CSVStep, getStep } from '../../data/csv-scenarios';
import { csvComponentRegistry } from './CSVResponseComponents';
import { ScenarioComplete } from './ScenarioComplete';
import { ClockLoader } from './ClockLoader';
import { AnalyzingMessage } from './AnalyzingMessage';
import { useTranslation } from '../../contexts/TranslationContext';
import { getTranslatedStepContent } from '../../utils/scenarioTranslations';
import svgPaths from '../../imports/svg-iywut3mmp1';

interface Message {
  type: 'user' | 'joule' | 'dual_buttons';
  text?: string;
  component?: string;
  action_a_label?: string;
  action_b_label?: string;
  action_a_next_step?: number | 'END';
  action_b_next_step?: number | 'END';
}

interface CSVInteractionEngineProps {
  scenarioId: string;
  startStep?: number;
  onClose?: () => void;
  onComplete?: () => void;
}

export function CSVInteractionEngine({ scenarioId, startStep = 1, onClose, onComplete }: CSVInteractionEngineProps) {
  const [currentStepNumber, setCurrentStepNumber] = useState(startStep);
  const [messages, setMessages] = useState<Message[]>([]);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showPulse, setShowPulse] = useState(false);
  const [showSystemMessage, setShowSystemMessage] = useState(false);
  const [systemMessageText, setSystemMessageText] = useState('');
  const [jouleThinking, setJouleThinking] = useState(false);
  const [showAnalyzing, setShowAnalyzing] = useState(false);
  const [showAnalyzingText, setShowAnalyzingText] = useState(false);
  const [showActionButton, setShowActionButton] = useState(false);
  const [actionLabel, setActionLabel] = useState('');
  const [showDualActionButtons, setShowDualActionButtons] = useState(false);
  const [actionALabel, setActionALabel] = useState('');
  const [actionBLabel, setActionBLabel] = useState('');
  const [visualOutputComponent, setVisualOutputComponent] = useState<string | null>(null);
  const [showContinueButton, setShowContinueButton] = useState(false);
  const [showScenarioComplete, setShowScenarioComplete] = useState(false);
  const [completionMessage, setCompletionMessage] = useState('');
  const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);
  const [showClockAnimation, setShowClockAnimation] = useState(false);
  const [conversationStartTime] = useState(Date.now());
  const [timeElapsed, setTimeElapsed] = useState('Just now');
  const conversationRef = useRef<HTMLDivElement>(null);
  const responseCounter = useRef(0); // Track number of responses
  const { language, t } = useTranslation();

  // Get current step with translation
  const originalCurrentStep = getStep(scenarioId, currentStepNumber);
  const currentStep = originalCurrentStep ? getTranslatedStepContent(scenarioId, currentStepNumber, language, originalCurrentStep) : null;

  // Update timestamp every minute
  useEffect(() => {
    const updateElapsedTime = () => {
      const now = Date.now();
      const diffInMs = now - conversationStartTime;
      const diffInMinutes = Math.floor(diffInMs / 60000);
      
      if (diffInMinutes === 0) {
        setTimeElapsed(t('common.justNow'));
      } else if (diffInMinutes === 1) {
        setTimeElapsed(`1 ${t('common.minAgo')}`);
      } else if (diffInMinutes < 60) {
        setTimeElapsed(`${diffInMinutes} ${t('common.minAgo')}`);
      } else {
        const hours = Math.floor(diffInMinutes / 60);
        setTimeElapsed(hours === 1 ? `1 ${t('common.hourAgo')}` : `${hours} ${t('common.hoursAgo')}`);
      }
    };

    // Update immediately
    updateElapsedTime();

    // Update every 10 seconds to keep it relatively current
    const interval = setInterval(updateElapsedTime, 10000);

    return () => clearInterval(interval);
  }, [conversationStartTime, t, language]);

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
        setTimeout(onComplete, 500);
      }
      return;
    }

    executeStep(currentStep);
  }, [currentStepNumber]);

  const executeStep = (step: CSVStep) => {
    // Clear previous UI states
    setShowActionButton(false);
    setVisualOutputComponent(null);

    switch (step.step_type) {
      case 'SYSTEM_MESSAGE':
        handleSystemMessage(step);
        break;
      case 'USER_PROMPT':
        handleUserPromptStep(step);
        break;
      case 'USER_SELECTION':
        handleUserSelection(step);
        break;
      case 'JOULE_LOADING':
        handleJouleLoading(step);
        break;
      case 'JOULE_TEXT_RESPONSE':
        handleJouleTextResponse(step);
        break;
      case 'JOULE_RICH_RESPONSE':
        handleJouleRichResponse(step);
        break;
      case 'JOULE_VISUAL_OUTPUT':
        handleJouleVisualOutput(step);
        break;
      case 'ACTION_BUTTON':
        handleActionButton(step);
        break;
      case 'DUAL_ACTION_BUTTONS':
        handleDualActionButtons(step);
        break;
      case 'VISUAL_OUTPUT':
        handleVisualOutput(step);
        break;
      case 'SCENARIO_COMPLETE':
        handleScenarioComplete(step);
        break;
      default:
        // Move to next step for unhandled types
        if (step.next_step && step.next_step !== 'END') {
          setTimeout(() => setCurrentStepNumber(step.next_step as number), 500);
        }
    }
  };

  const handleSystemMessage = (step: CSVStep) => {
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
    } else if (currentStep.next_step === 'END') {
      if (onComplete) {
        setTimeout(onComplete, 300);
      }
    }
  };

  const handleUserPromptStep = (step: CSVStep) => {
    setShowSystemMessage(false);
    
    // Auto-type the user input
    if (step.user_input_text) {
      setIsTyping(true);
      setTypedText('');
      
      let currentIndex = 0;
      // Check if user_input_text is a translation key (starts with lowercase letter followed by dot)
      const text = /^[a-z]+\./.test(step.user_input_text) 
        ? t(step.user_input_text) 
        : step.user_input_text;
      
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

  const handleUserSelection = (step: CSVStep) => {
    setShowSystemMessage(false);
    
    // Check if this step has choice buttons
    const hasChoiceButtons = step.choice_a_label || step.choice_b_label || step.choice_c_label;
    
    if (hasChoiceButtons) {
      // Don't auto-submit, wait for user to click a button
      // The choice buttons will be rendered in the JSX below
      return;
    }
    
    // Otherwise, immediately show the selection as a user message (auto-play behavior)
    if (step.user_input_text) {
      const text = /^[a-z]+\./.test(step.user_input_text) 
        ? t(step.user_input_text) 
        : step.user_input_text;
      setMessages(prev => [...prev, { type: 'user', text }]);
    }

    // Move to next step
    if (step.next_step && step.next_step !== 'END') {
      setTimeout(() => {
        setCurrentStepNumber(step.next_step as number);
      }, 800);
    }
  };

  const handleSendMessage = () => {
    if (!currentStep || !typedText) return;

    // Add user message to chat
    setMessages(prev => [...prev, { type: 'user', text: typedText }]);
    setTypedText('');
    setShowPulse(false);
    setIsWaitingForResponse(true);
    setShowClockAnimation(true);

    // Move to next step after a brief delay
    if (currentStep.next_step && currentStep.next_step !== 'END') {
      setTimeout(() => {
        setCurrentStepNumber(currentStep.next_step as number);
      }, 500);
    }
  };

  const handleComponentSendMessage = (messageText: string) => {
    if (!currentStep) return;

    // Check for special scenario completion message
    if (messageText === '__COMPLETE_SCENARIO__') {
      // Trigger scenario completion directly
      if (currentStep.next_step && currentStep.next_step !== 'END') {
        setCurrentStepNumber(currentStep.next_step as number);
      }
      return;
    }

    // Add user message to chat
    setMessages(prev => [...prev, { type: 'user', text: messageText }]);
    setShowPulse(false);
    setIsWaitingForResponse(true);
    setShowClockAnimation(true);

    // Move to next step after a brief delay
    if (currentStep.next_step && currentStep.next_step !== 'END') {
      setTimeout(() => {
        setCurrentStepNumber(currentStep.next_step as number);
      }, 500);
    }
  };

  const handleJouleLoading = (step: CSVStep) => {
    setShowSystemMessage(false);
    
    // Show thinking animation (dots)
    setJouleThinking(true);
    
    // Use custom loading duration or default (4500ms = triple of normal 1500ms)
    const loadingDuration = step.loading_duration || 4500;
    
    // After 800ms, show the loading message as a Joule text bubble
    setTimeout(() => {
      setJouleThinking(false);
      
      // Add Joule message with loading text
      if (step.loading_message) {
        const text = /^[a-z]+\./.test(step.loading_message) 
          ? t(step.loading_message) 
          : step.loading_message;
        setMessages(prev => [...prev, { 
          type: 'joule', 
          text 
        }]);
      }
      
      // Show analyzing animation below the message
      setShowAnalyzing(true);
      
      // After loading duration, hide analyzing and move to next step
      setTimeout(() => {
        setShowAnalyzing(false);

        // Reset waiting state after response is shown
        setIsWaitingForResponse(false);

        // Check if next step is SCENARIO_COMPLETE
        if (step.next_step && step.next_step !== 'END') {
          const nextStep = getStep(scenarioId, step.next_step as number);
          if (nextStep?.step_type === 'SCENARIO_COMPLETE') {
            setTimeout(() => {
              setShowContinueButton(true);
            }, 800);
          } else {
            setTimeout(() => {
              setCurrentStepNumber(step.next_step as number);
            }, 300);
          }
        }
      }, loadingDuration - 800);
    }, 800);
  };

  const handleJouleTextResponse = (step: CSVStep) => {
    setShowSystemMessage(false);
    
    // Show thinking animation (dots)
    setJouleThinking(true);
    
    // Increment response counter
    responseCounter.current += 1;
    
    // Show text every 2-3 responses (2, 5, 8, 11, etc.)
    const shouldShowText = (responseCounter.current - 2) % 3 === 0 && responseCounter.current >= 2;
    
    // After 800ms, show analyzing message
    setTimeout(() => {
      setJouleThinking(false);
      setShowAnalyzing(true);
      setShowAnalyzingText(shouldShowText);
      
      // After another short delay, show actual response
      setTimeout(() => {
        setShowAnalyzing(false);
        setShowAnalyzingText(false);
        
        // Add Joule message
        if (step.joule_response_text) {
          const text = /^[a-z]+\./.test(step.joule_response_text) 
            ? t(step.joule_response_text) 
            : step.joule_response_text;
          setMessages(prev => [...prev, { 
            type: 'joule', 
            text 
          }]);
        }

        // Reset waiting state after response is shown
        setIsWaitingForResponse(false);

        // Check if next step is SCENARIO_COMPLETE
        if (step.next_step && step.next_step !== 'END') {
          const nextStep = getStep(scenarioId, step.next_step as number);
          if (nextStep?.step_type === 'SCENARIO_COMPLETE') {
            setTimeout(() => {
              setShowContinueButton(true);
            }, 800);
          } else {
            setTimeout(() => {
              setCurrentStepNumber(step.next_step as number);
            }, 800);
          }
        }
      }, 1000);
    }, 800);
  };

  const handleJouleRichResponse = (step: CSVStep) => {
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
        
        // Add Joule message with component (even if text is empty)
        if (step.joule_response_text || step.response_component) {
          const text = step.joule_response_text && /^[a-z]+\./.test(step.joule_response_text) 
            ? t(step.joule_response_text) 
            : step.joule_response_text;
          setMessages(prev => [...prev, { 
            type: 'joule', 
            text,
            component: step.response_component
          }]);
        }

        // Reset waiting state after response is shown
        setIsWaitingForResponse(false);

        // Only auto-advance if the component doesn't require user action
        if (!step.requires_user_action) {
          // Check if next step is SCENARIO_COMPLETE
          if (step.next_step && step.next_step !== 'END') {
            const nextStep = getStep(scenarioId, step.next_step as number);
            if (nextStep?.step_type === 'SCENARIO_COMPLETE') {
              setTimeout(() => {
                setShowContinueButton(true);
              }, 1000);
            } else {
              setTimeout(() => {
                setCurrentStepNumber(step.next_step as number);
              }, 1000);
            }
          }
        }
      }, 1000);
    }, 800);
  };

  const handleJouleVisualOutput = (step: CSVStep) => {
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
        
        // Add visual output component in the Joule message area
        if (step.response_component) {
          setMessages(prev => [...prev, { 
            type: 'joule',
            component: step.response_component
          }]);
        }

        // Reset waiting state after response is shown
        setIsWaitingForResponse(false);

        // Check if next step is SCENARIO_COMPLETE
        if (step.next_step && step.next_step !== 'END') {
          const nextStep = getStep(scenarioId, step.next_step as number);
          if (nextStep?.step_type === 'SCENARIO_COMPLETE') {
            setTimeout(() => {
              setShowContinueButton(true);
            }, 1000);
          } else {
            setTimeout(() => {
              setCurrentStepNumber(step.next_step as number);
            }, 1000);
          }
        }
      }, 1000);
    }, 800);
  };

  const handleActionButton = (step: CSVStep) => {
    setShowSystemMessage(false);
    // Translate action label if it's a translation key
    const label = step.action_label || 'Continue';
    const translatedLabel = label.includes('.') ? t(label) : label;
    setActionLabel(translatedLabel);
    setShowActionButton(true);
  };

  const handleActionButtonClick = () => {
    if (!currentStep) return;
    
    setShowActionButton(false)
    
    // Add the action button label as a user message (use translated label from state)
    if (actionLabel) {
      setMessages(prev => [...prev, { type: 'user', text: actionLabel }]);
    }
    
    if (currentStep.next_step && currentStep.next_step !== 'END') {
      setTimeout(() => {
        setCurrentStepNumber(currentStep.next_step as number);
      }, 300);
    }
  };

  const handleDualActionButtons = (step: CSVStep) => {
    setShowSystemMessage(false);
    
    // Add the dual action buttons as a message in the conversation
    setMessages(prev => [...prev, { 
      type: 'dual_buttons',
      action_a_label: step.action_a_label || 'Option A',
      action_b_label: step.action_b_label || 'Option B',
      action_a_next_step: step.action_a_next_step,
      action_b_next_step: step.action_b_next_step
    }]);
  };

  const handleDualActionButtonClick = (option: 'A' | 'B') => {
    if (!currentStep) return;
    
    setShowDualActionButtons(false);
    
    // Add the action button label as a user message
    if (option === 'A' && currentStep.action_a_label) {
      setMessages(prev => [...prev, { type: 'user', text: currentStep.action_a_label }]);
      // Navigate to action_a_next_step
      const nextStep = currentStep.action_a_next_step;
      if (nextStep && nextStep !== 'END') {
        setTimeout(() => {
          setCurrentStepNumber(nextStep as number);
        }, 300);
      }
    } else if (option === 'B' && currentStep.action_b_label) {
      setMessages(prev => [...prev, { type: 'user', text: currentStep.action_b_label }]);
      // Navigate to action_b_next_step
      const nextStep = currentStep.action_b_next_step;
      if (nextStep && nextStep !== 'END') {
        setTimeout(() => {
          setCurrentStepNumber(nextStep as number);
        }, 300);
      }
    }
  };

  const handleVisualOutput = (step: CSVStep) => {
    setShowSystemMessage(false);
    
    // Show visual output as full-screen overlay
    if (step.response_component) {
      setVisualOutputComponent(step.response_component);
    }
  };

  const handleCloseVisualOutput = () => {
    setVisualOutputComponent(null);
    
    if (currentStep && currentStep.next_step && currentStep.next_step !== 'END') {
      // Check if next step is SCENARIO_COMPLETE
      const nextStep = getStep(scenarioId, currentStep.next_step as number);
      if (nextStep?.step_type === 'SCENARIO_COMPLETE') {
        // Show continue button instead of immediately moving to next step
        setTimeout(() => {
          setShowContinueButton(true);
        }, 300);
      } else {
        setTimeout(() => {
          setCurrentStepNumber(currentStep.next_step as number);
        }, 300);
      }
    } else if (currentStep && currentStep.next_step === 'END') {
      if (onComplete) {
        setTimeout(onComplete, 300);
      }
    }
  };

  const handleScenarioComplete = (step: CSVStep) => {
    setShowSystemMessage(false);
    setCompletionMessage(step.completion_message || '');
    setShowScenarioComplete(true);
  };

  const handleContinueToComplete = () => {
    setShowContinueButton(false);
    if (currentStep && currentStep.next_step && currentStep.next_step !== 'END') {
      setTimeout(() => {
        setCurrentStepNumber(currentStep.next_step as number);
      }, 300);
    }
  };

  const handleCloseScenarioComplete = () => {
    setShowScenarioComplete(false);
    if (onComplete) {
      setTimeout(onComplete, 300);
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

  // Scenario Complete overlay
  if (showScenarioComplete && currentStep) {
    return (
      <ScenarioComplete
        persona={currentStep.persona}
        message={completionMessage}
        onClose={handleCloseScenarioComplete}
        scenarioId={currentStep.scenario_id}
      />
    );
  }

  // Visual Output overlay
  if (visualOutputComponent) {
    const VisualComponent = csvComponentRegistry[visualOutputComponent];
    return (
      <>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[80] p-[24px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-w-[90vw] max-h-[90vh] overflow-auto"
          >
            <button
              onClick={handleCloseVisualOutput}
              className="absolute top-[12px] right-[12px] bg-white rounded-full p-[8px] shadow-lg hover:bg-gray-100 z-10"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke="#1d2d3e" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            {VisualComponent && <VisualComponent onSubmit={handleCloseVisualOutput} />}
          </motion.div>
        </div>

        {/* Continue Button - Bottom Right Corner */}
        <AnimatePresence>
          {showContinueButton && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed bottom-8 right-8 z-[90]"
            >
              <button
                onClick={handleContinueToComplete}
                className="bg-gradient-to-r from-[#7b2cbf] to-[#5a189a] hover:from-[#6a24af] hover:to-[#4a1880] text-white px-6 py-3 rounded-[12px] font-['72:Bold',sans-serif] text-[16px] shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1 flex items-center gap-2"
              >
                <span>{t('common.continue')}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 4l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <div className="bg-white box-border content-stretch flex flex-col items-end justify-end relative rounded-[16px] shadow-[0px_0px_2px_0px_rgba(91,115,139,0.16),0px_32px_64px_0px_rgba(91,115,139,0.16)] w-[416px] h-[650px]">
      {/* Header */}
      <PanelHeader onClose={onClose} />
      
      {/* Sticky Timestamp */}
      <div className="sticky top-0 z-10 bg-white pt-[12px] pb-[8px] flex justify-center w-full">
        <p className="font-['72:Regular',sans-serif] text-[12px] text-[#89919a]">{timeElapsed}</p>
      </div>
      
      {/* Conversation Area */}
      <div ref={conversationRef} className="flex-1 w-full overflow-y-auto bg-white">
        {messages.map((message, index) => (
          <div key={index}>
            {message.type === 'user' ? (
              <UserMessage text={message.text || ''} />
            ) : message.type === 'dual_buttons' ? (
              <DualButtonsMessage 
                actionALabel={message.action_a_label || 'Option A'}
                actionBLabel={message.action_b_label || 'Option B'}
                onButtonClick={(option) => {
                  // Add user message with translation
                  const label = option === 'A' ? message.action_a_label : message.action_b_label;
                  if (label) {
                    // Translate label if it's a translation key
                    const translatedLabel = label.includes('.') ? t(label) : label;
                    setMessages(prev => [...prev, { type: 'user', text: translatedLabel }]);
                  }
                  // Navigate to next step
                  const nextStep = option === 'A' ? message.action_a_next_step : message.action_b_next_step;
                  if (nextStep && nextStep !== 'END') {
                    setTimeout(() => {
                      setCurrentStepNumber(nextStep as number);
                    }, 300);
                  }
                }}
              />
            ) : (
              <JouleMessage text={message.text} component={message.component} onSendMessage={handleComponentSendMessage} />
            )}
          </div>
        ))}
        
        {jouleThinking && <JouleThinking />}
        {showAnalyzing && <AnalyzingMessage showText={showAnalyzingText} />}
      </div>
      
      {/* System Message Overlay */}
      <AnimatePresence>
        {showSystemMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center z-10 rounded-[16px]"
          >
            <div className="max-w-[320px] text-center space-y-[16px]">
              <p className="font-['72:Regular',sans-serif] text-[14px] text-[#1d2d3e] leading-[22px]">
                {systemMessageText}
              </p>
              <button
                onClick={handleSystemContinue}
                className="bg-[#0070f2] hover:bg-[#005fd1] text-white px-[20px] py-[10px] rounded-[8px] font-['72:Bold',sans-serif] text-[14px] transition-colors"
              >
                {t('common.continue')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Action Button - appears above InputField */}
      {showActionButton && (
        <div className="w-full px-[24px] pb-[8px]">
          <button
            onClick={handleActionButtonClick}
            className="bg-white hover:bg-[#f5f6f7] border border-[#d9e0e6] text-[#0070f2] px-[16px] py-[8px] rounded-[20px] font-['72:Regular',sans-serif] text-[14px] transition-colors inline-flex items-center justify-center"
          >
            {actionLabel}
          </button>
        </div>
      )}
      
      {/* User Selection Buttons - for USER_SELECTION steps with choice labels */}
      {currentStep?.step_type === 'USER_SELECTION' && (currentStep.choice_a_label || currentStep.choice_b_label || currentStep.choice_c_label) && (
        <div className="w-full px-[24px] pb-[8px]">
          <div className="flex gap-[8px] flex-wrap">
            {currentStep.choice_a_label && (
              <button
                onClick={() => {
                  // Translate the label
                  const translatedLabel = t(currentStep.choice_a_label!);
                  // Add user message
                  setMessages(prev => [...prev, { type: 'user', text: translatedLabel }]);
                  // Move to next step
                  if (currentStep.next_step && currentStep.next_step !== 'END') {
                    setTimeout(() => {
                      setCurrentStepNumber(currentStep.next_step as number);
                    }, 300);
                  }
                }}
                className="bg-white hover:bg-[#f5f6f7] border border-[#d9e0e6] text-[#0070f2] px-[16px] py-[8px] rounded-[20px] font-['72:Regular',sans-serif] text-[14px] transition-colors inline-flex items-center justify-center"
              >
                {t(currentStep.choice_a_label)}
              </button>
            )}
            {currentStep.choice_b_label && (
              <button
                onClick={() => {
                  // Translate the label
                  const translatedLabel = t(currentStep.choice_b_label!);
                  // Add user message  
                  setMessages(prev => [...prev, { type: 'user', text: translatedLabel }]);
                  // Move to next step
                  if (currentStep.next_step && currentStep.next_step !== 'END') {
                    setTimeout(() => {
                      setCurrentStepNumber(currentStep.next_step as number);
                    }, 300);
                  }
                }}
                className="bg-white hover:bg-[#f5f6f7] border border-[#d9e0e6] text-[#0070f2] px-[16px] py-[8px] rounded-[20px] font-['72:Regular',sans-serif] text-[14px] transition-colors inline-flex items-center justify-center"
              >
                {t(currentStep.choice_b_label)}
              </button>
            )}
            {currentStep.choice_c_label && (
              <button
                onClick={() => {
                  // Translate the label
                  const translatedLabel = t(currentStep.choice_c_label!);
                  // Add user message
                  setMessages(prev => [...prev, { type: 'user', text: translatedLabel }]);
                  // Move to next step
                  if (currentStep.next_step && currentStep.next_step !== 'END') {
                    setTimeout(() => {
                      setCurrentStepNumber(currentStep.next_step as number);
                    }, 300);
                  }
                }}
                className="bg-white hover:bg-[#f5f6f7] border border-[#d9e0e6] text-[#0070f2] px-[16px] py-[8px] rounded-[20px] font-['72:Regular',sans-serif] text-[14px] transition-colors inline-flex items-center justify-center"
              >
                {t(currentStep.choice_c_label)}
              </button>
            )}
          </div>
        </div>
      )}
      
      {/* Dual Action Buttons - appears above InputField */}
      {showDualActionButtons && (
        <div className="w-full px-[24px] pb-[8px]">
          <div className="flex gap-[8px]">
            <button
              onClick={() => handleDualActionButtonClick('A')}
              className="bg-white hover:bg-[#f5f6f7] border border-[#d9e0e6] text-[#0070f2] px-[16px] py-[8px] rounded-[20px] font-['72:Regular',sans-serif] text-[14px] transition-colors inline-flex items-center justify-center"
            >
              {actionALabel}
            </button>
            <button
              onClick={() => handleDualActionButtonClick('B')}
              className="bg-white hover:bg-[#f5f6f7] border border-[#d9e0e6] text-[#0070f2] px-[16px] py-[8px] rounded-[20px] font-['72:Regular',sans-serif] text-[14px] transition-colors inline-flex items-center justify-center"
            >
              {actionBLabel}
            </button>
          </div>
        </div>
      )}
      
      {/* Continue Button for Scenario Complete */}
      <AnimatePresence>
        {showContinueButton && !visualOutputComponent && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="w-full px-[24px] pb-[16px]"
          >
            <button
              onClick={handleContinueToComplete}
              className="w-full bg-gradient-to-r from-[#7b2cbf] to-[#5a189a] hover:from-[#6a24af] hover:to-[#4a1880] text-white px-[20px] py-[12px] rounded-[8px] font-['72:Bold',sans-serif] text-[14px] transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>{t('common.continue')}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4l6 6-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Field - always visible except when system message or continue button is showing */}
      {!showSystemMessage && !showContinueButton && (
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
            showClockAnimation={showClockAnimation}
          />
        </div>
      )}
      
      {/* Disclaimer */}
      <div className="box-border content-stretch flex gap-[10px] items-end justify-center max-w-[416px] pb-[16px] pt-[4px] px-[16px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0">
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
    <div className="bg-gradient-to-b box-border content-stretch flex from-[#5d36ff] h-[48px] items-center justify-between max-h-[48px] min-h-[48px] min-w-[416px] px-[16px] py-[8px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 to-[#6431fa] w-full">
      {/* Left: Joule Title */}
      <p className="font-['72:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Joule</p>
      
      {/* Right: Icons */}
      <div className="flex gap-[4px] items-center">
        {/* Refresh/Undo Icon */}
        <button className="hover:bg-white/10 flex items-center justify-center w-[32px] h-[32px] rounded-[4px] transition-colors cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V1L7 6L12 11V7C15.31 7 18 9.69 18 13C18 16.31 15.31 19 12 19C8.69 19 6 16.31 6 13H4C4 17.42 7.58 21 12 21C16.42 21 20 17.42 20 13C20 8.58 16.42 5 12 5Z" fill="white"/>
          </svg>
        </button>
        
        {/* Expand Icon */}
        <button className="hover:bg-white/10 flex items-center justify-center w-[32px] h-[32px] rounded-[4px] transition-colors cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M7 14H5V19H10V17H7V14ZM5 10H7V7H10V5H5V10ZM17 17H14V19H19V14H17V17ZM14 5V7H17V10H19V5H14Z" fill="white"/>
          </svg>
        </button>
        
        {/* Menu Icon */}
        <button className="hover:bg-white/10 flex items-center justify-center w-[32px] h-[32px] rounded-[4px] transition-colors cursor-pointer">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="5" r="2" fill="white"/>
            <circle cx="12" cy="12" r="2" fill="white"/>
            <circle cx="12" cy="19" r="2" fill="white"/>
          </svg>
        </button>
        
        {/* Close Icon */}
        <button 
          onClick={onClose}
          className="hover:bg-white/10 flex items-center justify-center w-[32px] h-[32px] rounded-[4px] transition-colors cursor-pointer"
        >
          <svg width="16" height="16" viewBox="0 0 10 10" fill="none">
            <path d={svgPaths.p60d100} fill="white" />
          </svg>
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
        <p className="font-['72:Regular',sans-serif] text-[14px] leading-[20px] break-words whitespace-pre-wrap">{text}</p>
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
            <span className="shrink-0"></span>
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

function JouleMessage({ text, component, onSendMessage }: { text?: string; component?: string; onSendMessage?: (messageText: string) => void }) {
  const Component = component ? csvComponentRegistry[component] : null;
  
  // Wide components that need more space
  const wideComponents = ['regional_pie_charts', 'yoy_cost_chart'];
  const isWideComponent = component && wideComponents.includes(component);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full flex justify-start px-[24px] mb-[12px]"
    >
      <div className={`bg-[#f5f6f7] px-[16px] py-[12px] rounded-[12px] rounded-bl-[4px] ${isWideComponent ? 'max-w-[95%]' : 'max-w-[85%]'}`}>
        {text && formatJouleText(text)}
        {Component && (
          <div className={text ? "mt-[8px]" : ""}>
            <Component onSendMessage={onSendMessage} />
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

function InputField({ typedText, showPulse, onSendClick, disabled, isWaitingForResponse, showClockAnimation }: { 
  typedText: string; 
  showPulse: boolean; 
  onSendClick?: () => void;
  disabled?: boolean;
  isWaitingForResponse?: boolean;
  showClockAnimation?: boolean;
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
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[8px] shrink-0 cursor-pointer">
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

function DualButtonsMessage({ actionALabel, actionBLabel, onButtonClick }: { 
  actionALabel: string; 
  actionBLabel: string; 
  onButtonClick: (option: 'A' | 'B') => void;
}) {
  const { t } = useTranslation();
  
  // Check if labels are translation keys and translate them
  const translatedActionALabel = actionALabel.includes('.') ? t(actionALabel) : actionALabel;
  const translatedActionBLabel = actionBLabel.includes('.') ? t(actionBLabel) : actionBLabel;
  
  return (
    <div className="w-full px-[24px] pb-[8px]">
      <div className="flex gap-[8px]">
        <button
          onClick={() => onButtonClick('A')}
          className="bg-white hover:bg-[#f5f6f7] border border-[#d9e0e6] text-[#0070f2] px-[16px] py-[8px] rounded-[20px] font-['72:Regular',sans-serif] text-[14px] transition-colors inline-flex items-center justify-center"
        >
          {translatedActionALabel}
        </button>
        <button
          onClick={() => onButtonClick('B')}
          className="bg-white hover:bg-[#f5f6f7] border border-[#d9e0e6] text-[#0070f2] px-[16px] py-[8px] rounded-[20px] font-['72:Regular',sans-serif] text-[14px] transition-colors inline-flex items-center justify-center"
        >
          {translatedActionBLabel}
        </button>
      </div>
    </div>
  );
}
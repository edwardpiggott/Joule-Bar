import { useState, useEffect } from 'react';
import { BookOpen, X, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Alert, AlertDescription } from './ui/alert';

interface PayHistoryData {
  year2021: string;
  year2022: string;
  year2023: string;
  year2024: string;
}

interface BonusHistoryData {
  year2023: string;
  year2024: string;
}

interface NotebookData {
  payHistory: PayHistoryData;
  performanceRating: number;
  bonusHistory: BonusHistoryData;
}

interface FloatingNotebookProps {
  onSubmit?: (data: NotebookData) => void;
  isOpen: boolean;
  onClose: () => void;
  autoFillData?: NotebookData | null;
}

export function FloatingNotebook({ onSubmit, isOpen, onClose, autoFillData }: FloatingNotebookProps) {
  const [payHistory, setPayHistory] = useState<PayHistoryData>({
    year2021: '',
    year2022: '',
    year2023: '',
    year2024: '',
  });
  const [performanceRating, setPerformanceRating] = useState<number>(3);
  const [bonusHistory, setBonusHistory] = useState<BonusHistoryData>({
    year2023: '',
    year2024: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [isAutoFilled, setIsAutoFilled] = useState(false);
  const [dissolving, setDissolving] = useState(false);

  // Correct compensation data from Jada Baker's profile
  const CORRECT_DATA = {
    salary: {
      year2021: '126,300',
      year2022: '134,500',
      year2023: '142,300',
      year2024: '153,973',
    },
    bonus: {
      year2023: '21,345',
      year2024: '23,095',
    },
    performanceRating: 4.5,
  };

  const normalizeValue = (value: string): string => {
    return value.replace(/[$,\s]/g, '').trim();
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    // Validate salary history
    if (!payHistory.year2021.trim()) {
      newErrors.year2021 = 'Required';
    } else if (normalizeValue(payHistory.year2021) !== normalizeValue(CORRECT_DATA.salary.year2021)) {
      newErrors.year2021 = `Incorrect. Check Compensation → Salary History section`;
    }

    if (!payHistory.year2022.trim()) {
      newErrors.year2022 = 'Required';
    } else if (normalizeValue(payHistory.year2022) !== normalizeValue(CORRECT_DATA.salary.year2022)) {
      newErrors.year2022 = `Incorrect. Check Compensation → Salary History section`;
    }

    if (!payHistory.year2023.trim()) {
      newErrors.year2023 = 'Required';
    } else if (normalizeValue(payHistory.year2023) !== normalizeValue(CORRECT_DATA.salary.year2023)) {
      newErrors.year2023 = `Incorrect. Check Compensation → Salary History section`;
    }

    if (!payHistory.year2024.trim()) {
      newErrors.year2024 = 'Required';
    } else if (normalizeValue(payHistory.year2024) !== normalizeValue(CORRECT_DATA.salary.year2024)) {
      newErrors.year2024 = `Incorrect. Check Compensation → Salary History section`;
    }

    // Validate bonus history
    if (!bonusHistory.year2023.trim()) {
      newErrors.bonus2023 = 'Required';
    } else if (normalizeValue(bonusHistory.year2023) !== normalizeValue(CORRECT_DATA.bonus.year2023)) {
      newErrors.bonus2023 = `Incorrect. Check Compensation → Bonus History section`;
    }

    if (!bonusHistory.year2024.trim()) {
      newErrors.bonus2024 = 'Required';
    } else if (normalizeValue(bonusHistory.year2024) !== normalizeValue(CORRECT_DATA.bonus.year2024)) {
      newErrors.bonus2024 = `Incorrect. Check Compensation → Bonus History section`;
    }

    // Validate performance rating
    if (Math.abs(performanceRating - CORRECT_DATA.performanceRating) > 0.05) {
      newErrors.performanceRating = `Incorrect rating. Check Compensation → Performance Details (Overall Rating)`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setSubmitted(true);
      onSubmit?.({
        payHistory,
        performanceRating,
        bonusHistory,
      });
      
      // Reset submission state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  const handlePayHistoryChange = (year: keyof PayHistoryData, value: string) => {
    setPayHistory(prev => ({ ...prev, [year]: value }));
    setIsAutoFilled(false);
    // Clear error for this field
    const errorKey = year.replace('year', '');
    if (errors[errorKey] || errors[year]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[errorKey];
        delete newErrors[year];
        return newErrors;
      });
    }
  };

  const handleBonusHistoryChange = (year: keyof BonusHistoryData, value: string) => {
    setBonusHistory(prev => ({ ...prev, [year]: value }));
    setIsAutoFilled(false);
    // Clear error for this field
    const errorKey = 'bonus' + year.replace('year', '');
    if (errors[errorKey]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[errorKey];
        return newErrors;
      });
    }
  };
  
  // Handle auto-fill from Joule
  useEffect(() => {
    if (autoFillData) {
      const hasExistingData = payHistory.year2021 || payHistory.year2022 || payHistory.year2023 || payHistory.year2024;
      
      if (hasExistingData) {
        // If notebook already has data, dissolve it first
        setDissolving(true);
        setTimeout(() => {
          setPayHistory(autoFillData.payHistory);
          setPerformanceRating(autoFillData.performanceRating);
          setBonusHistory(autoFillData.bonusHistory);
          setIsAutoFilled(true);
          setDissolving(false);
        }, 500);
      } else {
        // Direct fill with animation
        setTimeout(() => {
          setPayHistory(autoFillData.payHistory);
          setPerformanceRating(autoFillData.performanceRating);
          setBonusHistory(autoFillData.bonusHistory);
          setIsAutoFilled(true);
        }, 100);
      }
    }
  }, [autoFillData]);

  const gradientTextClass = isAutoFilled ? 'bg-gradient-to-r from-[#5d36ff] to-[#a100c2] bg-clip-text text-transparent font-medium' : '';
  const gradientBgClass = isAutoFilled ? 'bg-gradient-to-r from-[#5d36ff]/5 to-[#a100c2]/5 border-[#5d36ff]/30' : '';

  return (
    <>
      {/* Floating Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-6 lg:left-8 xl:left-10 bottom-[100px] lg:bottom-[120px] xl:bottom-[140px] w-[324px] lg:w-[380px] xl:w-[440px] h-[calc(100vh-140px)] lg:h-[calc(100vh-160px)] xl:h-[calc(100vh-180px)] bg-white rounded-xl shadow-2xl z-[55] overflow-hidden flex flex-col"
            >
              {/* Header - SAP Fiori Style */}
              <div className="bg-[#354a5f] px-6 lg:px-7 xl:px-8 py-2 lg:py-2.5 xl:py-3 flex items-center justify-between border-b border-gray-200">
                <div className="flex items-center gap-3 lg:gap-4">
                  <BookOpen className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-white" />
                  <div>
                    <h3 className="text-white text-[14px] lg:text-[15px] xl:text-[16px]">Geoff's Notebook</h3>
                    <p className="text-xs lg:text-[13px] xl:text-[14px] text-white/80">Record findings for Jada Baker</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 lg:p-2.5 hover:bg-white/10 rounded transition-colors text-white"
                >
                  <X className="w-5 h-5 lg:w-6 lg:h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 lg:p-7 xl:p-8 space-y-6 lg:space-y-7 xl:space-y-8">
                {/* Success Message */}
                {submitted && (
                  <Alert className="bg-green-50 border-green-200">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800">
                      Manual findings submitted successfully!
                    </AlertDescription>
                  </Alert>
                )}
                
                {/* Joule Auto-fill Message */}
                {isAutoFilled && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-r from-[#5d36ff]/10 to-[#a100c2]/10 border border-[#5d36ff]/30 rounded-lg p-3"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#5d36ff] to-[#a100c2] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs">✨</span>
                      </div>
                      <p className="text-sm bg-gradient-to-r from-[#5d36ff] to-[#a100c2] bg-clip-text text-transparent font-medium">
                        Filled by Joule
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Pay History Section */}
                <motion.div 
                  className="space-y-3"
                  animate={dissolving ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Label className="text-gray-900 pl-1">
                    Pay History (Last 4 Years) <span className="text-red-500">*</span>
                  </Label>
                  <div className="space-y-2.5 pl-2">
                    {/* 2021 */}
                    <motion.div 
                      className="flex items-center gap-3"
                      initial={isAutoFilled ? { opacity: 0, x: -20 } : false}
                      animate={isAutoFilled ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.1, duration: 0.4 }}
                    >
                      <span className={`w-14 text-sm ${isAutoFilled ? gradientTextClass : 'text-gray-700'}`}>2021:</span>
                      <div className="relative w-32">
                        <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${isAutoFilled ? 'text-[#5d36ff]' : 'text-gray-500'}`}>$</span>
                        <Input
                          type="text"
                          placeholder=""
                          value={payHistory.year2021}
                          onChange={(e) => handlePayHistoryChange('year2021', e.target.value)}
                          className={`pl-6 ${errors.year2021 ? 'border-red-500 focus-visible:ring-red-500' : ''} ${isAutoFilled ? gradientBgClass : ''}`}
                          style={isAutoFilled ? {
                            backgroundImage: 'linear-gradient(to right, rgb(93, 54, 255), rgb(161, 0, 194))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          } : {}}
                        />
                      </div>
                    </motion.div>
                    
                    {/* 2022 */}
                    <motion.div 
                      className="flex items-center gap-3"
                      initial={isAutoFilled ? { opacity: 0, x: -20 } : false}
                      animate={isAutoFilled ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <span className={`w-14 text-sm ${isAutoFilled ? gradientTextClass : 'text-gray-700'}`}>2022:</span>
                      <div className="relative w-32">
                        <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${isAutoFilled ? 'text-[#5d36ff]' : 'text-gray-500'}`}>$</span>
                        <Input
                          type="text"
                          placeholder=""
                          value={payHistory.year2022}
                          onChange={(e) => handlePayHistoryChange('year2022', e.target.value)}
                          className={`pl-6 ${errors.year2022 ? 'border-red-500 focus-visible:ring-red-500' : ''} ${isAutoFilled ? gradientBgClass : ''}`}
                          style={isAutoFilled ? {
                            backgroundImage: 'linear-gradient(to right, rgb(93, 54, 255), rgb(161, 0, 194))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          } : {}}
                        />
                      </div>
                    </motion.div>
                    
                    {/* 2023 */}
                    <motion.div 
                      className="flex items-center gap-3"
                      initial={isAutoFilled ? { opacity: 0, x: -20 } : false}
                      animate={isAutoFilled ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <span className={`w-14 text-sm ${isAutoFilled ? gradientTextClass : 'text-gray-700'}`}>2023:</span>
                      <div className="relative w-32">
                        <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${isAutoFilled ? 'text-[#5d36ff]' : 'text-gray-500'}`}>$</span>
                        <Input
                          type="text"
                          placeholder=""
                          value={payHistory.year2023}
                          onChange={(e) => handlePayHistoryChange('year2023', e.target.value)}
                          className={`pl-6 ${errors.year2023 ? 'border-red-500 focus-visible:ring-red-500' : ''} ${isAutoFilled ? gradientBgClass : ''}`}
                          style={isAutoFilled ? {
                            backgroundImage: 'linear-gradient(to right, rgb(93, 54, 255), rgb(161, 0, 194))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          } : {}}
                        />
                      </div>
                    </motion.div>
                    
                    {/* 2024 */}
                    <motion.div 
                      className="flex items-center gap-3"
                      initial={isAutoFilled ? { opacity: 0, x: -20 } : false}
                      animate={isAutoFilled ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      <span className={`w-14 text-sm ${isAutoFilled ? gradientTextClass : 'text-gray-700'}`}>2024:</span>
                      <div className="relative w-32">
                        <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${isAutoFilled ? 'text-[#5d36ff]' : 'text-gray-500'}`}>$</span>
                        <Input
                          type="text"
                          placeholder=""
                          value={payHistory.year2024}
                          onChange={(e) => handlePayHistoryChange('year2024', e.target.value)}
                          className={`pl-6 ${errors.year2024 ? 'border-red-500 focus-visible:ring-red-500' : ''} ${isAutoFilled ? gradientBgClass : ''}`}
                          style={isAutoFilled ? {
                            backgroundImage: 'linear-gradient(to right, rgb(93, 54, 255), rgb(161, 0, 194))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          } : {}}
                        />
                      </div>
                    </motion.div>
                  </div>
                  {(errors.year2021 || errors.year2022 || errors.year2023 || errors.year2024) && (
                    <div className="space-y-1">
                      {errors.year2021 && (
                        <div className="flex items-start gap-1 text-red-600 text-xs pl-1">
                          <AlertCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span>2021: {errors.year2021}</span>
                        </div>
                      )}
                      {errors.year2022 && (
                        <div className="flex items-start gap-1 text-red-600 text-xs pl-1">
                          <AlertCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span>2022: {errors.year2022}</span>
                        </div>
                      )}
                      {errors.year2023 && (
                        <div className="flex items-start gap-1 text-red-600 text-xs pl-1">
                          <AlertCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span>2023: {errors.year2023}</span>
                        </div>
                      )}
                      {errors.year2024 && (
                        <div className="flex items-start gap-1 text-red-600 text-xs pl-1">
                          <AlertCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span>2024: {errors.year2024}</span>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>

                {/* Performance Rating Section */}
                <motion.div 
                  className="space-y-3"
                  animate={dissolving ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  initial={isAutoFilled ? { opacity: 0, x: -20 } : false}
                  animate={isAutoFilled ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <Label className={`pl-1 ${isAutoFilled ? gradientTextClass : 'text-gray-900'}`}>
                    Performance Rating <span className="text-red-500">*</span>
                  </Label>
                  <div className="space-y-3 px-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className={isAutoFilled ? gradientTextClass : 'text-gray-600'}>1.0</span>
                      <span className={isAutoFilled ? gradientTextClass : 'text-gray-900'}>{performanceRating.toFixed(1)}</span>
                      <span className={isAutoFilled ? gradientTextClass : 'text-gray-600'}>5.0</span>
                    </div>
                    <Slider
                      value={[performanceRating]}
                      onValueChange={(value) => {
                        setPerformanceRating(value[0]);
                        setIsAutoFilled(false);
                        // Clear error for performance rating
                        if (errors.performanceRating) {
                          setErrors(prev => {
                            const newErrors = { ...prev };
                            delete newErrors.performanceRating;
                            return newErrors;
                          });
                        }
                      }}
                      min={1}
                      max={5}
                      step={0.1}
                      className="w-full"
                    />
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Poor</span>
                      <span>Exceeds</span>
                    </div>
                  </div>
                  {errors.performanceRating && (
                    <div className="flex items-start gap-1 text-red-600 text-xs pl-1">
                      <AlertCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                      <span>{errors.performanceRating}</span>
                    </div>
                  )}
                </motion.div>

                {/* Bonus History Section */}
                <motion.div 
                  className="space-y-3"
                  animate={dissolving ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Label className={`pl-1 ${isAutoFilled ? gradientTextClass : 'text-gray-900'}`}>
                    Bonus History (Last 2 Years) <span className="text-red-500">*</span>
                  </Label>
                  <div className="space-y-2.5 pl-2">
                    {/* 2023 */}
                    <motion.div 
                      className="flex items-center gap-3"
                      initial={isAutoFilled ? { opacity: 0, x: -20 } : false}
                      animate={isAutoFilled ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6, duration: 0.4 }}
                    >
                      <span className={`w-14 text-sm ${isAutoFilled ? gradientTextClass : 'text-gray-700'}`}>2023:</span>
                      <div className="relative w-32">
                        <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${isAutoFilled ? 'text-[#5d36ff]' : 'text-gray-500'}`}>$</span>
                        <Input
                          type="text"
                          placeholder=""
                          value={bonusHistory.year2023}
                          onChange={(e) => handleBonusHistoryChange('year2023', e.target.value)}
                          className={`pl-6 ${errors.bonus2023 ? 'border-red-500 focus-visible:ring-red-500' : ''} ${isAutoFilled ? gradientBgClass : ''}`}
                          style={isAutoFilled ? {
                            backgroundImage: 'linear-gradient(to right, rgb(93, 54, 255), rgb(161, 0, 194))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          } : {}}
                        />
                      </div>
                    </motion.div>
                    
                    {/* 2024 */}
                    <motion.div 
                      className="flex items-center gap-3"
                      initial={isAutoFilled ? { opacity: 0, x: -20 } : false}
                      animate={isAutoFilled ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7, duration: 0.4 }}
                    >
                      <span className={`w-14 text-sm ${isAutoFilled ? gradientTextClass : 'text-gray-700'}`}>2024:</span>
                      <div className="relative w-32">
                        <span className={`absolute left-3 top-1/2 -translate-y-1/2 ${isAutoFilled ? 'text-[#5d36ff]' : 'text-gray-500'}`}>$</span>
                        <Input
                          type="text"
                          placeholder=""
                          value={bonusHistory.year2024}
                          onChange={(e) => handleBonusHistoryChange('year2024', e.target.value)}
                          className={`pl-6 ${errors.bonus2024 ? 'border-red-500 focus-visible:ring-red-500' : ''} ${isAutoFilled ? gradientBgClass : ''}`}
                          style={isAutoFilled ? {
                            backgroundImage: 'linear-gradient(to right, rgb(93, 54, 255), rgb(161, 0, 194))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          } : {}}
                        />
                      </div>
                    </motion.div>
                  </div>
                  {(errors.bonus2023 || errors.bonus2024) && (
                    <div className="space-y-1">
                      {errors.bonus2023 && (
                        <div className="flex items-start gap-1 text-red-600 text-xs pl-1">
                          <AlertCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span>2023: {errors.bonus2023}</span>
                        </div>
                      )}
                      {errors.bonus2024 && (
                        <div className="flex items-start gap-1 text-red-600 text-xs pl-1">
                          <AlertCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span>2024: {errors.bonus2024}</span>
                        </div>
                      )}
                    </div>
                  )}
                </motion.div>



                {/* Action Buttons */}
                <div className="flex flex-col gap-2 pt-2">
                  <Button
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Submit Manual Findings
                  </Button>
                  <Button
                    onClick={onClose}
                    variant="outline"
                    className="w-full"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

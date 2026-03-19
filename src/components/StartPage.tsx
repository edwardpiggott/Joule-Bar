import { Clock, Zap, Target, TrendingUp, BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';

interface StartPageProps {
  onStart: () => void;
}

export function StartPage({ onStart }: StartPageProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#5d36ff] to-[#a100c2] p-4 lg:p-6 xl:p-8">
      <div className="max-w-[900px] lg:max-w-[1100px] xl:max-w-[1300px] w-full bg-white rounded-xl lg:rounded-2xl shadow-[0px_0px_2px_0px_rgba(91,115,139,0.16),0px_32px_64px_0px_rgba(91,115,139,0.16)] border border-black/10">
        {/* Header */}
        <div className="bg-gradient-to-b from-[#5d36ff] to-[#6431fa] rounded-t-xl lg:rounded-t-2xl px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-5">
          <div className="flex items-center gap-2.5 lg:gap-3 mb-1 lg:mb-1.5">
            <svg
              className="h-6 lg:h-7 xl:h-8 w-auto"
              viewBox="0 0 52 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="sapGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="26"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFFFFF" />
                  <stop offset="1" stopColor="#E0E0E0" />
                </linearGradient>
              </defs>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26 26L52 0H0V26H26Z"
                fill="url(#sapGradient)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31.1603 12.5854H30.0322V8.46083H31.1603C32.6639 8.46083 33.8636 8.96061 33.8636 10.4961C33.8636 12.0849 32.6639 12.5854 31.1603 12.5854V12.5854ZM19.0291 15.5263C18.4318 15.5263 17.8721 15.4223 17.3897 15.2403L19.0118 10.1212H19.0421L20.6368 15.2541C20.1572 15.4245 19.6105 15.5263 19.0291 15.5263ZM30.8598 5.11261L25.7407 5.10972V17.2799L21.2694 5.10972H16.8357L13.0181 15.288C12.6114 12.7212 9.95656 11.8351 7.86789 11.1706C6.48917 10.7279 5.02522 10.0764 5.03967 9.35639C5.0505 8.76561 5.824 8.21672 7.35656 8.29906C8.38644 8.35394 9.295 8.437 11.1027 9.30872L12.8808 6.21256C11.2306 5.37261 8.95122 4.84178 7.08283 4.83961H7.07128C4.89306 4.83961 3.07739 5.54594 1.95217 6.70944C1.16783 7.52194 0.744611 8.55328 0.727278 9.69511C0.698389 11.2652 1.27472 12.3796 2.48444 13.2687C3.50639 14.0176 4.81361 14.5037 5.96556 14.8604C7.38617 15.301 8.54606 15.6831 8.53306 16.4999C8.52222 16.7967 8.40956 17.0741 8.19578 17.2987C7.84189 17.6641 7.29733 17.8013 6.54622 17.8158C5.09672 17.8461 4.02061 17.6193 2.30822 16.6068L0.727278 19.747C2.43533 20.7191 4.45828 21.2889 6.52167 21.2889L6.78744 21.2861C8.58361 21.2536 10.0338 20.7415 11.1916 19.8091C11.258 19.7564 11.3179 19.7015 11.3793 19.6473L10.8658 21.0188H15.5155L16.2962 18.6449C17.1131 18.9244 18.0418 19.0782 19.0291 19.0782C19.9904 19.0782 20.8953 18.9316 21.697 18.6687L22.4488 21.0188H30.0322V16.1048H31.6853C35.6843 16.1048 38.0488 14.0689 38.0488 10.6571C38.0488 6.85678 35.7507 5.11261 30.8598 5.11261V5.11261Z"
                fill="#5d36ff"
              />
            </svg>
            <div className="h-5 lg:h-6 xl:h-7 w-[1px] bg-white/30" />
            <span className="font-['72:Bold',sans-serif] text-white text-[14px] lg:text-[16px] xl:text-[18px]">Joule</span>
          </div>
          <h1 className="font-['72:Light',sans-serif] text-white text-[22px] lg:text-[26px] xl:text-[30px] leading-[28px] lg:leading-[34px] xl:leading-[38px] tracking-[-0.5px]">
            SuccessFactors Compensation Review Challenge
          </h1>
          <p className="font-['72:Regular',sans-serif] text-white/90 text-[12px] lg:text-[14px] xl:text-[15px] mt-0.5">
            Experience the efficiency difference: Manual vs. AI-Powered
          </p>
        </div>

        {/* Content - Compact Two-Column Layout */}
        <div className="px-6 lg:px-8 xl:px-10 py-4 lg:py-5 xl:py-6">
          <div className="grid grid-cols-[1fr,1.2fr] gap-4 lg:gap-6 xl:gap-8">
            {/* Left Column */}
            <div className="space-y-3 lg:space-y-4 xl:space-y-5">
              {/* Scenario */}
              <div className="flex gap-2.5 lg:gap-3 xl:gap-4">
                <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-gradient-to-b from-[#5d36ff] to-[#a100c2] rounded-lg flex items-center justify-center">
                  <span className="text-white text-[15px] lg:text-[18px] xl:text-[20px]">👤</span>
                </div>
                <div>
                  <h3 className="font-['72:Bold',sans-serif] text-[#1d2d3e] text-[12px] lg:text-[14px] xl:text-[15px] mb-0.5">Your Role</h3>
                  <p className="font-['72:Regular',sans-serif] text-[#556b82] text-[12px] lg:text-[13px] xl:text-[14px] leading-[17px] lg:leading-[19px] xl:leading-[21px]">
                    You're <strong className="text-[#1d2d3e]">Geoff</strong>, preparing for <strong className="text-[#1d2d3e]">Jada Baker's</strong> compensation review. Gather critical information from SuccessFactors.
                  </p>
                </div>
              </div>

              {/* Objectives */}
              <div className="flex gap-2.5 lg:gap-3 xl:gap-4">
                <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-gradient-to-b from-[#5d36ff] to-[#a100c2] rounded-lg flex items-center justify-center">
                  <Target className="w-3.5 h-3.5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-['72:Bold',sans-serif] text-[#1d2d3e] text-[12px] lg:text-[14px] xl:text-[15px] mb-1 lg:mb-1.5">Required Information</h3>
                  <div className="space-y-1 lg:space-y-1.5">
                    <div className="flex items-start gap-2 lg:gap-2.5">
                      <div className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-[#f5f6f7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="font-['72:Bold',sans-serif] text-[9px] lg:text-[10px] xl:text-[11px] text-[#556b82]">1</span>
                      </div>
                      <span className="font-['72:Regular',sans-serif] text-[#556b82] text-[12px] lg:text-[13px] xl:text-[14px] leading-[17px] lg:leading-[19px] xl:leading-[21px]">
                        <strong className="text-[#1d2d3e]">Salary History:</strong> Last 4 years (2021-2024)
                      </span>
                    </div>
                    <div className="flex items-start gap-2 lg:gap-2.5">
                      <div className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-[#f5f6f7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="font-['72:Bold',sans-serif] text-[9px] lg:text-[10px] xl:text-[11px] text-[#556b82]">2</span>
                      </div>
                      <span className="font-['72:Regular',sans-serif] text-[#556b82] text-[12px] lg:text-[13px] xl:text-[14px] leading-[17px] lg:leading-[19px] xl:leading-[21px]">
                        <strong className="text-[#1d2d3e]">Performance Rating:</strong> Most recent rating
                      </span>
                    </div>
                    <div className="flex items-start gap-2 lg:gap-2.5">
                      <div className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-[#f5f6f7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="font-['72:Bold',sans-serif] text-[9px] lg:text-[10px] xl:text-[11px] text-[#556b82]">3</span>
                      </div>
                      <span className="font-['72:Regular',sans-serif] text-[#556b82] text-[12px] lg:text-[13px] xl:text-[14px] leading-[17px] lg:leading-[19px] xl:leading-[21px]">
                        <strong className="text-[#1d2d3e]">Bonus History:</strong> Last 2 years (2023-2024)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modes Comparison - More Visual */}
              <div className="flex gap-2.5 lg:gap-3 xl:gap-4">
                <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-gradient-to-b from-[#5d36ff] to-[#a100c2] rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-3.5 h-3.5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-['72:Bold',sans-serif] text-[#1d2d3e] text-[12px] lg:text-[14px] xl:text-[15px] mb-1.5 lg:mb-2">The Challenge</h3>
                  <div className="flex items-center gap-2 lg:gap-3">
                    {/* Manual Mode */}
                    <div className="flex-1 border border-[#d9e0e6] rounded-lg p-2 lg:p-2.5 xl:p-3 bg-[#f5f6f7]">
                      <div className="flex items-center gap-1.5 lg:gap-2 mb-0.5 lg:mb-1">
                        <div className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 bg-[#556b82] rounded-full flex items-center justify-center">
                          <Clock className="w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 text-white" />
                        </div>
                        <span className="font-['72:Bold',sans-serif] text-[#1d2d3e] text-[11px] lg:text-[12px] xl:text-[13px]">Manual First</span>
                      </div>
                      <p className="font-['72:Regular',sans-serif] text-[#556b82] text-[9px] lg:text-[10px] xl:text-[11px] leading-[13px] lg:leading-[14px] xl:leading-[15px]">
                        Traditional navigation
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 text-[#5d36ff] flex-shrink-0" />

                    {/* Joule Mode */}
                    <div className="flex-1 border-2 border-[#5d36ff] rounded-lg p-2 lg:p-2.5 xl:p-3 bg-gradient-to-b from-[#faf9ff] to-[#f5f3ff] relative overflow-hidden">
                      {/* Subtle shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
                      <div className="relative">
                        <div className="flex items-center gap-1.5 lg:gap-2 mb-0.5 lg:mb-1">
                          <div className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 bg-gradient-to-b from-[#5d36ff] to-[#a100c2] rounded-full flex items-center justify-center">
                            <Zap className="w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 text-white" />
                          </div>
                          <span className="font-['72:Bold',sans-serif] text-[#1d2d3e] text-[11px] lg:text-[12px] xl:text-[13px]">Then Joule</span>
                        </div>
                        <p className="font-['72:Regular',sans-serif] text-[#556b82] text-[9px] lg:text-[10px] xl:text-[11px] leading-[13px] lg:leading-[14px] xl:leading-[15px]">
                          AI-powered speed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-3 lg:space-y-4 xl:space-y-5">
              {/* How to Play - With Step Numbers */}
              <div className="flex gap-2.5 lg:gap-3 xl:gap-4">
                <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 bg-gradient-to-b from-[#5d36ff] to-[#a100c2] rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-['72:Bold',sans-serif] text-[#1d2d3e] text-[12px] lg:text-[14px] xl:text-[15px] mb-1 lg:mb-1.5">Your Steps</h3>
                  <p className="font-['72:Regular',sans-serif] text-[#556b82] text-[11px] lg:text-[12px] xl:text-[13px] leading-[15px] lg:leading-[17px] xl:leading-[19px] mb-1.5 lg:mb-2">
                    Follow this simple workflow:
                  </p>
                  <div className="grid grid-cols-2 gap-x-2.5 lg:gap-x-3 xl:gap-x-4 gap-y-1 lg:gap-y-1.5">
                    {/* Left Column - Steps 1-3 */}
                    <div className="space-y-1 lg:space-y-1.5">
                      <div className="flex items-start gap-1.5 lg:gap-2">
                        <div className="w-3.5 h-3.5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 bg-[#f5f6f7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="font-['72:Bold',sans-serif] text-[8px] lg:text-[9px] xl:text-[10px] text-[#556b82]">1</span>
                        </div>
                        <span className="font-['72:Regular',sans-serif] text-[#556b82] text-[11px] lg:text-[12px] xl:text-[13px] leading-[15px] lg:leading-[17px] xl:leading-[19px]">
                          Search for <strong className="text-[#1d2d3e]">Jada Baker</strong>
                        </span>
                      </div>
                      <div className="flex items-start gap-1.5 lg:gap-2">
                        <div className="w-3.5 h-3.5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 bg-[#f5f6f7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="font-['72:Bold',sans-serif] text-[8px] lg:text-[9px] xl:text-[10px] text-[#556b82]">2</span>
                        </div>
                        <span className="font-['72:Regular',sans-serif] text-[#556b82] text-[11px] lg:text-[12px] xl:text-[13px] leading-[15px] lg:leading-[17px] xl:leading-[19px]">
                          Go to her <strong className="text-[#1d2d3e]">People Profile</strong>
                        </span>
                      </div>
                      <div className="flex items-start gap-1.5 lg:gap-2">
                        <div className="w-3.5 h-3.5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 bg-[#f5f6f7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="font-['72:Bold',sans-serif] text-[8px] lg:text-[9px] xl:text-[10px] text-[#556b82]">3</span>
                        </div>
                        <span className="font-['72:Regular',sans-serif] text-[#556b82] text-[11px] lg:text-[12px] xl:text-[13px] leading-[15px] lg:leading-[17px] xl:leading-[19px]">
                          Navigate to the <strong className="text-[#1d2d3e]">Compensation</strong> section
                        </span>
                      </div>
                    </div>

                    {/* Right Column - Steps 4-6 */}
                    <div className="space-y-1 lg:space-y-1.5">
                      <div className="flex items-start gap-1.5 lg:gap-2">
                        <div className="w-3.5 h-3.5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 bg-[#f5f6f7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="font-['72:Bold',sans-serif] text-[8px] lg:text-[9px] xl:text-[10px] text-[#556b82]">4</span>
                        </div>
                        <span className="font-['72:Regular',sans-serif] text-[#556b82] text-[11px] lg:text-[12px] xl:text-[13px] leading-[15px] lg:leading-[17px] xl:leading-[19px]">
                          Open the <strong className="text-[#1d2d3e]">Notebook</strong> (bottom left)
                        </span>
                      </div>
                      <div className="flex items-start gap-1.5 lg:gap-2">
                        <div className="w-3.5 h-3.5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 bg-[#f5f6f7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="font-['72:Bold',sans-serif] text-[8px] lg:text-[9px] xl:text-[10px] text-[#556b82]">5</span>
                        </div>
                        <span className="font-['72:Regular',sans-serif] text-[#556b82] text-[11px] lg:text-[12px] xl:text-[13px] leading-[15px] lg:leading-[17px] xl:leading-[19px]">
                          Enter the compensation details manually
                        </span>
                      </div>
                      <div className="flex items-start gap-1.5 lg:gap-2">
                        <div className="w-3.5 h-3.5 lg:w-4 lg:h-4 xl:w-5 xl:h-5 bg-[#f5f6f7] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="font-['72:Bold',sans-serif] text-[8px] lg:text-[9px] xl:text-[10px] text-[#556b82]">6</span>
                        </div>
                        <span className="font-['72:Regular',sans-serif] text-[#556b82] text-[11px] lg:text-[12px] xl:text-[13px] leading-[15px] lg:leading-[17px] xl:leading-[19px]">
                          Click <strong className="text-[#1d2d3e]">Submit</strong>
                        </span>
                      </div>
                    </div>

                    {/* Joule Step - Spans Both Columns - More Prominent */}
                    <div className="col-span-2 flex items-center gap-2 lg:gap-2.5 mt-0.5 lg:mt-1 bg-gradient-to-r from-[#f5f3ff] to-[#faf9ff] border border-[#e5d9ff] rounded-lg px-2 lg:px-2.5 xl:px-3 py-1.5 lg:py-2">
                      <div className="w-4 h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 bg-gradient-to-b from-[#5d36ff] to-[#a100c2] rounded-full flex items-center justify-center flex-shrink-0">
                        <Zap className="w-2.5 h-2.5 lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 text-white" />
                      </div>
                      <span className="font-['72:Regular',sans-serif] text-[#1d2d3e] text-[11px] lg:text-[12px] xl:text-[13px] leading-[15px] lg:leading-[17px] xl:leading-[19px]">
                        Then <strong className="bg-gradient-to-r from-[#5d36ff] to-[#a100c2] bg-clip-text text-transparent">Joule</strong> shows you the faster way
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Banner - Notebook Tool with Animation */}
              <div className="bg-gradient-to-r from-[#fef7e6] to-[#fff9ed] border-2 border-[#f4d88a] rounded-lg px-2.5 lg:px-3 xl:px-4 py-1.5 lg:py-2 relative overflow-hidden">
                {/* Subtle pulse background */}
                <div className="absolute inset-0 bg-amber-50/50 animate-[pulse_3s_ease-in-out_infinite]" />
                
                <div className="relative">
                  <div className="flex items-center gap-1.5 lg:gap-2 mb-1 lg:mb-1.5">
                    <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 bg-amber-100 rounded flex items-center justify-center">
                      <BookOpen className="w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 text-amber-700" />
                    </div>
                    <h3 className="font-['72:Bold',sans-serif] text-[#1d2d3e] text-[10px] lg:text-[11px] xl:text-[12px]">
                      📍 Notebook at bottom-left
                    </h3>
                  </div>
                  {/* Visual Preview with Enhanced Animation */}
                  <div className="inline-flex items-center gap-1.5 lg:gap-2 bg-white/80 rounded px-1.5 lg:px-2 py-1 lg:py-1.5 border border-amber-300 shadow-sm">
                    <div className="flex items-center gap-1 lg:gap-1.5 pr-1 lg:pr-1.5 border-r border-gray-300">
                      <Clock className="w-2.5 h-2.5 lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 text-gray-600" />
                      <span className="text-[8px] lg:text-[9px] xl:text-[10px] text-gray-600 font-mono">00:00</span>
                    </div>
                    <div className="relative">
                      <div className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 bg-gradient-to-b from-[#5d36ff] to-[#a100c2] rounded flex items-center justify-center animate-[bounce_2s_ease-in-out_infinite]">
                        <BookOpen className="w-2.5 h-2.5 lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 text-white" />
                      </div>
                      <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-amber-500 rounded-full animate-pulse" />
                    </div>
                    <ArrowRight className="w-2.5 h-2.5 lg:w-3 lg:h-3 xl:w-3.5 xl:h-3.5 text-amber-600" />
                    <span className="font-['72:Bold',sans-serif] text-[8px] lg:text-[9px] xl:text-[10px] text-amber-900">Click</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button - More Prominent */}
          <div className="flex justify-center px-[18%] lg:px-[20%] xl:px-[22%] mt-3.5 lg:mt-4 xl:mt-5">
            <div className="relative p-1 lg:p-1.5 rounded-xl w-full">
              {/* Rotating LED Border Effect */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <div 
                  className="absolute -inset-[100%] animate-[ledRotate_3s_linear_infinite]"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0%, #5d36ff 25%, #a100c2 50%, #5d36ff 75%, transparent 100%)',
                  }}
                />
              </div>
              
              {/* Glowing Pulse Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#5d36ff]/50 via-[#a100c2]/50 to-[#5d36ff]/50 blur-sm animate-[ledGlow_2s_ease-in-out_infinite]" />
              
              {/* Button */}
              <button
                onClick={onStart}
                className="relative w-full bg-gradient-to-b from-[#5d36ff] to-[#a100c2] hover:from-[#4d26ef] hover:to-[#9100b2] text-white rounded-lg px-6 lg:px-8 xl:px-10 py-3 lg:py-3.5 xl:py-4 font-['72:Bold',sans-serif] text-[15px] lg:text-[17px] xl:text-[19px] text-center transition-all duration-200 shadow-[0px_0px_2px_0px_rgba(93,54,255,0.16),0px_4px_8px_0px_rgba(93,54,255,0.24)] hover:shadow-[0px_0px_2px_0px_rgba(93,54,255,0.24),0px_8px_16px_0px_rgba(93,54,255,0.32)] transform hover:-translate-y-0.5 hover:scale-[1.02] z-10 group"
              >
                <span className="flex items-center justify-center gap-2 lg:gap-2.5 xl:gap-3">
                  Start Challenge
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <p className="font-['72:Regular',sans-serif] text-[#89969f] text-[10px] text-center pt-2">
            Demonstration environment for learning purposes
          </p>
        </div>
      </div>
    </div>
  );
}

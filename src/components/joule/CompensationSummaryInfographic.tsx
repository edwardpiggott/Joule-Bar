import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';

export function CompensationSummaryInfographic() {
  const { t, language } = useTranslation();
  const isGerman = language === 'de';
  
  return (
    <div className="bg-white rounded-[12px] border border-[#d9e0e6] overflow-hidden mt-[12px] max-w-[680px]">
      {/* Header */}
      <div className="px-[24px] py-[16px] border-b border-[#d9e0e6]" style={{
        background: 'linear-gradient(135deg, #7b2cbf 0%, #5a189a 50%, #3c096c 100%)'
      }}>
        <h3 className="font-['72:Bold',sans-serif] text-[17px] text-white">{t('comp.analysis.title')}</h3>
        <p className="font-['72:Regular',sans-serif] text-[13px] text-white/80 mt-[2px]">{t('comp.analysis.subtitle')}</p>
      </div>

      {/* Employee Info Grid */}
      <div className="grid grid-cols-3 gap-[16px] p-[24px] border-b border-[#d9e0e6] bg-[#f5f6f7]">
        <div>
          <p className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82] mb-[4px]">{t('comp.analysis.startDate')}</p>
          <p className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e]">{t('comp.analysis.startDateValue')}</p>
        </div>
        <div>
          <p className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82] mb-[4px]">{t('comp.analysis.position')}</p>
          <p className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e]">{t('comp.analysis.positionValue')}</p>
        </div>
        <div>
          <p className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82] mb-[4px]">{t('comp.analysis.payGrade')}</p>
          <p className="font-['72:Bold',sans-serif] text-[14px] text-[#1976d2]">GR-08</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-[24px]">
        {/* Summary Section */}
        <div className="mb-[24px]">
          <h4 className="font-['72:Bold',sans-serif] text-[15px] text-[#1d2d3e] mb-[12px]">{t('comp.analysis.summary')}</h4>
          <div className="grid grid-cols-2 gap-[16px]">
            {/* Current Salary Card */}
            <div className="p-[16px] rounded-[8px] border-2 border-[#7b2cbf] bg-gradient-to-br from-[#f3e5f5] to-white min-h-[110px] flex flex-col justify-between">
              <p className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82] mb-[6px]">{t('comp.analysis.currentBaseSalary')}</p>
              <p className="font-['72:Bold',sans-serif] text-[26px] leading-[1.1] break-words" style={{ color: '#5a189a' }}>$55,734.54</p>
              <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82] mt-[4px]">{t('comp.analysis.yearlyCompensation')}</p>
            </div>

            {/* Compa-Ratio Card */}
            <div className="p-[16px] rounded-[8px] bg-[#fff3e0] border-2 border-[#ffb74d] min-h-[110px] flex flex-col justify-between">
              <div className="flex items-start justify-between gap-[8px] mb-[6px]">
                <p className={`font-['72:Bold',sans-serif] ${isGerman ? 'text-[11px]' : 'text-[13px]'} text-[#1d2d3e] break-words flex-1`}>{t('comp.analysis.compaRatio')}</p>
                <p className="font-['72:Bold',sans-serif] text-[22px] leading-[1] text-[#f57c00] flex-shrink-0">84%</p>
              </div>
              <div className="w-full bg-white rounded-full h-[10px] overflow-hidden border border-[#ffb74d] mb-[6px]">
                <div 
                  className="h-full rounded-full transition-all duration-500"
                  style={{ 
                    width: '84%',
                    background: 'linear-gradient(90deg, #ff9800 0%, #f57c00 100%)'
                  }}
                />
              </div>
              <p className="font-['72:Regular',sans-serif] text-[11px] text-[#e65100] leading-[16px]">
                {t('comp.analysis.belowMarketMidpoint')}
              </p>
            </div>
          </div>
        </div>

        {/* Compensation History Section */}
        <div className="mb-[24px]">
          <h4 className="font-['72:Bold',sans-serif] text-[15px] text-[#1d2d3e] mb-[12px]">{t('comp.analysis.compensationHistory')}</h4>
          <div className="grid grid-cols-3 gap-[12px]">
            <div className="p-[12px] rounded-[8px] bg-[#e3f2fd] border border-[#90caf9] min-h-[70px] flex flex-col justify-between">
              <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82] mb-[4px]">{t('comp.analysis.currentSalary')}</p>
              <p className="font-['72:Bold',sans-serif] text-[16px] leading-[1.2] break-words text-[#1976d2]">$55,734.54</p>
            </div>
            <div className="p-[12px] rounded-[8px] bg-[#e8f5e9] border border-[#a5d6a7] min-h-[70px] flex flex-col justify-between">
              <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82] mb-[4px]">{t('comp.analysis.previousYearIncrease')}</p>
              <p className="font-['72:Bold',sans-serif] text-[16px] leading-[1.2] text-[#388e3c]">+2.5%</p>
            </div>
            <div className="p-[12px] rounded-[8px] bg-[#fce4ec] border border-[#f48fb1] min-h-[70px] flex flex-col justify-between">
              <p className={`font-['72:Regular',sans-serif] ${isGerman ? 'text-[10px]' : 'text-[11px]'} text-[#556b82] mb-[4px] break-words`}>{t('comp.analysis.marketMidpoint')}</p>
              <p className="font-['72:Bold',sans-serif] text-[16px] leading-[1.2] break-words text-[#c2185b]">$66,350.00</p>
            </div>
          </div>
        </div>

        {/* Job Progression Section */}
        <div className="mb-[24px]">
          <h4 className="font-['72:Bold',sans-serif] text-[15px] text-[#1d2d3e] mb-[12px]">{t('comp.analysis.jobProgression')}</h4>
          <div className="p-[16px] rounded-[8px] bg-[#f5f6f7] border border-[#d9e0e6]">
            <div className="flex items-center gap-[12px]">
              {/* Timeline Visual */}
              <div className="flex flex-col items-center">
                <div className="w-[32px] h-[32px] rounded-full bg-[#7b2cbf] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2V8L11 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="w-[2px] h-[40px] bg-[#d9e0e6]"></div>
                <div className="w-[32px] h-[32px] rounded-full bg-[#5a189a] flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="3" fill="white"/>
                  </svg>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="mb-[16px]">
                  <p className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e] mb-[2px]">{t('comp.analysis.march2025')}</p>
                  <p className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">{t('comp.analysis.startedAsDigitalConsultant')}</p>
                </div>
                <div>
                  <p className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e] mb-[2px]">{t('comp.analysis.current')}</p>
                  <p className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">{t('comp.analysis.digitalConsultantSameRole')}</p>
                </div>
              </div>
            </div>
            <div className="mt-[12px] pt-[12px] border-t border-[#d9e0e6]">
              <div className="flex items-start gap-[8px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-[2px] flex-shrink-0">
                  <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#556b82" strokeWidth="1.5"/>
                  <path d="M8 10.5V8" stroke="#556b82" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="8" cy="5.5" r="0.5" fill="#556b82"/>
                </svg>
                <p className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82] leading-[18px]">
                  {t('comp.analysis.titleRemainedNote')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pay Band Position Section */}
        <div>
          <h4 className="font-['72:Bold',sans-serif] text-[15px] text-[#1d2d3e] mb-[12px]">{t('comp.analysis.payBandPosition')}</h4>
          <div className="p-[16px] rounded-[8px] bg-gradient-to-br from-[#fff3e0] to-white border border-[#ffb74d]">
            {/* Visual Pay Band */}
            <div className="mb-[12px]">
              <div className="flex items-center justify-between mb-[6px] gap-[8px]">
                <span className={`font-['72:Regular',sans-serif] ${isGerman ? 'text-[10px]' : 'text-[11px]'} text-[#556b82]`}>{t('comp.analysis.min')}</span>
                <span className={`font-['72:Bold',sans-serif] ${isGerman ? 'text-[10px]' : 'text-[11px]'} text-[#556b82] text-center break-words flex-1 px-2`}>{t('comp.analysis.marketMidpoint')}</span>
                <span className={`font-['72:Regular',sans-serif] ${isGerman ? 'text-[10px]' : 'text-[11px]'} text-[#556b82]`}>{t('comp.analysis.max')}</span>
              </div>
              <div className="relative w-full h-[32px] rounded-[6px] bg-gradient-to-r from-[#e3f2fd] via-[#4caf50] to-[#e3f2fd] border border-[#90caf9]">
                {/* Midpoint Marker */}
                <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-[#1976d2] transform -translate-x-1/2"></div>
                
                {/* Current Position Marker */}
                <div className="absolute top-1/2 transform -translate-y-1/2" style={{ left: '30%' }}>
                  <div className="flex flex-col items-center">
                    <div className="w-[24px] h-[24px] rounded-full bg-[#f57c00] border-2 border-white shadow-lg flex items-center justify-center">
                      <div className="w-[8px] h-[8px] rounded-full bg-white"></div>
                    </div>
                    <div className="absolute top-[-24px] bg-[#f57c00] px-[6px] py-[2px] rounded-[4px] whitespace-nowrap">
                      <p className="font-['72:Bold',sans-serif] text-[10px] text-white">{t('comp.analysis.currentPosition')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-start gap-[8px] p-[12px] bg-white rounded-[6px] border border-[#ffb74d]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-[2px] flex-shrink-0">
                <path d="M8 2L2 6L8 10L14 6L8 2Z" stroke="#f57c00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 10L8 14L14 10" stroke="#f57c00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className={`font-['72:Regular',sans-serif] ${isGerman ? 'text-[11px]' : 'text-[12px]'} text-[#e65100] leading-[16px]`}>
                {t('comp.analysis.salaryComparedToPeers')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Insight Footer */}
      <div className="px-[24px] py-[14px] bg-[#f5f6f7] border-t border-[#d9e0e6]">
        <div className="flex items-start gap-[10px]">
          <div className="w-[24px] h-[24px] rounded-full flex items-center justify-center flex-shrink-0" style={{
            background: 'linear-gradient(135deg, #7b2cbf 0%, #5a189a 50%, #3c096c 100%)'
          }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 10.5V8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
              <circle cx="8" cy="5.5" r="0.5" fill="white"/>
            </svg>
          </div>
          <p className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82] leading-[18px]">
            {t('comp.analysis.keyInsight')}
          </p>
        </div>
      </div>

      {/* AI Disclaimer Note */}
      <div className="px-[24px] py-[10px] bg-[#fffbf0] border-t border-[#ffe082]">
        <p className="font-['72:Regular',sans-serif] text-[11px] text-[#795548] leading-[16px] italic">
          {t('comp.analysis.aiDisclaimer')}
        </p>
      </div>
    </div>
  );
}
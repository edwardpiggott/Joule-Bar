import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';

export function PositionInfoGraphic() {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-[8px] border border-[#d9e0e6] p-[16px] mt-[8px]">
      <div className="space-y-[16px]">
        {/* Title */}
        <div className="text-center pb-[12px] border-b border-[#e5e7eb]">
          <h3 className="font-['72:Bold',sans-serif] text-[16px] text-[#1d2d3e]">
            {t('position.title')}
          </h3>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-[12px]">
          {/* Total Positions */}
          <div className="text-center p-[12px] bg-[#f0f4ff] rounded-[8px]">
            <div className="font-['72:Bold',sans-serif] text-[24px] text-[#0070f2] mb-[4px]">
              12
            </div>
            <div className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">
              {t('position.totalPositions')}
            </div>
          </div>

          {/* Filled */}
          <div className="text-center p-[12px] bg-[#f0fdf4] rounded-[8px]">
            <div className="font-['72:Bold',sans-serif] text-[24px] text-[#16a34a] mb-[4px]">
              11
            </div>
            <div className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">
              {t('position.filled')}
            </div>
          </div>

          {/* Active Openings */}
          <div className="text-center p-[12px] bg-[#fff7ed] rounded-[8px]">
            <div className="font-['72:Bold',sans-serif] text-[24px] text-[#ea580c] mb-[4px]">
              1
            </div>
            <div className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">
              {t('position.activeOpening')}
            </div>
          </div>
        </div>

        {/* Bar Chart Representation */}
        <div className="space-y-[8px]">
          <div className="flex items-center gap-[8px]">
            <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82] w-[100px]">
              {t('position.contentStrategy')}
            </span>
            <div className="flex-1 bg-[#e5e7eb] rounded-full h-[8px] overflow-hidden">
              <div className="bg-[#0070f2] h-full" style={{ width: '100%' }}></div>
            </div>
            <span className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82] w-[40px] text-right">
              2/2
            </span>
          </div>

          <div className="flex items-center gap-[8px]">
            <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82] w-[100px]">
              {t('position.digitalMarketing')}
            </span>
            <div className="flex-1 bg-[#e5e7eb] rounded-full h-[8px] overflow-hidden">
              <div className="bg-[#0070f2] h-full" style={{ width: '91%' }}></div>
            </div>
            <span className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82] w-[40px] text-right">
              10/11
            </span>
          </div>

          <div className="flex items-center gap-[8px]">
            <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82] w-[100px]">
              {t('position.socialMedia')}
            </span>
            <div className="flex-1 bg-[#e5e7eb] rounded-full h-[8px] overflow-hidden">
              <div className="bg-[#ea580c] h-full" style={{ width: '0%' }}></div>
            </div>
            <span className="font-['72:Regular',sans-serif] text-[11px] text-[#ea580c] w-[40px] text-right">
              0/1
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
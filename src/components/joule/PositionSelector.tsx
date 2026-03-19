import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';

interface PositionSelectorProps {
  onSendMessage?: (message: string) => void;
}

export function PositionSelector({ onSendMessage }: PositionSelectorProps) {
  const { t } = useTranslation();
  
  const positions = [
    {
      titleKey: 'position.contentStrategist',
      infoKey: 'position.contentStrategist.info'
    },
    {
      titleKey: 'position.digitalConsultant',
      infoKey: 'position.digitalConsultant.info'
    },
    {
      titleKey: 'position.socialMediaManager',
      infoKey: 'position.socialMediaManager.info'
    }
  ];

  const handleSelect = (titleKey: string) => {
    if (onSendMessage) {
      onSendMessage(t(titleKey));
    }
  };

  return (
    <div className="space-y-[12px] mt-[8px]">
      {positions.map((position, index) => (
        <div
          key={index}
          className="bg-white rounded-[8px] border border-[#d9e0e6] p-[16px] hover:border-[#0070f2] transition-colors"
        >
          <div className="flex items-start justify-between gap-[12px]">
            <div className="flex-1">
              <h4 className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e] mb-[6px]">
                {t(position.titleKey)}
              </h4>
              <p className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">
                {t(position.infoKey)}
              </p>
            </div>
            <button
              onClick={() => handleSelect(position.titleKey)}
              className="bg-white hover:bg-[#f5f6f7] border border-[#0070f2] text-[#0070f2] px-[16px] py-[6px] rounded-[6px] font-['72:Regular',sans-serif] text-[13px] transition-colors shrink-0"
            >
              {t('position.select')}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
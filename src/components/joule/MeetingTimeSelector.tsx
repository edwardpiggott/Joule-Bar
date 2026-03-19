import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';

interface MeetingTimeSelectorProps {
  onSendMessage?: (message: string) => void;
}

export function MeetingTimeSelector({ onSendMessage }: MeetingTimeSelectorProps) {
  const { t } = useTranslation();
  
  const timeSlots = [
    { key: 'meeting.tomorrow2pm' },
    { key: 'meeting.tomorrow430pm' },
    { key: 'meeting.friday10am' }
  ];

  const handleSelect = (key: string) => {
    if (onSendMessage) {
      onSendMessage(t(key));
    }
  };

  return (
    <div className="mt-[8px]">
      {/* Time Slot Buttons */}
      <div className="flex flex-col gap-[8px] mb-[12px]">
        {timeSlots.map((slot, index) => (
          <button
            key={index}
            onClick={() => handleSelect(slot.key)}
            className="bg-white hover:bg-[#f5f6f7] border border-[#0070f2] text-[#0070f2] px-[16px] py-[8px] rounded-[8px] font-['72:Regular',sans-serif] text-[13px] transition-colors text-left"
          >
            {t(slot.key)}
          </button>
        ))}
      </div>

      {/* Copilot Disclaimer */}
      <div className="flex items-start gap-[8px] p-[10px] bg-[#f0f4ff] rounded-[6px] border border-[#d9e0e6]">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-[2px]">
          <circle cx="8" cy="8" r="7" stroke="#0070f2" strokeWidth="1.5" fill="none"/>
          <path d="M8 4v5M8 11h.01" stroke="#0070f2" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <div>
          <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82] leading-[14px]">
            {t('meeting.copilotNote')}
          </p>
          <p className="font-['72:Regular',sans-serif] text-[10px] text-[#89919a] leading-[13px] mt-[2px]">
            {t('meeting.calendarNote')}
          </p>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';

interface DateSelectorProps {
  onSendMessage?: (message: string) => void;
}

export function DateSelector({ onSendMessage }: DateSelectorProps) {
  const { t } = useTranslation();
  
  const options = [
    { key: 'date.today' },
    { key: 'date.tomorrow' },
    { key: 'date.pickDate' }
  ];

  const handleSelect = (key: string) => {
    if (onSendMessage) {
      onSendMessage(t(key));
    }
  };

  return (
    <div className="flex gap-[6px] mt-[8px] flex-wrap">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleSelect(option.key)}
          className="bg-white hover:bg-[#f5f6f7] border border-[#0070f2] text-[#0070f2] px-[14px] py-[6px] rounded-[18px] font-['72:Regular',sans-serif] text-[13px] transition-colors"
        >
          {t(option.key)}
        </button>
      ))}
    </div>
  );
}
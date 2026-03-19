import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { useProfileNavigation } from './ProfileNavigationContext';
import { useTranslation } from '../../contexts/TranslationContext';

export function SarahProfileCard() {
  const { onNavigateToProfile } = useProfileNavigation();
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-[12px] border border-[#d1d5db] shadow-sm mt-[12px] max-w-[320px] overflow-hidden">
      <div className="flex items-center gap-0 py-[8px] px-[16px]">
        {/* Profile Photo */}
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc2NDQ5OTYzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Sarah Walters"
          className="w-[56px] h-[56px] rounded-full object-cover flex-shrink-0 border-2 border-[#e5e7eb] mr-[12px]"
        />
        
        {/* Profile Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-['72:Bold',sans-serif] text-[16px] text-[#1d2d3e] leading-[1.3] mb-[2px]">
            Sarah Walters
          </h3>
          <p className="font-['72:Regular',sans-serif] text-[13px] text-[#6a6d70] mb-[4px]">
            {t('profile.generalManager')}
          </p>
          <div className="inline-flex items-center gap-[6px] bg-[#e8f5e9] px-[8px] py-[2px] rounded-[4px] mb-[2px]">
            <div className="w-[6px] h-[6px] rounded-full bg-[#4caf50]"></div>
            <span className="font-['72:Bold',sans-serif] text-[11px] text-[#2e7d32]">{t('profile.gusBuddy')}</span>
          </div>
          <p className="font-['72:Regular',sans-serif] text-[12px] text-[#6a6d70] flex items-center gap-[4px]">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
              <path d="M8 2C5.8 2 4 3.8 4 6c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4zm0 5.5c-.8 0-1.5-.7-1.5-1.5S7.2 4.5 8 4.5s1.5.7 1.5 1.5S8.8 7.5 8 7.5z" fill="#6a6d70"/>
            </svg>
            {t('profile.londonUK')}
          </p>
        </div>
        
        {/* Profile Button */}
        <button 
          onClick={onNavigateToProfile}
          className="flex items-center gap-[4px] px-[10px] py-[5px] border border-[#0070f2] text-[#0070f2] rounded-[6px] hover:bg-[#e8f4fd] transition-colors font-['72:Bold',sans-serif] text-[12px] whitespace-nowrap flex-shrink-0 ml-[8px]"
        >
          <ExternalLink size={13} strokeWidth={2.5} />
          {t('profile.button')}
        </button>
      </div>
    </div>
  );
}
import React from 'react';
import { useTranslation } from '../../contexts/TranslationContext';

export function PerformanceInfoGraphic() {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-[8px] border border-[#d9e0e6] p-[16px] mt-[8px]">
      <div className="space-y-[16px]">
        {/* Title */}
        <div className="text-center pb-[12px] border-b border-[#e5e7eb]">
          <h3 className="font-['72:Bold',sans-serif] text-[16px] text-[#1d2d3e]">
            {t('performance.title')}
          </h3>
        </div>

        {/* Achievements */}
        <div className="bg-[#f0fdf4] rounded-[8px] p-[12px]">
          <h4 className="font-['72:Bold',sans-serif] text-[13px] text-[#16a34a] mb-[8px]">
            {t('performance.achievements')}
          </h4>
          <div className="space-y-[4px]">
            <div className="flex items-center gap-[8px]">
              <div className="w-[4px] h-[4px] rounded-full bg-[#16a34a]"></div>
              <p className="font-['72:Regular',sans-serif] text-[12px] text-[#1d2d3e]">
                {t('performance.achievement1')}
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="w-[4px] h-[4px] rounded-full bg-[#16a34a]"></div>
              <p className="font-['72:Regular',sans-serif] text-[12px] text-[#1d2d3e]">
                {t('performance.achievement2')}
              </p>
            </div>
          </div>
        </div>

        {/* Strengths & Improvement */}
        <div className="grid grid-cols-2 gap-[12px]">
          <div className="bg-[#f0f4ff] rounded-[8px] p-[12px]">
            <h4 className="font-['72:Bold',sans-serif] text-[13px] text-[#0070f2] mb-[6px]">
              {t('performance.strengths')}
            </h4>
            <div className="space-y-[4px]">
              <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">
                • {t('performance.strength1')}
              </p>
              <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">
                • {t('performance.strength2')}
              </p>
            </div>
          </div>

          <div className="bg-[#fef3f2] rounded-[8px] p-[12px]">
            <h4 className="font-['72:Bold',sans-serif] text-[13px] text-[#dc2626] mb-[6px]">
              {t('performance.areasImprovement')}
            </h4>
            <div className="space-y-[4px]">
              <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">
                • {t('performance.improvement1')}
              </p>
              <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">
                • {t('performance.improvement2')}
              </p>
            </div>
          </div>
        </div>

        {/* Goals Progress */}
        <div>
          <h4 className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e] mb-[8px]">
            {t('performance.goalsActivities')}
          </h4>
          <div className="space-y-[6px]">
            <div className="flex items-center gap-[8px]">
              <div className="w-[12px] h-[12px] rounded-full bg-[#16a34a] flex items-center justify-center">
                <div className="w-[4px] h-[4px] rounded-full bg-white"></div>
              </div>
              <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82] flex-1">
                {t('performance.goal1')}
              </span>
              <span className="font-['72:Bold',sans-serif] text-[11px] text-[#16a34a]">
                {t('performance.onTarget')}
              </span>
            </div>

            <div className="flex items-center gap-[8px]">
              <div className="w-[12px] h-[12px] rounded-full bg-[#16a34a] flex items-center justify-center">
                <div className="w-[4px] h-[4px] rounded-full bg-white"></div>
              </div>
              <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82] flex-1">
                {t('performance.goal2')}
              </span>
              <span className="font-['72:Bold',sans-serif] text-[11px] text-[#16a34a]">
                {t('performance.onTarget')}
              </span>
            </div>

            <div className="flex items-center gap-[8px]">
              <div className="w-[12px] h-[12px] rounded-full bg-[#ea580c] flex items-center justify-center">
                <div className="w-[4px] h-[4px] rounded-full bg-white"></div>
              </div>
              <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82] flex-1">
                {t('performance.goal3')}
              </span>
              <span className="font-['72:Bold',sans-serif] text-[11px] text-[#ea580c]">
                {t('performance.offTarget')}
              </span>
            </div>

            <div className="flex items-center gap-[8px]">
              <div className="w-[12px] h-[12px] rounded-full bg-[#94a3b8] flex items-center justify-center">
                <div className="w-[4px] h-[4px] rounded-full bg-white"></div>
              </div>
              <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82] flex-1">
                {t('performance.goal4')}
              </span>
              <span className="font-['72:Bold',sans-serif] text-[11px] text-[#556b82]">
                {t('performance.onHold')}
              </span>
            </div>
          </div>
        </div>

        {/* One-to-One Focus */}
        <div className="bg-[#f8fafc] rounded-[8px] p-[12px] border border-[#e5e7eb]">
          <h4 className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e] mb-[4px]">
            {t('performance.recent11Focus')}
          </h4>
          <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">
            {t('performance.focusContent')}
          </p>
        </div>

        {/* Recent Feedback Bubble */}
        <div className="relative bg-gradient-to-r from-[#7b2cbf] to-[#5a189a] rounded-[12px] p-[12px] shadow-md">
          <div className="flex items-start gap-[8px]">
            <div className="shrink-0 w-[24px] h-[24px] bg-white/20 rounded-full flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-['72:Bold',sans-serif] text-[12px] text-white mb-[6px]">
                {t('performance.recentFeedback')}
              </h4>
              <p className="font-['72:Regular',sans-serif] text-[11px] text-white/90 leading-[15px]">
                {t('performance.feedbackText')}
              </p>
              <div className="mt-[6px] flex items-center gap-[4px]">
                <span className="font-['72:Regular',sans-serif] text-[9px] text-white/70">
                  {t('performance.feedbackSource')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
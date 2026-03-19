// Rich response components for CSV-driven Joule scenarios
import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Link } from 'lucide-react';
import { SarahProfileCard } from './SarahProfileCard';
import { usePDFNavigation } from './PDFNavigationContext';
import imgGusProfilePic from 'figma:asset/64a60670f053f5f6072796a7250d0083ad88e077.png';
import { CompensationSummaryInfographic } from './CompensationSummaryInfographic';
import { PositionSelector } from './PositionSelector';
import { DateSelector } from './DateSelector';
import { PositionInfoGraphic } from './PositionInfoGraphic';
import { MeetingTimeSelector } from './MeetingTimeSelector';
import { PerformanceInfoGraphic } from './PerformanceInfoGraphic';
import { useTranslation } from '../../contexts/TranslationContext';

export function ProfileTeaserCard() {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-[12px] p-[16px] border border-[#d9e0e6] mt-[8px] relative">
      {/* Profile Button - Top Right */}
      <div className="absolute top-[16px] right-[16px]">
        <div className="flex items-center gap-[6px] px-[12px] py-[6px] border-2 border-[#0070f2] rounded-[8px] bg-white">
          <Link className="w-[16px] h-[16px] text-[#0070f2]" />
          <span className="font-['72:Bold',sans-serif] text-[14px] text-[#0070f2]">{t('profile.button')}</span>
        </div>
      </div>

      {/* Profile Content */}
      <div className="flex items-start gap-[16px] mb-[16px]">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc2NDI0MDQ2OXww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Sarah Walters"
          className="w-[80px] h-[80px] rounded-full object-cover"
        />
        <div className="flex-1 pr-[80px]">
          <h3 className="font-['72:Bold',sans-serif] text-[18px] text-[#1d2d3e] mb-[4px]">Sarah Walters</h3>
          <p className="font-['72:Regular',sans-serif] text-[14px] text-[#556b82] mb-[2px]">{t('profile.generalManager')}</p>
          <div className="inline-flex items-center gap-[6px] bg-[#e8f5e9] px-[8px] py-[2px] rounded-[4px] mb-[8px]">
            <div className="w-[8px] h-[8px] rounded-full bg-[#4caf50]"></div>
            <span className="font-['72:Bold',sans-serif] text-[12px] text-[#2e7d32]">{t('profile.gusBuddy')}</span>
          </div>
          <p className="font-['72:Regular',sans-serif] text-[13px] text-[#556b82]">{t('profile.londonUK')}</p>
        </div>
      </div>

      {/* View More Link */}
      <div className="text-right">
        <span className="font-['72:Bold',sans-serif] text-[14px] text-[#0070f2] cursor-pointer hover:underline">{t('profile.viewMore')}</span>
      </div>
    </div>
  );
}

export function PublicProfileView() {
  const { t } = useTranslation();
  
  return (
    <div className="bg-[#f7f7f7] rounded-[8px] overflow-hidden max-w-[1000px] mx-auto shadow-lg">
      {/* Header with SAP branding */}
      <div className="bg-white border-b border-[#d9e0e6] px-[16px] py-[8px] flex items-center justify-between">
        <div className="flex items-center gap-[16px]">
          <button className="p-[4px]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect y="4" width="20" height="2" fill="#556b82"/>
              <rect y="9" width="20" height="2" fill="#556b82"/>
              <rect y="14" width="20" height="2" fill="#556b82"/>
            </svg>
          </button>
          <div className="flex items-center gap-[8px]">
            <svg className="h-[24px] w-auto" viewBox="0 0 52 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="sapGradPublicProfile" x1="0" y1="0" x2="0" y2="26" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00B9F2" />
                  <stop offset="1" stopColor="#0072BC" />
                </linearGradient>
              </defs>
              <path fillRule="evenodd" clipRule="evenodd" d="M26 26L52 0H0V26H26Z" fill="url(#sapGradPublicProfile)" />
              <path fillRule="evenodd" clipRule="evenodd" d="M31.1603 12.5854H30.0322V8.46083H31.1603C32.6639 8.46083 33.8636 8.96061 33.8636 10.4961C33.8636 12.0849 32.6639 12.5854 31.1603 12.5854V12.5854ZM19.0291 15.5263C18.4318 15.5263 17.8721 15.4223 17.3897 15.2403L19.0118 10.1212H19.0421L20.6368 15.2541C20.1572 15.4245 19.6105 15.5263 19.0291 15.5263ZM30.8598 5.11261L25.7407 5.10972V17.2799L21.2694 5.10972H16.8357L13.0181 15.288C12.6114 12.7212 9.95656 11.8351 7.86789 11.1706C6.48917 10.7279 5.02522 10.0764 5.03967 9.35639C5.0505 8.76561 5.824 8.21672 7.35656 8.29906C8.38644 8.35394 9.295 8.437 11.1027 9.30872L12.8808 6.21256C11.2306 5.37261 8.95122 4.84178 7.08283 4.83961H7.07128C4.89306 4.83961 3.07739 5.54594 1.95217 6.70944C1.16783 7.52194 0.744611 8.55328 0.727278 9.69511C0.698389 11.2652 1.27472 12.3796 2.48444 13.2687C3.50639 14.0176 4.81361 14.5037 5.96556 14.8604C7.38617 15.301 8.54606 15.6831 8.53306 16.4999C8.52222 16.7967 8.40956 17.0741 8.19578 17.2987C7.84189 17.6641 7.29733 17.8013 6.54622 17.8158C5.09672 17.8461 4.02061 17.6193 2.30822 16.6068L0.727278 19.747C2.43533 20.7191 4.45828 21.2889 6.52167 21.2889L6.78744 21.2861C8.58361 21.2536 10.0338 20.7415 11.1916 19.8091C11.258 19.7564 11.3179 19.7015 11.3793 19.6473L10.8658 21.0188H15.5155L16.2962 18.6449C17.1131 18.9244 18.0418 19.0782 19.0291 19.0782C19.9904 19.0782 20.8953 18.9316 21.697 18.6687L22.4488 21.0188H30.0322V16.1048H31.6853C35.6843 16.1048 38.0488 14.0689 38.0488 10.6571C38.0488 6.85678 35.7507 5.11261 30.8598 5.11261V5.11261Z" fill="#FFFFFE" />
            </svg>
            <span className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e]">{t('sarah.profile.header')}</span>
          </div>
        </div>
        <div className="flex items-center gap-[12px]">
          <button className="w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-[#f0f0f0]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="#556b82" strokeWidth="2"/>
              <path d="M10 6v8M6 10h8" stroke="#556b82" strokeWidth="2"/>
            </svg>
          </button>
          <button className="w-[32px] h-[32px] flex items-center justify-center rounded-full hover:bg-[#f0f0f0]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="5" r="2" fill="#556b82"/>
              <circle cx="10" cy="10" r="2" fill="#556b82"/>
              <circle cx="10" cy="15" r="2" fill="#556b82"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Colorful Banner */}
      <div className="h-[120px] relative overflow-hidden">
        <div className="absolute inset-0" style={{
          background: 'repeating-linear-gradient(45deg, #ff6b6b 0px, #ff6b6b 20px, #4ecdc4 20px, #4ecdc4 40px, #ffe66d 40px, #ffe66d 60px, #a8e6cf 60px, #a8e6cf 80px, #ff8b94 80px, #ff8b94 100px, #c7ceea 100px, #c7ceea 120px)',
          transform: 'skewY(-3deg) scale(1.2)',
          transformOrigin: 'top left'
        }}></div>
      </div>

      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-[280px] bg-white border-r border-[#d9e0e6] p-[20px]">
          {/* Profile Photo */}
          <div className="relative -mt-[60px] mb-[12px]">
            <div className="w-[120px] h-[120px] rounded-full bg-white p-[4px] shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc2NDQ5OTYzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sarah Walters"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <button className="absolute bottom-0 right-0 w-[32px] h-[32px] bg-[#0070f2] rounded-full flex items-center justify-center text-white shadow-md">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 10v2h2l6-6-2-2-6 6zm10-6l-2-2 1-1 2 2-1 1z" fill="white"/>
              </svg>
            </button>
          </div>

          <div className="mb-[12px]">
            <button className="text-[#0070f2] font-['72:Bold',sans-serif] text-[12px] px-[12px] py-[4px] border border-[#0070f2] rounded-[4px] mb-[8px] flex items-center gap-[6px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2l2 4 4 1-3 3 1 4-4-2-4 2 1-4-3-3 4-1 2-4z" fill="#0070f2"/>
              </svg>
              {t('sarah.profile.hideSpotlight')}
            </button>
          </div>

          <h2 className="font-['72:Bold',sans-serif] text-[20px] text-[#1d2d3e] mb-[2px]">Sarah Walters</h2>
          <p className="font-['72:Regular',sans-serif] text-[13px] text-[#556b82] mb-[4px]">{t('sarah.profile.sapAm')}</p>
          <p className="font-['72:Regular',sans-serif] text-[13px] text-[#556b82] mb-[12px]">{t('sarah.profile.peopleManager')}</p>

          <div className="space-y-[8px] mb-[16px]">
            <div className="flex items-center gap-[8px] text-[#556b82] text-[13px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2C5.8 2 4 3.8 4 6c0 3 4 8 4 8s4-5 4-8c0-2.2-1.8-4-4-4zm0 5.5c-.8 0-1.5-.7-1.5-1.5S7.2 4.5 8 4.5s1.5.7 1.5 1.5S8.8 7.5 8 7.5z" fill="#556b82"/>
              </svg>
              <span>London, UK</span>
            </div>
            <div className="flex items-center gap-[8px] text-[#556b82] text-[13px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="#556b82" strokeWidth="1.5" fill="none"/>
                <path d="M8 5v3l2 2" stroke="#556b82" strokeWidth="1.5"/>
              </svg>
              <span>{t('sarah.profile.localTime')}</span>
            </div>
          </div>

          <p className="font-['72:Regular',sans-serif] text-[12px] text-[#1d2d3e] leading-[18px] mb-[16px]">
            {t('sarah.profile.bio')}
          </p>

          {/* Manager Section */}
          <div className="mb-[16px] pb-[16px] border-b border-[#e5e7eb]">
            <div className="flex items-center gap-[8px] mb-[4px]">
              <div className="w-[32px] h-[32px] rounded-full bg-gradient-to-br from-[#ff8b94] to-[#ff6b6b] flex items-center justify-center text-white font-['72:Bold',sans-serif] text-[12px]">
                JW
              </div>
              <div>
                <p className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e]">{t('sarah.profile.jadaWilliams')}</p>
                <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">{t('sarah.profile.matrixOperational')}</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-[8px]">
            <h3 className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e] mb-[8px]">{t('sarah.profile.actions')}</h3>
            <button className="w-full text-left flex items-center gap-[8px] px-[8px] py-[6px] hover:bg-[#f7f7f7] rounded-[4px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="#556b82" strokeWidth="1.5" fill="none"/>
              </svg>
              <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">{t('sarah.profile.giveBadge')}</span>
            </button>
            <button className="w-full text-left flex items-center gap-[8px] px-[8px] py-[6px] hover:bg-[#f7f7f7] rounded-[4px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2h12v12H2z" stroke="#556b82" strokeWidth="1.5" fill="none"/>
              </svg>
              <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">{t('sarah.profile.viewOrgChart')}</span>
            </button>
            <button className="w-full text-left flex items-center gap-[8px] px-[8px] py-[6px] hover:bg-[#f7f7f7] rounded-[4px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="#556b82" strokeWidth="1.5" fill="none"/>
              </svg>
              <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">{t('sarah.profile.changeLocation')}</span>
            </button>
            <button className="w-full text-left flex items-center gap-[8px] px-[8px] py-[6px] hover:bg-[#f7f7f7] rounded-[4px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="#556b82" strokeWidth="1.5" fill="none"/>
              </svg>
              <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">{t('sarah.profile.allActions')}</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-[20px] bg-[#f7f7f7]">
          {/* Spotlight Section */}
          <div className="bg-white rounded-[8px] p-[16px] mb-[16px] shadow-sm">
            <div className="flex items-center justify-between mb-[16px]">
              <h3 className="font-['72:Bold',sans-serif] text-[16px] text-[#1d2d3e]">{t('sarah.profile.spotlight')}</h3>
              <button className="text-[#0070f2] font-['72:Regular',sans-serif] text-[13px]">{t('sarah.profile.viewFullProfile')}</button>
            </div>

            <div className="grid grid-cols-3 gap-[16px]">
              {/* Skills */}
              <div>
                <h4 className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e] mb-[12px]">{t('sarah.profile.skills')}</h4>
                <div className="space-y-[8px] mb-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <div className="relative w-[40px] h-[40px]">
                      <svg width="40" height="40" viewBox="0 0 40 40">
                        <circle cx="20" cy="20" r="18" stroke="#e5e7eb" strokeWidth="3" fill="none"/>
                        <circle cx="20" cy="20" r="18" stroke="#0070f2" strokeWidth="3" fill="none" strokeDasharray="113" strokeDashoffset="28" transform="rotate(-90 20 20)"/>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-['72:Bold',sans-serif] text-[10px] text-[#0070f2]">75%</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-['72:Regular',sans-serif] text-[11px] text-[#0070f2]">{t('sarah.profile.management')}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-[8px]">
                    <div className="relative w-[40px] h-[40px]">
                      <svg width="40" height="40" viewBox="0 0 40 40">
                        <circle cx="20" cy="20" r="18" stroke="#e5e7eb" strokeWidth="3" fill="none"/>
                        <circle cx="20" cy="20" r="18" stroke="#4ecdc4" strokeWidth="3" fill="none" strokeDasharray="113" strokeDashoffset="34" transform="rotate(-90 20 20)"/>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-['72:Bold',sans-serif] text-[10px] text-[#4ecdc4]">70%</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="font-['72:Regular',sans-serif] text-[11px] text-[#4ecdc4]">{t('sarah.profile.problemSolvingAbilities')}</p>
                    </div>
                  </div>
                </div>
                <button className="text-[#0070f2] font-['72:Regular',sans-serif] text-[11px]">{t('profile.viewMore')}</button>
              </div>

              {/* Work Location */}
              <div>
                <div className="flex items-center justify-between mb-[12px]">
                  <h4 className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e]">{t('sarah.profile.workLocation')}</h4>
                  <button className="text-[#0070f2]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <rect width="16" height="16" stroke="#0070f2" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </button>
                </div>
                <div className="bg-[#f7f7f7] rounded-[4px] p-[12px] mb-[8px]">
                  <div className="h-[80px] bg-gradient-to-br from-[#e5e7eb] to-[#d9e0e6] rounded-[4px] mb-[8px] flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M16 8C13.8 8 12 9.8 12 12c0 4 4 10 4 10s4-6 4-10c0-2.2-1.8-4-4-4zm0 5.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" fill="#0070f2"/>
                    </svg>
                  </div>
                  <p className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e]">Clockhouse Place</p>
                  <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">Feltham, UK TW14 8HD</p>
                  <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">{t('sarah.profile.unitedKingdom')}</p>
                </div>
                <button className="text-[#0070f2] font-['72:Regular',sans-serif] text-[11px]">{t('sarah.profile.getDirections')}</button>
              </div>

              {/* Competencies */}
              <div>
                <h4 className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e] mb-[12px]">{t('sarah.profile.competencies')}</h4>
                <div className="space-y-[6px]">
                  {[
                    { name: t('sarah.profile.attentiveness'), level: 4, color: '#0070f2' },
                    { name: t('sarah.profile.problemSolving'), level: 5, color: '#4ecdc4' },
                    { name: t('sarah.profile.adaptability'), level: 3, color: '#ffe66d' },
                    { name: t('sarah.profile.qualityControl'), level: 5, color: '#ff8b94' },
                    { name: t('sarah.profile.communication'), level: 1, color: '#c7ceea' }
                  ].map((comp, idx) => (
                    <div key={idx} className="flex items-center gap-[8px]">
                      <span className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82] w-[80px]">{comp.name}</span>
                      <span className="font-['72:Bold',sans-serif] text-[11px] text-[#1d2d3e] w-[8px]">{comp.level}</span>
                      <div className="flex-1 flex gap-[2px]">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className={`h-[8px] flex-1 rounded-[2px] ${i < comp.level ? 'bg-[' + comp.color + ']' : 'bg-[#e5e7eb]'}`} style={{ backgroundColor: i < comp.level ? comp.color : '#e5e7eb' }}></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-3 gap-[16px] mb-[16px]">
            {/* Upcoming Absence */}
            <div className="bg-white rounded-[8px] p-[16px] shadow-sm">
              <h4 className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e] mb-[12px]">{t('sarah.profile.upcomingAbsence')}</h4>
              <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82] mb-[8px]">{t('sarah.profile.sept3to5')}</p>
              <div className="bg-[#0070f2] rounded-[4px] p-[12px] text-white">
                <div className="text-[24px] font-['72:Bold',sans-serif]">3</div>
              </div>
            </div>

            {/* Organization */}
            <div className="bg-white rounded-[8px] p-[16px] shadow-sm">
              <h4 className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e] mb-[12px]">{t('sarah.profile.organization')}</h4>
              <div className="space-y-[4px]">
                <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">{t('sarah.profile.company')}</p>
                <p className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e]">TechWave</p>
                <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">{t('sarah.profile.businessUnit')}</p>
                <p className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e]">TechWave UK LTD</p>
                <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">{t('sarah.profile.division')}</p>
                <p className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e]">{t('sarah.profile.productEngineering')}</p>
                <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">{t('sarah.profile.department')}</p>
                <p className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e]">{t('sarah.profile.design')}</p>
              </div>
            </div>

            {/* Work Experience */}
            <div className="bg-white rounded-[8px] p-[16px] shadow-sm">
              <h4 className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e] mb-[12px]">{t('sarah.profile.workExperience')}</h4>
              <div className="space-y-[12px]">
                <div className="flex items-start gap-[8px]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-[2px]">
                    <rect x="2" y="4" width="12" height="10" stroke="#556b82" strokeWidth="1.5" fill="none"/>
                    <path d="M6 4V2h4v2" stroke="#556b82" strokeWidth="1.5"/>
                  </svg>
                  <div className="flex-1">
                    <p className="font-['72:Bold',sans-serif] text-[11px] text-[#1d2d3e]">{t('sarah.profile.productDesigner')}</p>
                    <p className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">TechWave</p>
                    <p className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">London, UK</p>
                    <p className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">{t('sarah.profile.jun2023Present')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-[8px]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-[2px]">
                    <rect x="2" y="4" width="12" height="10" stroke="#556b82" strokeWidth="1.5" fill="none"/>
                    <path d="M6 4V2h4v2" stroke="#556b82" strokeWidth="1.5"/>
                  </svg>
                  <div className="flex-1">
                    <p className="font-['72:Bold',sans-serif] text-[11px] text-[#1d2d3e]">{t('sarah.profile.uxAssociate')}</p>
                    <p className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">TechWave</p>
                    <p className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">London, UK</p>
                    <p className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">{t('sarah.profile.apr2019Jul2023')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Badges and Mentoring Row */}
          <div className="grid grid-cols-2 gap-[16px]">
            {/* Badges */}
            <div className="bg-white rounded-[8px] p-[16px] shadow-sm">
              <div className="flex items-center justify-between mb-[12px]">
                <h4 className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e]">{t('sarah.profile.badges')}</h4>
                <div className="flex gap-[4px]">
                  <button className="w-[24px] h-[24px] flex items-center justify-center rounded-[4px] hover:bg-[#f7f7f7]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M4 6L2 6" stroke="#556b82" strokeWidth="1.5"/>
                    </svg>
                  </button>
                  <button className="w-[24px] h-[24px] flex items-center justify-center rounded-[4px] hover:bg-[#f7f7f7]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M8 6L10 6" stroke="#556b82" strokeWidth="1.5"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="space-y-[12px]">
                <div className="flex items-start gap-[12px] pb-[12px] border-b border-[#e5e7eb]">
                  <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#ffe66d] to-[#ffd93d] flex items-center justify-center flex-shrink-0">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M14 4l3 6 6 1-4.5 4.5 1 6-5.5-3-5.5 3 1-6L5 11l6-1 3-6z" fill="#ff8b94"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e] mb-[4px]">{t('sarah.profile.awesomeWork')}</p>
                    <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82] mb-[4px]">{t('sarah.profile.rank1')}</p>
                    <p className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82] leading-[14px]">{t('sarah.profile.badgeText')}</p>
                    <div className="flex items-center gap-[4px] mt-[4px]">
                      <div className="w-[20px] h-[20px] rounded-full bg-gradient-to-br from-[#ff8b94] to-[#ff6b6b] flex items-center justify-center text-white font-['72:Bold',sans-serif] text-[8px]">
                        TI
                      </div>
                      <p className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">{t('sarah.profile.tomIreland')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mentoring */}
            <div className="bg-white rounded-[8px] p-[16px] shadow-sm">
              <h4 className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e] mb-[12px]">{t('sarah.profile.mentoring')}</h4>
              <div className="mb-[8px]">
                <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82] mb-[4px]">{t('sarah.profile.imAMentor')}</p>
                <div className="flex gap-[4px]">
                  <button className="px-[8px] py-[4px] border border-[#d9e0e6] rounded-[4px] bg-[#f7f7f7] font-['72:Regular',sans-serif] text-[11px] text-[#1d2d3e]">{t('sarah.profile.userCentricDesign')}</button>
                  <button className="px-[8px] py-[4px] border border-[#d9e0e6] rounded-[4px] bg-[#f7f7f7] font-['72:Regular',sans-serif] text-[11px] text-[#1d2d3e]">{t('sarah.profile.productDesignTag')}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FlightBookingSummary({ onSendMessage }: { onSendMessage?: (messageText: string) => void }) {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-[8px] p-[20px] border border-[#d9e0e6]">
      {/* Total Cost Header */}
      <div className="mb-[20px]">
        <p className="font-['72:Regular',sans-serif] text-[18px] text-[#1d2d3e]">
          {t('flight.totalCost')} <span className="font-['72:Bold',sans-serif]">1330.00 GBP</span> ({t('flight.roundTrip')})
        </p>
      </div>

      {/* Departure Flight */}
      <div className="flex gap-[16px] mb-[24px]">
        {/* Airline Logo */}
        <div className="flex-shrink-0 mt-[4px]">
          <div className="w-[48px] h-[48px] bg-gradient-to-br from-[#0070f2] to-[#0052cc] rounded-full flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="white"/>
            </svg>
          </div>
        </div>
        
        {/* Flight Details */}
        <div className="flex-1">
          <p className="font-['72:Regular',sans-serif] text-[14px] text-[#556b82] mb-[4px]">{t('flight.departure')} 30/01/2025</p>
          <p className="font-['72:Bold',sans-serif] text-[16px] text-[#1d2d3e] mb-[4px]">London (LHR) - Atlanta (ATL)</p>
          <p className="font-['72:Regular',sans-serif] text-[14px] text-[#1d2d3e] mb-[4px]">3:35PM - 8:10PM (9:35h)</p>
          <p className="font-['72:Regular',sans-serif] text-[14px] text-[#556b82]">BestRun (BR 648) {t('flight.nonStop')}</p>
        </div>
      </div>

      {/* Return Flight */}
      <div className="flex gap-[16px] mb-[24px]">
        {/* Airline Logo */}
        <div className="flex-shrink-0 mt-[4px]">
          <div className="w-[48px] h-[48px] bg-gradient-to-br from-[#0070f2] to-[#0052cc] rounded-full flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="white"/>
            </svg>
          </div>
        </div>
        
        {/* Flight Details */}
        <div className="flex-1">
          <p className="font-['72:Regular',sans-serif] text-[14px] text-[#556b82] mb-[4px]">{t('flight.return')} 03/02/2025</p>
          <p className="font-['72:Bold',sans-serif] text-[16px] text-[#1d2d3e] mb-[4px]">Atlanta (ATL) - London (LHR)</p>
          <p className="font-['72:Regular',sans-serif] text-[14px] text-[#1d2d3e] mb-[4px]">10:15 PM - 11:15 AM (8:05h)</p>
          <p className="font-['72:Regular',sans-serif] text-[14px] text-[#556b82]">BestRun (BR 2074) {t('flight.nonStop')}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-[6px] justify-start flex-wrap">
        <button className="px-[10px] py-[5px] rounded-[4px] border border-[#0070f2] bg-white font-['72:Regular',sans-serif] text-[12px] text-[#0070f2] hover:bg-[#f5f9fc] transition-colors whitespace-nowrap">
          {t('flight.cancel')}
        </button>
        <button className="px-[10px] py-[5px] rounded-[4px] border border-[#0070f2] bg-white font-['72:Regular',sans-serif] text-[12px] text-[#0070f2] hover:bg-[#f5f9fc] transition-colors whitespace-nowrap">
          {t('flight.otherOptions')}
        </button>
        <button 
          onClick={() => onSendMessage?.(t('flight.sendForApproval'))}
          className="px-[10px] py-[5px] rounded-[4px] border border-[#0070f2] bg-[#0070f2] font-['72:Regular',sans-serif] text-[12px] text-white hover:bg-[#005fcc] transition-colors whitespace-nowrap"
        >
          {t('flight.sendForApproval')}
        </button>
      </div>
    </div>
  );
}

export function PayslipBreakdown() {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] mt-[8px]">
      <div className="mb-[12px]">
        <p className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e]">{t('payslip.currentMonth')}</p>
        <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">{t('payslip.november2024')}</p>
      </div>
      
      <div className="space-y-[6px]">
        <PayItem label={t('payslip.baseSalary')} value="$6,500.00" />
        <PayItem label={t('payslip.performanceBonus')} value="$2,000.00" highlight />
        <PayItem label={t('payslip.overtime')} value="$450.00" />
        <div className="border-t border-[#e5e7eb] pt-[6px] mt-[6px]">
          <PayItem label={t('payslip.taxDeduction')} value="-$1,850.00" negative />
          <PayItem label={t('payslip.insurance')} value="-$320.00" negative />
        </div>
        <div className="bg-[#e8f4fd] rounded-[6px] p-[8px] mt-[8px]">
          <div className="flex justify-between items-center">
            <span className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e]">{t('payslip.netPay')}</span>
            <span className="font-['72:Bold',sans-serif] text-[16px] text-[#0070f2]">$6,780.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PayslipComparison() {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] mt-[8px]">
      <div className="mb-[12px]">
        <p className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e]">{t('payslip.comparison')}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-[12px] mb-[12px]">
        <div>
          <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82] mb-[4px]">{t('payslip.previousMonth')}</p>
          <ComparisonItem label={t('payslip.base')} value="$6,500" />
          <ComparisonItem label={t('payslip.bonus')} value="$0" />
          <ComparisonItem label={t('payslip.net')} value="$4,780" />
        </div>
        <div>
          <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82] mb-[4px]">{t('payslip.currentMonthLabel')}</p>
          <ComparisonItem label={t('payslip.base')} value="$6,500" />
          <ComparisonItem label={t('payslip.bonus')} value="$2,000" highlight />
          <ComparisonItem label={t('payslip.net')} value="$6,780" highlight />
        </div>
      </div>
      
      <div className="bg-[#fff4e5] rounded-[6px] p-[8px]">
        <p className="font-['72:Bold',sans-serif] text-[12px] text-[#f59b00]">{t('payslip.insight')}</p>
        <p className="font-['72:Regular',sans-serif] text-[11px] text-[#1d2d3e] mt-[2px]">
          {t('payslip.insightMessage')}
        </p>
      </div>
    </div>
  );
}

export function CostSummary() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] mt-[8px]">
      <div className="mb-[12px]">
        <p className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e]">Marketing Department Cost</p>
        <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">Q4 2024</p>
      </div>
      
      <div className="space-y-[6px]">
        <CostItem label="Salaries & Benefits" value="$2,856,000" percentage="68%" />
        <CostItem label="Marketing Campaigns" value="$840,000" percentage="20%" />
        <CostItem label="Tools & Software" value="$336,000" percentage="8%" />
        <CostItem label="Travel & Events" value="$168,000" percentage="4%" />
        
        <div className="bg-[#e8f4fd] rounded-[6px] p-[8px] mt-[8px]">
          <div className="flex justify-between items-center">
            <span className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e]">Total Cost</span>
            <span className="font-['72:Bold',sans-serif] text-[16px] text-[#0070f2]">$4,200,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RegionalCostChart() {
  return (
    <div className="bg-white rounded-[12px] p-[24px] max-w-[600px] mx-auto shadow-lg">
      <h3 className="font-['72:Bold',sans-serif] text-[18px] text-[#1d2d3e] mb-[16px]">
        Marketing Costs by Region
      </h3>
      
      <div className="space-y-[16px]">
        <RegionBar region="North America" cost="$1,680,000" percentage={40} color="bg-[#0070f2]" />
        <RegionBar region="Europe" cost="$1,260,000" percentage={30} color="bg-[#5d36ff]" />
        <RegionBar region="Asia Pacific" cost="$840,000" percentage={20} color="bg-[#2d9f5c]" />
        <RegionBar region="Latin America" cost="$420,000" percentage={10} color="bg-[#f59b00]" />
      </div>
      
      <div className="mt-[20px] pt-[16px] border-t border-[#e5e7eb]">
        <div className="flex justify-between items-center">
          <span className="font-['72:Bold',sans-serif] text-[16px] text-[#1d2d3e]">Total</span>
          <span className="font-['72:Bold',sans-serif] text-[20px] text-[#0070f2]">$4,200,000</span>
        </div>
      </div>
    </div>
  );
}

function RegionBar({ region, cost, percentage, color }: { region: string; cost: string; percentage: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-[6px]">
        <span className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e]">{region}</span>
        <span className="font-['72:Regular',sans-serif] text-[13px] text-[#556b82]">{cost} ({percentage}%)</span>
      </div>
      <div className="w-full bg-[#f5f6f7] rounded-full h-[8px] overflow-hidden">
        <div className={`${color} h-full rounded-full transition-all duration-500`} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

export function YoYCostChart() {
  const { t } = useTranslation();
  
  const chartData = [
    { year: '2021', expenditure: 58, budget: 62 },
    { year: '2022', expenditure: 79, budget: 82 },
    { year: '2023', expenditure: 82, budget: 88 },
    { year: '2024', expenditure: 94, budget: 100 },
  ];

  const maxValue = 100;

  return (
    <div className="bg-white rounded-[8px] p-[16px] border border-[#d9e0e6] mt-[8px]">
      <div className="mb-[16px]">
        <p className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e]">{t('chart.totalCostMarketing')}</p>
        <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">{t('chart.yearOverYear')}</p>
      </div>

      <div className="flex items-end gap-[16px] mb-[16px]">
        <div>
          <div className="flex items-baseline">
            <span className="font-['72:Bold',sans-serif] text-[32px] text-[#1d2d3e]">25.2</span>
            <span className="font-['72:Regular',sans-serif] text-[14px] text-[#556b82] ml-[4px]">M</span>
          </div>
          <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">{t('chart.janApril2025')}</p>
        </div>
        <div className="flex gap-[16px] ml-auto">
          <div>
            <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">{t('chart.budget')}</p>
            <p className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e]">94.0M</p>
          </div>
          <div>
            <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">{t('chart.deviation')}</p>
            <p className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e]">17.3%</p>
          </div>
        </div>
      </div>

      <div className="mb-[8px]">
        <p className="font-['72:Bold',sans-serif] text-[12px] text-[#556b82] text-center">{t('chart.netValue')}</p>
      </div>

      {/* Chart Area */}
      <div className="relative h-[180px] mb-[8px]">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-right pr-[8px] w-[40px]">
          <span className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">100M</span>
          <span className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">75M</span>
          <span className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">50M</span>
          <span className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">25M</span>
          <span className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">0.00</span>
        </div>

        {/* Grid lines */}
        <div className="absolute left-[48px] right-0 top-0 h-full flex flex-col justify-between">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="border-t border-[#e5e7eb]" />
          ))}
        </div>

        {/* Bars */}
        <div className="absolute left-[48px] right-0 bottom-0 h-full flex items-end justify-around">
          {chartData.map((data) => (
            <div key={data.year} className="flex flex-col items-center justify-end h-full" style={{ width: '60px' }}>
              <div className="relative w-full flex justify-center items-end gap-[4px]" style={{ height: '100%' }}>
                {/* Blue bar (expenditure) */}
                <div 
                  className="bg-[#0070f2] w-[24px] rounded-t-[2px]" 
                  style={{ height: `${(data.expenditure / maxValue) * 100}%` }}
                />
                {/* Black line (budget) */}
                <div 
                  className="absolute w-full flex justify-center"
                  style={{ bottom: `${(data.budget / maxValue) * 100}%` }}
                >
                  <div className="w-[32px] h-[2px] bg-[#1d2d3e]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* X-axis labels */}
      <div className="flex justify-around ml-[48px]">
        {chartData.map((data) => (
          <div key={data.year} className="w-[60px] text-center">
            <span className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">{data.year}</span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-[24px] mt-[12px] pt-[12px] border-t border-[#e5e7eb]">
        <div className="flex items-center gap-[6px]">
          <div className="w-[12px] h-[12px] bg-[#0070f2] rounded-[2px]" />
          <span className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">{t('chart.finalExpenditures')}</span>
        </div>
        <div className="flex items-center gap-[6px]">
          <div className="w-[12px] h-[2px] bg-[#1d2d3e]" />
          <span className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">{t('chart.actualBudget')}</span>
        </div>
      </div>
    </div>
  );
}

export function RegionalPieCharts() {
  const { t } = useTranslation();
  
  // Data for the pie charts
  const headcountData = [
    { region: 'Americas', value: 53, color: '#0070f2' },
    { region: 'EMEA', value: 22, color: '#a5c9f5' },
    { region: 'MEE', value: 9, color: '#b4d97e' },
    { region: 'APAC', value: 16, color: '#54d6ce' },
  ];

  const costData = [
    { region: 'Americas', value: 60, color: '#0070f2' },
    { region: 'EMEA', value: 18, color: '#a5c9f5' },
    { region: 'MEE', value: 5, color: '#b4d97e' },
    { region: 'APAC', value: 17, color: '#54d6ce' },
  ];

  // Helper function to create pie chart path with label position
  const createPieSlices = (data: typeof headcountData) => {
    let currentAngle = -90; // Start from top
    const radius = 60;
    const centerX = 80;
    const centerY = 80;
    const labelRadius = 40;
    
    return data.map((item) => {
      const sliceAngle = (item.value / 100) * 360;
      const startAngle = currentAngle;
      const endAngle = currentAngle + sliceAngle;
      const midAngle = startAngle + sliceAngle / 2;
      
      // Convert to radians
      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;
      const midRad = (midAngle * Math.PI) / 180;
      
      // Calculate arc points
      const x1 = centerX + radius * Math.cos(startRad);
      const y1 = centerY + radius * Math.sin(startRad);
      const x2 = centerX + radius * Math.cos(endRad);
      const y2 = centerY + radius * Math.sin(endRad);
      
      // Calculate label position
      const labelX = centerX + labelRadius * Math.cos(midRad);
      const labelY = centerY + labelRadius * Math.sin(midRad);
      
      const largeArc = sliceAngle > 180 ? 1 : 0;
      
      const pathData = [
        `M ${centerX} ${centerY}`,
        `L ${x1} ${y1}`,
        `A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2}`,
        'Z'
      ].join(' ');
      
      currentAngle = endAngle;
      
      return { pathData, color: item.color, labelX, labelY, value: item.value };
    });
  };

  const headcountSlices = createPieSlices(headcountData);
  const costSlices = createPieSlices(costData);

  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] mt-[8px] max-w-full">
      <div className="mb-[12px]">
        <p className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e]">{t('chart.marketingHeadcountCost')}</p>
        <p className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">{t('chart.perRegion')}</p>
      </div>

      {/* Pie Charts Container */}
      <div className="flex gap-[12px] justify-around mb-[12px]">
        {/* Headcount Pie Chart */}
        <div className="flex flex-col items-center flex-1">
          <p className="font-['72:Bold',sans-serif] text-[11px] text-[#1d2d3e] mb-[8px]">{t('chart.headcount')}</p>
          <div className="relative" style={{ width: '160px', height: '160px' }}>
            <svg viewBox="0 0 160 160" className="w-full h-full">
              {headcountSlices.map((slice, idx) => (
                <g key={idx}>
                  <path
                    d={slice.pathData}
                    fill={slice.color}
                    stroke="white"
                    strokeWidth="2"
                  />
                  <text
                    x={slice.labelX}
                    y={slice.labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-['72:Bold',sans-serif]"
                    fontSize="13"
                    fill="white"
                  >
                    {slice.value}%
                  </text>
                </g>
              ))}
            </svg>
          </div>
          <div className="mt-[8px] space-y-[4px]">
            {headcountData.map((item) => (
              <div key={item.region} className="flex items-center gap-[6px]">
                <div className="w-[10px] h-[10px] rounded-[2px]" style={{ backgroundColor: item.color }} />
                <span className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">{t(`chart.${item.region.toLowerCase()}`)} {item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Pie Chart */}
        <div className="flex flex-col items-center flex-1">
          <p className="font-['72:Bold',sans-serif] text-[11px] text-[#1d2d3e] mb-[8px]">{t('chart.cost')}</p>
          <div className="relative" style={{ width: '160px', height: '160px' }}>
            <svg viewBox="0 0 160 160" className="w-full h-full">
              {costSlices.map((slice, idx) => (
                <g key={idx}>
                  <path
                    d={slice.pathData}
                    fill={slice.color}
                    stroke="white"
                    strokeWidth="2"
                  />
                  <text
                    x={slice.labelX}
                    y={slice.labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="font-['72:Bold',sans-serif]"
                    fontSize="13"
                    fill="white"
                  >
                    {slice.value}%
                  </text>
                </g>
              ))}
            </svg>
          </div>
          <div className="mt-[8px] space-y-[4px]">
            {costData.map((item) => (
              <div key={item.region} className="flex items-center gap-[6px]">
                <div className="w-[10px] h-[10px] rounded-[2px]" style={{ backgroundColor: item.color }} />
                <span className="font-['72:Regular',sans-serif] text-[10px] text-[#556b82]">{t(`chart.${item.region.toLowerCase()}`)} {item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CompensationInsightsCSV() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] mt-[8px]">
      <div className="mb-[12px]">
        <p className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e]">Gus Anderson</p>
        <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">Digital Marketing Specialist</p>
      </div>
      
      <div className="space-y-[12px]">
        <div className="bg-[#f5f6f7] rounded-[6px] p-[10px]">
          <p className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e] mb-[4px]">Salary Progression</p>
          <div className="space-y-[2px]">
            <ProgressionItem year="2023" amount="$75,000" />
            <ProgressionItem year="2024" amount="$82,500" current />
          </div>
        </div>
        
        <div className="bg-[#f5f6f7] rounded-[6px] p-[10px]">
          <p className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e] mb-[4px]">Awards</p>
          <div className="space-y-[2px]">
            <AwardItem title="Spot Award Q3 2024" amount="$1,000" />
            <AwardItem title="Performance Bonus 2024" amount="$8,250" />
          </div>
        </div>
        
        <div className="bg-[#e8f4fd] rounded-[6px] p-[10px]">
          <p className="font-['72:Bold',sans-serif] text-[12px] text-[#0070f2] mb-[2px]">Budget Status</p>
          <p className="font-['72:Regular',sans-serif] text-[11px] text-[#1d2d3e]">
            1 spot award remaining in your annual allocation
          </p>
        </div>
      </div>
    </div>
  );
}

function ProgressionItem({ year, amount, current }: { year: string; amount: string; current?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">{year}</span>
      <span className={`font-['72:${current ? 'Bold' : 'Regular'}',sans-serif] text-[12px] ${current ? 'text-[#0070f2]' : 'text-[#1d2d3e]'}`}>
        {amount}
      </span>
    </div>
  );
}

function AwardItem({ title, amount }: { title: string; amount: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">{title}</span>
      <span className="font-['72:Regular',sans-serif] text-[11px] text-[#2d9f5c]">{amount}</span>
    </div>
  );
}

export function JobDescriptionPreview() {
  return (
    <div className="bg-white rounded-[8px] p-[12px] border border-[#d9e0e6] mt-[8px]">
      <div className="mb-[12px]">
        <p className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e]">Digital Marketing Specialist</p>
        <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">Marketing Department • Full-time</p>
      </div>
      
      <div className="space-y-[8px]">
        <div>
          <p className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e] mb-[4px]">Role Summary</p>
          <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82] leading-[16px]">
            Drive digital marketing campaigns across multiple channels, analyze performance metrics, 
            and optimize strategies to achieve business objectives.
          </p>
        </div>
        
        <div>
          <p className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e] mb-[4px]">Key Responsibilities</p>
          <ul className="list-disc list-inside space-y-[2px]">
            <li className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">Develop and execute digital marketing strategies</li>
            <li className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">Manage social media and content marketing</li>
            <li className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">Analyze campaign performance and ROI</li>
          </ul>
        </div>
        
        <div>
          <p className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e] mb-[4px]">Requirements</p>
          <ul className="list-disc list-inside space-y-[2px]">
            <li className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">3+ years digital marketing experience</li>
            <li className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">Strong analytical and communication skills</li>
            <li className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">Experience with marketing automation tools</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Helper components
function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">{label}</span>
      <span className="font-['72:Regular',sans-serif] text-[12px] text-[#1d2d3e]">{value}</span>
    </div>
  );
}

function PayItem({ label, value, highlight, negative }: { label: string; value: string; highlight?: boolean; negative?: boolean }) {
  return (
    <div className="flex justify-between items-center">
      <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">{label}</span>
      <span className={`font-['72:${highlight ? 'Bold' : 'Regular'}',sans-serif] text-[12px] ${negative ? 'text-[#c73030]' : highlight ? 'text-[#2d9f5c]' : 'text-[#1d2d3e]'}`}>
        {value}
      </span>
    </div>
  );
}

function ComparisonItem({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex justify-between items-center py-[2px]">
      <span className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">{label}</span>
      <span className={`font-['72:${highlight ? 'Bold' : 'Regular'}',sans-serif] text-[11px] ${highlight ? 'text-[#2d9f5c]' : 'text-[#1d2d3e]'}`}>
        {value}
      </span>
    </div>
  );
}

function CostItem({ label, value, percentage }: { label: string; value: string; percentage: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">{label}</span>
      <div className="text-right">
        <span className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e]">{value}</span>
        <span className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82] ml-[4px]">({percentage})</span>
      </div>
    </div>
  );
}

export function PerformanceSummaryWithSources() {
  return (
    <div className="space-y-[8px]">
      <p className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e]">Achievements:</p>
      <p className="font-['72:Regular',sans-serif] text-[14px] text-[#1d2d3e] leading-[20px]">
        • Productivity and efficiency – achieved September 2025<br/>
        • Digital marketing innovation – achieved October 2025
      </p>
      
      <p className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e] mt-[12px]">Feedback:</p>
      <p className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e]">Strengths:</p>
      <p className="font-['72:Regular',sans-serif] text-[14px] text-[#1d2d3e] leading-[20px]">
        • Strong financial understanding<br/>
        • Excellent presentation skills
      </p>
      
      <p className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e] mt-[8px]">Areas for improvement:</p>
      <p className="font-['72:Regular',sans-serif] text-[14px] text-[#1d2d3e] leading-[20px]">
        • Pace of delivery<br/>
        • Staying current with financial market trends
      </p>
      
      <p className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e] mt-[12px]">Activities:</p>
      <p className="font-['72:Regular',sans-serif] text-[14px] text-[#1d2d3e] leading-[20px]">
        • Strategic vision – on target<br/>
        • Digital marketing – on target<br/>
        • Team welfare initiatives – on hold
      </p>
      
      <p className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e] mt-[12px]">Goals:</p>
      <p className="font-['72:Regular',sans-serif] text-[14px] text-[#1d2d3e] leading-[20px]">
        • Competitive intelligence system – on target<br/>
        • Event planning and communications – off target
      </p>
      
      <p className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e] mt-[12px]">One-to-one meetings:</p>
      <p className="font-['72:Regular',sans-serif] text-[14px] text-[#1d2d3e] leading-[20px]">
        • Focused on progression and improving financial knowledge
      </p>
    </div>
  );
}

function AchievementItem({ title, date }: { title: string; date: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="font-['72:Regular',sans-serif] text-[11px] text-[#1d2d3e]">{title}</span>
      <span className="font-['72:Regular',sans-serif] text-[11px] text-[#2d9f5c]">{date}</span>
    </div>
  );
}

function StrengthItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-[4px]">
      <span className="font-['72:Regular',sans-serif] text-[11px] text-[#2d9f5c]">✓</span>
      <span className="font-['72:Regular',sans-serif] text-[11px] text-[#1d2d3e]">{text}</span>
    </div>
  );
}

function DevelopmentItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-[4px]">
      <span className="font-['72:Regular',sans-serif] text-[11px] text-[#f59b00]">•</span>
      <span className="font-['72:Regular',sans-serif] text-[11px] text-[#1d2d3e]">{text}</span>
    </div>
  );
}

export function ImprovementAnalysisWithSources() {
  return (
    <div className="space-y-[8px]">
      <p className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e]">1) Pace of delivery:</p>
      <p className="font-['72:Regular',sans-serif] text-[14px] text-[#1d2d3e] leading-[20px]">
        • Break work into time-boxed milestones<br/>
        • Set clear delivery checkpoints<br/>
        • Prioritise high-impact tasks
      </p>
      
      <p className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e] mt-[12px]">2) Financial knowledge:</p>
      <p className="font-['72:Regular',sans-serif] text-[14px] text-[#1d2d3e] leading-[20px]">
        • Schedule regular market updates<br/>
        • Partner with finance stakeholders<br/>
        • Attend targeted learning sessions
      </p>
    </div>
  );
}

function ActionItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-[4px]">
      <span className="font-['72:Regular',sans-serif] text-[11px] text-[#0070f2]">→</span>
      <span className="font-['72:Regular',sans-serif] text-[11px] text-[#1d2d3e]">{text}</span>
    </div>
  );
}

export function CoachingGuidanceWithSources() {
  return (
    <div className="space-y-[8px]">
      <p className="font-['72:Regular',sans-serif] text-[14px] text-[#1d2d3e] leading-[20px]">
        Start by recognising strengths, frame development areas as growth opportunities, and offer support through coaching and regular check-ins.
      </p>
    </div>
  );
}

function CoachingTip({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-[#f5f6f7] rounded-[6px] p-[8px]">
      <p className="font-['72:Bold',sans-serif] text-[12px] text-[#1d2d3e] mb-[2px]">
        {icon} {title}
      </p>
      <p className="font-['72:Regular',sans-serif] text-[11px] text-[#556b82]">
        {description}
      </p>
    </div>
  );
}

export function MentorshipEvaluationWithSources() {
  return (
    <div className="space-y-[8px]">
      <p className="font-['72:Regular',sans-serif] text-[14px] text-[#1d2d3e] leading-[20px]">
        Gus has consistently received positive feedback on presentation skills and would be a strong candidate for a public speaking mentor.
      </p>
    </div>
  );
}

function EvidenceItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-[4px]">
      <span className="font-['72:Regular',sans-serif] text-[11px] text-[#2d9f5c]">✓</span>
      <span className="font-['72:Regular',sans-serif] text-[11px] text-[#1d2d3e]">{text}</span>
    </div>
  );
}

export function ActionCompletedCard() {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-[12px] p-[24px] border border-[#d9e0e6] text-center">
      {/* Success Icon */}
      <div className="flex justify-center mb-[16px]">
        <div className="relative w-[120px] h-[80px]">
          {/* Blue circle */}
          <div className="absolute left-[40px] top-[20px] w-[40px] h-[40px] bg-[#89cff0] rounded-full" />
          {/* Orange/brown circle */}
          <div className="absolute right-[40px] top-[10px] w-[50px] h-[50px] rounded-full" style={{ background: 'repeating-linear-gradient(45deg, #c77a3a 0px, #c77a3a 4px, #a86430 4px, #a86430 8px)' }} />
          {/* Flag */}
          <div className="absolute left-[30px] top-[15px]">
            <div className="w-[2px] h-[40px] bg-[#1d2d3e]" />
            <div className="absolute top-[0px] left-[2px] w-[25px] h-[15px] bg-[#0070f2] rounded-r-[4px]" />
          </div>
        </div>
      </div>
      
      {/* Title */}
      <h3 className="font-['72:Bold',sans-serif] text-[18px] text-[#1d2d3e] mb-[8px]">
        {t('action.completed.title')}
      </h3>
      
      {/* Description */}
      <p className="font-['72:Regular',sans-serif] text-[14px] text-[#556b82] leading-[20px]">
        {t('action.completed.flightMessage')}
      </p>
    </div>
  );
}

export function TravelPolicyWithSource() {
  const [showSource, setShowSource] = React.useState(false);
  const { t } = useTranslation();
  
  return (
    <div>
      <p className="font-['72:Regular',sans-serif] text-[14px] text-[#1d2d3e] leading-[20px] mb-[12px]">
        The HR policy for per diem in high-cost cities like Atlanta follows the GSA guidelines. For Atlanta, the current per diem rate is $89 per day for meals and incidental expenses. This ensures that you are adequately compensated for the higher cost of living while traveling for the project.
      </p>
      
      {!showSource ? (
        <button
          onClick={() => setShowSource(true)}
          className="flex items-center gap-[8px] text-[#0070f2] hover:text-[#005fcc] transition-colors group"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transform group-hover:translate-x-[2px] transition-transform">
            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-['72:Bold',sans-serif] text-[14px]">{t('source.documents')}</span>
        </button>
      ) : (
        <div className="bg-[#f5f6f7] rounded-[8px] p-[16px] border border-[#d9e0e6] mt-[8px]">
          {/* Header with collapse button */}
          <div className="flex items-center justify-between mb-[12px]">
            <div className="flex items-center gap-[8px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transform rotate-90">
                <path d="M7 4L13 10L7 16" stroke="#0070f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e]">{t('source.document')}</span>
            </div>
            <button
              onClick={() => setShowSource(false)}
              className="text-[#556b82] hover:text-[#1d2d3e] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M12 12L4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          
          {/* Document Title */}
          <a href="#" className="block text-[#0070f2] hover:text-[#005fcc] font-['72:Regular',sans-serif] text-[14px] mb-[12px] underline">
            {t('source.pdfTitle')}
          </a>
          
          {/* Section Details */}
          <div className="space-y-[4px]">
            <p className="font-['72:Regular',sans-serif] text-[13px] text-[#1d2d3e]">
              {t('source.section45')}
            </p>
            <p className="font-['72:Regular',sans-serif] text-[13px] text-[#1d2d3e]">
              {t('source.section453')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export function SourceDocumentCard({ onSendMessage }: { onSendMessage?: (message: string) => void }) {
  const [showSource, setShowSource] = React.useState(false);
  const { onNavigateToPDF } = usePDFNavigation();
  const { t } = useTranslation();
  
  const handlePDFClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Navigate to PDF view with completion callback
    onNavigateToPDF(() => {
      if (onSendMessage) {
        onSendMessage('__COMPLETE_SCENARIO__');
      }
    });
  };
  
  return (
    <div className="bg-white rounded-[8px] p-[16px] border border-[#d9e0e6]">
      {!showSource ? (
        <button
          onClick={() => setShowSource(true)}
          className="flex items-center gap-[8px] text-[#0070f2] hover:text-[#005fcc] transition-colors group"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transform group-hover:translate-x-[2px] transition-transform">
            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-['72:Bold',sans-serif] text-[14px]">{t('source.documents')}</span>
        </button>
      ) : (
        <div className="bg-[#f5f6f7] rounded-[8px] p-[16px] border border-[#d9e0e6]">
          {/* Header with collapse button */}
          <div className="flex items-center justify-between mb-[12px]">
            <div className="flex items-center gap-[8px]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transform rotate-90">
                <path d="M7 4L13 10L7 16" stroke="#0070f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e]">{t('source.document')}</span>
            </div>
            <button
              onClick={() => setShowSource(false)}
              className="text-[#556b82] hover:text-[#1d2d3e] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M12 12L4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          
          {/* Document Title */}
          <a 
            href="/global-hr-policy.html" 
            target="_blank"
            rel="noopener noreferrer"
            onClick={handlePDFClick}
            className="block text-[#0070f2] hover:text-[#005fcc] font-['72:Regular',sans-serif] text-[14px] mb-[12px] underline cursor-pointer"
          >
            {t('source.pdfTitle')}
          </a>
          
          {/* Section Details */}
          <div className="space-y-[4px]">
            <p className="font-['72:Regular',sans-serif] text-[13px] text-[#1d2d3e]">
              {t('source.section45')}
            </p>
            <p className="font-['72:Regular',sans-serif] text-[13px] text-[#1d2d3e]">
              {t('source.section453')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// Gus Disambiguation Component - shows two Gus profiles for selection
export function GusDisambiguation({ onSendMessage }: { onSendMessage?: (messageText: string) => void }) {
  const { t } = useTranslation();
  
  const handleSelectGusRevesz = () => {
    if (onSendMessage) {
      onSendMessage('Gus Revesz');
    }
  };

  const handleSelectGusMuller = () => {
    // Do nothing - only Gus Revesz is the correct selection
  };

  return (
    <div className="bg-white rounded-[12px] p-[20px] border border-[#d9e0e6] mt-[8px] max-w-[600px]">
      {/* Gus Müller */}
      <div className="flex items-center gap-[16px] pb-[20px] mb-[20px] border-b border-[#e5e7eb]">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTczNDU1NTY5OXww&ixlib=rb-4.1.0&q=80&w=400"
          alt="Gus Müller"
          className="w-[64px] h-[64px] rounded-full object-cover flex-shrink-0 object-center"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-['72:Bold',sans-serif] text-[16px] text-[#1d2d3e] mb-[2px]">Gus Müller</h3>
          <p className="font-['72:Regular',sans-serif] text-[13px] text-[#556b82] mb-[8px] truncate">gus.muller@techwave.com</p>
          <button
            onClick={handleSelectGusMuller}
            className="px-[16px] py-[6px] border border-[#0070f2] text-[#0070f2] rounded-[4px] font-['72:Bold',sans-serif] text-[13px] hover:bg-[#0070f2] hover:text-white transition-colors"
          >
            {t('common.select')}
          </button>
        </div>
      </div>

      {/* Gus Revesz */}
      <div className="flex items-center gap-[16px]">
        <img 
          src={imgGusProfilePic}
          alt="Gus Revesz"
          className="w-[64px] h-[64px] rounded-full object-cover flex-shrink-0 object-center"
        />
        <div className="flex-1 min-w-0">
          <h3 className="font-['72:Bold',sans-serif] text-[16px] text-[#1d2d3e] mb-[2px]">Gus Revesz</h3>
          <p className="font-['72:Regular',sans-serif] text-[13px] text-[#556b82] mb-[8px] truncate">gus.revesz@techwave.com</p>
          <button
            onClick={handleSelectGusRevesz}
            className="px-[16px] py-[6px] border border-[#0070f2] text-[#0070f2] rounded-[4px] font-['72:Bold',sans-serif] text-[13px] hover:bg-[#0070f2] hover:text-white transition-colors"
          >
            {t('common.select')}
          </button>
        </div>
      </div>
    </div>
  );
}

export function BuddyAssignmentCard({ onSubmit }: { onSubmit?: () => void }) {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-[12px] p-[24px] max-w-[900px] border border-[#d9e0e6]">
      <div className="grid grid-cols-2 gap-[24px] mb-[24px]">
        {/* New Hire Card */}
        <div className="flex flex-col items-center text-center">
          <h3 className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e] mb-[12px]">{t('onboarding.newHire')}</h3>
          <ImageWithFallback 
            src={imgGusProfilePic}
            alt="Gus Revesz"
            className="w-[64px] h-[64px] rounded-full object-cover mb-[8px]"
          />
          <h4 className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e] mb-[12px]">Gus Revesz</h4>
          
          <div className="bg-[#f7f7f7] rounded-[8px] p-[12px] w-full">
            <p className="font-['72:Bold',sans-serif] text-[11px] text-[#556b82] mb-[8px]">{t('onboarding.noteToNewHire')}</p>
            <button 
              disabled
              className="bg-[#e8e8e8] text-[#9e9e9e] font-['72:Bold',sans-serif] text-[10px] px-[8px] py-[8px] rounded-[6px] w-full cursor-not-allowed"
            >
              {t('onboarding.noteIsDrafted')}
            </button>
          </div>
        </div>
        
        {/* Buddy Card */}
        <div className="flex flex-col items-center text-center">
          <h3 className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e] mb-[12px]">{t('onboarding.buddy')}</h3>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjU4NzUyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Tory Bosco"
            className="w-[64px] h-[64px] rounded-full object-cover mb-[8px]"
          />
          <h4 className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e] mb-[12px]">Tory Bosco</h4>
          
          <div className="bg-[#f7f7f7] rounded-[8px] p-[12px] w-full">
            <p className="font-['72:Bold',sans-serif] text-[11px] text-[#556b82] mb-[8px]">{t('onboarding.noteToBuddy')}</p>
            <button 
              disabled
              className="bg-[#e8e8e8] text-[#9e9e9e] font-['72:Bold',sans-serif] text-[10px] px-[8px] py-[8px] rounded-[6px] w-full cursor-not-allowed"
            >
              {t('onboarding.noteIsDrafted')}
            </button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={onSubmit}
        className="w-full py-[10px] px-[20px] rounded-[4px] font-['72:Bold',sans-serif] text-[14px] text-white transition-all duration-200 shadow-sm hover:shadow-md"
        style={{
          background: '#0070f2',
          border: '1px solid #0070f2',
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.background = '#0064d9';
          e.currentTarget.style.borderColor = '#0064d9';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = '#0070f2';
          e.currentTarget.style.borderColor = '#0070f2';
        }}
      >
        {t('common.submit')}
      </button>
    </div>
  );
}

export function RewardPolicySource() {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="bg-white rounded-[8px] border border-[#d9e0e6] overflow-hidden mt-[12px]">
      {/* Header */}
      <div 
        className="flex items-center justify-between px-[16px] py-[12px] cursor-pointer hover:bg-[#f5f6f7] transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-[12px]">
          <div className="w-[36px] h-[36px] rounded-[8px] bg-[#e3f2fd] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 2V8H20" stroke="#1976d2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p className="font-['72:Bold',sans-serif] text-[14px] text-[#1d2d3e]">{t('reward.policy.title')}</p>
            <p className="font-['72:Regular',sans-serif] text-[12px] text-[#556b82]">{t('reward.policy.section')}</p>
          </div>
        </div>
        <svg 
          width="20" 
          height="20" 
          viewBox="0 0 20 20" 
          fill="none"
          className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
        >
          <path d="M5 7.5L10 12.5L15 7.5" stroke="#556b82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="px-[16px] pb-[16px] border-t border-[#d9e0e6] bg-[#f5f6f7]">
          <div className="pt-[12px]">
            <p className="font-['72:Bold',sans-serif] text-[13px] text-[#1d2d3e] mb-[8px]">{t('reward.policy.heading')}</p>
            <p className="font-['72:Regular',sans-serif] text-[13px] text-[#556b82] leading-[20px] mb-[8px]">
              {t('reward.policy.intro')}
            </p>
            <ul className="list-disc pl-[20px] space-y-[4px]">
              <li className="font-['72:Regular',sans-serif] text-[13px] text-[#556b82] leading-[20px]">
                {t('reward.policy.bullet1')}
              </li>
              <li className="font-['72:Regular',sans-serif] text-[13px] text-[#556b82] leading-[20px]">
                {t('reward.policy.bullet2')}
              </li>
              <li className="font-['72:Regular',sans-serif] text-[13px] text-[#556b82] leading-[20px]">
                {t('reward.policy.bullet3')}
              </li>
              <li className="font-['72:Regular',sans-serif] text-[13px] text-[#556b82] leading-[20px]">
                {t('reward.policy.bullet4')}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

// Component registry for dynamic rendering
export const csvComponentRegistry: Record<string, React.ComponentType> = {
  profile_teaser_card: ProfileTeaserCard,
  public_profile_view: PublicProfileView,
  SARAH_PROFILE_CARD: SarahProfileCard,
  GUS_DISAMBIGUATION: GusDisambiguation,
  BUDDY_ASSIGNMENT_CARD: BuddyAssignmentCard,
  flight_booking_summary: FlightBookingSummary,
  action_completed_card: ActionCompletedCard,
  travel_policy_with_source: TravelPolicyWithSource,
  source_document_card: SourceDocumentCard,
  payslip_breakdown: PayslipBreakdown,
  payslip_comparison: PayslipComparison,
  cost_summary: CostSummary,
  regional_cost_chart: RegionalCostChart,
  yoy_cost_chart: YoYCostChart,
  regional_pie_charts: RegionalPieCharts,
  compensation_insights: CompensationInsightsCSV,
  job_description_preview: JobDescriptionPreview,
  performance_summary_with_sources: PerformanceSummaryWithSources,
  improvement_analysis_with_sources: ImprovementAnalysisWithSources,
  coaching_guidance_with_sources: CoachingGuidanceWithSources,
  mentorship_evaluation_with_sources: MentorshipEvaluationWithSources,
  reward_policy_source: RewardPolicySource,
  compensation_summary_infographic: CompensationSummaryInfographic,
  position_selector: PositionSelector,
  date_selector: DateSelector,
  position_infographic: PositionInfoGraphic,
  meeting_time_selector: MeetingTimeSelector,
  performance_infographic: PerformanceInfoGraphic,
};

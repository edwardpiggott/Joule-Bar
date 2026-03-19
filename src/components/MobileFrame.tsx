import { ReactNode } from 'react';

interface MobileFrameProps {
  children: ReactNode;
  showFrame?: boolean; // Hide frame on actual mobile devices
}

export function MobileFrame({ children, showFrame = true }: MobileFrameProps) {
  if (!showFrame) {
    // On actual mobile, just show content without frame
    return <div className="w-full h-full">{children}</div>;
  }

  // Desktop view with phone frame
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-8 bg-gradient-to-br from-[#7b2cbf] via-[#5a189a] to-[#3c096c]">
      <div className="relative">
        {/* iPhone Frame */}
        <div className="relative w-[390px] h-[844px] bg-black rounded-[60px] shadow-2xl p-3">
          {/* Screen Bezel */}
          <div className="relative w-full h-full bg-white rounded-[48px] overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-3xl z-50" />
            
            {/* Status Bar */}
            <div className="absolute top-0 left-0 right-0 h-11 px-8 flex items-center justify-between text-black z-40 pointer-events-none">
              <span className="text-[15px] font-semibold">9:41</span>
              <div className="flex items-center gap-1.5">
                <svg className="w-[17px] h-[11px]" viewBox="0 0 17 11" fill="none">
                  <rect opacity="0.4" x="0.5" y="0.5" width="4" height="10" rx="1" stroke="currentColor"/>
                  <rect opacity="0.4" x="6.5" y="0.5" width="4" height="10" rx="1" stroke="currentColor"/>
                  <rect x="12.5" y="0.5" width="4" height="10" rx="1" stroke="currentColor" fill="currentColor"/>
                </svg>
                <svg className="w-[15.5px] h-[11px]" viewBox="0 0 16 11" fill="none">
                  <path d="M8.5 0C10.433 0 12 1.567 12 3.5C12 5.433 10.433 7 8.5 7C6.567 7 5 5.433 5 3.5C5 1.567 6.567 0 8.5 0ZM8.5 1C7.11929 1 6 2.11929 6 3.5C6 4.88071 7.11929 6 8.5 6C9.88071 6 11 4.88071 11 3.5C11 2.11929 9.88071 1 8.5 1ZM1 2C2.38071 2 3.5 3.11929 3.5 4.5C3.5 5.88071 2.38071 7 1 7V2ZM16 2V7C14.6193 7 13.5 5.88071 13.5 4.5C13.5 3.11929 14.6193 2 16 2Z" fill="currentColor"/>
                </svg>
                <svg className="w-[25px] h-[12px]" viewBox="0 0 25 12" fill="none">
                  <rect opacity="0.4" x="0.5" y="0.5" width="21" height="11" rx="2.5" stroke="currentColor"/>
                  <path opacity="0.4" d="M23 4V8C23.8047 7.66122 24.3382 6.87313 24.3382 6C24.3382 5.12687 23.8047 4.33878 23 4Z" fill="currentColor"/>
                  <rect x="2" y="2" width="18" height="8" rx="1.5" fill="currentColor"/>
                </svg>
              </div>
            </div>
            
            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-1.5 bg-black rounded-full opacity-60 z-40" />
            
            {/* Content */}
            <div className="w-full h-full overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

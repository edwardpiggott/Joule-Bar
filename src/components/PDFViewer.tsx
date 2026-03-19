import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

interface PDFViewerProps {
  onBack: () => void;
}

export function PDFViewer({ onBack }: PDFViewerProps) {
  useEffect(() => {
    // Listen for message from PDF iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'PDF_CONTINUE_CLICKED') {
        // Trigger the completion callback
        onBack();
      }
    };

    window.addEventListener('message', handleMessage);
    
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [onBack]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100]">
      {/* A4 Size PDF Container */}
      <div className="relative bg-white rounded-lg shadow-2xl" style={{ width: '794px', height: '90vh', maxHeight: '1123px' }}>
        {/* Header */}
        <div className="bg-white border-b border-[#d9e0e6] px-6 py-4 rounded-t-lg flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[#0070f2] hover:text-[#005fcc] transition-colors font-['72:Bold',sans-serif] text-[14px]"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <div className="h-6 w-px bg-[#d9e0e6]" />
          <h1 className="font-['72:Bold',sans-serif] text-[18px] text-[#1d2d3e]">
            TechWave Inc. Global HR Policy.PDF
          </h1>
        </div>

        {/* PDF Content - Embedded iframe */}
        <div className="h-[calc(100%-72px)] overflow-hidden">
          <iframe
            src="/global-hr-policy.html"
            className="w-full h-full border-0"
            title="TechWave Inc. Global HR Policy"
          />
        </div>
      </div>
    </div>
  );
}
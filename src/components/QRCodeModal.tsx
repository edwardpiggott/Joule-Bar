import { X, Smartphone } from 'lucide-react';
import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
}

export function QRCodeModal({ isOpen, onClose, url }: QRCodeModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (isOpen && canvasRef.current && url) {
      QRCode.toCanvas(canvasRef.current, url, {
        width: 280,
        margin: 2,
        color: {
          dark: '#3c096c',
          light: '#ffffff',
        },
      });
    }
  }, [isOpen, url]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-[slideUp_0.3s_ease-out]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#7b2cbf] to-[#5a189a] rounded-2xl mb-4 shadow-lg">
            <Smartphone className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl text-gray-800 font-['72:Bold',sans-serif] mb-2">
            Try on Mobile
          </h2>
          <p className="text-gray-600 font-['72:Regular',sans-serif]">
            Scan the QR code with your phone camera
          </p>
        </div>

        {/* QR Code */}
        <div className="flex justify-center mb-6">
          <div className="bg-white p-4 rounded-2xl shadow-inner border-4 border-gray-100">
            <canvas ref={canvasRef} className="rounded-lg" />
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-4 mb-4 border border-purple-100">
          <p className="text-sm text-gray-700 font-['72:Regular',sans-serif] text-center">
            Open your phone's camera and point it at the QR code above
          </p>
        </div>

        {/* Manual URL */}
        <div className="text-center">
          <p className="text-xs text-gray-500 font-['72:Regular',sans-serif] mb-2">
            Or visit manually:
          </p>
          <div className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
            <a 
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#5a189a] font-['72:Regular',sans-serif] hover:underline break-all"
            >
              {url}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

import { createContext, useContext } from 'react';

interface PDFNavigationContextType {
  onNavigateToPDF: (onComplete?: () => void) => void;
}

export const PDFNavigationContext = createContext<PDFNavigationContextType | null>(null);

export function usePDFNavigation() {
  const context = useContext(PDFNavigationContext);
  if (!context) {
    throw new Error('usePDFNavigation must be used within a PDFNavigationContext.Provider');
  }
  return context;
}
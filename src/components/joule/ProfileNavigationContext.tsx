import { createContext, useContext } from 'react';

interface ProfileNavigationContextType {
  onNavigateToProfile: () => void;
}

export const ProfileNavigationContext = createContext<ProfileNavigationContextType | null>(null);

export function useProfileNavigation() {
  const context = useContext(ProfileNavigationContext);
  if (!context) {
    throw new Error('useProfileNavigation must be used within a ProfileNavigationProvider');
  }
  return context;
}

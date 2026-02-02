import { createContext, useContext } from 'react';
import type { ThemeProviderState } from '@/hooks/theme/theme-provider';

export const ThemeProviderContext = createContext<
  ThemeProviderState | undefined
>(undefined);

/**
 * Hook to access and manage theme state.
 * Provides access to the current theme setting and a function to update it.
 *
 * @example
 * ```tsx
 * const { theme, setTheme } = useTheme();
 * // Get current theme
 * console.log(theme); // 'dark' | 'light' | 'system'
 * // Set theme
 * setTheme('dark');
 * ```
 *
 * @returns {ThemeProviderState} Object containing:
 *   - `theme`: Current theme setting ('dark', 'light', or 'system')
 *   - `setTheme`: Function to update the theme
 * @throws {Error} If used outside of ThemeProvider
 */
export const useTheme = (): ThemeProviderState => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeProviderContext } from '@/hooks/theme/use-theme';

type Theme = 'dark' | 'light' | 'system';

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const defaultTheme: Theme = 'system';
const storageKey = 'portfolio-ui-theme';

function ThemeProvider({ children }: React.PropsWithChildren) {
  const [internalTheme, setInternalTheme] = useState<Theme>(() => {
    let theme = (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    if (theme === defaultTheme) {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    return theme;
  });

  // updates root css class on theme change
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(internalTheme);
  }, [internalTheme]);

  useEffect(() => {
    // load transitions styles after page load (keeps text from "fading" in)
    setTimeout(() => document.body.classList.add('transitions-enabled'), 250);

    // setup event listener to change theme if user changes OS theme
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (event: MediaQueryListEvent) => {
      setInternalTheme(event.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', listener);
    return () => {
      mediaQuery.removeEventListener('change', listener);
    };
  }, []);

  const setTheme = useCallback((theme: Theme) => {
    localStorage.setItem(storageKey, theme);
    setInternalTheme(theme);
  }, []);

  const themeContextValue: ThemeProviderState = useMemo(
    () => ({
      theme: internalTheme,
      setTheme,
    }),
    [internalTheme, setTheme]
  );

  return (
    <ThemeProviderContext.Provider value={themeContextValue}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export default ThemeProvider;

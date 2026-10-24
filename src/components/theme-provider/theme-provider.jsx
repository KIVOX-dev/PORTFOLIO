'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { classes } from '@/utils/style';

export const ThemeContext = createContext({});

export const ThemeProvider = ({
  theme = 'dark',
  children,
  className,
  as: Component = 'div',
  toggleTheme,
  ...rest
}) => {
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.theme;

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: toggleTheme || parentTheme.toggleTheme,
      }}
    >
      {isRootProvider && children}
      {/* Nested providers need a div to override theme tokens */}
      {!isRootProvider && (
        <Component className={classes(className)} data-theme={theme} {...rest}>
          {children}
        </Component>
      )}
    </ThemeContext.Provider>
  );
};

/**
 * Owns the site theme. The initial value comes from the theme cookie on the
 * server, toggling updates the cookie, the body attribute and the theme color.
 */
export function RootThemeProvider({ initialTheme = 'dark', children }) {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = useCallback(
    newTheme => {
      setTheme(current => newTheme || (current === 'dark' ? 'light' : 'dark'));
    },
    [setTheme]
  );

  useEffect(() => {
    document.body.dataset.theme = theme;
    document.cookie = `theme=${theme}; path=/; max-age=604800; samesite=lax`;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#111' : '#F2F2F2');
  }, [theme]);

  return (
    <ThemeProvider theme={theme} toggleTheme={toggleTheme}>
      {children}
    </ThemeProvider>
  );
}

export function useTheme() {
  const currentTheme = useContext(ThemeContext);
  return currentTheme;
}

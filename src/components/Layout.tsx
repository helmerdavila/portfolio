import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { ILayout } from '../interfaces';

const LocaleContext = React.createContext(null);
const ThemeContext = React.createContext<{ isLightTheme: string; toggleTheme: () => void }>({
  isLightTheme: 'light',
  toggleTheme: null,
});

const ThemeContextProvider = ({ children }: { children: ReactNode }): ReactElement => {
  const [isLightTheme, setIsLightTheme] = useState<string>(localStorage.getItem('is_light_theme') ?? 'light');

  const changeTheme = () => {
    if (
      localStorage.is_light_theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => changeTheme(), []);

  const onToggleTheme = () => {
    const updateLightTheme = isLightTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('is_light_theme', updateLightTheme);
    setIsLightTheme(updateLightTheme);
    changeTheme();
  };

  return <ThemeContext.Provider value={{ isLightTheme, toggleTheme: onToggleTheme }}>{children}</ThemeContext.Provider>;
};

// Use the built-in Context API to make the "locale" available to every component in the tree
// This e.g. enables the LocalizedLink to function correctly
// As this component wraps every page (due to the wrapPageElement API) we can be sure to have
// the locale available everywhere!
const Layout = ({ children, pageContext: { locale } }: ILayout): ReactElement => (
  <LocaleContext.Provider value={{ locale }}>
    <ThemeContextProvider>{children}</ThemeContextProvider>
  </LocaleContext.Provider>
);

export { Layout, LocaleContext, ThemeContext };

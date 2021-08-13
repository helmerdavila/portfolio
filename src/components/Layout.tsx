import React, { useState } from 'react';

const LocaleContext = React.createContext(null);
const ThemeContext = React.createContext<{ isLightTheme: boolean; toggleTheme: () => void }>({
  isLightTheme: true,
  toggleTheme: () => {
    return;
  },
});

const ThemeContextProvider = ({ children }) => {
  const windowGlobal = typeof window !== 'undefined' && window;
  let themeValueInMemory =
    (windowGlobal?.localStorage?.getItem('helmer_portfolio_is_light') as unknown as boolean) ?? true;
  themeValueInMemory = typeof themeValueInMemory === 'string' ? JSON.parse(themeValueInMemory) : themeValueInMemory;
  const [isLightTheme, setIsLightTheme] = useState<boolean>(themeValueInMemory);

  const onToggleTheme = () => {
    localStorage.setItem('helmer_portfolio_is_light', (!isLightTheme).toString());
    setIsLightTheme(!isLightTheme);
  };

  return <ThemeContext.Provider value={{ isLightTheme, toggleTheme: onToggleTheme }}>{children}</ThemeContext.Provider>;
};

// Use the built-in Context API to make the "locale" available to every component in the tree
// This e.g. enables the LocalizedLink to function correctly
// As this component wraps every page (due to the wrapPageElement API) we can be sure to have
// the locale available everywhere!
const Layout = ({
  children,
  pageContext: { locale },
}: {
  children: unknown;
  pageContext?: { locale: string };
}): JSX.Element => (
  <LocaleContext.Provider value={{ locale }}>
    <ThemeContextProvider>{children}</ThemeContextProvider>
  </LocaleContext.Provider>
);

export { Layout, LocaleContext, ThemeContext };


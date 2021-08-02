import React, { useState } from 'react';

const LocaleContext = React.createContext(null);
const ThemeContext = React.createContext<{ isLightTheme: boolean; toggleTheme: () => void }>({
  isLightTheme: true,
  toggleTheme: () => {
    return;
  },
});

const ThemeContextProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);

  const onToggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  return <ThemeContext.Provider value={{ isLightTheme, toggleTheme: onToggleTheme }}>{children}</ThemeContext.Provider>;
};

// Use the built-in Context API to make the "locale" available to every component in the tree
// This e.g. enables the LocalizedLink to function correctly
// As this component wraps every page (due to the wrapPageElement API) we can be sure to have
// the locale available everywhere!
const Layout = ({ children, pageContext: { locale } }: { children: unknown; pageContext?: { locale: string } }) => (
  <LocaleContext.Provider value={{ locale }}>
    <ThemeContextProvider>{children}</ThemeContextProvider>
  </LocaleContext.Provider>
);

export { Layout, LocaleContext, ThemeContext };

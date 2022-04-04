import React from 'react';
import { LocaleContext, ThemeContext } from '../components/Layout';
import { render, RenderResult } from '@testing-library/react';

interface ILocaleContextProps {
  locale: string;
}

interface IThemeContextProps {
  isLightTheme: boolean;
  toggleTheme: () => void;
}

export const customRender = (
  children: unknown,
  optionalParams: Partial<{
    localeContextProps: ILocaleContextProps;
    themeContextProps: IThemeContextProps;
  }> | null = null,
): RenderResult => {
  const defaultContexts = {
    localeContextProps: { locale: 'en' },
    themeContextProps: { isLightTheme: true, toggleTheme: jest.fn() },
  };
  const { localeContextProps, themeContextProps, ...renderOptions } = optionalParams ?? defaultContexts;

  return render(
    <LocaleContext.Provider value={localeContextProps ?? defaultContexts.localeContextProps}>
      <ThemeContext.Provider value={themeContextProps ?? defaultContexts.themeContextProps}>
        {children}
      </ThemeContext.Provider>
    </LocaleContext.Provider>,
    renderOptions,
  );
};

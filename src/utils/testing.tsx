import React, { ReactNode } from 'react';
import { LocaleContext, ThemeContext } from '../components/Layout';
import { render, RenderOptions, RenderResult } from '@testing-library/react';

interface ILocaleContextProps {
  locale: string;
}

interface IThemeContextProps {
  isLightTheme: boolean;
  toggleTheme: () => void;
}

export const customRender = (
  children: ReactNode,
  optionalParams:
    | (Partial<{
        localeContextProps: ILocaleContextProps;
        themeContextProps: IThemeContextProps;
      }> &
        RenderOptions)
    | null = null,
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

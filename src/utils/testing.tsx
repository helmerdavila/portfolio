import React from 'react';
import { LocaleContext, ThemeContext } from '../components/Layout';
import { render, RenderResult } from '@testing-library/react';

export const customRender = (children: unknown, optionalParams = null): RenderResult => {
  const { providerProps, ...renderOptions } = optionalParams ?? { providerProps: { value: { locale: 'en' } } };

  return render(
    <LocaleContext.Provider {...providerProps}>
      <ThemeContext.Provider
        value={{
          isLightTheme: true,
          toggleTheme: () => {
            return 'demo';
          },
        }}
      >
        {children}
      </ThemeContext.Provider>
    </LocaleContext.Provider>,
    renderOptions,
  );
};

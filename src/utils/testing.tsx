import React from 'react';
import { LocaleContext, ThemeContext } from '../components/Layout';
import { render } from '@testing-library/react';

export const customRender = (children, optionalParams = null) => {
  const { providerProps, ...renderOptions } = optionalParams ?? { providerProps: { value: { locale: 'en' } } };

  return render(
    <LocaleContext.Provider {...providerProps}>
      <ThemeContext.Provider value={{ isLightTheme: true, toggleTheme: () => {} }}>{children}</ThemeContext.Provider>
    </LocaleContext.Provider>,
    renderOptions,
  );
};

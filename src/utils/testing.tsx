import React from 'react';
import { LocaleContext } from '../components/Layout';
import { render } from '@testing-library/react';

export const customRender = (children, optionalParams = null) => {
  const { providerProps, ...renderOptions } = optionalParams ?? { providerProps: { value: { locale: 'en' } } };

  return render(<LocaleContext.Provider {...providerProps}>{children}</LocaleContext.Provider>, renderOptions);
};

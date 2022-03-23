import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { LocaleContext } from '../Layout';
import AboutMe from './AboutMe';
import { useStaticQuery } from 'gatsby';

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockReturnValueOnce({
    rawData: {
      edges: [
        {
          node: {
            name: 'en',
            translations: {
              about_me: 'About me',
            },
          },
        },
        {
          node: {
            name: 'fr',
            translations: {
              about_me: 'À propos de moi',
            },
          },
        },
        {
          node: {
            name: 'es',
            translations: {
              about_me: 'Acerca de mi',
            },
          },
        },
      ],
    },
  });
});

afterEach(cleanup);

const customRender = (children, { providerProps, ...renderOptions }) => {
  return render(<LocaleContext.Provider {...providerProps}>{children}</LocaleContext.Provider>, renderOptions);
};

it('renders without issues in english', () => {
  const providerProps = { value: { locale: 'en' } };
  const { queryByText } = customRender(<AboutMe />, { providerProps });

  expect(queryByText('About me')).toBeInTheDocument();
  expect(queryByText('Acerca de mi')).toBeNull();
  expect(queryByText('À propos de moi')).toBeNull();
});

it('renders without issues in spanish', () => {
  const providerProps = { value: { locale: 'es' } };
  const { queryByText } = customRender(<AboutMe />, { providerProps });

  expect(queryByText('About me')).toBeNull();
  expect(queryByText('Acerca de mi')).toBeInTheDocument();
  expect(queryByText('À propos de moi')).toBeNull();
});

it('renders without issues in french', () => {
  const providerProps = { value: { locale: 'fr' } };
  const { queryByText } = customRender(<AboutMe />, { providerProps });

  expect(queryByText('About me')).toBeNull();
  expect(queryByText('Acerca de mi')).toBeNull();
  expect(queryByText('À propos de moi')).toBeInTheDocument();
});

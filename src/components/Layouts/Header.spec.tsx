import React from 'react';
import { customRender } from '../../utils/testing';
import { cleanup } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import { loadTranslations } from '../../utils/mockresponses';
import translations_en from '../../../config/translations/en.json';
import translations_es from '../../../config/translations/es.json';
import translations_fr from '../../../config/translations/fr.json';
import Header, { HeaderComponent } from './Header';

beforeEach(() => (useStaticQuery as jest.Mock).mockReturnValueOnce(loadTranslations));

afterEach(cleanup);

it('renders without issues in english', () => {
  const { queryByText } = customRender(<Header />);

  expect(queryByText(translations_en.download_cv)).toBeInTheDocument();
  expect(queryByText(translations_es.download_cv)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.download_cv)).not.toBeInTheDocument();
});

it('renders without issues in spanish', () => {
  const { queryByText } = customRender(<Header />, { localeContextProps: { locale: 'es' } });

  expect(queryByText(translations_en.download_cv)).not.toBeInTheDocument();
  expect(queryByText(translations_es.download_cv)).toBeInTheDocument();
  expect(queryByText(translations_fr.download_cv)).not.toBeInTheDocument();
});

it('renders without issues in french', () => {
  const { queryByText } = customRender(<Header />, { localeContextProps: { locale: 'fr' } });

  expect(queryByText(translations_en.download_cv)).not.toBeInTheDocument();
  expect(queryByText(translations_es.download_cv)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.download_cv)).toBeInTheDocument();
});

it('renders with scrollPosition > 0', () => {
  const { queryByText } = customRender(<HeaderComponent scrollPositionY={200} />);

  expect(queryByText(translations_en.download_cv)).toBeInTheDocument();
});

import React from 'react';
import { customRender } from '../../utils/testing';
import Footer from './Footer';
import { cleanup } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import { loadTranslations } from '../../utils/mockresponses';
import translations_en from '../../../config/translations/en.json';
import translations_es from '../../../config/translations/es.json';
import translations_fr from '../../../config/translations/fr.json';

beforeEach(() => (useStaticQuery as jest.Mock).mockReturnValueOnce(loadTranslations));

afterEach(cleanup);

it('renders without issues in english', () => {
  const { queryByText } = customRender(<Footer />);

  expect(queryByText(translations_en.powered_by_gatsby)).toBeInTheDocument();
  expect(queryByText(translations_es.powered_by_gatsby)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.powered_by_gatsby)).not.toBeInTheDocument();
});

it('renders without issues in spanish', () => {
  const { queryByText } = customRender(<Footer />, { localeContextProps: { locale: 'es' } });

  expect(queryByText(translations_en.powered_by_gatsby)).not.toBeInTheDocument();
  expect(queryByText(translations_es.powered_by_gatsby)).toBeInTheDocument();
  expect(queryByText(translations_fr.powered_by_gatsby)).not.toBeInTheDocument();
});

it('renders without issues in french', () => {
  const { queryByText } = customRender(<Footer />, { localeContextProps: { locale: 'fr' } });

  expect(queryByText(translations_en.powered_by_gatsby)).not.toBeInTheDocument();
  expect(queryByText(translations_es.powered_by_gatsby)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.powered_by_gatsby)).toBeInTheDocument();
});

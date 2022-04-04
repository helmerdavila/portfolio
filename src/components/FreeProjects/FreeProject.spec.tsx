import React from 'react';
import { cleanup } from '@testing-library/react';
import { customRender } from '../../utils/testing';
import FreeProjects from './FreeProjects';
import { useStaticQuery } from 'gatsby';
import { loadTranslations } from '../../utils/mockresponses';
import translations_en from '../../../config/translations/en.json';
import translations_es from '../../../config/translations/es.json';
import translations_fr from '../../../config/translations/fr.json';

beforeEach(() => (useStaticQuery as jest.Mock).mockReturnValueOnce(loadTranslations));

afterEach(cleanup);

it('renders without errors in english', () => {
  const localeContextProps = { locale: 'en' };
  const { queryByText, queryAllByText } = customRender(<FreeProjects />, { localeContextProps });

  expect(queryAllByText('Frontend')).toHaveLength(2);
  expect(queryByText('Backend')).not.toBeInTheDocument();
  expect(queryByText(translations_en.code_samples)).toBeInTheDocument();
  expect(queryByText(translations_es.code_samples)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.code_samples)).not.toBeInTheDocument();
});

it('renders without errors in spanish', () => {
  const localeContextProps = { locale: 'es' };
  const { queryByText, queryAllByText } = customRender(<FreeProjects />, { localeContextProps });

  expect(queryAllByText('Frontend')).toHaveLength(2);
  expect(queryByText('Backend')).not.toBeInTheDocument();
  expect(queryByText(translations_en.code_samples)).not.toBeInTheDocument();
  expect(queryByText(translations_es.code_samples)).toBeInTheDocument();
  expect(queryByText(translations_fr.code_samples)).not.toBeInTheDocument();
});

it('renders without errors in french', () => {
  const localeContextProps = { locale: 'fr' };
  const { queryByText, queryAllByText } = customRender(<FreeProjects />, { localeContextProps });

  expect(queryAllByText('Frontend')).toHaveLength(2);
  expect(queryByText('Backend')).not.toBeInTheDocument();
  expect(queryByText(translations_en.code_samples)).not.toBeInTheDocument();
  expect(queryByText(translations_es.code_samples)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.code_samples)).toBeInTheDocument();
});

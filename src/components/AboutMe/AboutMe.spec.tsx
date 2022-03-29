import React from 'react';
import { cleanup } from '@testing-library/react';
import AboutMe from './AboutMe';
import { useStaticQuery } from 'gatsby';
import translations_en from '../../../config/translations/en.json';
import translations_es from '../../../config/translations/es.json';
import translations_fr from '../../../config/translations/fr.json';
import { customRender } from '../../utils/testing';
import { loadTranslations } from '../../utils/mockresponses';

beforeEach(() => (useStaticQuery as jest.Mock).mockReturnValueOnce(loadTranslations));

afterEach(cleanup);

it('renders without issues in english', () => {
  const providerProps = { value: { locale: 'en' } };
  const { queryByText } = customRender(<AboutMe />, { providerProps });

  expect(queryByText(translations_en.about_me)).toBeInTheDocument();
  expect(queryByText(translations_en.about_me_description)).toBeInTheDocument();
  expect(queryByText(translations_es.about_me)).not.toBeInTheDocument();
  expect(queryByText(translations_es.about_me_description)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.about_me)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.about_me_description)).not.toBeInTheDocument();
});

it('renders without issues in spanish', () => {
  const providerProps = { value: { locale: 'es' } };
  const { queryByText } = customRender(<AboutMe />, { providerProps });

  expect(queryByText(translations_en.about_me)).not.toBeInTheDocument();
  expect(queryByText(translations_en.about_me_description)).not.toBeInTheDocument();
  expect(queryByText(translations_es.about_me)).toBeInTheDocument();
  expect(queryByText(translations_es.about_me_description)).toBeInTheDocument();
  expect(queryByText(translations_fr.about_me)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.about_me_description)).not.toBeInTheDocument();
});

it('renders without issues in french', () => {
  const providerProps = { value: { locale: 'fr' } };
  const { queryByText } = customRender(<AboutMe />, { providerProps });

  expect(queryByText(translations_en.about_me)).not.toBeInTheDocument();
  expect(queryByText(translations_en.about_me_description)).not.toBeInTheDocument();
  expect(queryByText(translations_es.about_me)).not.toBeInTheDocument();
  expect(queryByText(translations_es.about_me_description)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.about_me)).toBeInTheDocument();
  expect(queryByText(translations_fr.about_me_description)).toBeInTheDocument();
});

import React from 'react';
import AboutMe from './AboutMe';
import { useStaticQuery } from 'gatsby';
import translations_en from '../../../config/translations/en.json';
import translations_es from '../../../config/translations/es.json';
import translations_fr from '../../../config/translations/fr.json';
import { customRender } from '../../utils/testing';
import { loadTranslations } from '../../utils/mockresponses';
import type { Mock } from 'vitest';

vi.mock('gatsby');

beforeEach(() => {
  (useStaticQuery as Mock).mockReturnValueOnce(loadTranslations);
});

it('renders without issues in english', () => {
  const { queryByText } = customRender(<AboutMe />);

  expect(queryByText(translations_en.about_me)).toBeInTheDocument();
  expect(queryByText(translations_en.about_me_description)).toBeInTheDocument();
  expect(queryByText(translations_es.about_me)).not.toBeInTheDocument();
  expect(queryByText(translations_es.about_me_description)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.about_me)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.about_me_description)).not.toBeInTheDocument();
});

it('renders without issues in spanish', () => {
  const localeContextProps = { locale: 'es' };
  const { queryByText } = customRender(<AboutMe />, { localeContextProps });

  expect(queryByText(translations_en.about_me)).not.toBeInTheDocument();
  expect(queryByText(translations_en.about_me_description)).not.toBeInTheDocument();
  expect(queryByText(translations_es.about_me)).toBeInTheDocument();
  expect(queryByText(translations_es.about_me_description)).toBeInTheDocument();
  expect(queryByText(translations_fr.about_me)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.about_me_description)).not.toBeInTheDocument();
});

it('renders without issues in french', () => {
  const localeContextProps = { locale: 'fr' };
  const { queryByText } = customRender(<AboutMe />, { localeContextProps });

  expect(queryByText(translations_en.about_me)).not.toBeInTheDocument();
  expect(queryByText(translations_en.about_me_description)).not.toBeInTheDocument();
  expect(queryByText(translations_es.about_me)).not.toBeInTheDocument();
  expect(queryByText(translations_es.about_me_description)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.about_me)).toBeInTheDocument();
  expect(queryByText(translations_fr.about_me_description)).toBeInTheDocument();
});

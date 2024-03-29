import React from 'react';
import { useStaticQuery } from 'gatsby';
import { loadTranslations } from '../../utils/mockresponses';
import { customRender } from '../../utils/testing';
import Projects, { slidesDesktop, slidesNative } from './Projects';
import translations_en from '../../../config/translations/en.json';
import translations_es from '../../../config/translations/es.json';
import translations_fr from '../../../config/translations/fr.json';
import type { Mock } from 'vitest';

vi.mock('gatsby');
vi.mock('gatsby-plugin-image');
vi.mock('react-slick');

beforeEach(() => {
  (useStaticQuery as Mock).mockReturnValueOnce(loadTranslations);
});

it('renders slides without issues', () => {
  const { queryByText } = customRender(<Projects />);

  for (const slide of slidesNative) {
    expect(queryByText(slide.name)).toBeInTheDocument();
  }
  for (const slide of slidesDesktop) {
    expect(queryByText(slide.name)).toBeInTheDocument();
  }
});

it('renders without issues in english', () => {
  const { queryByText } = customRender(<Projects />);

  expect(queryByText(translations_en.mobile_and_web_projects)).toBeInTheDocument();
  expect(queryByText(translations_es.mobile_and_web_projects)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.mobile_and_web_projects)).not.toBeInTheDocument();
});

it('renders without issues in spanish', () => {
  const localeContextProps = { locale: 'es' };
  const { queryByText } = customRender(<Projects />, { localeContextProps });

  expect(queryByText(translations_en.mobile_and_web_projects)).not.toBeInTheDocument();
  expect(queryByText(translations_es.mobile_and_web_projects)).toBeInTheDocument();
  expect(queryByText(translations_fr.mobile_and_web_projects)).not.toBeInTheDocument();
});

it('renders without issues in french', () => {
  const localeContextProps = { locale: 'fr' };
  const { queryByText } = customRender(<Projects />, { localeContextProps });

  expect(queryByText(translations_en.mobile_and_web_projects)).not.toBeInTheDocument();
  expect(queryByText(translations_es.mobile_and_web_projects)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.mobile_and_web_projects)).toBeInTheDocument();
});

import React from 'react';
import { useStaticQuery } from 'gatsby';
import { loadTranslations } from '../../utils/mockresponses';
import { customRender } from '../../utils/testing';
import MyBook from './MyBook';
import translations_en from '../../../config/translations/en.json';
import translations_es from '../../../config/translations/es.json';
import translations_fr from '../../../config/translations/fr.json';

beforeEach(() => (useStaticQuery as jest.Mock).mockReturnValueOnce(loadTranslations));

it('renders without issues in english', () => {
  const providerProps = { value: { locale: 'en' } };
  const { queryByText } = customRender(<MyBook />, { providerProps });

  expect(queryByText(translations_en.ctbook_description)).toBeInTheDocument();
  expect(queryByText(translations_en.ctbook_readsample)).toBeInTheDocument();
  expect(queryByText(translations_es.ctbook_description)).not.toBeInTheDocument();
  expect(queryByText(translations_es.ctbook_readsample)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.ctbook_description)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.ctbook_readsample)).not.toBeInTheDocument();
});

it('renders without issues in spanish', () => {
  const providerProps = { value: { locale: 'es' } };
  const { queryByText } = customRender(<MyBook />, { providerProps });

  expect(queryByText(translations_en.ctbook_description)).not.toBeInTheDocument();
  expect(queryByText(translations_en.ctbook_readsample)).not.toBeInTheDocument();
  expect(queryByText(translations_es.ctbook_description)).toBeInTheDocument();
  expect(queryByText(translations_es.ctbook_readsample)).toBeInTheDocument();
  expect(queryByText(translations_fr.ctbook_description)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.ctbook_readsample)).not.toBeInTheDocument();
});

it('renders without issues in french', () => {
  const providerProps = { value: { locale: 'fr' } };
  const { queryByText } = customRender(<MyBook />, { providerProps });

  expect(queryByText(translations_en.ctbook_description)).not.toBeInTheDocument();
  expect(queryByText(translations_en.ctbook_readsample)).not.toBeInTheDocument();
  expect(queryByText(translations_es.ctbook_description)).not.toBeInTheDocument();
  expect(queryByText(translations_es.ctbook_readsample)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.ctbook_description)).toBeInTheDocument();
  expect(queryByText(translations_fr.ctbook_readsample)).toBeInTheDocument();
});

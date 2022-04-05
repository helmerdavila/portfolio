import React from 'react';
import { cleanup } from '@testing-library/react';
import { customRender } from '../../utils/testing';
import FreeProjects, { ISlide, Slide } from './FreeProjects';
import { useStaticQuery } from 'gatsby';
import { loadTranslations } from '../../utils/mockresponses';
import translations_en from '../../../config/translations/en.json';
import translations_es from '../../../config/translations/es.json';
import translations_fr from '../../../config/translations/fr.json';
import faker from '@faker-js/faker';

beforeEach(() => (useStaticQuery as jest.Mock).mockReturnValueOnce(loadTranslations));

afterEach(cleanup);

it('renders Slide without issues', () => {
  const slide: ISlide = {
    id: faker.datatype.number(),
    name: faker.lorem.slug(),
    subtitle: faker.lorem.words(5),
    url: faker.internet.url(),
    codeUrl: faker.internet.url(),
    backend: faker.lorem.words(),
    frontend: faker.lorem.words(),
    image: <img src={faker.image.imageUrl()} />,
  };
  const { queryByText } = customRender(<Slide slide={slide} />);

  expect(queryByText(slide.name)).toBeInTheDocument();
  expect(queryByText(slide.subtitle)).toBeInTheDocument();
  expect(queryByText(slide.backend)).toBeInTheDocument();
  expect(queryByText(slide.frontend)).toBeInTheDocument();
  expect(queryByText('Backend')).toBeInTheDocument();
  expect(queryByText('Frontend')).toBeInTheDocument();
});

it('renders Slide without bakend and frontend', () => {
  const slide: ISlide = {
    id: faker.datatype.number(),
    name: faker.lorem.slug(),
    subtitle: faker.lorem.words(5),
    url: faker.internet.url(),
    codeUrl: faker.internet.url(),
    backend: null,
    frontend: null,
    image: <img src={faker.image.imageUrl()} />,
  };
  const { queryByText } = customRender(<Slide slide={slide} />);

  expect(queryByText(slide.name)).toBeInTheDocument();
  expect(queryByText(slide.subtitle)).toBeInTheDocument();
  expect(queryByText('Backend')).not.toBeInTheDocument();
  expect(queryByText('Frontend')).not.toBeInTheDocument();
});

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

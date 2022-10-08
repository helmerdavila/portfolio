import React from 'react';
import { customRender } from '../../utils/testing';
import PersonalProjects, { AppCard, StoreButton } from './PersonalProjects';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faker } from '@faker-js/faker';
import { useStaticQuery } from 'gatsby';
import { loadTranslations } from '../../utils/mockresponses';
import translations_en from '../../../config/translations/en.json';
import translations_es from '../../../config/translations/es.json';
import translations_fr from '../../../config/translations/fr.json';
import { jest } from '@jest/globals';

beforeEach(() => (useStaticQuery as jest.Mock).mockReturnValueOnce(loadTranslations));

it('renders StoreButton without issues', () => {
  const title = 'This is a demo title';
  const link = faker.internet.url();
  const { queryByText, queryByTestId } = customRender(<StoreButton icon={faReact} title={title} link={link} />);

  expect(queryByText(title)).toBeInTheDocument();
  expect(queryByTestId('store-button-target')).toBeInTheDocument();
  expect(queryByTestId('store-button-target')).toHaveAttribute('href', link);
});

it('renders AppCard without issues', () => {
  const app = {
    id: faker.datatype.uuid(),
    title: faker.company.bsNoun(),
    description_key: 'sample_key',
    image: <img src={faker.image.imageUrl()} alt="" />,
  };
  const { queryByText, queryByRole } = customRender(<AppCard app={app} translations={translations_en} />);

  expect(queryByText(app.title)).toBeInTheDocument();
  expect(queryByRole('img')).toBeInTheDocument();
});

it('renders AppCard with app links', () => {
  const app = {
    id: faker.datatype.uuid(),
    title: faker.company.bsNoun(),
    description_key: 'sample_key',
    image: <img src={faker.image.imageUrl()} alt="" />,
    apple: faker.internet.url(),
    android: faker.internet.url(),
  };
  const { queryByText, queryByRole, queryAllByTestId } = customRender(
    <AppCard app={app} translations={translations_en} />,
  );

  expect(queryByText(app.title)).toBeInTheDocument();
  expect(queryByRole('img')).toBeInTheDocument();
  for (const storeButton of queryAllByTestId('store-button-target')) {
    expect(storeButton).toBeInTheDocument();
  }
});

it('renders without issues in english', () => {
  const { queryByText } = customRender(<PersonalProjects />);

  expect(queryByText(translations_en.projects)).toBeInTheDocument();
  expect(queryByText(translations_es.projects)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.projects)).not.toBeInTheDocument();
});

it('renders without issues in spanish', () => {
  const localeContextProps = { locale: 'es' };
  const { queryByText } = customRender(<PersonalProjects />, { localeContextProps });

  expect(queryByText(translations_en.projects)).not.toBeInTheDocument();
  expect(queryByText(translations_es.projects)).toBeInTheDocument();
  expect(queryByText(translations_fr.projects)).not.toBeInTheDocument();
});

it('renders without issues in french', () => {
  const localeContextProps = { locale: 'fr' };
  const { queryByText } = customRender(<PersonalProjects />, { localeContextProps });

  expect(queryByText(translations_en.projects)).not.toBeInTheDocument();
  expect(queryByText(translations_es.projects)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.projects)).toBeInTheDocument();
});

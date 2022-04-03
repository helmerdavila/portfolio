import React from 'react';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { customRender } from '../../utils/testing';
import WhatIDo, { WhatIDoSection } from './WhatIDo';
import faker from '@faker-js/faker';
import { useStaticQuery } from 'gatsby';
import { loadTranslations } from '../../utils/mockresponses';
import translations_en from '../../../config/translations/en.json';
import translations_es from '../../../config/translations/es.json';
import translations_fr from '../../../config/translations/fr.json';

beforeEach(() => (useStaticQuery as jest.Mock).mockReturnValueOnce(loadTranslations));

it('renders WhatIDoSection without issues', () => {
  const title = faker.lorem.words();
  const content = faker.lorem.paragraph();
  const { queryByText } = customRender(<WhatIDoSection icon={faReact} title={title} content={content} />);

  expect(queryByText(title)).toBeInTheDocument();
  expect(queryByText(content)).toBeInTheDocument();
});

it('renders without issues in english', () => {
  const { queryByText } = customRender(<WhatIDo />);

  expect(queryByText(translations_en.what_i_do)).toBeInTheDocument();
  expect(queryByText(translations_en.what_i_do_frontend)).toBeInTheDocument();
  expect(queryByText(translations_en.what_i_do_backend)).toBeInTheDocument();
  expect(queryByText(translations_en.what_i_do_sysops)).toBeInTheDocument();
  expect(queryByText(translations_es.what_i_do)).not.toBeInTheDocument();
  expect(queryByText(translations_es.what_i_do_frontend)).not.toBeInTheDocument();
  expect(queryByText(translations_es.what_i_do_backend)).not.toBeInTheDocument();
  expect(queryByText(translations_es.what_i_do_sysops)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.what_i_do)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.what_i_do_frontend)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.what_i_do_backend)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.what_i_do_sysops)).not.toBeInTheDocument();
});

it('renders without issues in spanish', () => {
  const providerProps = { value: { locale: 'es' } };
  const { queryByText } = customRender(<WhatIDo />, { providerProps });

  expect(queryByText(translations_en.what_i_do)).not.toBeInTheDocument();
  expect(queryByText(translations_en.what_i_do_frontend)).not.toBeInTheDocument();
  expect(queryByText(translations_en.what_i_do_backend)).not.toBeInTheDocument();
  expect(queryByText(translations_en.what_i_do_sysops)).not.toBeInTheDocument();
  expect(queryByText(translations_es.what_i_do)).toBeInTheDocument();
  expect(queryByText(translations_es.what_i_do_frontend)).toBeInTheDocument();
  expect(queryByText(translations_es.what_i_do_backend)).toBeInTheDocument();
  expect(queryByText(translations_es.what_i_do_sysops)).toBeInTheDocument();
  expect(queryByText(translations_fr.what_i_do)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.what_i_do_frontend)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.what_i_do_backend)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.what_i_do_sysops)).not.toBeInTheDocument();
});

it('renders without issues in french', () => {
  const providerProps = { value: { locale: 'fr' } };
  const { queryByText } = customRender(<WhatIDo />, { providerProps });

  expect(queryByText(translations_en.what_i_do)).not.toBeInTheDocument();
  expect(queryByText(translations_en.what_i_do_frontend)).not.toBeInTheDocument();
  expect(queryByText(translations_en.what_i_do_backend)).not.toBeInTheDocument();
  expect(queryByText(translations_en.what_i_do_sysops)).not.toBeInTheDocument();
  expect(queryByText(translations_es.what_i_do)).not.toBeInTheDocument();
  expect(queryByText(translations_es.what_i_do_frontend)).not.toBeInTheDocument();
  expect(queryByText(translations_es.what_i_do_backend)).not.toBeInTheDocument();
  expect(queryByText(translations_es.what_i_do_sysops)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.what_i_do)).toBeInTheDocument();
  expect(queryByText(translations_fr.what_i_do_frontend)).toBeInTheDocument();
  expect(queryByText(translations_fr.what_i_do_backend)).toBeInTheDocument();
  expect(queryByText(translations_fr.what_i_do_sysops)).toBeInTheDocument();
});

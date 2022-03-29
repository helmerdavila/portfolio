import React from 'react';
import { cleanup } from '@testing-library/react';
import translations_en from '../../../config/translations/en.json';
import translations_es from '../../../config/translations/es.json';
import translations_fr from '../../../config/translations/fr.json';
import { customRender } from '../../utils/testing';
import { useStaticQuery } from 'gatsby';
import Presentation from './Presentation';
import { backgroundImage, loadTranslations } from '../../utils/mockresponses';

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockReturnValue(loadTranslations);
});

afterEach(cleanup);

it('renders in english', () => {
  const providerProps = { value: { locale: 'en' } };
  const { queryByText } = customRender(
    <Presentation backgroundImage={backgroundImage.backgroundImage.childImageSharp.gatsbyImageData} />,
    {
      providerProps,
    },
  );

  expect(queryByText(translations_en.hi_my_name_is)).toBeInTheDocument();
  expect(queryByText(translations_fr.hi_my_name_is)).not.toBeInTheDocument();
  expect(queryByText(translations_es.hi_my_name_is)).not.toBeInTheDocument();
  expect(queryByText(translations_en.software_engineer)).toBeInTheDocument();
  expect(queryByText(translations_fr.software_engineer)).not.toBeInTheDocument();
  expect(queryByText(translations_es.software_engineer)).not.toBeInTheDocument();
  expect(queryByText(translations_en.and_i_build)).toBeInTheDocument();
  expect(queryByText(translations_fr.and_i_build)).not.toBeInTheDocument();
  expect(queryByText(translations_es.and_i_build)).not.toBeInTheDocument();
  expect(queryByText(translations_en.landing_pages)).toBeInTheDocument();
  expect(queryByText(translations_fr.landing_pages)).not.toBeInTheDocument();
  expect(queryByText(translations_es.landing_pages)).not.toBeInTheDocument();
  expect(queryByText(translations_en.web_applications)).toBeInTheDocument();
  expect(queryByText(translations_fr.web_applications)).not.toBeInTheDocument();
  expect(queryByText(translations_es.web_applications)).not.toBeInTheDocument();
  expect(queryByText(translations_en.mobile_applications)).toBeInTheDocument();
  expect(queryByText(translations_fr.mobile_applications)).not.toBeInTheDocument();
  expect(queryByText(translations_es.mobile_applications)).not.toBeInTheDocument();
});

it('renders in spanish', () => {
  const providerProps = { value: { locale: 'es' } };
  const { queryByText } = customRender(
    <Presentation backgroundImage={backgroundImage.backgroundImage.childImageSharp.gatsbyImageData} />,
    {
      providerProps,
    },
  );

  expect(queryByText(translations_en.hi_my_name_is)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.hi_my_name_is)).not.toBeInTheDocument();
  expect(queryByText(translations_es.hi_my_name_is)).toBeInTheDocument();
  expect(queryByText(translations_en.software_engineer)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.software_engineer)).not.toBeInTheDocument();
  expect(queryByText(translations_es.software_engineer)).toBeInTheDocument();
  expect(queryByText(translations_en.and_i_build)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.and_i_build)).not.toBeInTheDocument();
  expect(queryByText(translations_es.and_i_build)).toBeInTheDocument();
  expect(queryByText(translations_en.landing_pages)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.landing_pages)).not.toBeInTheDocument();
  expect(queryByText(translations_es.landing_pages)).toBeInTheDocument();
  expect(queryByText(translations_en.web_applications)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.web_applications)).not.toBeInTheDocument();
  expect(queryByText(translations_es.web_applications)).toBeInTheDocument();
  expect(queryByText(translations_en.mobile_applications)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.mobile_applications)).not.toBeInTheDocument();
  expect(queryByText(translations_es.mobile_applications)).toBeInTheDocument();
});

it('renders in french', () => {
  const providerProps = { value: { locale: 'fr' } };
  const { queryByText } = customRender(
    <Presentation backgroundImage={backgroundImage.backgroundImage.childImageSharp.gatsbyImageData} />,
    {
      providerProps,
    },
  );

  expect(queryByText(translations_en.hi_my_name_is)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.hi_my_name_is)).toBeInTheDocument();
  expect(queryByText(translations_es.hi_my_name_is)).not.toBeInTheDocument();
  expect(queryByText(translations_en.software_engineer)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.software_engineer)).toBeInTheDocument();
  expect(queryByText(translations_es.software_engineer)).not.toBeInTheDocument();
  expect(queryByText(translations_en.and_i_build)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.and_i_build)).toBeInTheDocument();
  expect(queryByText(translations_es.and_i_build)).not.toBeInTheDocument();
  expect(queryByText(translations_en.landing_pages)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.landing_pages)).toBeInTheDocument();
  expect(queryByText(translations_es.landing_pages)).not.toBeInTheDocument();
  expect(queryByText(translations_en.web_applications)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.web_applications)).toBeInTheDocument();
  expect(queryByText(translations_es.web_applications)).not.toBeInTheDocument();
  expect(queryByText(translations_en.mobile_applications)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.mobile_applications)).toBeInTheDocument();
  expect(queryByText(translations_es.mobile_applications)).not.toBeInTheDocument();
});

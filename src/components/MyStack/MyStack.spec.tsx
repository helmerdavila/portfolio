import React from 'react';
import { customRender } from '../../utils/testing';
import MyStack, { MyStackSection } from './MyStack';
import { faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { useStaticQuery } from 'gatsby';
import { loadTranslations } from '../../utils/mockresponses';
import translations_en from '../../../config/translations/en.json';
import translations_es from '../../../config/translations/es.json';
import translations_fr from '../../../config/translations/fr.json';

beforeEach(() => (useStaticQuery as jest.Mock).mockReturnValueOnce(loadTranslations));

it('renders MyStackSection without issues', () => {
  const sectionTitle = 'BackendOrFrontend';
  const sectionDescription = 'Just a side of development';
  const { queryByText, queryByTestId } = customRender(
    <MyStackSection title={sectionTitle} description={sectionDescription} icons={[faReact, faVuejs]} />,
  );

  expect(queryByText(sectionTitle)).toBeInTheDocument();
  expect(queryByText(sectionDescription)).toBeInTheDocument();
  expect(queryByTestId('icon-spacer').firstChild).toHaveClass('fa-react');
  expect(queryByTestId('icon-spacer').lastChild).toHaveClass('fa-vuejs');
});

it('renders MyStack without issues in english', () => {
  const { queryByText } = customRender(<MyStack />);

  expect(queryByText(translations_en.my_stack)).toBeInTheDocument();
  expect(queryByText(translations_en.my_stack_backend)).toBeInTheDocument();
  expect(queryByText(translations_en.my_stack_frontend)).toBeInTheDocument();
  expect(queryByText(translations_en.my_stack_sysops)).toBeInTheDocument();
  expect(queryByText(translations_es.my_stack)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.my_stack)).not.toBeInTheDocument();
});

it('renders MyStack without issues in spanish', () => {
  const providerProps = { value: { locale: 'es' } };
  const { queryByText } = customRender(<MyStack />, { providerProps });

  expect(queryByText(translations_en.my_stack)).not.toBeInTheDocument();
  expect(queryByText(translations_es.my_stack)).toBeInTheDocument();
  expect(queryByText(translations_es.my_stack_backend)).toBeInTheDocument();
  expect(queryByText(translations_es.my_stack_frontend)).toBeInTheDocument();
  expect(queryByText(translations_es.my_stack_sysops)).toBeInTheDocument();
  expect(queryByText(translations_fr.my_stack)).not.toBeInTheDocument();
});

it('renders MyStack without issues in french', () => {
  const providerProps = { value: { locale: 'fr' } };
  const { queryByText } = customRender(<MyStack />, { providerProps });

  expect(queryByText(translations_en.my_stack)).not.toBeInTheDocument();
  expect(queryByText(translations_es.my_stack)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.my_stack)).toBeInTheDocument();
  expect(queryByText(translations_fr.my_stack_backend)).toBeInTheDocument();
  expect(queryByText(translations_fr.my_stack_frontend)).toBeInTheDocument();
  expect(queryByText(translations_fr.my_stack_sysops)).toBeInTheDocument();
});

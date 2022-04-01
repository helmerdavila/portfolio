import React from 'react';
import { customRender } from '../../utils/testing';
import { cleanup } from '@testing-library/react';
import { useStaticQuery } from 'gatsby';
import { loadTranslations } from '../../utils/mockresponses';
import HeaderBlog from './HeaderBlog';

beforeEach(() => (useStaticQuery as jest.Mock).mockReturnValueOnce(loadTranslations));

afterEach(cleanup);

it('renders links to three languages', () => {
  const { queryByText } = customRender(<HeaderBlog />);

  expect(queryByText('EN')).toBeInTheDocument();
  expect(queryByText('ES')).toBeInTheDocument();
  expect(queryByText('FR')).toBeInTheDocument();
});

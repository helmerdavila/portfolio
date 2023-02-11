import React from 'react';
import { customRender } from '../../utils/testing';
import { useStaticQuery } from 'gatsby';
import { loadTranslations } from '../../utils/mockresponses';
import HeaderBlog from './HeaderBlog';
import type { Mock } from 'vitest';

vi.mock('gatsby');

beforeEach(() => {
  (useStaticQuery as Mock).mockReturnValueOnce(loadTranslations);
});

it('renders links to three languages', () => {
  const { queryByText } = customRender(<HeaderBlog />);

  expect(queryByText('EN')).toBeInTheDocument();
  expect(queryByText('ES')).toBeInTheDocument();
  expect(queryByText('FR')).toBeInTheDocument();
});

import React from 'react';
import { faker } from '@faker-js/faker';
import { useStaticQuery } from 'gatsby';
import { loadSiteData } from '../utils/mockresponses';
import { customRender } from '../utils/testing';
import SEO from './Seo';
import type { Mock } from 'vitest';

vi.mock('gatsby');

beforeEach(() => {
  (useStaticQuery as Mock).mockReturnValueOnce(loadSiteData);
});

it('renders without issues with description, title, author, keywords and light mode', () => {
  const title = faker.lorem.words();
  const description = faker.lorem.words();
  const author = faker.internet.userName();
  const { queryAllByDisplayValue } = customRender(
    <SEO description={description} title={title} author={author} keywords={['sample', 'text']} />,
  );

  for (const element of queryAllByDisplayValue(title)) {
    expect(element).toBeInTheDocument();
  }
  for (const element of queryAllByDisplayValue(description)) {
    expect(element).toBeInTheDocument();
  }
});

it('renders without description and author, dark mode', () => {
  const title = faker.lorem.words();
  const description = faker.lorem.words();
  const { queryAllByDisplayValue } = customRender(<SEO title={title} />, {
    themeContextProps: { isLightTheme: 'dark', toggleTheme: vi.fn() },
  });

  for (const element of queryAllByDisplayValue(title)) {
    expect(element).toBeInTheDocument();
  }
  for (const element of queryAllByDisplayValue(description)) {
    expect(element).toBeInTheDocument();
  }
});

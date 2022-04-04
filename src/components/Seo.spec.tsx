import React from 'react';
import faker from '@faker-js/faker';
import { useStaticQuery } from 'gatsby';
import { loadSiteData } from '../utils/mockresponses';
import { customRender } from '../utils/testing';
import SEO from './Seo';

beforeEach(() => (useStaticQuery as jest.Mock).mockReturnValueOnce(loadSiteData));

it.skip('renders without issues', () => {
  const title = faker.lorem.words();
  const description = faker.lorem.words();
  customRender(<SEO description={description} title={title} />);

  // TODO: Pending of add assertions
  // console.log(within(document.head).queryByText(title));
  // expect(queryByText(title)).toBeInTheDocument();
  // expect(queryByText(description)).toBeInTheDocument();
});

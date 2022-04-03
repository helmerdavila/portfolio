import React from 'react';
import faker from '@faker-js/faker';
import { customRender } from '../utils/testing';
import LayoutBlog from './LayoutBlog';

it('renders without issues', () => {
  const content = faker.lorem.words();
  const { queryByText } = customRender(
    <LayoutBlog>
      <p>{content}</p>
    </LayoutBlog>,
  );

  expect(queryByText(content)).toBeInTheDocument();
});

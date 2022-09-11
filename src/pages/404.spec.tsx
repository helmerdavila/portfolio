import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from './404';
import { useStaticQuery } from 'gatsby';
import { jest } from '@jest/globals';

beforeEach(() => {
  (useStaticQuery as jest.Mock).mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        title: `Default Starter`,
      },
    },
  }));
});

it('renders without issues', () => {
  const { getByText } = render(<NotFoundPage />);

  expect(getByText('NOT FOUND')).toBeInTheDocument();
});

import React from 'react';
import LocalizedLink from './LocalizedLink';
import { customRender } from '../utils/testing';

it('renders random url without issue', () => {
  const randomUrl = '/testing-url';
  const { queryByRole } = customRender(<LocalizedLink to={randomUrl} />);

  expect(queryByRole('link')).toHaveAttribute('href', randomUrl);
});

it('renders spanish url without issue', () => {
  const randomUrl = '/';
  const { queryByRole } = customRender(<LocalizedLink to={randomUrl} />, { localeContextProps: { locale: 'es' } });

  expect(queryByRole('link')).toHaveAttribute('href', '/es');
});

it('renders french bigger url without issue', () => {
  const randomUrl = 'demo';
  const { queryByRole } = customRender(<LocalizedLink to={randomUrl} />, { localeContextProps: { locale: 'fr' } });

  expect(queryByRole('link')).toHaveAttribute('href', `/fr/${randomUrl}`);
});

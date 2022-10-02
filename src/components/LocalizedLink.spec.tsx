import React from 'react';
import LocalizedLink, { LocalizedBlogLink } from './LocalizedLink';
import { customRender } from '../utils/testing';
import { faker } from '@faker-js/faker';

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

it('renders random url without issue in english', () => {
  const randomUrl = 'testing-url';
  const { queryByRole } = customRender(<LocalizedBlogLink to={randomUrl} />);

  expect(queryByRole('link')).toHaveAttribute('href', `/blog/${randomUrl}`);
});

it('renders random url without issue in other language', () => {
  const randomUrl = 'testing-url';
  const randomLanguage = faker.helpers.arrayElement(['fr', 'es']);
  const { queryByRole } = customRender(<LocalizedBlogLink to={randomUrl} />, {
    localeContextProps: { locale: randomLanguage },
  });

  expect(queryByRole('link')).toHaveAttribute('href', `/${randomLanguage}/blog/${randomUrl}`);
});

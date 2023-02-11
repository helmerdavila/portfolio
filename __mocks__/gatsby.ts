import React from 'react';
import { vi } from 'vitest';

const gatsby = await vi.importActual<object>('gatsby');

const mockImage = ({ imgClassName, ...props }) => React.createElement('img', { ...props, className: imgClassName });

const mockLink = ({ activeClassName, activeStyle, getProps, innerRef, partiallyActive, ref, replace, to, ...rest }) =>
  React.createElement('a', {
    ...rest,
    href: to,
  });

module.exports = {
  ...gatsby,
  graphql: vi.fn(),
  Link: vi.fn().mockImplementation(mockLink),
  StaticQuery: vi.fn(),
  useStaticQuery: vi.fn(),
  GatsbyImage: vi.fn().mockImplementation(mockImage),
  StaticImage: vi.fn().mockImplementation(mockImage),
};

import React from 'react';
const gatsby = jest.requireActual('gatsby');

const mockImage = ({ imgClassName, ...props }) => React.createElement('img', { ...props, className: imgClassName });

const mockLink = ({ activeClassName, activeStyle, getProps, innerRef, partiallyActive, ref, replace, to, ...rest }) =>
  React.createElement('a', {
    ...rest,
    href: to,
  });

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(mockLink),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
  GatsbyImage: jest.fn().mockImplementation(mockImage),
  StaticImage: jest.fn().mockImplementation(mockImage),
};

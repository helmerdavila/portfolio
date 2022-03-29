import React from 'react';

const mockImage = ({ imgClassName, ...props }) => React.createElement('img', { ...props, className: imgClassName });

module.exports = {
  GatsbyImage: jest.fn().mockImplementation(mockImage),
  StaticImage: jest.fn().mockImplementation(mockImage),
  getImage: jest.fn(),
};

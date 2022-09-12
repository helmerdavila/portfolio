import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { faker } from '@faker-js/faker';

const mockImage = ({ imgClassName, ...props }) => React.createElement('img', { ...props, className: imgClassName });

const mockGatsbyImage = ({ image, imgClassName, ...props }: { image: JSX.Element; imgClassName: string }) => {
  return React.cloneElement(image, { className: imgClassName, ...props });
};

const mockGetImage = (image: IGatsbyImageData) =>
  React.createElement('img', { src: image.images?.fallback?.src ?? faker.image.imageUrl() });

module.exports = {
  GatsbyImage: jest.fn().mockImplementation(mockGatsbyImage),
  StaticImage: jest.fn().mockImplementation(mockImage),
  getImage: jest.fn().mockImplementation(mockGetImage),
};

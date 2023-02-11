import React from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import { faker } from '@faker-js/faker';
import { vi } from 'vitest';

const mockImage = ({ imgClassName, ...props }) => React.createElement('img', { ...props, className: imgClassName });

const mockGatsbyImage = ({ image, imgClassName, ...props }: { image: JSX.Element; imgClassName: string }) => {
  return React.cloneElement(image, { className: imgClassName, ...props });
};

const mockGetImage = (image: IGatsbyImageData) =>
  React.createElement('img', { src: image.images?.fallback?.src ?? faker.image.imageUrl() });

module.exports = {
  GatsbyImage: vi.fn().mockImplementation(mockGatsbyImage),
  StaticImage: vi.fn().mockImplementation(mockImage),
  getImage: vi.fn().mockImplementation(mockGetImage),
};

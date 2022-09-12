import React from 'react';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';

export const GatsbyPostImage = ({
  index,
  alt,
  data,
}: {
  index: number;
  alt: string;
  data: { mdx: { frontmatter: { embeddedImagesLocal: ImageDataLike[] } } };
}) => <GatsbyImage image={getImage(data.mdx.frontmatter.embeddedImagesLocal[index])} alt={alt} />;

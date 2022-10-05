import React from 'react';
import { cleanup } from '@testing-library/react';
import BlogPreviewHome, { PostCard } from './BlogPreviewHome';
import { customRender } from '../../utils/testing';
import type { BlogPostType, IGatsbyFileImage } from '../../interfaces';
import BlogPreviewHomeMock, { POSTS } from './BlogPreview.mock';

afterEach(cleanup);

it('renders PostCard with image', () => {
  const post: BlogPostType = BlogPreviewHomeMock.allMdx.nodes[POSTS.POST_WITH_IMAGE];
  const defaultImage = BlogPreviewHomeMock.homePostImage as IGatsbyFileImage;

  const { queryByAltText, queryByRole } = customRender(
    <PostCard post={post} postDefaultImage={defaultImage.childImageSharp.gatsbyImageData} />,
  );

  expect(queryByRole('link')).toBeInTheDocument();
  expect(queryByRole('link')).toHaveAttribute('href', post.fields.translatedPostUrl);
  expect(queryByRole('img')).not.toHaveAttribute(
    'data-src',
    defaultImage.childImageSharp.gatsbyImageData.images.fallback.src,
  );
  expect(queryByAltText(post.frontmatter.imageAlt)).toBeInTheDocument();
});

it('renders PostCard with no image, uses default', () => {
  const post: BlogPostType = BlogPreviewHomeMock.allMdx.nodes[POSTS.POST_WITHOUT_IMAGE];
  const defaultImage = BlogPreviewHomeMock.homePostImage as IGatsbyFileImage;

  const { queryByAltText, queryByTestId } = customRender(
    <PostCard post={post} postDefaultImage={defaultImage.childImageSharp.gatsbyImageData} />,
  );

  expect(queryByTestId('postcard-link')).toBeInTheDocument();
  expect(queryByTestId('postcard-link')).toHaveAttribute('href', post.fields.translatedPostUrl);
  expect(queryByAltText('Blog')).toBeInTheDocument();
});

it('renders BlogPreviewHome', () => {
  const { queryAllByRole } = customRender(<BlogPreviewHome data={BlogPreviewHomeMock} />);
  const allLinks = queryAllByRole('link');

  for (const link of allLinks) {
    expect(link).toBeInTheDocument();
  }
});

it('renders BlogPreviewHome with no posts', () => {
  const defaultImage = BlogPreviewHomeMock.homePostImage as IGatsbyFileImage;
  const { queryByRole } = customRender(
    <BlogPreviewHome data={{ allMdx: { nodes: [] }, backgroundImage: null, homePostImage: defaultImage }} />,
  );

  const link = queryByRole('link');

  expect(link).not.toBeInTheDocument();
});

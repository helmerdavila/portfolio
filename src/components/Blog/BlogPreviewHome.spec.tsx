import React from 'react';
import { cleanup } from '@testing-library/react';
import BlogPreviewHome, { PostCard } from './BlogPreviewHome';
import { customRender } from '../../utils/testing';
import { IBlogPageQuery, IBlogPost, IGatsbyFileImage } from '../../interfaces';
import BlogPreviewHomeMock, { POSTS } from './BlogPreview.mock';

afterEach(cleanup);

it('renders PostCard with image', () => {
  const post: IBlogPost = BlogPreviewHomeMock.posts.edges[POSTS.POST_WITH_IMAGE].node as IBlogPost;
  const defaultImage = BlogPreviewHomeMock.homePostImage as IGatsbyFileImage;

  const { queryByAltText, queryByRole } = customRender(
    <PostCard post={post} postDefaultImage={defaultImage.childImageSharp.gatsbyImageData} />,
  );

  expect(queryByRole('link')).toBeInTheDocument();
  expect(queryByRole('link')).toHaveAttribute('href', `/blog/${post.parent.relativeDirectory}`);
  expect(queryByRole('img')).not.toHaveAttribute(
    'data-src',
    defaultImage.childImageSharp.gatsbyImageData.images.fallback.src,
  );
  expect(queryByRole('img')).toHaveAttribute(
    'data-src',
    post.frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src,
  );
  expect(queryByAltText(post.frontmatter.imageAlt)).toBeInTheDocument();
});

it('renders PostCard with no image, uses default', () => {
  const post: IBlogPost = BlogPreviewHomeMock.posts.edges[POSTS.POST_WITHOUT_IMAGE].node as IBlogPost;
  const defaultImage = BlogPreviewHomeMock.homePostImage as IGatsbyFileImage;

  const { queryByAltText, queryByRole } = customRender(
    <PostCard post={post} postDefaultImage={defaultImage.childImageSharp.gatsbyImageData} />,
  );

  expect(queryByRole('link')).toBeInTheDocument();
  expect(queryByRole('link')).toHaveAttribute('href', `/blog/${post.parent.relativeDirectory}`);
  expect(queryByRole('img')).toHaveAttribute(
    'data-src',
    defaultImage.childImageSharp.gatsbyImageData.images.fallback.src,
  );
  expect(queryByAltText('Blog')).toBeInTheDocument();
});

it('renders BlogPreviewHome', () => {
  const { queryAllByRole } = customRender(<BlogPreviewHome data={BlogPreviewHomeMock as IBlogPageQuery} />);
  const allLinks = queryAllByRole('link');
  const allImages = queryAllByRole('img');

  for (const link of allLinks) {
    expect(link).toBeInTheDocument();
  }
  for (const image of allImages) {
    expect(image).toBeInTheDocument();
  }
});

it('renders BlogPreviewHome with no posts', () => {
  const defaultImage = BlogPreviewHomeMock.homePostImage as IGatsbyFileImage;
  const { queryByRole } = customRender(
    <BlogPreviewHome data={{ posts: { edges: [] }, backgroundImage: null, homePostImage: defaultImage }} />,
  );

  const link = queryByRole('link');
  const image = queryByRole('img');

  expect(link).not.toBeInTheDocument();
  expect(image).not.toBeInTheDocument();
});

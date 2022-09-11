import React from 'react';
import { cleanup } from '@testing-library/react';
import BlogPreviewHome, { PostCard } from './BlogPreviewHome';
import { customRender } from '../../utils/testing';
import { IBlogPageQuery, IBlogPost, IGatsbyFileImage } from '../../interfaces';
import BlogPreviewHomeMock, { POSTS } from './BlogPreview.mock';

afterEach(cleanup);

it('renders PostCard with image', () => {
  const post: IBlogPost = BlogPreviewHomeMock.allMdx.nodes[POSTS.POST_WITH_IMAGE] as IBlogPost;
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
  expect(queryByAltText(post.frontmatter.imageAlt)).toBeInTheDocument();
});

it('renders PostCard with no image, uses default', () => {
  const post: IBlogPost = BlogPreviewHomeMock.allMdx.nodes[POSTS.POST_WITHOUT_IMAGE] as IBlogPost;
  const defaultImage = BlogPreviewHomeMock.homePostImage as IGatsbyFileImage;

  const { queryByAltText, queryByRole } = customRender(
    <PostCard post={post} postDefaultImage={defaultImage.childImageSharp.gatsbyImageData} />,
  );

  expect(queryByRole('link')).toBeInTheDocument();
  expect(queryByRole('link')).toHaveAttribute('href', `/blog/${post.parent.relativeDirectory}`);
  expect(queryByAltText('Blog')).toBeInTheDocument();
});

it('renders BlogPreviewHome', () => {
  const { queryAllByRole } = customRender(<BlogPreviewHome data={BlogPreviewHomeMock as IBlogPageQuery} />);
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

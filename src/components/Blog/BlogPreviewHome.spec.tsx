import React from 'react';
import BlogPreviewHome, { PostCard } from './BlogPreviewHome';
import { customRender } from '../../utils/testing';
import type { BlogPostType } from '../../interfaces';
import BlogPreviewHomeMock, { POSTS } from './BlogPreview.mock';

it('renders PostCard with image', () => {
  const post: BlogPostType = BlogPreviewHomeMock.allMdx.nodes[POSTS.POST_WITH_IMAGE];

  const { queryByAltText, queryByRole } = customRender(<PostCard post={post} />);

  expect(queryByRole('link')).toBeInTheDocument();
  expect(queryByRole('link')).toHaveAttribute('href', `/${post.fields.translatedPostUrl}`);
  expect(queryByAltText(post.frontmatter.imageAlt)).toBeInTheDocument();
});

it('renders BlogPreviewHome', () => {
  const { queryAllByRole } = customRender(<BlogPreviewHome data={BlogPreviewHomeMock} />);
  const allLinks = queryAllByRole('link');

  for (const link of allLinks) {
    expect(link).toBeInTheDocument();
  }
});

it('renders BlogPreviewHome with no posts', () => {
  const { queryByRole } = customRender(<BlogPreviewHome data={{ allMdx: { nodes: [] }, backgroundImage: null }} />);

  const link = queryByRole('link');

  expect(link).not.toBeInTheDocument();
});

it('renders BlogPreviewHome with no posts', () => {
  const { queryByRole } = customRender(<BlogPreviewHome data={{ allMdx: { nodes: [] }, backgroundImage: null }} />);

  const link = queryByRole('link');

  expect(link).not.toBeInTheDocument();
});

import React from 'react';
import BlogPreviewHome, { PostCard } from './BlogPreviewHome';
import { customRender } from '../../utils/testing';
import type { BlogPostType } from '../../interfaces';
import BlogPreviewHomeMock, { POSTS } from './BlogPreview.mock';
import { useStaticQuery } from 'gatsby';
import { loadTranslations } from '../../utils/mockresponses';
import type { Mock } from 'vitest';
import translations_en from '../../../config/translations/en.json';
import translations_es from '../../../config/translations/es.json';
import translations_fr from '../../../config/translations/fr.json';

vi.mock('gatsby');

beforeEach(() => (useStaticQuery as Mock).mockReturnValueOnce(loadTranslations));

it('renders PostCard with image', () => {
  const post: BlogPostType = BlogPreviewHomeMock.allMdx.nodes[POSTS.POST_WITH_IMAGE];

  const { queryByAltText, queryByRole } = customRender(<PostCard post={post} />);

  expect(queryByRole('link')).toBeInTheDocument();
  expect(queryByRole('link')).toHaveAttribute('href', `${post.fields.translatedPostUrl}`);
  expect(queryByAltText(post.frontmatter.imageAlt)).toBeInTheDocument();
});

it('renders BlogPreviewHome in english', () => {
  const { queryAllByRole, queryByText } = customRender(<BlogPreviewHome data={BlogPreviewHomeMock} />);
  const allLinks = queryAllByRole('link');

  for (const link of allLinks) {
    expect(link).toBeInTheDocument();
  }

  expect(queryByText(translations_en.see_full_post_list)).toBeInTheDocument();
  expect(queryByText(translations_es.see_full_post_list)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.see_full_post_list)).not.toBeInTheDocument();
});

it('renders BlogPreviewHome in english', () => {
  const { queryAllByRole, queryByText } = customRender(<BlogPreviewHome data={BlogPreviewHomeMock} />);
  const allLinks = queryAllByRole('link');

  for (const link of allLinks) {
    expect(link).toBeInTheDocument();
  }

  expect(queryByText(translations_en.see_full_post_list)).toBeInTheDocument();
  expect(queryByText(translations_es.see_full_post_list)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.see_full_post_list)).not.toBeInTheDocument();
});

it('renders BlogPreviewHome in spanish', () => {
  const localeContextProps = { locale: 'es' };
  const { queryByText } = customRender(<BlogPreviewHome data={BlogPreviewHomeMock} />, {
    localeContextProps,
  });

  expect(queryByText(translations_en.see_full_post_list)).not.toBeInTheDocument();
  expect(queryByText(translations_es.see_full_post_list)).toBeInTheDocument();
  expect(queryByText(translations_fr.see_full_post_list)).not.toBeInTheDocument();
});

it('renders BlogPreviewHome in french', () => {
  const localeContextProps = { locale: 'fr' };
  const { queryByText } = customRender(<BlogPreviewHome data={BlogPreviewHomeMock} />, {
    localeContextProps,
  });

  expect(queryByText(translations_en.see_full_post_list)).not.toBeInTheDocument();
  expect(queryByText(translations_es.see_full_post_list)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.see_full_post_list)).toBeInTheDocument();
});

it('renders BlogPreviewHome with no posts', () => {
  const { queryByRole } = customRender(<BlogPreviewHome data={{ allMdx: { nodes: [] } }} />);

  const link = queryByRole('link');

  expect(link).not.toBeInTheDocument();
});

it('renders BlogPreviewHome with no posts', () => {
  const { queryByRole, queryByText } = customRender(<BlogPreviewHome data={{ allMdx: { nodes: [] } }} />);

  const link = queryByRole('link');

  expect(link).not.toBeInTheDocument();
  expect(queryByText(translations_en.see_full_post_list)).not.toBeInTheDocument();
  expect(queryByText(translations_es.see_full_post_list)).not.toBeInTheDocument();
  expect(queryByText(translations_fr.see_full_post_list)).not.toBeInTheDocument();
});

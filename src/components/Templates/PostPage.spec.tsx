import React from 'react';
import { PageProps, useStaticQuery } from 'gatsby';
import { customRender } from '../../utils/testing';
import { backgroundImage, loadSiteData, loadTranslations } from '../../utils/mockresponses';
import { faker } from '@faker-js/faker';
import PostPage from './PostPage';
import { v4 as uuidv4 } from 'uuid';
import type { Mock } from 'vitest';

vi.mock('gatsby');
vi.mock('gatsby-plugin-image');

beforeEach(() => {
  (useStaticQuery as Mock).mockReturnValue({ ...loadSiteData, ...loadTranslations });
});

afterEach(() => {
  vi.clearAllMocks();
});

it('renders without issues with tags', () => {
  const props: Partial<PageProps<Queries.LayoutBlogPageQuery>> = {
    data: {
      site: { siteMetadata: { author: '', siteUrl: '' } },
      mdx: {
        fields: {
          locale: 'en',
          isDefault: true,
          directory: faker.lorem.slug(),
          translatedPostUrl: faker.lorem.slug(),
        },
        frontmatter: {
          title: faker.lorem.words(),
          description: faker.lorem.words(5),
          date: '',
          image: backgroundImage.backgroundImage,
          imageAlt: faker.lorem.word(),
          tags: faker.lorem.words(5).split(''),
        },
      },
      defaultBlogPostImage: backgroundImage.backgroundImage,
      multilanguagePosts: {
        nodes: [
          {
            id: uuidv4(),
            fields: {
              locale: '',
              isDefault: false,
              filename: '',
              directory: '',
              translatedPostUrl: '',
            },
            frontmatter: {
              title: '',
              imageAlt: '',
              date: '',
              image: backgroundImage.backgroundImage,
            },
          },
        ],
      },
    },
  };
  const { queryByTestId } = customRender(
    <PostPage {...(props as unknown as PageProps<Queries.LayoutBlogPageQuery>)}>{undefined}</PostPage>,
    {
      localeContextProps: { locale: 'en' },
    },
  );

  expect(queryByTestId('post-image')).toBeInTheDocument();
  expect(queryByTestId('post-image')).toHaveAttribute(
    'src',
    props.data.mdx.frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src,
  );
});

it('renders with link in another language without tags', () => {
  const props: Partial<PageProps<Queries.LayoutBlogPageQuery>> = {
    data: {
      site: { siteMetadata: { author: '', siteUrl: '' } },
      mdx: {
        fields: {
          locale: 'es',
          isDefault: false,
          directory: faker.lorem.slug(),
          translatedPostUrl: faker.lorem.slug(),
        },
        frontmatter: {
          title: faker.lorem.words(),
          description: faker.lorem.words(5),
          date: '',
          image: backgroundImage.backgroundImage,
          imageAlt: faker.lorem.word(),
          tags: null,
        },
      },
      multilanguagePosts: {
        nodes: [
          {
            id: uuidv4(),
            fields: {
              locale: '',
              isDefault: false,
              filename: '',
              directory: '',
              translatedPostUrl: '',
            },
            frontmatter: {
              title: '',
              imageAlt: '',
              date: '',
              image: backgroundImage.backgroundImage,
            },
          },
        ],
      },
      defaultBlogPostImage: backgroundImage.backgroundImage,
    },
  };
  const { queryByTestId } = customRender(
    <PostPage {...(props as unknown as PageProps<Queries.LayoutBlogPageQuery>)}>{undefined}</PostPage>,
    {
      localeContextProps: { locale: 'es' },
    },
  );

  expect(queryByTestId('post-image')).toBeInTheDocument();
  expect(queryByTestId('post-image')).toHaveAttribute(
    'src',
    props.data.mdx.frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src,
  );
});

it('renders without imageAlt and description', () => {
  const props: Partial<PageProps<Queries.LayoutBlogPageQuery>> = {
    data: {
      site: { siteMetadata: { author: '', siteUrl: '' } },
      mdx: {
        fields: {
          locale: 'en',
          isDefault: true,
          directory: faker.lorem.slug(),
          translatedPostUrl: faker.lorem.slug(),
        },
        frontmatter: {
          title: faker.lorem.words(),
          description: null,
          date: '',
          image: null,
          imageAlt: null,
          tags: [],
        },
      },
      multilanguagePosts: {
        nodes: [
          {
            id: uuidv4(),
            fields: {
              locale: '',
              isDefault: false,
              filename: '',
              directory: '',
              translatedPostUrl: '',
            },
            frontmatter: {
              title: '',
              imageAlt: '',
              date: '',
              image: backgroundImage.backgroundImage,
            },
          },
        ],
      },
      defaultBlogPostImage: backgroundImage.backgroundImage,
    },
  };
  const { queryByTestId } = customRender(
    <PostPage {...(props as PageProps<Queries.LayoutBlogPageQuery>)}>{undefined}</PostPage>,
    {
      localeContextProps: { locale: 'en' },
    },
  );

  expect(queryByTestId('post-image')).toBeInTheDocument();
  expect(queryByTestId('post-image')).toHaveAttribute(
    'src',
    props.data.defaultBlogPostImage.childImageSharp.gatsbyImageData.images.fallback.src,
  );
});

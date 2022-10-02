import React from 'react';
import { PageProps, useStaticQuery } from 'gatsby';
import { customRender } from '../utils/testing';
import LayoutBlogPage, {
  MyBlockquote,
  MyPre,
  MyH1,
  MyH2,
  MyH3,
  MyImage,
  MyInlineCode,
  MyList,
  MyListItem,
  MyParagraph,
} from './LayoutBlogPage';
import { backgroundImage, loadSiteData, loadTranslations } from '../utils/mockresponses';
import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';

beforeEach(() => (useStaticQuery as jest.Mock).mockReturnValue({ ...loadSiteData, ...loadTranslations }));

it('renders without issues', () => {
  const props: Partial<PageProps<Queries.LayoutBlogPageQuery>> = {
    data: {
      site: { siteMetadata: { author: '', siteUrl: '' } },
      mdx: {
        excerpt: faker.lorem.words(5),
        body: faker.lorem.paragraphs(),
        fields: { locale: 'en', isDefault: true, slug: faker.lorem.slug() },
        frontmatter: {
          title: faker.lorem.words(),
          description: faker.lorem.words(5),
          date: '',
          image: backgroundImage.backgroundImage,
          imageAlt: faker.lorem.word(),
          embeddedImagesLocal: [],
        },
      },
    },
  };
  const { queryByTestId } = customRender(
    <LayoutBlogPage {...(props as unknown as PageProps<Queries.LayoutBlogPageQuery>)}>{undefined}</LayoutBlogPage>,
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

it('renders without imageAlt and description', () => {
  const props: Partial<PageProps<Queries.LayoutBlogPageQuery>> = {
    data: {
      site: { siteMetadata: { author: '', siteUrl: '' } },
      mdx: {
        excerpt: faker.lorem.words(5),
        body: faker.lorem.paragraphs(),
        fields: { locale: 'en', isDefault: true, slug: faker.lorem.slug() },
        frontmatter: {
          title: faker.lorem.words(),
          description: null,
          date: '',
          image: backgroundImage.backgroundImage,
          imageAlt: null,
          embeddedImagesLocal: [],
        },
      },
    },
  };
  const { queryByTestId } = customRender(
    <LayoutBlogPage {...(props as PageProps<Queries.LayoutBlogPageQuery>)}>{undefined}</LayoutBlogPage>,
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

it('renders MyH1 without issues', () => {
  const text = faker.lorem.words(3);
  const { queryByText } = render(<MyH1>{text}</MyH1>);

  expect(queryByText(text)).toBeInTheDocument();
});

it('renders MyH2 without issues', () => {
  const text = faker.lorem.words(3);
  const { queryByText } = render(<MyH2>{text}</MyH2>);

  expect(queryByText(text)).toBeInTheDocument();
});

it('renders MyH3 without issues', () => {
  const text = faker.lorem.words(3);
  const { queryByText } = render(<MyH3>{text}</MyH3>);

  expect(queryByText(text)).toBeInTheDocument();
});

it('renders MyList without issues', () => {
  const text = faker.lorem.words(3);
  const { queryByText } = render(<MyList>{text}</MyList>);

  expect(queryByText(text)).toBeInTheDocument();
});

it('renders MyListItem without issues', () => {
  const text = faker.lorem.words(3);
  const { queryByText } = render(<MyListItem>{text}</MyListItem>);

  expect(queryByText(text)).toBeInTheDocument();
});

it('renders MyParagraph without issues', () => {
  const text = faker.lorem.words(3);
  const { queryByText } = render(<MyParagraph>{text}</MyParagraph>);

  expect(queryByText(text)).toBeInTheDocument();
});

it('renders MyBlockQuote without issues', () => {
  const text = faker.lorem.words(3);
  const { queryByText } = render(<MyBlockquote>{text}</MyBlockquote>);

  expect(queryByText(text)).toBeInTheDocument();
});

it('renders MyInlineCode without issues', () => {
  const text = faker.lorem.words(3);
  const { queryByText } = render(<MyInlineCode>{text}</MyInlineCode>);

  expect(queryByText(text)).toBeInTheDocument();
});

it('renders MyCode without issues', () => {
  const text = 'This is simple code';
  const { queryByText } = render(
    <MyPre className="demo">
      <code>{text}</code>
    </MyPre>,
  );

  expect(queryByText(text)).toBeInTheDocument();
});

it('renders MyImage without issues', () => {
  const { queryByRole } = render(<MyImage />);

  expect(queryByRole('img')).toBeInTheDocument();
});

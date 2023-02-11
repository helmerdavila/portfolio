import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';
import {
  MyBlockquote,
  MyH1,
  MyH2,
  MyH3,
  MyImage,
  MyInlineCode,
  MyList,
  MyListItem,
  MyParagraph,
  MyPostLink,
  MyPre,
} from './Custom';
import { PageProps } from 'gatsby';
import { layoutBlogPostImage } from '../../utils/mockresponses';
import { Head } from '../Templates/PostPage';
import React from 'react';

vi.mock('gatsby');

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

it('renders Head component without issues', () => {
  const postTitle = faker.lorem.words();
  const props: DeepPartial<PageProps<Queries.LayoutBlogPageQuery>> = {
    data: {
      site: { siteMetadata: { author: '', siteUrl: '' } },
      mdx: {
        fields: { locale: 'en', isDefault: true, directory: faker.lorem.slug() },
        frontmatter: {
          title: postTitle,
          description: faker.lorem.words(5),
          date: '',
          image: layoutBlogPostImage.mdx.frontmatter.image,
          imageAlt: faker.lorem.word(),
        },
      },
    },
  };
  const { queryByText } = render(<Head {...props}>{undefined}</Head>);

  expect(queryByText(postTitle)).toBeInTheDocument();
});

it('renders MyPostLink without issues', () => {
  const text = faker.lorem.words(3);
  const { queryByText } = render(<MyPostLink>{text}</MyPostLink>);

  const link = queryByText(text);

  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('target', '_blank');
});

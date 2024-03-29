/* istanbul ignore file */
import { faker } from '@faker-js/faker';

const fakeImageMock = {
  childImageSharp: {
    gatsbyImageData: {
      layout: 'fullWidth',
      images: {
        fallback: {
          src: '/static/8e46c6094e86420a5163b69483e2f094/2bc32/price-of-thinking.jpg',
          srcSet:
            '/static/8e46c6094e86420a5163b69483e2f094/319f8/price-of-thinking.jpg 750w,\n/static/8e46c6094e86420a5163b69483e2f094/cb95a/price-of-thinking.jpg 1080w,\n/static/8e46c6094e86420a5163b69483e2f094/2340d/price-of-thinking.jpg 1366w,\n/static/8e46c6094e86420a5163b69483e2f094/2bc32/price-of-thinking.jpg 1920w',
          sizes: '100vw',
        },
        sources: [
          {
            srcSet:
              '/static/8e46c6094e86420a5163b69483e2f094/c1255/price-of-thinking.webp 750w,\n/static/8e46c6094e86420a5163b69483e2f094/41fe9/price-of-thinking.webp 1080w,\n/static/8e46c6094e86420a5163b69483e2f094/67ee9/price-of-thinking.webp 1366w,\n/static/8e46c6094e86420a5163b69483e2f094/a50ce/price-of-thinking.webp 1920w',
            type: 'image/webp',
            sizes: '100vw',
          },
        ],
      },
      width: 1,
      height: 0.5880208333333333,
    },
  },
};

export enum POSTS {
  POST_WITH_IMAGE,
  POST_WITHOUT_PARENT,
}

export default {
  allMdx: {
    nodes: [
      {
        id: faker.datatype.uuid(),
        frontmatter: {
          title: faker.lorem.words(5),
          imageAlt: faker.lorem.words(5),
          date: '2022-03-01T00:00:00.000Z',
          image: fakeImageMock,
        },
        fields: {
          locale: 'en',
          translatedPostUrl: faker.lorem.slug(),
          isDefault: false,
          directory: '',
          filename: '',
        },
      },
      {
        id: faker.datatype.uuid(),
        frontmatter: {
          title: faker.lorem.words(5),
          imageAlt: null,
          date: '2022-02-02T00:00:00.000Z',
          image: fakeImageMock,
        },
        fields: {
          locale: 'en',
          translatedPostUrl: faker.lorem.slug(),
          isDefault: false,
          directory: '',
          filename: '',
        },
      },
    ],
  },
  backgroundImage: {
    childImageSharp: {
      gatsbyImageData: {
        layout: 'fullWidth',
        images: {
          fallback: {
            src: '/static/f611ddce893dac0e4c6806e9494ff65b/a764f/mac-development.jpg',
            srcSet:
              '/static/f611ddce893dac0e4c6806e9494ff65b/37bba/mac-development.jpg 750w,\n/static/f611ddce893dac0e4c6806e9494ff65b/61c72/mac-development.jpg 1080w,\n/static/f611ddce893dac0e4c6806e9494ff65b/d61e8/mac-development.jpg 1366w,\n/static/f611ddce893dac0e4c6806e9494ff65b/a764f/mac-development.jpg 1920w',
            sizes: '100vw',
          },
          sources: [
            {
              srcSet:
                '/static/f611ddce893dac0e4c6806e9494ff65b/a66aa/mac-development.webp 750w,\n/static/f611ddce893dac0e4c6806e9494ff65b/65dd5/mac-development.webp 1080w,\n/static/f611ddce893dac0e4c6806e9494ff65b/4fad6/mac-development.webp 1366w,\n/static/f611ddce893dac0e4c6806e9494ff65b/c512e/mac-development.webp 1920w',
              type: 'image/webp',
              sizes: '100vw',
            },
          ],
        },
        width: 1,
        height: 0.5625,
      },
    },
  },
} as Queries.IndexPreviewPostsQuery;

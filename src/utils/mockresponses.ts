import translations_en from '../../config/translations/en.json';
import translations_fr from '../../config/translations/fr.json';
import translations_es from '../../config/translations/es.json';
import { faker } from '@faker-js/faker';

export const loadSiteData = {
  site: {
    siteMetadata: {
      title: faker.lorem.words(),
      description: faker.lorem.words(10),
      author: faker.internet.userName(),
    },
  },
};

export const loadTranslations = {
  rawData: {
    edges: [
      {
        node: {
          name: 'en',
          translations: translations_en,
        },
      },
      {
        node: {
          name: 'fr',
          translations: translations_fr,
        },
      },
      {
        node: {
          name: 'es',
          translations: translations_es,
        },
      },
    ],
  },
};

export const backgroundImage: { backgroundImage: Queries.IndexPreviewPostsQuery['backgroundImage'] } = {
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
};

export const layoutBlogPostImage: DeepPartial<Queries.LayoutBlogPageQuery> = {
  mdx: {
    frontmatter: {
      image: {
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
    },
  },
};

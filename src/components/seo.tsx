import React, { useContext } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { useStaticQuery } from 'gatsby';
import { ThemeContext } from './Layout';

function SEO({
  description,
  lang,
  meta,
  keywords,
  title,
  image,
  ogType,
}: {
  description: string;
  lang: string;
  meta: unknown[];
  keywords: string[];
  title: string;
  image?: string;
  ogType?: string;
}): JSX.Element {
  const context = useContext(ThemeContext);
  const { site } = useStaticQuery(detailsQuery);
  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: ogType ?? `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author ?? ``,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        context.isLightTheme ? { name: 'theme-color', content: 'white' } : { name: 'theme-color', content: '#1f2937' },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `),
              }
            : [],
        )
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

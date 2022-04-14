import React, { useContext } from 'react';
import LayoutBlog from './LayoutBlog';
import { graphql } from 'gatsby';
import { ThemeContext } from './Layout';
import classNames from 'classnames';
import { IBlogPost } from '../interfaces';
import SEO from './Seo';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Code from '../components/Mdx/Code';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const MyH1 = ({ children, ...props }) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  return (
    <h1 className={classNames(themeStyles, 'mb-6 text-5xl font-bold leading-normal')} {...props}>
      {children}
    </h1>
  );
};
export const MyH2 = ({ children, ...props }) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  return (
    <h2 className={classNames(themeStyles, 'mt-3 mb-2 text-4xl font-bold')} {...props}>
      {children}
    </h2>
  );
};
export const MyH3 = ({ children, ...props }) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  return (
    <h3 className={classNames(themeStyles, 'mt-3 mb-2 text-3xl font-bold')} {...props}>
      {children}
    </h3>
  );
};
export const MyList = ({ children, ...props }) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  return (
    <ul className={classNames(themeStyles, 'block my-5 text-xl')} {...props}>
      {children}
    </ul>
  );
};
export const MyListItem = ({ children, ...props }) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  return (
    <li className={classNames(themeStyles, 'block py-2 text-xl')} {...props}>
      {children}
    </li>
  );
};
export const MyParagraph = ({ children, ...props }) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  return (
    <p className={classNames(themeStyles, 'my-6 text-xl')} {...props}>
      {children}
    </p>
  );
};
export const MyBlockquote = ({ children, ...props }) => {
  const context = useContext(ThemeContext);
  return (
    <blockquote
      className={classNames(
        { 'text-black border-black': context.isLightTheme, 'text-white border-white': !context.isLightTheme },
        'border-b-4 border-t-4 text-center py-4 my-8',
      )}
      {...props}
    >
      {children}
    </blockquote>
  );
};
export const MyInlineCode = ({ children, ...props }) => {
  const context = useContext(ThemeContext);
  const themeStyles = {
    'text-blue-600 bg-gray-100': context.isLightTheme,
    'text-gray-300 bg-blue-800': !context.isLightTheme,
  };
  return (
    <code className={classNames(themeStyles, 'rounded text-base px-1')} {...props}>
      {children}
    </code>
  );
};
export const MyCode = (props: { children: string; className: string }) => <Code {...props} />;
export const MyImage = (props: unknown) => <img className="shadow-lg rounded" {...props} />;

const components = {
  h1: MyH1,
  h2: MyH2,
  h3: MyH3,
  ul: MyList,
  li: MyListItem,
  p: MyParagraph,
  blockquote: MyBlockquote,
  inlineCode: MyInlineCode,
  code: MyCode,
  img: MyImage,
};

const LayoutBlogPage = ({ data: { mdx } }: { data: { mdx: IBlogPost } }): JSX.Element => {
  const context = useContext(ThemeContext);
  const pageBackground = {
    'bg-white shadow-sm': context.isLightTheme,
    'bg-gray-800 border-gray-800': !context.isLightTheme,
  };
  const imageAlt = mdx?.frontmatter?.imageAlt ?? '';
  const imageRendered = getImage(mdx.frontmatter.image?.childImageSharp.gatsbyImageData);

  return (
    <LayoutBlog>
      <SEO
        title={mdx?.frontmatter?.title}
        ogType="article"
        description={mdx?.frontmatter?.description || mdx?.excerpt}
        image={imageRendered?.images?.fallback?.src ?? ''}
      />
      <div className="container max-w-3xl py-5 mx-auto xl:max-w-6xl">
        <div className={classNames(pageBackground, 'border-2')}>
          <GatsbyImage image={imageRendered} alt={imageAlt} data-testid="post-image" />
          <div className="p-12 blog-page">
            <MDXProvider components={components}>
              <MDXRenderer localImages={mdx.frontmatter.embeddedImagesLocal}>{mdx.body}</MDXRenderer>
            </MDXProvider>
          </div>
        </div>
      </div>
    </LayoutBlog>
  );
};

export default LayoutBlogPage;

export const query = graphql`
  query Post($locale: String!, $title: String!) {
    mdx(frontmatter: { title: { eq: $title } }, fields: { locale: { eq: $locale } }) {
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
        }
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
          }
        }
        imageAlt
        title
        description
      }
      excerpt(pruneLength: 100)
      body
    }
  }
`;

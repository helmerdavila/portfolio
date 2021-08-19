import React, { useContext } from 'react';
import LayoutBlog from './LayoutBlog';
import { graphql } from 'gatsby';
import { ThemeContext } from './Layout';
import classNames from 'classnames';
import { IBlogPost } from '../interfaces';
import SEO from './seo';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Code from '../components/Mdx/Code';

const MyH1 = (props: unknown) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  return <h1 className={classNames(themeStyles, 'mb-6 text-5xl font-bold')} {...props} />;
};
const MyH2 = (props: unknown) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  return <h2 className={classNames(themeStyles, 'mt-3 mb-2 text-4xl font-bold')} {...props} />;
};
const MyH3 = (props: unknown) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  return <h3 className={classNames(themeStyles, 'mt-3 mb-2 text-3xl font-bold')} {...props} />;
};
const MyParagraph = (props: unknown) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  return <p className={classNames(themeStyles, 'my-6 text-xl')} {...props} />;
};
const MyBlockquote = (props: unknown) => {
  const context = useContext(ThemeContext);
  return (
    <blockquote
      className={classNames(
        { 'text-black border-black': context.isLightTheme, 'text-white border-white': !context.isLightTheme },
        'border-b-4 border-t-4 text-center py-4 my-8',
      )}
      {...props}
    />
  );
};
const MyInlineCode = (props: unknown) => {
  const context = useContext(ThemeContext);
  const themeStyles = {
    'text-blue-600 bg-gray-100': context.isLightTheme,
    'text-gray-300 bg-blue-800': !context.isLightTheme,
  };
  return <code className={classNames(themeStyles, 'rounded text-base px-2')} {...props} />;
};
const MyCode = (props: { children: unknown; className: string }) => <Code {...props} />;

const components = {
  h1: MyH1,
  h2: MyH2,
  h3: MyH3,
  p: MyParagraph,
  blockquote: MyBlockquote,
  inlineCode: MyInlineCode,
  code: MyCode,
};

const LayoutBlogPage = ({ data: { mdx } }: { data: { mdx: IBlogPost } }): JSX.Element => {
  const context = useContext(ThemeContext);
  const pageBackground = {
    'bg-white shadow-sm': context.isLightTheme,
    'bg-gray-800 border-gray-800': !context.isLightTheme,
  };
  const image = mdx?.frontmatter?.imageCover ?? '';

  return (
    <LayoutBlog>
      <SEO
        title={mdx?.frontmatter?.title}
        ogType="article"
        description={mdx?.frontmatter?.description || mdx?.excerpt}
        image={image}
      />
      <div className="container max-w-3xl py-5 mx-auto xl:max-w-6xl">
        <div className={classNames(pageBackground, 'border-2')}>
          <div>
            <img className="object-cover w-full" src={image ?? ''} alt={mdx.frontmatter?.imageAlt ?? ''} />
          </div>
          <div className="p-12">
            <MDXProvider components={components}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
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
        imageCover
        imageAlt
        title
        description
      }
      excerpt(pruneLength: 100)
      body
    }
  }
`;

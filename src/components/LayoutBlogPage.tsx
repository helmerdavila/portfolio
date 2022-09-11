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
import useTranslations from './UseTranslations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@helmerdavila/fontawesomehelmer/pro-duotone-svg-icons';

export const MyH1 = (props) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  return <h1 className={classNames(themeStyles, 'mb-6 text-5xl font-bold leading-normal')} {...props} />;
};
export const MyH2 = (props) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  return <h2 className={classNames(themeStyles, 'mt-7 mb-5 text-4xl font-bold')} {...props} />;
};
export const MyH3 = (props) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  return <h3 className={classNames(themeStyles, 'mt-3 mb-2 text-3xl font-bold')} {...props} />;
};
export const MyList = (props) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  return <ul className={classNames(themeStyles, 'list-disc pl-6 block my-5 text-xl')} {...props} />;
};
export const MyListItem = (props) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  return <li className={classNames(themeStyles, 'py-2 text-xl')} {...props} />;
};
export const MyParagraph = (props) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  return <p className={classNames(themeStyles, 'my-6 text-xl')} {...props} />;
};
export const MyBlockquote = (props) => {
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
export const MyInlineCode = (props) => {
  const context = useContext(ThemeContext);
  const themeStyles = {
    'text-blue-600 bg-gray-100': context.isLightTheme,
    'text-gray-300 bg-blue-800': !context.isLightTheme,
  };
  return <code className={classNames(themeStyles, 'rounded text-base px-1')} {...props} />;
};
export const MyCode = (props: { children: string; className: string }) => <Code {...props} />;
export const MyImage = (props: Record<string, unknown>) => <img className="shadow-lg rounded" {...props} />;

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

const LayoutBlogPage = ({ data: { mdx } }: { data: { mdx: IBlogPost }; children: unknown }): JSX.Element => {
  const context = useContext(ThemeContext);
  const { author, edit_posts_on_github, written_by } = useTranslations();
  const pageBackground = {
    'bg-white shadow-sm': context.isLightTheme,
    'bg-gray-800 border-gray-800': !context.isLightTheme,
  };
  const textStyle = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  const imageAlt = mdx?.frontmatter?.imageAlt ?? '';
  const imageRendered = getImage(mdx.frontmatter.image?.childImageSharp.gatsbyImageData);
  const pathFileForGithub = mdx.fields.isDefault
    ? `${mdx.fields.slug}/index.mdx`
    : `${mdx.fields.slug}/index.${mdx.fields.locale}.mdx`;

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
            <div className="flex justify-end mt-32">
              <a
                href={`https://github.com/helmerdavila/portfolio/edit/main/blog/${pathFileForGithub}`}
                target="_blank"
                className={classNames(textStyle, 'font-bold hover:underline text-right')}
                rel="noreferrer"
              >
                {edit_posts_on_github}
              </a>
            </div>
          </div>
        </div>
        <div className={classNames(pageBackground, 'my-7 py-7 px-12 container max-w-3xl  mx-auto xl:max-w-6xl')}>
          <h2 className={classNames(textStyle, 'text-4xl font-bold')}>{author}</h2>
          <div className="flex justify-between mt-6">
            <span className={classNames(textStyle, 'text-xl')}>{written_by} Helmer Davila</span>
            <div className={classNames(textStyle, 'text-xl')}>
              <a href="https://www.helmerdavila.com" className="mr-2">
                <FontAwesomeIcon icon={faGlobe} />
              </a>
              <a href="https://www.linkedin.com/in/helmerdavila" className="mr-2">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.github.com/helmerdavila">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
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
      fields {
        slug
        locale
        isDefault
      }
      frontmatter {
        imageAlt
        title
        description
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
      }
      excerpt(pruneLength: 100)
      body
    }
  }
`;

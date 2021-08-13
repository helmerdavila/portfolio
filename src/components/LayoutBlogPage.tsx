import React, { useContext } from 'react';
import LayoutBlog from './LayoutBlog';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { ThemeContext } from './Layout';
import classNames from 'classnames';

const LayoutBlogPage = ({ data: { mdx } }) => {
  const context = useContext(ThemeContext);
  const pageBackground = { 'bg-white shadow-sm': context.isLightTheme, 'bg-gray-800 border-gray-800': !context.isLightTheme };

  return (
    <LayoutBlog>
      <div className="container max-w-3xl py-5 mx-auto xl:max-w-6xl">
        <div className={classNames(pageBackground, 'border-2')}>
          <div>
            <img
              className="object-cover w-full"
              src={mdx.frontmatter?.imageCover ?? ''}
              alt={mdx.frontmatter?.imageAlt ?? ''}
            />
          </div>
          <div className="p-12">
            <MDXRenderer>{mdx.body}</MDXRenderer>
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
      }
      body
    }
  }
`;


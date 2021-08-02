import React from 'react';
import LayoutBlog from './LayoutBlog';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const LayoutBlogPage = ({ children, data: { mdx } }) => {
  return (
    <LayoutBlog>
      <div className="container max-w-4xl py-5 mx-auto">
        <div className="bg-white border-2 shadow-sm">
          <img className="" src={mdx.frontmatter?.imageCover ?? ''} alt={mdx.frontmatter?.imageAlt ?? ''} />
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
        title
        imageCover
        imageAlt
      }
      body
    }
  }
`;

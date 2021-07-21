import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Footer from './Layouts/footer';
import HeaderBlog from './Blog/HeaderBlog';

const LayoutBlog = ({ children }: { children: any }) => (
  <StaticQuery
    query={query}
    render={() => (
      <>
        <HeaderBlog/>
        <div className="pt-20 bg-gray-200">{children}</div>
        <Footer />
      </>
    )}
  />
);

LayoutBlog.propTypes = {
  children: PropTypes.node.isRequired,
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default LayoutBlog;
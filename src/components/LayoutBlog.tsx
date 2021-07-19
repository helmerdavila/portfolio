import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Footer from './Layouts/footer';

const LayoutBlog = ({ children }: { children: any }) => (
  <StaticQuery
    query={query}
    render={() => (
      <>
        <div className="bg-gray-200">{children}</div>
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

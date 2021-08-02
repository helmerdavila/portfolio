import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

const LayoutBlog = ({ children }: { children: any }) => (
  <StaticQuery
    query={query}
    render={() => (
      <>
        <div className="pt-20 bg-gray-200">{children}</div>
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

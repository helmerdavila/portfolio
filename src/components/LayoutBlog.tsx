import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

const LayoutBlog = ({ children }: { children: any }) => <StaticQuery query={query} render={() => <>{children}</>} />;

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

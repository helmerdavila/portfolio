import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const fitnesspassMobileImage = (): unknown => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "fitnesspass_mobile.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={(data) => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
    />
  );
};
export default fitnesspassMobileImage;

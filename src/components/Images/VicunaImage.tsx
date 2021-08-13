import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const vicunaImage = (): unknown => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "vicunia_beer_mockup.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={(data) => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
    />
  );
};
export default vicunaImage;

import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery } from 'gatsby';

const ambreaImage = (): unknown => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "ambrea_mockup.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  return <GatsbyImage image={data.file.childImageSharp.gatsbyImageData} alt="Ambrea" />;
};
export default ambreaImage;

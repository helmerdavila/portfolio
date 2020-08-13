import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const bitelineImage = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(
            relativePath: { eq: "biteline_mobile_mockup.png" }
          ) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      `}
      render={data => (
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
      )}
    />
  )
}
export default bitelineImage

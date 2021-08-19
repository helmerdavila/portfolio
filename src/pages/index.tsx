import React from 'react';
import SEO from '../components/seo';
import Presentation from '../components/Presentation/presentation';
import Projects from '../components/Projects/projects';
import WhatIDo from '../components/WhatIDo/whatido';
import MyStack from '../components/MyStack/mystack';
import FreeProjects from '../components/FreeProjects/freeprojects';
import MyBook from '../components/MyBook/MyBook';
import AboutMe from '../components/AboutMe/AboutMe';
import PersonalProjects from '../components/PersonalProjects/personalprojects';
import Footer from '../components/Layouts/footer';
import BlogPreview from '../components/Blog/blog';
import { graphql } from 'gatsby';
import { IBlogPageQuery } from '../interfaces';

const IndexPage = ({ data }: { data: IBlogPageQuery }): JSX.Element => (
  <>
    <SEO
      title="Fullstack Web Developer"
      keywords={['helmer davila', 'fullstack', 'developer', 'react', 'vue', 'angular', 'react native']}
      description="My personal portfolio"
    />
    <Presentation />
    <AboutMe />
    <WhatIDo />
    <MyStack />
    <PersonalProjects />
    <BlogPreview data={data} />
    <Projects />
    <MyBook />
    <FreeProjects />
    <Footer />
  </>
);

export const query = graphql`
  query blogpreview($locale: String!, $dateFormat: String!) {
    allMdx(
      filter: { fields: { locale: { eq: $locale } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          frontmatter {
            title
            imageAlt
            imageCover
            date(formatString: $dateFormat)
          }
          imageCover {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG, aspectRatio: 1.7)
            }
          }
          fields {
            locale
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;

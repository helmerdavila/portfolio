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
import BlogPreviewHome from '../components/Blog/BlogPreviewHome';
import { graphql } from 'gatsby';
import { IBlogPageQuery } from '../interfaces';

const IndexPage = ({ data }: { data: IBlogPageQuery }): JSX.Element => (
  <>
    <SEO
      title="Fullstack Web Developer"
      keywords={['helmer davila', 'fullstack', 'developer', 'react', 'vue', 'angular', 'react native']}
      description="My personal portfolio"
    />
    <Presentation backgroundImage={data.backgroundImage} />
    <AboutMe />
    <WhatIDo />
    <MyStack />
    <PersonalProjects />
    <BlogPreviewHome data={data} />
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
            image {
              ...ImageOnIndexPost
            }
            date(formatString: $dateFormat)
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
    backgroundImage: file(relativePath: { eq: "mac-development.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    homePostImage: file(relativePath: { eq: "macbook-homepost.jpg" }) {
      ...ImageOnIndexPost
    }
  }

  fragment ImageOnIndexPost on File {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG, aspectRatio: 1.7)
    }
  }
`;

export default IndexPage;

import React from 'react';
import SEO from '../components/Seo';
import Presentation from '../components/Presentation/Presentation';
import Projects from '../components/Projects/Projects';
import WhatIDo from '../components/WhatIDo/WhatIDo';
import MyStack from '../components/MyStack/MyStack';
import FreeProjects from '../components/FreeProjects/FreeProjects';
import MyBook from '../components/MyBook/MyBook';
import AboutMe from '../components/AboutMe/AboutMe';
import PersonalProjects from '../components/PersonalProjects/PersonalProjects';
import Footer from '../components/Layouts/Footer';
import BlogPreviewHome from '../components/Blog/BlogPreviewHome';
import { graphql, PageProps } from 'gatsby';

const IndexPage = ({ data }: PageProps<Queries.IndexQuery>): JSX.Element => (
  <>
    <SEO
      title="Fullstack Web Developer"
      keywords={['helmer davila', 'fullstack', 'developer', 'react', 'vue', 'angular', 'react native']}
      description="My personal portfolio"
    />
    <Presentation backgroundImage={data.backgroundImage.childImageSharp.gatsbyImageData} />
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
  query Index($locale: String!) {
    allMdx(
      filter: { fields: { locale: { eq: $locale } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      nodes {
        frontmatter {
          title
          imageAlt
          image {
            ...ImageOnIndexPost
          }
          date
        }
        internal {
          contentFilePath
        }
        fields {
          locale
          slug
          isDefault
        }
        parent {
          ... on File {
            relativeDirectory
          }
        }
      }
    }
    backgroundImage: file(relativePath: { eq: "background.jpg" }) {
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

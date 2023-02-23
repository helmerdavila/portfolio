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

const IndexPage = ({ data }: PageProps<Queries.IndexPreviewPostsQuery>): JSX.Element => (
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
    <BlogPreviewHome data={data} />
    <Projects />
    <MyBook />
    <FreeProjects />
    <Footer />
  </>
);

export const query = graphql`
  query IndexPreviewPosts($locale: String!) {
    allMdx(filter: { fields: { locale: { eq: $locale } } }, sort: { frontmatter: { date: DESC } }, limit: 2) {
      ...ContentOnIndexPosts
    }
  }

  fragment ContentOnIndexPosts on MdxConnection {
    nodes {
      id
      fields {
        locale
        isDefault
        filename
        directory
        translatedPostUrl
      }
      frontmatter {
        title
        imageAlt
        image {
          ...ImageOnIndexPost
        }
        date
      }
    }
  }

  fragment ImageOnIndexPost on File {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.7)
    }
  }
`;

export default IndexPage;

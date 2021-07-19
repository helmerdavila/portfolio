import { graphql } from 'gatsby';
import React from 'react';
import LayoutBlog from '../components/LayoutBlog';

interface IBlogPost {
  slug: string;
  excerpt: string;
  frontmatter: { title: string; published: boolean; date: string; lang: string };
}
interface IBlogPageQuery {
  blogposts: {
    edges: { node: IBlogPost }[];
  };
}

const Blog = ({ data }: { data: IBlogPageQuery }) => {
  console.log(data);
  const posts = data?.blogposts?.edges;
  return (
    <LayoutBlog>
      <h1>This is a blog demo</h1>
      {posts.map((post) => (
        <h2 key={post.node.slug}>{post.node?.frontmatter?.title}</h2>
      ))}
    </LayoutBlog>
  );
};

export default Blog;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }

    blogposts: allMdx(filter: { frontmatter: { published: { ne: false }, lang: { eq: $language } } }) {
      edges {
        node {
          slug
          frontmatter {
            title
            published
            date(formatString: "YYYY-MM-DD")
            lang
          }
          excerpt(pruneLength: 90)
        }
      }
    }
  }
`;

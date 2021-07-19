import { graphql } from 'gatsby';
import React from 'react';
import LayoutBlog from '../components/LayoutBlog';

interface IBlogPost {
  slug: string;
  excerpt: string;
  frontmatter: { title: string; description: string; published: boolean; date: string; lang: string };
}
interface IBlogPageQuery {
  blogposts: {
    edges: { node: IBlogPost }[];
  };
}

const Blog = ({ data }: { data: IBlogPageQuery }) => {
  const posts = data?.blogposts?.edges;

  return (
    <LayoutBlog>
      <div className="container pb-3 mx-auto">
        {/* centered logo saying hblog */}
        {posts.map((post) => (
          <div  key={post.node.slug}>
            <h2 className="text-5xl font-bold">{post.node?.frontmatter?.title}</h2>
            <h3 className="mb-2 text-2xl">{post.node?.frontmatter?.description}</h3>
            <img className="rounded-lg" src="https://blog.helmerdavila.com/wp-content/uploads/2019/03/business-code-coding-943096-1-1736x1157.jpg" />
            <p className="mt-2 text-lg">{post.node?.excerpt}</p>
          </div>
        ))}
      </div>
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
            description
            date(formatString: "YYYY-MM-DD")
            lang
          }
          excerpt(pruneLength: 90)
        }
      }
    }
  }
`;

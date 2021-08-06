import { graphql } from 'gatsby';
import React from 'react';
import LayoutBlog from '../components/LayoutBlog';
import LocalizedLink from '../components/LocalizedLink';

interface IBlogPost {
  excerpt: string;
  frontmatter: {
    title: string;
    description: string;
    published: boolean;
    date: string;
    lang: string;
    imageCover: string;
    imageAlt: string;
  };
  fields: {
    locale: string;
  };
  parent: {
    relativeDirectory: string;
  };
}
interface IBlogPageQuery {
  allMdx: {
    edges: { node: IBlogPost }[];
  };
}

const Blog = ({ data }: { data: IBlogPageQuery }) => {
  const posts = data?.allMdx?.edges;

  return (
    <LayoutBlog>
      <div className="container max-w-3xl xl:max-w-6xl pb-3 mx-auto">
        {posts.map((post) => (
          <LocalizedLink
            to={`/blog/${post.node.parent.relativeDirectory}`}
            className="block mt-10 bg-white border-2 rounded-md shadow-sm first:mt-3"
            key={post.node.parent.relativeDirectory}
          >
            <div>
              <img
                className="object-cover h-full w-full"
                src={post.node?.frontmatter?.imageCover ?? 'https://assets.taskalia.com/blog/macbook.jpg'}
                alt={post.node?.frontmatter?.imageAlt ?? 'Photo by Nikolay Tarashchenko on Unsplash'}
              />
            </div>
            <div className="p-6">
              <h2 className="text-4xl font-bold">{post.node?.frontmatter?.title}</h2>
              <h5 className="mb-2 text-xl">{post.node?.frontmatter?.description}</h5>
              <p className="mt-2 text-lg">{post.node?.excerpt}</p>
            </div>
          </LocalizedLink>
        ))}
      </div>
    </LayoutBlog>
  );
};

export const query = graphql`
  query blogposts($locale: String!, $dateFormat: String!) {
    allMdx(filter: { fields: { locale: { eq: $locale } } }, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 100)
          frontmatter {
            title
            imageAlt
            imageCover
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
  }
`;

export default Blog;

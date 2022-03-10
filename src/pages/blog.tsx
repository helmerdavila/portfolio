import classNames from 'classnames';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import { ThemeContext } from '../components/Layout';
import LayoutBlog from '../components/LayoutBlog';
import LocalizedLink from '../components/LocalizedLink';
import SEO from '../components/seo';
import { IBlogPageQuery } from '../interfaces';

const Blog = ({ data }: { data: IBlogPageQuery }): JSX.Element => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  const posts = data?.allMdx?.edges;

  return (
    <LayoutBlog>
      <SEO
        title="Helmer Blog"
        keywords={['fullstack', 'developer', 'react', 'vue', 'angular', 'react native']}
        description="My technical blog"
      />
      <div className="container max-w-3xl pb-3 mx-auto xl:max-w-6xl">
        {posts.map((post) => {
          const imageRendered = getImage(post.node.frontmatter.image?.childImageSharp.gatsbyImageData);
          return (
            <LocalizedLink
              to={`/blog/${post.node.parent.relativeDirectory}`}
              className={classNames(
                { 'bg-white border-2 shadown-sm': context.isLightTheme, 'bg-gray-800': !context.isLightTheme },
                'block mt-10 rounded-md first:mt-3',
              )}
              key={post.node.parent.relativeDirectory}
            >
              <GatsbyImage image={imageRendered} alt={post.node?.frontmatter?.imageAlt ?? ''} />
              <div className="p-6">
                <h2 className={classNames(themeStyles, 'text-4xl font-bold')}>{post.node?.frontmatter?.title}</h2>
                <h5 className={classNames(themeStyles, 'mt-2 text-xl')}>{post.node?.frontmatter?.description}</h5>
              </div>
            </LocalizedLink>
          );
        })}
      </div>
    </LayoutBlog>
  );
};

export const query = graphql`
  query allBlogPosts($locale: String!) {
    allMdx(filter: { fields: { locale: { eq: $locale } } }, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 100)
          frontmatter {
            title
            imageAlt
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
              }
            }
            date
            description
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

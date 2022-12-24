import classNames from 'classnames';
import { graphql, Link, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';
import { ThemeContext } from '../components/Layout';
import LayoutBlog from '../components/LayoutBlog';
import SEO from '../components/Seo';
import { v4 as uuidv4 } from 'uuid';

type BlogPost = Queries.BlogQuery['allMdx']['nodes'][0];

const BlogPostCardTags = ({ tags }: { tags: readonly string[] }) => {
  const context = useContext(ThemeContext);
  const textStyles = { 'text-zinc-500': context.isLightTheme, 'text-zinc-400': !context.isLightTheme };

  return tags.length ? (
    <div className="flex flex-wrap px-6 py-3">
      {tags.map((tag) => (
        <span key={uuidv4()} className={classNames(textStyles, 'mr-2 text-lg')}>
          #{tag}
        </span>
      ))}
    </div>
  ) : (
    <div className="mb-6"></div>
  );
};

const BlogPostCard = ({ post }: { post: BlogPost }) => {
  const context = useContext(ThemeContext);
  const textStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  const tags = post.frontmatter.tags ?? [];
  const imageRendered = getImage(post.frontmatter.image?.childImageSharp.gatsbyImageData);

  return (
    <Link
      to={post.fields.translatedPostUrl}
      className={classNames(
        { 'bg-white border-2 shadown-sm': context.isLightTheme, 'bg-gray-800': !context.isLightTheme },
        'block mt-10 rounded-md first:mt-3',
      )}
      key={post.id}
    >
      <GatsbyImage image={imageRendered} alt={post?.frontmatter?.imageAlt ?? ''} />
      <div className="px-6 pt-6">
        <h2 className={classNames(textStyles, 'text-4xl font-bold')}>{post?.frontmatter?.title}</h2>
        <h5 className={classNames(textStyles, 'mt-5 text-2xl')}>{post?.frontmatter?.description}</h5>
      </div>
      <BlogPostCardTags tags={tags} />
    </Link>
  );
};

const Blog = ({ data }: PageProps<Queries.BlogQuery>): JSX.Element => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  const posts = data?.allMdx?.nodes;

  return (
    <LayoutBlog>
      <SEO
        title="Helmer Blog"
        keywords={['fullstack', 'developer', 'react', 'vue', 'angular', 'react native']}
        description="My technical blog"
      />
      <div className="container max-w-3xl pb-3 mx-auto xl:max-w-6xl">
        <h1 className={classNames('text-6xl font-bold mt-10', themeStyles)}>Blog</h1>
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </LayoutBlog>
  );
};

export const query = graphql`
  query Blog($locale: String!) {
    allMdx(filter: { fields: { locale: { eq: $locale } } }, sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        excerpt(pruneLength: 100)
        frontmatter {
          title
          imageAlt
          date
          description
          tags
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
            }
          }
        }
        fields {
          locale
          localizedSlug
          isDefault
          slug
          translatedPostUrl
        }
      }
    }
  }
`;

export default Blog;

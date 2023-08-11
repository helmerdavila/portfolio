import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../Layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import useTranslations from '../UseTranslations';
import LocalizedLink from '../LocalizedLink';

const BlogPreviewHome = ({ data }: { data: Queries.IndexPreviewPostsQuery }): JSX.Element => {
  const context = useContext(ThemeContext);
  const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };
  const posts = data.allMdx.nodes;
  const { see_full_post_list } = useTranslations();

  return posts.length ? (
    <section
      className={classNames('py-10', { 'bg-white': context.isLightTheme, 'bg-gray-800': !context.isLightTheme })}
    >
      <div className="container mx-auto 2xl:max-w-7xl">
        <h2 className={classNames('text-5xl font-semibold text-center mb-4', textColor)}>Blog</h2>
        <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
          {posts?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <LocalizedLink
          to="/blog"
          className={classNames('block rounded-full px-5 py-3 mt-7 mx-auto max-w-md text-center', {
            'bg-black text-white': context.isLightTheme,
            'bg-gray-900 text-white': !context.isLightTheme,
          })}
        >
          <span className="font-semibold">{see_full_post_list}</span>
        </LocalizedLink>
      </div>
    </section>
  ) : null;
};

export const PostCard = ({ post }: { post: Queries.IndexPreviewPostsQuery['allMdx']['nodes'][0] }): JSX.Element => {
  const context = useContext(ThemeContext);
  const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };
  const imageAlt = post.frontmatter.imageAlt ?? 'Blog';
  const image = getImage(post.frontmatter.image.childImageSharp.gatsbyImageData);

  return (
    <Link
      className={classNames('shadow-xl rounded-lg bg-gray-200', {
        'bg-gray-200': context.isLightTheme,
        'bg-gray-700': !context.isLightTheme,
      })}
      to={post.fields.translatedPostUrl}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="postcard-link"
    >
      <GatsbyImage
        className="rounded-t-lg filter grayscale hover:grayscale-0 transition-all ease-in duration-500"
        imgClassName="rounded-t-lg"
        image={image}
        alt={imageAlt}
      />
      <h3 className={classNames('text-3xl font-semibold text-center p-4', textColor)}>{post.frontmatter.title}</h3>
    </Link>
  );
};

export default BlogPreviewHome;

import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../Layout';
import { IBlogPageQuery, IBlogPost } from '../../interfaces';
import LocalizedLink from '../../components/LocalizedLink';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

const BlogPreviewHome = (props: { data: IBlogPageQuery }): JSX.Element => {
  const context = useContext(ThemeContext);
  const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };
  const posts = props.data?.allMdx?.nodes;
  const postDefaultImage = props.data.homePostImage.childImageSharp.gatsbyImageData;

  return posts.length ? (
    <section
      className={classNames('py-10', { 'bg-white': context.isLightTheme, 'bg-gray-800': !context.isLightTheme })}
    >
      <div className="container mx-auto 2xl:max-w-7xl">
        <h2 className={classNames('text-5xl font-semibold text-center mb-4', textColor)}>Blog</h2>
        <div className="flex flex-col sm:flex-row">
          {posts?.map((post) => (
            <PostCard key={post.parent.relativeDirectory} post={post} postDefaultImage={postDefaultImage} />
          ))}
        </div>
      </div>
    </section>
  ) : null;
};

export const PostCard = ({
  post,
  postDefaultImage,
}: {
  post: IBlogPost;
  postDefaultImage: IGatsbyImageData;
}): JSX.Element => {
  const context = useContext(ThemeContext);
  const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };
  const imageAlt = post.frontmatter?.imageAlt ?? 'Blog';
  const image = getImage(post.frontmatter.image?.childImageSharp.gatsbyImageData ?? postDefaultImage);

  return (
    <LocalizedLink
      className={classNames('flex-1 sm:w-1/2 m-5 shadow-xl rounded-lg bg-gray-200', {
        'bg-gray-200': context.isLightTheme,
        'bg-gray-700': !context.isLightTheme,
      })}
      to={`/blog/${post.parent.relativeDirectory}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GatsbyImage
        className="rounded-t-lg filter grayscale hover:grayscale-0 transition-all ease-in duration-500"
        imgClassName="rounded-t-lg"
        image={image}
        alt={imageAlt}
      />
      <h3 className={classNames('text-3xl font-semibold text-center p-4', textColor)}>{post.frontmatter?.title}</h3>
    </LocalizedLink>
  );
};

export default BlogPreviewHome;

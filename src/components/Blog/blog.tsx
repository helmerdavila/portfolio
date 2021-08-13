import React, { useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../Layout';
import { IBlogPageQuery, IBlogPost } from '../../interfaces';
import LocalizedLink from '../../components/LocalizedLink';

const BlogPreview = (props: { data: IBlogPageQuery }): JSX.Element => {
  const context = useContext(ThemeContext);
  const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };
  const posts = props.data?.allMdx?.edges;

  return posts.length ? (
    <section
      className={classNames('py-10', { 'bg-white': context.isLightTheme, 'bg-gray-800': !context.isLightTheme })}
    >
      <div className="container mx-auto">
        <h2 className={classNames('text-5xl font-semibold text-center mb-4', textColor)}>Blog</h2>
        <div className="flex flex-col sm:flex-row">
          {posts?.map((post) => (
            <PostCard key={post.node.parent.relativeDirectory} post={post.node} />
          ))}
        </div>
      </div>
    </section>
  ) : null;
};

const PostCard = ({ post }: { post: IBlogPost }): JSX.Element => {
  const context = useContext(ThemeContext);
  const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };

  return (
    <LocalizedLink
      className={classNames('flex-1 m-5 shadow-xl rounded-lg bg-gray-200', {
        'bg-gray-200': context.isLightTheme,
        'bg-gray-700': !context.isLightTheme,
      })}
      to={`/blog/${post.parent.relativeDirectory}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative mb-3 bg-black rounded-lg pb-2/3">
        <img
          className="absolute object-cover w-full h-full rounded-t-lg"
          src={post.frontmatter?.imageCover ?? 'https://assets.taskalia.com/blog/macbook.jpg'}
          alt={post.frontmatter?.imageAlt ?? 'Photo by Nikolay Tarashchenko on Unsplash'}
        />
      </div>
      <h3 className={classNames('text-4xl font-semibold text-center p-4', textColor)}>{post.frontmatter?.title}</h3>
    </LocalizedLink>
  );
};

export default BlogPreview;


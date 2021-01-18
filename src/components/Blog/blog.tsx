import React, { useContext } from 'react';
import { ProfileContext } from '../../pages';
import classNames from 'classnames';
import { graphql, useStaticQuery } from 'gatsby';

const Blog = (): JSX.Element => {
  const context = useContext(ProfileContext);
  const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };
  const data = useStaticQuery(graphql`
    query {
      allWpPost(sort: { fields: [date] }) {
        nodes {
          id
          uri
          title
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `);

  return (
    <section
      className={classNames('py-10', { 'bg-white': context.isLightTheme, 'bg-gray-800': !context.isLightTheme })}
    >
      <div className="container mx-auto">
        <h2 className={classNames('text-5xl font-semibold text-center mb-4', textColor)}>Blog</h2>
        <div className="flex flex-col sm:flex-row">
          {data?.allWpPost.nodes.map((node: any) => (
            <PostCard key={node.id} node={node} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

const PostCard = (props: { node: any }) => {
  const context = useContext(ProfileContext);
  const textColor = { 'text-white': !context.isLightTheme, 'text-black': context.isLightTheme };

  return (
    <a
      className={classNames('flex-1 m-5 shadow-xl rounded-lg bg-gray-200', {
        'bg-gray-200': context.isLightTheme,
        'bg-gray-700': !context.isLightTheme,
      })}
      href={`https://blog.helmerdavila.com${props.node.uri}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative bg-black pb-2/3 mb-3 rounded-lg">
        <img
          className="absolute h-full w-full object-cover rounded-t-lg"
          alt={props.node.featuredImage.node.altText}
          src={props.node.featuredImage.node.sourceUrl}
        />
      </div>
      <h3 className={classNames('text-4xl font-semibold text-center p-4', textColor)}>{props.node.title}</h3>
    </a>
  );
};

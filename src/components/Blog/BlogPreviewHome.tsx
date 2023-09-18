import React, { ReactElement } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import useTranslations from '../UseTranslations';
import LocalizedLink from '../LocalizedLink';

const BlogPreviewHome = ({ data }: { data: Queries.IndexPreviewPostsQuery }): ReactElement => {
  const posts = data.allMdx.nodes;
  const { see_full_post_list } = useTranslations();

  return posts.length ? (
    <section className="py-10 bg-white dark:bg-gray-800">
      <div className="container mx-auto 2xl:max-w-7xl">
        <h2 className="text-5xl font-semibold text-center mb-4 text-black dark:text-white">Blog</h2>
        <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4">
          {posts?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <LocalizedLink
          to="/blog"
          className="block rounded-full px-5 py-3 mt-7 mx-auto max-w-md text-center bg-black text-white dark:bg-gray-900 dark:text-white"
        >
          <span className="font-semibold">{see_full_post_list}</span>
        </LocalizedLink>
      </div>
    </section>
  ) : null;
};

export const PostCard = ({ post }: { post: Queries.IndexPreviewPostsQuery['allMdx']['nodes'][0] }): ReactElement => {
  const imageAlt = post.frontmatter.imageAlt ?? 'Blog';
  const image = getImage(post.frontmatter.image.childImageSharp.gatsbyImageData);

  return (
    <Link
      className="shadow-xl rounded-lg bg-gray-200 dark:bg-gray-700"
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
      <h3 className="text-3xl font-semibold text-center p-4 text-black dark:text-white">{post.frontmatter.title}</h3>
    </Link>
  );
};

export default BlogPreviewHome;

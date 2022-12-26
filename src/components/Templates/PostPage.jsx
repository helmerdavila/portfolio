import React, { useContext } from 'react';
import LayoutBlog from '../LayoutBlog';
import { graphql, Link } from 'gatsby';
import { ThemeContext } from '../Layout';
import classNames from 'classnames';
import { MDXProvider } from '@mdx-js/react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import useTranslations from '../UseTranslations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@helmerdavila/fontawesomehelmer/pro-duotone-svg-icons';
import { components, HeadForMeta } from '../Mdx/Custom';
import { v4 as uuidv4 } from 'uuid';
import { localizeUrl } from '../LocalizedLink';
import { PostCard } from '../Blog/BlogPreviewHome';

// Don't change the Head name here. Used by Gatsby
export const Head = (props) => <HeadForMeta {...props} />;

const Tags = ({ tags, locale, cssBackground, cssText, isLightMode = true }) => {
  const cssTags = classNames('mr-4 text-xl font-quicksand p-2 rounded-xl cursor-pointer', cssText, {
    'bg-zinc-100 hover:bg-zinc-200': isLightMode,
    'bg-gray-700 hover:bg-gray-600': !isLightMode,
  });

  return tags.length ? (
    <div className={classNames(cssBackground, 'my-7 py-7 px-12 container max-w-3xl  mx-auto xl:max-w-6xl')}>
      <h2 className={classNames(cssText, 'text-4xl font-bold')}>Tags</h2>
      <div className="flex flex-wrap mt-4">
        {tags.map((tag) => (
          <Link to={localizeUrl(`/tags/${tag}`, locale)} key={uuidv4()} className={cssTags}>
            #{tag}
          </Link>
        ))}
      </div>
    </div>
  ) : null;
};

const Author = ({ cssBackground, cssText, author, writtenBy }) => (
  <div className={classNames(cssBackground, 'my-7 py-7 px-12 container max-w-3xl  mx-auto xl:max-w-6xl')}>
    <h2 className={classNames(cssText, 'text-4xl font-bold')}>{author}</h2>
    <div className="flex justify-between mt-6">
      <span className={classNames(cssText, 'text-xl font-quicksand')}>{writtenBy} Helmer Davila</span>
      <div className={classNames(cssText, 'text-xl')}>
        <a href="https://www.helmerdavila.com" className="mr-2">
          <FontAwesomeIcon icon={faGlobe} />
        </a>
        <a href="https://www.linkedin.com/in/helmerdavila" className="mr-2">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.github.com/helmerdavila">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  </div>
);

/**
 * @param {Queries.LayoutBlogPageQuery.multilanguagePosts.nodes} posts
 * @param {string} currentLocale
 * @param {object} cssText
 * @param {object} cssBackground
 * */
const PostInOtherLanguages = ({ posts, currentLocale, cssText, cssBackground }) => {
  const { in_other_languages } = useTranslations();

  return posts ? (
    <div className={classNames(cssBackground, 'my-7 py-7 px-12 container max-w-3xl  mx-auto xl:max-w-6xl')}>
      <h2 className={classNames(cssText, 'text-4xl font-bold')}>{in_other_languages}</h2>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {posts
          .filter((post) => post.fields.locale !== currentLocale)
          .map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
      </div>
    </div>
  ) : null;
};

/** @param {import("gatsby").PageProps<Queries.LayoutBlogPageQuery>} props */
const PostPage = (props) => {
  const context = useContext(ThemeContext);
  const { data, children } = props;
  const { author, edit_posts_on_github, written_by } = useTranslations();
  const pageBackground = {
    'bg-white shadow-sm': context.isLightTheme,
    'bg-gray-800 border-gray-800': !context.isLightTheme,
  };
  const { mdx, multilanguagePosts } = data;
  const textStyle = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  const imageAlt = mdx.frontmatter?.imageAlt ?? 'Photo by Unsplash';
  const imageSource =
    mdx.frontmatter.image?.childImageSharp?.gatsbyImageData ??
    data.defaultBlogPostImage?.childImageSharp?.gatsbyImageData;
  const imageRendered = getImage(imageSource);
  const pathFileForGithub = mdx.fields.isDefault
    ? `${mdx.fields.directory}/index.mdx`
    : `${mdx.fields.directory}/index.${mdx.fields.locale}.mdx`;
  const tags = mdx.frontmatter.tags ?? [];
  const locale = mdx.fields.locale;

  return (
    <LayoutBlog>
      <div className="container max-w-3xl py-5 mx-auto xl:max-w-6xl">
        <div className={classNames(pageBackground, 'border-2')}>
          <GatsbyImage image={imageRendered} alt={imageAlt} data-testid="post-image" />
          <div className="p-12 blog-page">
            <MDXProvider components={components}>{children}</MDXProvider>
            <div className="flex justify-end mt-32">
              <a
                href={`https://github.com/helmerdavila/portfolio/edit/main/blog/${pathFileForGithub}`}
                target="_blank"
                className={classNames(textStyle, 'font-bold hover:underline text-right')}
                rel="noreferrer"
              >
                {edit_posts_on_github}
              </a>
            </div>
          </div>
        </div>
        <Tags
          tags={tags}
          locale={locale}
          isLightMode={context.isLightTheme}
          cssBackground={pageBackground}
          cssText={textStyle}
        />
        <PostInOtherLanguages
          posts={multilanguagePosts.nodes}
          currentLocale={locale}
          cssText={textStyle}
          cssBackground={pageBackground}
        />
        <Author author={author} writtenBy={written_by} cssBackground={pageBackground} cssText={textStyle} />
      </div>
    </LayoutBlog>
  );
};

export default PostPage;

export const query = graphql`
  query LayoutBlogPage($id: String!, $directory: String!) {
    mdx(id: { eq: $id }) {
      fields {
        directory
        locale
        isDefault
        translatedPostUrl
      }
      frontmatter {
        imageAlt
        title
        description
        date
        tags
        image {
          ...ImageForBlogPage
        }
      }
    }
    multilanguagePosts: allMdx(filter: { fields: { directory: { eq: $directory } } }) {
      ...ContentOnIndexPosts
    }
    site {
      siteMetadata {
        siteUrl
        author
      }
    }
    defaultBlogPostImage: file(relativePath: { eq: "macbook-homepost.jpg" }) {
      ...ImageForBlogPage
    }
  }

  fragment ImageForBlogPage on File {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 1.7)
    }
  }
`;

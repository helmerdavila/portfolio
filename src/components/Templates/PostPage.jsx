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

// Don't change the Head name here. Used by Gatsby
export const Head = (props) => <HeadForMeta {...props} />;

const Tags = ({ tags, locale, pageBackground, textStyle }) => {
  return tags.length ? (
    <div className={classNames(pageBackground, 'my-7 py-7 px-12 container max-w-3xl  mx-auto xl:max-w-6xl')}>
      <h2 className={classNames(textStyle, 'text-4xl font-bold')}>Tags</h2>
      <div className="flex flex-wrap mt-4">
        {tags.map((tag) => (
          <Link
            to={`/tags/${locale}/${tag}`}
            key={uuidv4()}
            className={classNames(
              'mr-4 text-xl font-quicksand p-2 bg-zinc-100 hover:bg-zinc-200 rounded-xl cursor-pointer',
              textStyle,
            )}
          >
            #{tag}
          </Link>
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
  const { mdx } = data;
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
        <Tags tags={tags} locale={locale} pageBackground={pageBackground} textStyle={textStyle} />
        <div className={classNames(pageBackground, 'my-7 py-7 px-12 container max-w-3xl  mx-auto xl:max-w-6xl')}>
          <h2 className={classNames(textStyle, 'text-4xl font-bold')}>{author}</h2>
          <div className="flex justify-between mt-6">
            <span className={classNames(textStyle, 'text-xl')}>{written_by} Helmer Davila</span>
            <div className={classNames(textStyle, 'text-xl')}>
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
      </div>
    </LayoutBlog>
  );
};

export default PostPage;

export const query = graphql`
  query LayoutBlogPage($id: String!) {
    mdx(id: { eq: $id }) {
      fields {
        filename
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
      excerpt(pruneLength: 100)
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

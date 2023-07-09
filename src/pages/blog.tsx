import classNames from 'classnames';
import { graphql, Link, PageProps, navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useContext, useState, ChangeEvent, KeyboardEvent } from 'react';
import { LocaleContext, ThemeContext } from '../components/Layout';
import LayoutBlog from '../components/LayoutBlog';
import SEO from '../components/Seo';
import { v4 as uuidv4 } from 'uuid';
import localesJson from '../../config/i18n';
import { ILocalJson } from '../interfaces';

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

export const BlogPostCard = ({ post }: { post: BlogPost }) => {
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

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      navigate(`/search?query=${searchText}`);
    }
  };

  return (
    <section className="w-full mt-9">
      <input
        type="text"
        placeholder="Type and press enter..."
        className="w-full py-5 px-4 text-2xl"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        value={searchText}
      />
    </section>
  );
};

const Blog = ({ data }: PageProps<Queries.BlogQuery>): JSX.Element => {
  const context = useContext(ThemeContext);
  const { locale } = useContext(LocaleContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  const posts = data?.allMdx?.nodes;
  const localeJson: ILocalJson = localesJson[locale];

  return (
    <LayoutBlog>
      <SEO
        title="Helmer Blog"
        keywords={['fullstack', 'developer', 'react', 'vue', 'angular', 'react native']}
        description="My technical blog"
      />
      <div className="container max-w-3xl pb-3 mx-auto xl:max-w-6xl">
        <div className="flex flex-wrap items-center justify-between mt-10">
          <h1 className={classNames('text-6xl font-bold', themeStyles)}>Blog</h1>
          <span className="text-6xl">{localeJson.flag}</span>
        </div>
        <SearchBar />
        {posts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </LayoutBlog>
  );
};

export const query = graphql`
  query Blog($locale: String!) {
    allMdx(filter: { fields: { locale: { eq: $locale } } }, sort: { frontmatter: { date: DESC } }) {
      ...BlogPostCardInfo
    }
  }

  fragment BlogPostCardInfo on MdxConnection {
    nodes {
      id
      fields {
        translatedPostUrl
      }
      frontmatter {
        title
        imageAlt
        description
        tags
        image {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export default Blog;

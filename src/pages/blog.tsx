import { graphql, Link, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { ChangeEvent, KeyboardEvent, ReactElement, useContext, useState } from 'react';
import { LocaleContext } from '../components/Layout';
import LayoutBlog from '../components/LayoutBlog';
import SEO from '../components/Seo';
import { v4 as uuidv4 } from 'uuid';
import localesJson from '../../config/i18n';
import { ILocalJson } from '../interfaces';
import useTranslations from '../components/UseTranslations';

type BlogPost = Queries.BlogQuery['allMdx']['nodes'][0];

const BlogPostCardTags = ({ tags }: { tags: readonly string[] }) => {
  return tags.length ? (
    <div className="flex flex-wrap px-6 py-3">
      {tags.map((tag) => (
        <span key={uuidv4()} className="mr-2 text-lg text-zinc-500 dark:text-zinc-400">
          #{tag}
        </span>
      ))}
    </div>
  ) : (
    <div className="mb-6"></div>
  );
};

export const BlogPostCard = ({ post }: { post: BlogPost }) => {
  const tags = post.frontmatter.tags ?? [];
  const imageRendered = getImage(post.frontmatter.image?.childImageSharp.gatsbyImageData);

  return (
    <Link
      to={post.fields.translatedPostUrl}
      className="block mt-10 rounded-md first:mt-3 bg-white border-2 shadow-sm dark:bg-gray-800 dark:border-gray-900"
      key={post.id}
    >
      <GatsbyImage image={imageRendered} alt={post?.frontmatter?.imageAlt ?? ''} />
      <div className="px-6 pt-6">
        <h2 className="text-4xl font-bold text-black dark:text-white">{post?.frontmatter?.title}</h2>
        <h5 className="mt-5 text-2xl text-black dark:text-white">{post?.frontmatter?.description}</h5>
      </div>
      <BlogPostCardTags tags={tags} />
    </Link>
  );
};

const SearchBar = (props: { searchQuery: string; setSearchQuery: (value: string) => void }) => {
  const { type_and_press_enter } = useTranslations();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => props.setSearchQuery(event.target.value);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      props.setSearchQuery(props.searchQuery);
    }
  };

  return (
    <section className="w-full mt-9">
      <input
        type="text"
        placeholder={type_and_press_enter}
        className="w-full py-5 px-4 text-2xl bg-white border-2 rounded-md shadow-sm dark:bg-gray-800 dark:border-gray-900 caret-blue-200 dark:text-white"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        value={props.searchQuery}
      />
    </section>
  );
};

const Blog = ({ data }: PageProps<Queries.BlogQuery>): ReactElement => {
  const { locale } = useContext(LocaleContext);
  const posts = data?.allMdx?.nodes;
  const localeJson: ILocalJson = localesJson[locale];
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleSearchQuery = (searchText: string) => {
    setSearchQuery(searchText);
    if (searchText !== '') {
      const postsFiltered = posts.filter((post) => {
        const { title, description, tags } = post.frontmatter;
        const query = searchText.toLowerCase();

        return (
          title.toLowerCase().includes(query) ||
          description.toLowerCase().includes(query) ||
          tags?.some((tag) => tag.toLowerCase().includes(query))
        );
      });

      return setFilteredPosts(postsFiltered);
    }

    return setFilteredPosts([]);
  };

  return (
    <LayoutBlog>
      <SEO
        title="Helmer Blog"
        keywords={['fullstack', 'developer', 'react', 'vue', 'angular', 'react native']}
        description="My technical blog"
      />
      <div className="container max-w-3xl pb-3 mx-auto xl:max-w-6xl">
        <div className="flex flex-wrap items-center justify-between mt-10">
          <h1 className="text-6xl font-bold text-black dark:text-white">Blog</h1>
          <span className="text-6xl">{localeJson.flag}</span>
        </div>
        <SearchBar searchQuery={searchQuery} setSearchQuery={handleSearchQuery} />
        {filteredPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
        {filteredPosts.length === 0 ? posts.map((post) => <BlogPostCard key={post.id} post={post} />) : null}
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

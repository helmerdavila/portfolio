import classNames from 'classnames';
import { graphql, PageProps } from 'gatsby';
import React, { useContext } from 'react';
import { ThemeContext } from '../Layout';
import LayoutBlog from '../LayoutBlog';
import SEO from '../Seo';
import { BlogPostCard } from '../../pages/blog';

const PostsByTagAndLocale = ({ data, pageContext }: PageProps<Queries.BlogByTagAndLocaleQuery>): JSX.Element => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  const posts = data.allMdx.nodes.map((post) => <BlogPostCard key={post.id} post={post} />);
  const tag = pageContext['tag'];
  const locale = pageContext['locale'];
  const tagsForSeo = pageContext['tagsForSeo'];

  return (
    <LayoutBlog>
      <SEO title={`Tag: ${tag} ${locale}`} keywords={tagsForSeo} description="All blog posts by tag" />
      <div className="container max-w-3xl pb-3 mx-auto xl:max-w-6xl">
        <h1 className={classNames('text-6xl font-bold mt-10', themeStyles)}>
          Tag: {tag} ({data.allMdx.totalCount} posts)
        </h1>
        {posts}
      </div>
    </LayoutBlog>
  );
};

export const query = graphql`
  query BlogByTagAndLocale($tag: String!, $locale: String!) {
    allMdx(
      filter: { fields: { locale: { eq: $locale } }, frontmatter: { tags: { in: [$tag] } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      ...BlogPostCardInfo
    }
  }
`;

export default PostsByTagAndLocale;

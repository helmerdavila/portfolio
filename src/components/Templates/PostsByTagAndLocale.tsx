import classNames from 'classnames';
import { graphql, PageProps } from 'gatsby';
import React, { ReactElement, useContext } from 'react';
import { ThemeContext } from '../Layout';
import SEO from '../Seo';
import { BlogPostCard } from '../../pages/blog';
import HeaderBlog from '../Layouts/HeaderBlog';
import { localizeUrl } from '../LocalizedLink';
import localesJson from '../../../config/i18n';
import { ILocalJson } from '../../interfaces';

const PostsByTagAndLocale = ({ data, pageContext }: PageProps<Queries.BlogByTagAndLocaleQuery>): ReactElement => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  const posts = data.allMdx.nodes.map((post) => <BlogPostCard key={post.id} post={post} />);
  const tag = pageContext['tag'];
  const locale = pageContext['locale'];
  const localeJson: ILocalJson = localesJson[locale];
  const tagsForSeo = pageContext['tagsForSeo'];
  const pageBackground = { 'bg-gray-200': context.isLightTheme, 'bg-gray-900': !context.isLightTheme };
  const urlForIcon = localizeUrl(`/tags/${tag}`, locale);

  return (
    <>
      <SEO title={`Tag: ${tag} ${localeJson.flag}`} keywords={tagsForSeo} description="All blog posts by tag" />
      <HeaderBlog iconLink={urlForIcon} />
      <div className={classNames(pageBackground, 'pt-20 h-full min-h-screen')}>
        <div className="container max-w-3xl pb-3 mx-auto xl:max-w-6xl">
          <div className="flex flex-wrap items-center justify-between mt-10">
            <h1 className={classNames('text-6xl font-bold', themeStyles)}>
              Tag: {tag} ({data.allMdx.totalCount} posts)
            </h1>
            <span className="text-6xl">{localeJson.flag}</span>
          </div>
          {posts}
        </div>
      </div>
    </>
  );
};

export const query = graphql`
  query BlogByTagAndLocale($tag: String!, $locale: String!) {
    allMdx(
      filter: { fields: { locale: { eq: $locale } }, frontmatter: { tags: { in: [$tag] } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      totalCount
      ...BlogPostCardInfo
    }
  }
`;

export default PostsByTagAndLocale;

import React, { ReactNode, useContext } from 'react';
import { PageProps } from 'gatsby';
import { ThemeContext } from '../Layout';
import classNames from 'classnames';
import Code from './Code';
import { getImage } from 'gatsby-plugin-image';
import { Components } from '@mdx-js/react/lib';

interface Props {
  [key: string]: unknown;
  children: ReactNode;
}

export const MyH1 = (props: Props) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };

  return (
    <h1 className={classNames(themeStyles, 'mb-6 text-5xl font-bold leading-normal')} {...props}>
      {props.children}
    </h1>
  );
};
export const MyH2 = (props: Props) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };

  return (
    <h2 className={classNames(themeStyles, 'mt-7 mb-5 text-4xl font-bold')} {...props}>
      {props.children}
    </h2>
  );
};
export const MyH3 = (props: Props) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };

  return (
    <h3 className={classNames(themeStyles, 'mt-3 mb-2 text-3xl font-bold')} {...props}>
      {props.children}
    </h3>
  );
};
export const MyList = (props) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };

  return <ul className={classNames(themeStyles, 'list-disc pl-6 block my-5 text-xl')} {...props} />;
};
export const MyListItem = (props) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };

  return <li className={classNames(themeStyles, 'py-2 text-xl')} {...props} />;
};
export const MyParagraph = (props) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };

  return <div className={classNames(themeStyles, 'paragraph my-6 text-xl')} {...props} />;
};
export const MyBlockquote = (props) => {
  const context = useContext(ThemeContext);

  return (
    <blockquote
      className={classNames(
        { 'text-black border-black': context.isLightTheme, 'text-white border-white': !context.isLightTheme },
        'border-b-4 border-t-4 text-center py-4 my-8',
      )}
      {...props}
    />
  );
};
export const MyInlineCode = (props) => {
  const context = useContext(ThemeContext);
  const themeStyles = {
    'text-blue-600 bg-gray-100': context.isLightTheme,
    'text-gray-300 bg-blue-800': !context.isLightTheme,
  };

  return <span className={classNames(themeStyles, 'rounded text-base px-1 font-mono')} {...props} />;
};
export const MyPre = (props) => <Code {...props.children.props} />;
export const MyImage = (props: Record<string, unknown>) => <img className="shadow-lg rounded py-3" alt="" {...props} />;

export const MyPostLink = (props) => (
  <a className={classNames('underline underline-offset-4')} {...props} target="_blank" />
);

export const components: Components = {
  h1: MyH1,
  h2: MyH2,
  h3: MyH3,
  ul: MyList,
  li: MyListItem,
  p: MyParagraph,
  blockquote: MyBlockquote,
  pre: MyPre,
  code: MyInlineCode,
  image: MyImage,
  figure: MyImage,
  a: MyPostLink,
};

// Don't change the Head name here. Used by Gatsby
export const HeadForMeta = ({ data }: DeepPartial<PageProps<Queries.LayoutBlogPageQuery>>): JSX.Element => {
  const imageRendered = getImage(data.mdx.frontmatter.image.childImageSharp.gatsbyImageData);
  const imageAsSrc = imageRendered?.images?.fallback?.src ?? '/randomPathForTesting';
  const imageUrl = `${data.site.siteMetadata.siteUrl}${imageAsSrc}`;
  const title = data.mdx?.frontmatter?.title ?? 'Demo title';
  const description = data.mdx?.frontmatter?.description ?? '';

  return (
    <>
      <title>{title}</title>
      <meta name="author" content={data.site.siteMetadata.author} />
      <meta name="description" content={description} />
      <meta name="publish_date" property="og:publish_date" content={data.mdx?.frontmatter?.date ?? ''} />
      <meta name="title" property="og:title" content={title} />
      <meta name="image" property="og:image" content={imageUrl} />
      <meta property="og:type" content="article" />
      <meta name="og:description" content={description} />
      <meta name="og:locale" content={data.mdx?.fields?.locale ?? 'en'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:description" content={description} />
      {/* {data.mdx.fields.isDefault ? (
        <link rel="canonical" href={data.site.siteMetadata.siteUrl} />
      ) : (
        <link rel="alternate" href={data.site.siteMetadata.siteUrl} />
      )} */}
    </>
  );
};

import React, { useContext } from 'react';
import { MDXProvider } from '@mdx-js/react';
import './src/styles/index.css';
import CustomLayout from './wrapPageElement';
import Code from './src/components/Mdx/Code';
import { ThemeContext } from './src/components/Layout';
import classNames from 'classnames';

// TODO: Move all this to another file and export it in gatsby-ssr and gatsby-frontend
// TODO: Add thumbnail preview for links (like Twitter)
const MyH1 = (props) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  return <h1 className={classNames(themeStyles, 'mb-6 text-5xl font-bold')} {...props} />;
};
const MyH2 = (props) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  return <h2 className={classNames(themeStyles, 'mt-3 mb-2 text-4xl font-bold')} {...props} />;
};
const MyH3 = (props) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  return <h3 className={classNames(themeStyles, 'mt-3 mb-2 text-3xl font-bold')} {...props} />;
};
const MyParagraph = (props) => {
  const context = useContext(ThemeContext);
  const themeStyles = { 'text-black': context.isLightTheme, 'text-white': !context.isLightTheme };
  return <p className={classNames(themeStyles, 'my-6 text-xl')} {...props} />;
};
const MyBlockquote = (props) => {
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
const MyInlineCode = (props) => {
  const context = useContext(ThemeContext);
  const themeStyles = {
    'text-blue-700 bg-gray-200': context.isLightTheme,
    'text-gray-400 bg-blue-900': !context.isLightTheme,
  };
  return <code className={classNames(themeStyles, 'rounded text-base px-2')} {...props} />;
};
const MyCode = (props) => <Code {...props} />;

const components = {
  h1: MyH1,
  h2: MyH2,
  h3: MyH3,
  p: MyParagraph,
  blockquote: MyBlockquote,
  inlineCode: MyInlineCode,
  code: MyCode,
};

export const wrapRootElement = ({ element }) => <MDXProvider components={components}>{element}</MDXProvider>;

export const wrapPageElement = CustomLayout;


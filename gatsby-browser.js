import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import './src/styles/index.css';
import CustomLayout from './wrapPageElement';

// // TODO: Move all this to another file and export it in gatsby-ssr and gatsby-frontend
const MyH1 = (props) => <h1 className="mb-6 text-5xl font-bold" {...props} />;
const MyH2 = (props) => <h2 className="mt-3 mb-2 text-4xl font-bold" {...props} />;
const MyH3 = (props) => <h3 className="mt-3 mb-2 text-3xl font-bold" {...props} />;
const MyParagraph = (props) => <p className="my-6 text-xl" {...props} />;
const MyBlockquote = (props) => (
  <blockquote className="text-black border-b-4 border-t-4 border-black text-center py-4 my-8" {...props} />
);

const components = {
  h1: MyH1,
  h2: MyH2,
  h3: MyH3,
  p: MyParagraph,
  blockquote: MyBlockquote,
};

export const wrapRootElement = ({ element }) => <MDXProvider components={components}>{element}</MDXProvider>;

export const wrapPageElement = CustomLayout;

// import React from 'react';
// import { MDXProvider } from '@mdx-js/react';
import './src/styles/index.css';
import CustomLayout from './wrapPageElement';
//
// // TODO: Move all this to another file and export it in gatsby-ssr and gatsby-frontend
// const MyH1 = (props) => <h1 className="mb-6 text-5xl font-bold" {...props} />;
// const MyH2 = (props) => <h2 className="mt-3 mb-2 text-4xl font-bold" {...props} />;
// const MyParagraph = (props) => <p className="mb-2" {...props} />;
//
// const components = {
//   h1: MyH1,
//   h2: MyH2,
//   p: MyParagraph,
// };
//
// export const wrapRootElement = ({ element }) => <MDXProvider components={components}>{element}</MDXProvider>;

export const wrapPageElement = CustomLayout;

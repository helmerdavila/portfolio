import React from 'react';
import './src/styles/index.css';
import { Layout } from './src/components/Layout';

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;

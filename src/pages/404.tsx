import React, { ReactElement } from 'react';
import SEO from '../components/Seo';

const NotFoundPage = (): ReactElement => (
  <>
    <SEO title="404: Not found" description="Page not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
);

export default NotFoundPage;

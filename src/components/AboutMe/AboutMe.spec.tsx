// import { render } from '@testing-library/react';
// import { useStaticQuery } from 'gatsby';
// import React from 'react';
// import { Layout } from '../Layout';
// import AboutMe from './AboutMe';
// import en from '../../../config/translations/en.json';

// beforeEach(() => {
//   (useStaticQuery as jest.Mock).mockResolvedValue(() => ({
//     rawData: { edges: [{ item: { node: { name: 'sample', translations: en } } }] },
//   }));
// });

// it('renders without problems', () => {
//   render(
//     <Layout pageContext={{ locale: 'en' }}>
//       <AboutMe />
//     </Layout>,
//   );

//   expect(true).toBe(true);
// });

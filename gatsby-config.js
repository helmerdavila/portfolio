module.exports = {
  siteMetadata: {
    title: `Helmer Dávila`,
    description: `Web and Web Developer.`,
    author: `@helmerdavila`,
    siteUrl: `https://www.helmerdavila.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `translations`,
        path: `${__dirname}/config/translations`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/favicon-192.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md', '.markdown'],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-129069726-1',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Quicksand\:500,700`],
        display: `swap`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.helmerdavila.com',
        sitemap: 'https://www.helmerdavila.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};

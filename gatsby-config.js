module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '000',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: './src/content/',
      },
      __key: 'content',
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
        custom: {
          families: ['Sentinel'],
          urls: ['/fonts/sentinel/sentinel.css'],
        },
      },
    },
  ],
};

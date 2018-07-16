module.exports = {
  siteMetadata: {
    title: 'Taurus Logistics',
    author: 'Dimitri',
  },
  pathPrefix: '/taurus-gatsby',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `photos`,
        path: `${__dirname}/src/assets/photos`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `headers`,
        path: `${__dirname}/src/assets/headers`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
  ],
}

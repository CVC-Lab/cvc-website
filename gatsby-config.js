module.exports = {
  siteMetadata: {
    title: `Computational Visualization Center`,
    menuLinks:[
      {
        name:'PROJECTS',
        link:'/'
      },
      {
        name:'PEOPLE',
        link:'/page-2'
      },
      {
        name:'NEWS',
        link:'/'
      },
      {
        name:'CONTACT',
        link:'/page-2'
      }
    ],
    description: `a cross-disciplinary effort to develop and improve the technologies for computational modeling, simulation, analysis, and visualization.`,
    author: `cvc`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f8971f`,
        theme_color: `#f8971f`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

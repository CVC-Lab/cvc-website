module.exports = {
  siteMetadata: {
    title: `Computational Visualization Center`,
    projectTiles:[
      {
        name:'dedrecon',
        link:'/projects/dedrecon'
      },
      {
        name:'camera_isp',
        link:'/projects/dedrecon'
      },
      {
        name:'angstrom',
        link:'/projects/dedrecon'
      },
      {
        name:'spectre',
        link:'/projects/dedrecon'
      }
    ],
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
        link:'/news'
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/projects`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

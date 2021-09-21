module.exports = {
  siteMetadata: {
    title: `Computational Visualization Center`,
    peopleCards:[
      {
        name:'Chandrajit Bajaj',
        image:'chandrajit.png'
      },
      {
        name:'Laura Lansing',
        image:'laura.png'
      },
      {
        name:'Ahmed Abdelkader',
        image:'ahmed.png'
      },
      {
        name:'Yi Wang',
        image:'yi.png'
      },
      {
        name:'Ryan Farell',
        image:'ryan.png'
      },
      {
        name:'Yunhao Yang',
        image:'yunhao.png'
      },
      {
        name:'Chase Tessmer',
        image:'chase.png'
      },
      {
        name:'Taemin Heo',
        image:'taemin.png'
      },

      {
        name:'Nathan Clement',
        image:'nathan.png'
      },
      {
        name:'Jan-Christopher Cohrs',
        image:'jan.png'
      },
      {
        name:'Thomas Ghorbanian',
        image:'thomas.png'
      },
      {
        name:'Minh Nguyen',
        image:'placeholder.png'
      },
      {
        name:'Sumit Sinha',
        image:'placeholder.png'
      },
      {
        name:'Suprawit Chockchowwat',
        image:'placeholder.png'
      },
      {
        name:'Rochan Avlur',
        image:'rochan.png'
      },
      {
        name:'Sean Zanyk McLean',
        image:'sean.png'
      },
      {
        name:'Yorick Sanders',
        image:'yorick.png'
      },
      {
        name:'Conrad Li',
        image:'conrad.png'
      },
      {
        name:'Benjamin Beal',
        image:'ben.png'
      },
      {
        name:'Nikhil Ajjarapu',
        image:'nikhil.png'
      },
      {
        name:'Edward Zhou',
        image:'placeholder.png'
      },
      {
        name:'Binglin Zhang',
        image:'bingling.png'
      },
      {
        name:'Abrar Anwar',
        image:'abrar.png'
      },
      {
        name:'Jeffery Mo',
        image:'placeholder.png'
      },
      {
        name:'Yash Totlani',
        image:'placeholder.png'
      },
      {
        name:'Arman Maesumi',
        image:'placeholder.png'
      },
      {
        name:'Sebastian Rutherford',
        image:'placeholder.png'
      },
      {
        name:'Harrison White',
        image:'placeholder.png'
      },
      {
        name:'Viraj Joshi',
        image:'placeholder.png'
      }
    ],
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
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
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

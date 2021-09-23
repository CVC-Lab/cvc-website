module.exports = {
  siteMetadata: {
    title: `Computational Visualization Center`,
    peopleCards:[
      {
        name:'Chandrajit Bajaj',
        image:'chandrajit.png',
        position: 'Director, Principle Investigator'
      },
      {
        name:'Laura Lansing',
        image:'laura.png',
        position: 'Administrative Associate'
      },
      {
        name:'Ahmed Abdelkader',
        image:'ahmed.png',
        position: 'Postdoctoral Researcher'
      },
      {
        name:'Yi Wang',
        image:'yi.png',
        position: 'Graduate Student'
      },
      {
        name:'Ryan Farell',
        image:'ryan.png',
        position: 'Graduate Student'
      },
      {
        name:'Yunhao Yang',
        image:'yunhao.png',
        position: 'Graduate Student'
      },
      {
        name:'Chase Tessmer',
        image:'chase.png',
        position: 'Graduate Student'
      },
      {
        name:'Taemin Heo',
        image:'taemin.png',
        position: 'Graduate Student'
      },

      {
        name:'Nathan Clement',
        image:'nathan.png',
        position: 'Graduate Student'
      },
      {
        name:'Jan-Christopher Cohrs',
        image:'jan.png',
        position: 'Graduate Student'
      },
      {
        name:'Thomas Ghorbanian',
        image:'thomas.png',
        position: 'Graduate Student'
      },
      {
        name:'Minh Nguyen',
        image:'placeholder.png',
        position: 'Graduate Student'
      },
      {
        name:'Sumit Sinha',
        image:'placeholder.png',
        position: 'Graduate Student'
      },
      {
        name:'Suprawit Chockchowwat',
        image:'placeholder.png',
        position: 'Graduate Student'
      },
      {
        name:'Rochan Avlur',
        image:'rochan.png',
        position: 'Graduate Student'
      },
      {
        name:'Sean Zanyk McLean',
        image:'sean.png',
        position: 'Graduate Student'
      },
      {
        name:'Yorick Sanders',
        image:'yorick.png',
        position: 'Graduate Student'
      },
      {
        name:'Conrad Li',
        image:'conrad.png',
        position: 'Undergraduate Student'
      },
      {
        name:'Benjamin Beal',
        image:'ben.png',
        position: 'Undergraduate Student'
      },
      {
        name:'Nikhil Ajjarapu',
        image:'nikhil.png',
        position: 'Undergraduate Student'
      },
      {
        name:'Edward Zhou',
        image:'placeholder.png',
        position: 'Undergraduate Student'
      },
      {
        name:'Binglin Zhang',
        image:'bingling.png',
        position: 'Undergraduate Student'
      },
      {
        name:'Abrar Anwar',
        image:'abrar.png',
        position: 'Undergraduate Student'
      },
      {
        name:'Jeffery Mo',
        image:'placeholder.png',
        position: 'Undergraduate Student'
      },
      {
        name:'Yash Totlani',
        image:'placeholder.png',
        position: 'Undergraduate Student'
      },
      {
        name:'Arman Maesumi',
        image:'placeholder.png',
        position: 'Undergraduate Student'
      },
      {
        name:'Sebastian Rutherford',
        image:'placeholder.png',
        position: 'Undergraduate Student'
      },
      {
        name:'Harrison White',
        image:'placeholder.png',
        position: 'Undergraduate Student'
      },
      {
        name:'Viraj Joshi',
        image:'placeholder.png',
        position: 'Undergraduate Student'
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
        link:'projects'
      },
      {
        name:'PEOPLE',
        link:'people'
      },
      {
        name:'NEWS',
        link:'/news'
      },
      {
        name:'ABOUT US',
        link:'about'
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

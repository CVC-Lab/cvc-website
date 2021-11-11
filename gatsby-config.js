module.exports = {
  pathPrefix: '/cvc-website',
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
    newsTiles:[
      {
        name:'Fall 2021 Seminar Series #1',
        description: 'Multivariate Gaussian Processes and Noisy Regression',
        img_name:'dedrecon',
        link:'/seminars/fall2021/seminar1'
      },
      {
        name:'Fall 2021 Seminar Series #2',
        description: 'Probabilistic Inference for Fast Learning in Optimal Control',
        img_name:'dedrecon',
        link:'/seminars/fall2021/seminar2'
      },
    ],
    projectTiles:[
      {
        name:'DEDRECON',
        description: 'Advanced machine learning applied to real-life image visual perception under multi-modality fusion techniques',
        img_name:'project_tiles/afc_logo',
        link:'/projects/dedrecon'
      },
      {
        name: 'Camera ISP',
        description: "Structured deep learning models that solves the heterogeneous image artifact filtering problem",
        img_name:'project_tiles/isp_crop',
        link:'/projects/camera-isp'
      },
      {
        name: 'Angstrom',
        description: 'Multi-resolution geometric data structures and computational mathematics algorithms',
        img_name:'project_tiles/angstrom',
        link:'/projects/angstrom'
      },
      {
        name: 'Spectre',
        description: 'Smart data structures and prediction optimization with provable guarantees for spectral and geometric processing',
        img_name:'project_tiles/spectre_logo',
        link:'/projects/spectre'
      },
      {
        name:'Generative Material Design',
        description: 'Semi-supervised variational inference for generative materials design',
        img_name:'project_tiles/generative_material_logo',
        link:'/projects/generative-material-design'
      },
      {
        name: 'Shape Optimization',
        description: 'Inverse generative modeling for stealth and cloaking devices using meta-materials',
        img_name:'project_tiles/shape_logo',
        link:'/projects/shape-optimization'
      },
      {
        name: 'Rank-ordered Search-and-Score',
        description: 'Multi-Agent Reinforcement Learning for sample efficient Rank-ordered Search-and-Score of giga-pixel images',
        img_name:'project_tiles/search_n_score',
        link:'/projects/search-n-score'
      },
      {
        name: 'Adversarial Cloaking',
        description: 'Patch-based adversarial attack pipeline for training adversarial patches on 3D human meshes',
        img_name:'project_tiles/adversarial_cloaking_crop',
        link:'/projects/adversarial-cloaking'
      },
      {
        name: 'Physics-informed Neural Networks',
        description: 'Robust physics-informed neural networks for solving partial differential equations by capturing the physics induced constraints',
        img_name:'project_tiles/robust_pinns',
        link:'/projects/robust-pinns'
      }
    ],
    menuLinks:[
      {
        name:'PROJECTS',
        link:'projects',
        scroll_link: true
      },
      {
        name:'PEOPLE',
        link:'people',
        scroll_link: true
      },
      {
        name:'PUBLICATIONS',
        link:'/publications',
        scroll_link: false
      },
      {
        name:'NEWS',
        link:'/news',
        scroll_link: false
      },
      {
        name:'ABOUT US',
        link:'about',
        scroll_link: true
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
        name: `Computational Visualization Center at the University of Texas at Austin`,
        short_name: `CVC`,
        start_url: `/`,
        background_color: `#f8971f`,
        theme_color: `#f8971f`,
        display: `minimal-ui`,
        icon: `src/favicons/favicon.png`,
        icons: [
          {
            src: `/favicons/favicon-16x16.png`,
            sizes: `16x16`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              path: `${__dirname}/src/images/projects/`,
            }
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`
            }
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: videoId =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
            }
          }
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

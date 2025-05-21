const path = require("path")

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.less$/,
          use: [
            // You don't need to add the matching ExtractText plugin
            // because gatsby already includes it and makes sure it's only
            // run at the appropriate stages, e.g. not in development
            loaders.miniCssExtract(),
            loaders.css({ importLoaders: 1 }),
            // the postcss loader comes with some nice defaults
            // including autoprefixer for our configured browsers
            loaders.postcss(),
            `less-loader`,
          ],
        },
        {
          test: /\.csv$/,
          loader: "csv-loader",
          options: {
            dynamicTyping: true,
            header: true,
            skipEmptyLines: true,
          },
        },
      ],
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
      }),
    ],
  })
}

// Create optimized image nodes for project tiles
exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    SiteSiteMetadataProjectTiles: {
      image: {
        type: "File",
        resolve: (source) => {
          const imgPath = path.resolve(
            __dirname,
            `src/images/${source.img_name}.png`
          )
          return {
            absolutePath: imgPath,
          }
        },
      },
    },
    SiteSiteMetadataPeopleCards: {
      imageFile: {
        type: "File",
        resolve: (source) => {
          const imgName = source.image || "placeholder.png"
          const imgPath = path.resolve(
            __dirname,
            `src/images/people/${imgName}`
          )
          return {
            absolutePath: imgPath,
          }
        },
      },
    },
  })
}

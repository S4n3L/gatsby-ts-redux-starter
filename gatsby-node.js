const path = require("path") // eslint-disable-line
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")  // eslint-disable-line

exports.onCreateWebpackConfig = (
  { actions, loaders, stage },
  { cssLoaderOptions = {}, postCssPlugins, ...sassOptions },
) => {
  const isSSR = stage.includes("html")

  const configScssLoader = [
    {
      loader: "@teamsupercell/typings-for-css-modules-loader",
      options: {
        banner:
          "// autogenerated by typings-for-css-modules-loader. \n// Please do not change this file!"
      }
    },
    loaders.css({ ...cssLoaderOptions, modules: true }),
    loaders.postcss({ plugins: postCssPlugins }),
    {
      loader: require.resolve("sass-loader"),
      options: {
        // sourceMap: !isProd,
        //...sassOptions,
      },
    },
    {
      loader: "sass-resources-loader",
      options: {
        resources: [
          path.resolve(__dirname, "./src/styles/_base.scss"),
          path.resolve(__dirname, "./src/styles/_mediaQueryManager.scss"),
          path.resolve(__dirname, "./src/styles/_typography.scss"),
          path.resolve(__dirname, "./src/styles/_variables.scss"),
          path.resolve(__dirname, "./src/styles/customFonts.css"),
        ],
      },
    },
  ]

  if (!isSSR) configScssLoader.unshift(loaders.miniCssExtract())

  actions.setWebpackConfig({
    resolve: {
      // This is what we use to manage module paths (instead of the node-modules package)
      plugins: [new TsconfigPathsPlugin()]
    },
    module: {
      rules: [
        {
          test: /\.s(a|c)ss$/,
          use: configScssLoader,
        },
      ],
    },
  })
}

module.exports = {
  siteMetadata: {
    title: "Gatsby - Redux, Scss and typescript custom starter",
    description: "",
    author: "@s4n3l",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "image",
        path: `${__dirname}/src/static/image`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "svg",
        path: `${__dirname}/src/static/svg`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "video",
        path: `${__dirname}/src/static/video`
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["BrignellSquare"],
          urls: [`${__dirname}/src/static/fonts/loadCustomFonts.css`],
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-redux-ts-starter",
        short_name: "Gatsby-RTSS",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
      }
    },
    {
      resolve: "gatsby-plugin-react-redux",
      options: {
        // [required] - path to your createStore module
        pathToCreateStoreModule: "./src/store/Root/createStore.ts",
        // [optional] - options passed to `serialize-javascript`
        // info: https://github.com/yahoo/serialize-javascript#options
        // will be merged with these defaults:
        serialize: {
          space: 0,
          isJSON: true,
          unsafe: false,
        },
        // [optional] - if true will clean up after itself on the client, default:
        cleanupOnClient: true,
        // [optional] - name of key on `window` where serialized state will be stored, default:
        windowKey: "__PRELOADED_STATE__",
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

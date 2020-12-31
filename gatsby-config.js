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
        name: "icon",
        path: `${__dirname}/src/static/icon`
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
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     name: "gatsby-redux-ts-starter",
    //     short_name: "Gatsby-RTSS",
    //     start_url: "/",
    //     background_color: "#663399",
    //     theme_color: "#663399",
    //     display: "minimal-ui",
    //     icon: ""
    //   }
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

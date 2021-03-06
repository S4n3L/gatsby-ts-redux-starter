# About the Gatsby Environment

## Base path and Typescript absolute path import with @ tags

The absolute path import managed by `tsconfig.json` file "paths" section. To make this work a package `tsconfig-paths-webpack-plugin` also added. As for the custom webpack configuration details see the `gatsby-node.js` config file.

## Redux and redux thunk

On the server side Redux handled by the `wrapRootElement` and `onRenderBody` hooks on the `gatsby-ssr.js` file. Here we pass the initial state in a global window object. The client side in the `gatsby-browser.js` file uses the `wrapRootElement` hook, to inject the store into the provider.

## SCSS modules and automated type generation for scss types

Here we use a custom webpack config placed in the `gatsby-node.js` file. Within that we use the following packages:

- sass-loader
- postcss-loader with autoprefixer
- css-loader
- @teamsupercell/typings-for-css-modules-loader

## Custom fonts

Custom fonts are also handled with the `gatsby-plugin-web-font-loader` package. The loader takes the `loadCustomFonts.css`file and reads it content. This file should contains `@font-face` directives referencing the font files in the `./src/static/fonts` folder.

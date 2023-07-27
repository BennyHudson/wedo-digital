/* eslint-disable @typescript-eslint/no-var-requires */
import type { GatsbyConfig } from 'gatsby'

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'wedo.digital',
    siteUrl: 'https://wedo.digital/',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@context': './src/context',
          '@helpers': './src/helpers',
          '@images': './src/images',
          '@mixins': './src/mixins',
          '@pages': './src/pages',
          '@sections': './src/sections',
          '@styles': './src/styles',
          '@themes': './src/themes',
          '@typings': './src/typings',
          '@utils': './src/utils',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Raleway\:ital,wght@0,100;0,200;0,300;0,600;1,200;1,300;1,600' // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ],
}

export default config

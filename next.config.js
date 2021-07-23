/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

// Use correct .env file for bundling. By default use .env.local
const dotEnvPath = [`./.env`, process.env.STAGE || 'local']
  .filter(Boolean)
  .join('.')
require('dotenv').config({ path: dotEnvPath })

const ImageminPlugin = require('imagemin-webpack-plugin').default
const composePlugins = require('next-compose-plugins')
const withImages = require('next-images')

module.exports = (phase, defaultConfig) =>
  composePlugins([[withImages]], {
    env: {
      STAGE: process.env.STAGE || 'development',
    },
    images: {
      disableStaticImages: true,
    },
    typescript: {
      ignoreDevErrors: true,
    },
    webpack(config, { dev }) {
      config.resolve.alias['~assets'] = path.resolve(__dirname, 'assets')

      config.plugins.push(
        new ImageminPlugin({
          disable: dev, // Disable during development
          test: /\.(jpe?g|png|gif|svg)$/i,
          jpegtran: {
            progressive: true,
          },
        }),
      )

      return config
    },
  })(phase, defaultConfig)

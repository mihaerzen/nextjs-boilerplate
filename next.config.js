/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

// Use correct .env file for bundling. By default use .env.local
const dotEnvPath = [`./.env`, process.env.STAGE || 'local']
  .filter(Boolean)
  .join('.')
require('dotenv').config({ path: dotEnvPath })

const ImageminPlugin = require('imagemin-webpack-plugin').default
const composePlugins = require('next-compose-plugins')
const images = require('next-images')

module.exports = (phase, defaultConfig) =>
  composePlugins([[images]], {
    env: {
      STAGE: process.env.STAGE || 'development',
    },
    typescript: {
      ignoreDevErrors: true,
    },
    webpack(config, { dev }) {
      config.resolve.alias['~assets'] = path.resolve('./assets')

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

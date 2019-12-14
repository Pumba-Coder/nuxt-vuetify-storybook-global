const path = require('path')
// const VueLoaderPlugin = require('vue-loader/lib/plugin')

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // config.plugins.push(new VueLoaderPlugin())

  config.module.rules.push({
    test: /\.sass$/,
    use: [
      'vue-style-loader',
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        // Requires sass-loader@^8.0.0
        options: {
          implementation: require('sass'),
          sassOptions: {
            fiber: require('fibers'),
            indentedSyntax: true // optional
            // data: '@import "@/assets/variables.scss"'
          }
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  })

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'vue-style-loader',
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        // Requires sass-loader@^8.0.0
        options: {
          implementation: require('sass'),
          sassOptions: {
            fiber: require('fibers'),
            indentedSyntax: true, // optional
            data: '@import "@/assets/variables.scss"'
          }
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  })

  config.module.rules.push({
    test: /\.vue$/,
    use: [
      'style-loader',
      {
        loader: 'sass-loader',
        // Requires sass-loader@^8.0.0
        options: {
          implementation: require('sass'),
          sassOptions: {
            fiber: require('fibers'),
            indentedSyntax: true // optional
          }
        }
      }
    ],

    include: path.resolve(__dirname, '../')
  })

  config.module.rules.push({
    test: /\.css$/,
    sideEffects: true,
    use: [
      'vue-style-loader',
      'style-loader',
      { loader: 'css-loader', options: { sourceMap: true } }
    ]
  })

  config.resolve.alias['@'] = path.dirname(path.resolve(__dirname))

  // Return the altered config
  return config
}

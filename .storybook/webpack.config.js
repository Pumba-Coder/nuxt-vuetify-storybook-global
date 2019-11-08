const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = async ({ config }) => {
  config.module.rules.push(
    {
      test: /\.s(c|a)ss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            sourceMap: true,
            resources: ['assets/variables.scss']
          }
        },
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
      ]
    },
    {
      test: /\.vue$/,
      loader: ['storybook-addon-vue-info/loader', 'vue-loader'],
      enforce: 'post'
    }
  )
  // config.module.resolve.push({
  //   alias: {
  //     '@': path.dirname(path.resolve(__dirname))
  //   },
  //   extensions: ['.vue', '.css', '.less', '.scss', '.sass', '.html']
  // })

  config.module.plugins.push([
    // make sure to include the plugin!
    new VueLoaderPlugin()
  ])

  return config
}

// module.exports = async ({ config }) => {
//   config.module.rules.push(
//     {
//       test: /\.s(c|a)ss$/,
//       use: [
//         'vue-style-loader',
//         'css-loader',
//         {
//           loader: 'sass-resources-loader',
//           options: {
//             sourceMap: true,
//             resources: ['assets/variables.scss']
//           }
//         },
//         {
//           loader: 'sass-loader',
//           // Requires sass-loader@^8.0.0
//           options: {
//             implementation: require('sass'),
//             sassOptions: {
//               fiber: require('fibers'),
//               indentedSyntax: true // optional
//             }
//           }
//         }
//       ]
//     },
//     {
//       test: /\.vue$/,
//       loader: ['storybook-addon-vue-info/loader', 'vue-loader'],
//       enforce: 'post'
//     }
//   )
//   // config.module.resolve.push({
//   //   alias: {
//   //     '@': path.dirname(path.resolve(__dirname))
//   //   },
//   //   extensions: ['.vue', '.css', '.less', '.scss', '.sass', '.html']
//   // })

//   // config.module.plugins.push([
//   //   // make sure to include the plugin!
//   //   new VueLoaderPlugin()
//   // ])

//   return config
// }

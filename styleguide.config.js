const webpack = require('webpack')

module.exports = {
  require: ['babel-polyfill'],
  components: 'src/**/components/**/[A-Z]*.js',
  ignore: ['src/styled-components/components/Styled/*.js'],
  webpackConfig: {
    resolve: {
      // auto resolves any react-native import as react-native-web
      alias: { 'react-native': 'react-native-web' },
      extensions: ['.web.js', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            plugins: ['react-native-web'],
            presets: ['react-native'],
            babelrc: false,
          },
        },
        {
          test: /\.(jpe?g|png|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                hash: 'sha512',
                digest: 'hex',
                name: '[hash].[ext]',
              },
            },
          ],
        },
        {
          test: /\.ttf$/,
          loader: 'file-loader',
        },
      ],
    },
    // Most react native projects will need some extra plugin configuration.
    plugins: [
      // Add __DEV__ flag to browser example.
      new webpack.DefinePlugin({
        __DEV__: process.env,
      }),
    ],
  }
}

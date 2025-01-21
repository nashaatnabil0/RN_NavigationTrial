const path = require('path');

module.exports = {
  entry: './index.web.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  resolve: {
    extensions: ['.web.js', '.js', '.json', '.jsx', '.ts', '.tsx'],
    alias: {
      'react-native$': 'react-native-web',
      'react-native-safe-area-context':
        'react-native-safe-area-context/src/SafeAreaContextWeb',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules\/(?!(react-native)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-flow',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-flow-strip-types',
            ],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

// const path = require('path');

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx|mjs)$/, // Match JavaScript files
//         exclude: /node_modules\/(?!(react-native)\/).*/, // Transpile react-native code
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: [
//               '@babel/preset-env',
//               '@babel/preset-react',
//               '@babel/preset-flow', // Add Flow support
//             ],
//             plugins: [
//               '@babel/plugin-proposal-class-properties',
//               '@babel/plugin-transform-flow-strip-types',
//             ],
//           },
//         },
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.web.js', '.js', '.json', '.jsx', '.ts', '.tsx'],
//   },

// };

// // module.exports = {
// //   entry: './index.web.js',
// //   output: {
// //     path: path.resolve(__dirname, 'dist'),
// //     filename: 'bundle.js',
// //   },
// //   module: {
// //     rules: [
// //       {
// //         test: /\.(js|tsx)$/,
// //         exclude: /node_modules/,
// //         use: {
// //           loader: 'babel-loader',
// //           options: {
// //             presets: ['@babel/preset-env', '@babel/preset-react'],
// //           },
// //         },
// //       },
// //     ],
// //   },
// //   resolve: {
// //     alias: {
// //       'react-native$': 'react-native-web',
// //     },
// //     extensions: ['.web.js', '.js','.tsx'],
// //   },
// //   devServer: {
// //     static: './',
// //     port: 8088,
// //   },
// // };

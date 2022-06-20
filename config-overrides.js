const path = require('path');
const rewireTypingsForCssModule = require('react-app-rewire-typings-for-css-module');
const addLessLoader = require('customize-cra-less-loader');

module.exports = function override(config) {
  config.module.rules.push({
    test: /\.m?js$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [['@babel/preset-env', { targets: 'defaults' }]],
      },
    },
  });

  config = rewireTypingsForCssModule.factory({})(config);
  config = addLessLoader({
    lessLoaderOptions: { lessOptions: { javascriptEnabled: true } },
  })(config);

  return config;
};

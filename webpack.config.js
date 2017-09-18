module.exports = function (webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  // webpackConfig.babel.plugins.push(['import', {
  //   // libraryName: 'semantic-ui-react',
  //   // style: 'css',
  // }]);
  webpackConfig.module.loaders.push({
    test: /\.scss/,
    loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded',
  });
  return webpackConfig;
};

const sass = require('@stencil/sass');

exports.config = {
  namespace: 'fast-morph',
  generateDistribution: true,
  serviceWorker: false,
  plugins: [
    sass()
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}

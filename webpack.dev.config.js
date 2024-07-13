const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    historyApiFallback: {
      index: '/index.html',
    },
  },
};

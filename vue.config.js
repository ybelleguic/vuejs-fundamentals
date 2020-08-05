module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
    proxy: {
      '^/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        ws: false,
      },
    },
  },
  configureWebpack: {
    devtool: 'source-map',
  },
};

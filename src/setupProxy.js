const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/lux', { 
    target: 'https://apim.restful.5lux.com.cn',
    changeOrigin: true,
    pathRewrite: {
      '^/lux': ''
    }
  }));
};
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(proxy('/lux', {
    target: 'https://apim.restful.5lux.com.cn',
    changeOrigin: true,
    pathRewrite: {
      '^/lux': ''
    }
  }));
  app.use(proxy('/promote', {
    target: 'http://m.5lux.com',
    changeOrigin: true,
  }));
  app.use(proxy('/rpcsearchnew', {
    target: 'http://t1.restful.5lux.com.cn',
    changeOrigin: true,
  }));
};

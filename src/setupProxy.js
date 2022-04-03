const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      // target: "https://cloudflare-demo.mengchao10271254.workers.dev",
      target: "http://localhost:8787",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};

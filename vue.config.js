const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "./",
  // configureWebpack: {
  //   plugins: [new BundleAnalyzerPlugin()],
  // },
};

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// if (typeof window === 'undefined' && typeof global === 'object') {
//   global.window = {};
//   global.document = {};
// }

const bishengConfig = {
  port: 8002,
  source: {
    components: './components',
    docs: './docs',
  },
  output: './_site',
  theme: './_theme',
  htmlTemplate: './_theme/static/template.html',
  themeConfig: {
    home: '/',
    sitename: 'One',
    tagline: 'The one theme for bisheng',
    // navigation: [{
    //   title: 'BiSheng',
    //   link: 'https://github.com/benjycui/bisheng',
    // }],
    // footer: 'Copyright and so on...',
    // hideBisheng: true,
    github: 'https://github.com/benjycui/bisheng',
  },
  webpackConfig(config) {
    // config.output.publicPath = '/component-factory/'
    config.module.rules[11].test = function (filePath) {
      return (/\.less$/.test(filePath) && !/\.module\.less$/.test(filePath) && !/_theme\/.+\.less/.test(filePath));
    }
    config.module.rules.push({
      test: function (filePath) {
        return (/\.less$/.test(filePath) && !/\.module\.less$/.test(filePath) && /_theme\/.+\.less/.test(filePath));
      },
      use: [
        {
          loader: require.resolve('style-loader'),
        },
        {
          loader: require.resolve('css-loader'),
          options: {
            importLoaders: 1,
            modules: true,
            localIdentName: "[name]__[local]___[hash:base64:5]",
          },
        },
        {
          loader: require.resolve('less-loader'),
        },
      ],
    });
    // // 添加hash处理
    // const htmlWebpackPlugin = new HtmlWebpackPlugin({
    //   template: './_theme/static/template.html',
    //   hash: true,
    //   // inject: false,
    //   minify: {
    //     collapseBooleanAttributes: true,
    //   },
    // });
    // config.plugins.push(htmlWebpackPlugin);
    return config;
  }
};


if (process.env.NODE_ENV) {
  bishengConfig.htmlTemplateExtraData = {
    root: '/component-factory/'
  };
  bishengConfig.root = '/component-factory/';
} else {
  // bishengConfig.htmlTemplateExtraData = {
  //   root: '/'
  // }
}

module.exports = bishengConfig;
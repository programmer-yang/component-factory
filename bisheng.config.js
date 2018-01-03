const { resolve } = require('path');

module.exports = {
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
    return config;
  },
};
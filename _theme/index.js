const path = require('path')

module.exports = {
  // lazyLoad: true,
  lazyLoad(nodePath, nodeValue) {
    if (typeof nodeValue === 'string') {
      return true
    }
    return nodePath.endsWith('/demo')
  },
  pick: {
    posts(markdownData) {
      const { filename } = markdownData.meta
      if (filename.indexOf('components') > -1) {
        return {
          meta: markdownData.meta,
          // description: markdownData.description,
        }
      }
      return null
    },
  },
  plugins: [
    // path.join(__dirname, '..', 'node_modules', 'bisheng-plugin-description'),
    // 'bisheng-plugin-antd',
    // path.join(__dirname, '..', 'node_modules', 'bisheng-plugin-react?lang=jsx'),
    path.join(__dirname, '..', 'packages', 'bisheng-plugin-react?lang=jsx'),
  ],
  routes: [{
    path: '/',
    component: './template/comm/Layout',
    indexRoute: { component: './template/home/Home' },
    childRoutes: [
      {
        path: '/components/:type',
        dataPath: '/:type',
        component: './template/component/Component',
      },
      {
        path: '/docs/:type',
        dataPath: '/:type',
        component: './template/component/Component',
      },
    ],
  }],
}

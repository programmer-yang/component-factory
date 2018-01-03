import React from 'react'
import collect from 'bisheng/collect'
import 'github-markdown-css/github-markdown.css'
import './markdown.css'
import Menu from './Menu'
import Content from './Content'

import styles from './Component.less'

const Component = (props) => {
  console.log(props)
  const { utils, pageData, picked } = props
  // console.log(props)
  // pageData.content.forEach(item => typeof item === 'function' && console.log(item()))
  return (
    <div className={styles.root}>
      <Menu menuData={picked.posts} />
      <div className={styles.content}>
        <div className="markdown-body">
          <h1>
            {utils.toReactComponent(pageData.meta.title)}
          </h1>
          <Content {...props} />
        </div>
      </div>
    </div>
  )
}

// export default Component
export default collect(async (nextProps) => {
  const { location, utils, data } = nextProps
  const mdPath = location.pathname.split('/')
  // console.log(data, mdPath)
  const pageDatas = utils.get(data, mdPath)
  if (!pageDatas) {
    throw new Error('404')
  }
  if (mdPath.find(item => item === 'components')) {
    const pageDataPromise = pageDatas.index()
    return { pageData: await pageDataPromise }
  } else {
    const pageDataPromise = pageDatas()
    const resData = { pageData: await pageDataPromise }
    console.log(resData)
    return { pageData: await pageDataPromise }
  }
})(Component)

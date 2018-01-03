import React from 'react'

import Demo from './Demo'

import styles from './Content.less'

const Content = ({ utils, pageData }) => {
  const markdownHTML = []
  // 直接从1开始，避开`article`节点，如果有影响到正常解析，需改写为从0开始，手动匹配避开`article`
  for (let i = 1; i < Object.keys(pageData.content).length; i += 1) {
    const curNode = pageData.content[i] // 获取demo
    const infoNode = []
    if (typeof curNode === 'function') {
      const nextNode = pageData.content[i + 1] // 获取code
      i += 2
      while (Array.isArray(pageData.content[i]) && !pageData.content[i].find(item => item === 'hr')) {
        infoNode.push(pageData.content[i])
        i += 1
      }
      markdownHTML.push((
        <Demo
          key={`${i}_demo`}
          {...{
            utils,
            curNode,
            infoNode,
            nextNode,
          }}
        />
      ))
    } else {
      markdownHTML.push(utils.toReactComponent(curNode))
    }
  }
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {markdownHTML}
      </div>
    </div>
  )
}

export default Content

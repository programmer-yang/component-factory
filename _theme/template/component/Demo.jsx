import React, { Component } from 'react'
import cn from 'classnames'
import styles from './Demo.less'

class Demo extends Component {
  state = {
    hasShowCode: false,
  }
  handleShowCode = () => {
    this.setState({ hasShowCode: !this.state.hasShowCode })
  }
  render() {
    const {
      utils, curNode, infoNode, nextNode,
    } = this.props
    const { hasShowCode } = this.state
    return (
      <div className={styles.root}>
        <div className={styles.demo}>
          {utils.toReactComponent(curNode)}
        </div>
        <div className={styles.info}>
          {infoNode.map(item => utils.toReactComponent(item))
          }
          <div className={styles.action} onClick={this.handleShowCode} aria-hidden>
            {hasShowCode ? (
              <img src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg" alt="" />
            ) : (
              <img src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg" alt="" />
            )}
          </div>
        </div>
        <div className={cn(styles.code, { [styles.show]: hasShowCode })}>
          {utils.toReactComponent(nextNode)}
        </div>
      </div>
    )
  }
}

export default Demo

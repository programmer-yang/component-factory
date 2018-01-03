import React from 'react'
import { Link } from 'bisheng/router'
import cn from 'classnames'
import styles from './Layout.less'

const hasActive = (pathname, actives = []) => actives.some(item => pathname.indexOf(item) > -1)

const Layout = (props) => {
  const { location } = props
  const { pathname } = location
  return (
    <div className={cn(styles.root, { [styles.home]: pathname === '/' })}>
      <header className={styles.topMenu}>
        <a className={styles.logo} href="/">
          <img src="http://via.placeholder.com/40x40" alt="" />
        </a>
        <div className={styles.menuContent}>
          <div className={styles.menus}>
            <Link className={styles.menu} to="/">首页</Link>
            <Link
              to="/docs/index"
              className={cn(styles.menu, { [styles.active]: hasActive(pathname, ['docs', 'components']) })}
            >组件
            </Link>
            <a className={styles.menu} href="/">关于</a>
          </div>
          <ul className={styles.more}>
            <li className={styles.item}>V1.0</li>
            <li className={styles.item}>Git</li>
          </ul>
        </div>
      </header>
      <div className={styles.content}>
        {props.children}
      </div>
      <div className={styles.bottom}>
        emmmmm...
      </div>
    </div>
  )
}

export default Layout

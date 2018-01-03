import React from 'react'
import { Link } from 'bisheng/router'

import styles from './Menu.less'

const Menu = ({ menuData }) => {
  return (
    <div className={styles.root}>
      <ul>
        <li>
          <Link to="/docs/index" className={styles.mainMenu} activeClassName={styles.active}>前言</Link>
        </li>
        <li>
          <Link to="/docs/begin" className={styles.mainMenu} activeClassName={styles.active}>使用</Link>
        </li>
        <li>
          <span className={styles.mainMenu}>组件</span>
          <ol>
            {menuData.sort((x, y) => x.meta.order > y.meta.order).map(({ meta }) => {
              return (
                <li key={meta.title}>
                  <Link
                    to={`/components/${meta.title.toLowerCase()}`}
                    className={styles.componentMenu}
                    activeClassName={styles.active}
                  >
                    {meta.title}
                  </Link>
                </li>
              )
            })}
          </ol>
        </li>
      </ul>
    </div>
  )
}

export default Menu

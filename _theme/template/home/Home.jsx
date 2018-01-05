import React from 'react'
import '../../static'

import styles from './Home.less'

// import b from './back'

class Home extends React.Component {
  componentDidMount() {
    // b(this.DOMCanvas)
    this.handleTitleColor()
  }
  handleTitleColor = () => {
    const h1 = document.querySelector(`.${styles.root} h1`)
    setInterval(() => {
      h1.style.color = `#${(~~(Math.random() * (1 << 24))).toString(16)}`
    }, 3000)
  }
  render() {
    return (
      <div className={styles.root}>
        <h1>COMPONENT 1.0</h1>
        {/* <div className="container">
          <canvas ref={(e) => { this.DOMCanvas = e }} />
        </div> */}
        <iframe src="./back.html" frameBorder="0" title="back" />
      </div>
    )
  }
}

export default Home

import React, { Component } from 'react'
import ducker from '../images/ducker.jpg'

class Home extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>DUCKER</h1>
        <img src={ducker} alt="ducker-logo" style={{ width: 200 }} />
      </div>
    )
  }
}

export default Home

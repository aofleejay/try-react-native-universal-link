import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route component={() => <p>Route not found!!!</p>} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes

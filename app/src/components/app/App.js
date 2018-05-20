import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {LANDING_URL, LAUNCH_URL, PRODUCTS_URL} from '../../constants/appUrls'
import LandingContainer from '../home/landing/LandingContainer'
import './App.css'
let products = require('./../../assets/toolkit/data/products.json')

export class App extends Component {
  render () {
    return (
      <Router>
        <div className='app-style'>
          <Route exact path={LAUNCH_URL} component={LandingContainer} />
          <Route exact path={LANDING_URL} component={LandingContainer} />
          <Route exact path={PRODUCTS_URL} component={() => products} />
        </div>
      </Router>
    )
  }
}

export default App

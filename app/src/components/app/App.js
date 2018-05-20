import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {LANDING_URL, LAUNCH_URL} from '../../constants/appUrls'
import LandingContainer from '../home/landing/LandingContainer'
import './App.css'

export class App extends Component {
  render () {
    return (
      <Router>
        <div className='app-style'>
          <Route exact path={LAUNCH_URL} component={LandingContainer} />
          <Route exact path={LANDING_URL} component={LandingContainer} />
        </div>
      </Router>

    )
  }
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './containers/Home'
import Profile from './containers/Profile'
import Template from './containers/Template'

ReactDOM.render((
  <Router>
    <div>
        <Route path="/" component={Template} />
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
    </div>
  </Router>
),document.getElementById('root'))

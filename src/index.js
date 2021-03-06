import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Modal from './containers/Modal'
import Template from './containers/Template'

ReactDOM.render((
  <Router>
    <div>
        <Route exact path="/" component={Template} />
        <Route path="/profile" component={Modal} />
    </div>
  </Router>
),document.getElementById('root'))

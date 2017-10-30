import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './Header'
import Question from './Question'
//import Main from './Main'

injectTapEventPlugin()

class Template extends Component {
  render() {
    return (
      <div>
        <Header />
        <Question />
      </div>
    )
  }
}

export default Template

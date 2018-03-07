import React from 'react'
import PropTypes from 'prop-types'

class ThemeProvider extends React.Component {
  getChildContext() {
    return {
      theme: this.props.theme
    }
  }
  render() {
    return this.props.children
  }
}

ThemeProvider.childContextTypes = {
  theme: PropTypes.object
}

export default ThemeProvider

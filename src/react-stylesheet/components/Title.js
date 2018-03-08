import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { TEXT } from '../../variables'
import PropTypes from 'prop-types'

class Title extends React.Component {
  createStyles(custom) {
    const current = custom ? custom : {}
    return(StyleSheet.create({
      title: {
        color: 'lightsalmon',
        fontSize: TEXT.large,
        ...current,
      }
    }))
  }
  render() {
    const styles = this.createStyles(this.context.theme)
    return (<Text style={styles.title}>{this.props.children}</Text>)
  }
}

Title.contextTypes = {
  theme: PropTypes.object
}

export default Title

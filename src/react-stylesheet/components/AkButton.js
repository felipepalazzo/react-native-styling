import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS } from '../../variables'

class AkButton extends React.Component {
  getStyle(type) {
    let styles = {}
    if (type === 'primary') {
      styles.button = Object.assign({}, base, primary)
    } else {
      styles.button = Object.assign({}, base, secondary)
    }
    return StyleSheet.create(styles).button
  }
  render() {
    const { children, type, onPress } = this.props
    return(
      <TouchableOpacity onPress={onPress} style={this.getStyle(type)}>
        <Text>{children}</Text>
      </TouchableOpacity>
    )
  }
}

const base = {
  alignItems: 'center',
  paddingTop: 10,
  paddingBottom: 10,
  borderRadius: 3,
  width: 60,
}

const primary = {
  backgroundColor: COLORS.white,
}

const secondary = {
  backgroundColor: COLORS.blue,
}

export default AkButton

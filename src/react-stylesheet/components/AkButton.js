import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS } from '../../variables'

class AkButton extends React.Component {
  getStyle(type) {
    let styles = {}
    styles.button = {
      backgroundColor: type === 'primary' ? COLORS.white : COLORS.blue,
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 3,
      width: 60,
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

export default AkButton

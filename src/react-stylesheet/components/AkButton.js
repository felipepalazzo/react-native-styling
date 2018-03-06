import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS } from '../../variables'
import { button } from '../mixins'

const styles = StyleSheet.create({
  primary: {
    ...button,
    backgroundColor: COLORS.white,
    width: 60,
  },
  secondary: {
    ...button,
    backgroundColor: COLORS.blue,
    width: 60,
  },
})

const AkButton = props =>
  <TouchableOpacity
    onPress={props.onPress}
    style={[styles.button, props.primary ? styles.primary : styles.secondary]}>
    <Text>{props.children}</Text>
  </TouchableOpacity>

export default AkButton

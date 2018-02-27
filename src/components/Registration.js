import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors, sizes } from '../styles/variables'

class Registration extends React.Component {
  render() {
    const {
      firstName,
      lastName,
      email,
    } = this.props
    return (
      <View style={styles.card}>
        <Text>{firstName} {lastName}</Text>
        <Text>{email}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.snow,
    marginBottom: sizes.small,
    paddingTop: sizes.small,
    paddingRight: sizes.small,
    paddingBottom: sizes.small,
    paddingLeft: sizes.small,
    borderRadius: 3,
  },
})

export default Registration

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { COLORS, BOX, TEXT } from '../../variables'

class Registration extends React.Component {
  render() {
    const {
      firstName,
      lastName,
      email,
    } = this.props
    return (
      <View style={styles.card}>
        <View>
          <Text style={styles.name}>
            {firstName} {lastName}
          </Text>
        </View>
        <Text>{email}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.snow,
    marginBottom: BOX.small,
    paddingTop: BOX.small,
    paddingRight: BOX.small,
    paddingBottom: BOX.small,
    paddingLeft: BOX.small,
    borderRadius: 3,
  },
  name: {
    fontSize: TEXT.large,
  },
})

export default Registration

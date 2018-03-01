import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors, box, text } from '../../variables'

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
    backgroundColor: colors.snow,
    marginBottom: box.small,
    paddingTop: box.small,
    paddingRight: box.small,
    paddingBottom: box.small,
    paddingLeft: box.small,
    borderRadius: 3,
  },
  name: {
    fontSize: text.large,
  },
})

export default Registration

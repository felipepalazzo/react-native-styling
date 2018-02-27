import React from 'react'
import { StyleSheet, View } from 'react-native'
import RegistrationList from './src/components/RegistrationList'
import { colors, sizes } from './src/styles/variables'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RegistrationList />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    paddingLeft: sizes.small,
    paddingRight: sizes.small,
  },
})

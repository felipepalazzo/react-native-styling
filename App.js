import React from 'react'
import { View } from 'react-native'
import RegistrationList from './src/components/RegistrationList'
import Nav from './src/components/Nav'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Nav />
        <RegistrationList />
      </View>
    )
  }
}

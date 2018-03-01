import React from 'react'
import { View } from 'react-native'
import RegistrationList from './components/RegistrationList'
import Nav from './components/Nav'
import registers from '../data/registers.json'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Nav />
        <RegistrationList registers={registers} />
      </View>
    )
  }
}

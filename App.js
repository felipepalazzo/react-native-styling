import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'
import ReactStyleSheet from './src/react-stylesheet'
import StyledComponents from './src/styled-components'

const Home = () =>
  <View style={styles.content}>
    <Link to="/react-style-sheet">
      <Text style={styles.link}>StyleSheet</Text>
    </Link>
    <Link to="/styled-components">
      <Text style={styles.link}>styled-components</Text>
    </Link>
  </View>

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={Home} />
          <Route path="/react-style-sheet" component={ReactStyleSheet} />
          <Route path="/styled-components" component={StyledComponents} />
        </View>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  link: {
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    marginBottom: 15,
  },
})

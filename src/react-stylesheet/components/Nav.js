import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import Icon from 'react-native-vector-icons/Ionicons'
import AkButton from './AkButton'
import Title from './Title'
import ThemeProvider from './ThemeProvider'
import { COLORS, BOX, TEXT } from '../../variables'

class Nav extends React.Component {
  _onPress() {
    console.log('Pressed')
  }
  render() {
    const light = {
      color: COLORS.white,
    }
    return (
      <View style={styles.navigation}>
        <View>
          <Icon.Button
            name="ios-arrow-back"
            size={20}
            color={COLORS.white}
            iconStyle={{marginRight: 5}}
            backgroundColor='transparent'>
            <Link to="/">
              <Text style={styles.backBtn}>Events</Text>
            </Link>
          </Icon.Button>
        </View>
        <View>
          <ThemeProvider theme={light}>
            <Title>My Main Event</Title>
          </ThemeProvider>
        </View>
        <AkButton onPress={this._onPress} primary>Add</AkButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: BOX.large,
    paddingLeft: BOX.small,
    paddingRight: BOX.small,
    paddingBottom: BOX.small,
    backgroundColor: COLORS.blue,
  },
  backBtn: {
    fontSize: TEXT.medium,
    color: COLORS.white,
  },
})

export default Nav

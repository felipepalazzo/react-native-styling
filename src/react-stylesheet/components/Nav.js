import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS, BOX, TEXT } from '../../variables'

class Nav extends React.Component {
  _onPress() {
    console.log('Pressed')
  }
  render() {
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
          <Text style={styles.title}>My Main Event</Text>
        </View>
        <TouchableOpacity onPress={this._onPress} style={styles.button}>
          <Text>Add</Text>
        </TouchableOpacity>
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
  title: {
    color: COLORS.white,
    textAlign: TEXT.center,
    fontSize: TEXT.large,
  },
  button: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 3,
    width: 60,
    backgroundColor: COLORS.white,
  },
  backBtn: {
    fontSize: TEXT.medium,
    color: COLORS.white,
  },
})

export default Nav

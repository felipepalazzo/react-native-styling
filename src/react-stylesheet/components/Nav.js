import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import Icon from 'react-native-vector-icons/Ionicons'
import AkButton from './AkButton'
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
        <AkButton onPress={this._onPress} type="primary">Add</AkButton>
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
  backBtn: {
    fontSize: TEXT.medium,
    color: COLORS.white,
  },
})

export default Nav

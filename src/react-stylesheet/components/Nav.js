import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors, box, text } from '../../variables'

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
            color={colors.white}
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
        <View style={styles.buttonView}>
          <Button
            title="Add"
            color={colors.blue}
            onPress={this._onPress} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: box.large,
    paddingLeft: box.small,
    paddingRight: box.small,
    paddingBottom: box.small,
    backgroundColor: colors.blue,
  },
  title: {
    color: colors.white,
    textAlign: text.center,
    fontSize: text.large,
  },
  buttonView: {
    backgroundColor: colors.white,
    borderRadius: 3,
    width: 60,
  },
  backBtn: {
    fontSize: text.medium,
    color: colors.white,
  },
})

export default Nav

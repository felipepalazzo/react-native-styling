import React from 'react'
import { View } from 'react-native'
import { Link } from 'react-router-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS, TEXT } from '../../variables'

import { StyledButton, StyledText, StyledNav } from './Styled'

class Nav extends React.Component {
  _onPress() {
    console.log('Pressed')
  }
  render() {
    return(
      <StyledNav>
        <View>
          <Icon.Button
            name="ios-arrow-back"
            size={20}
            color={COLORS.white}
            iconStyle={{marginRight: 5}}
            backgroundColor='transparent'>
            <Link to="/">
              <StyledText
                color={COLORS.white}>
                Events
              </StyledText>
            </Link>
          </Icon.Button>
        </View>
        <View>
          <StyledText
            color={COLORS.white}
            size={TEXT.large}>
            My Main Event
          </StyledText>
        </View>
        <StyledButton primary onPress={this._onPress}>
          Add
        </StyledButton>
      </StyledNav>
    )
  }
}

export default Nav

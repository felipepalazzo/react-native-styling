import React from 'react'
import { View } from 'react-native'
import { Link } from 'react-router-native'
import { ThemeProvider } from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'
import { COLORS } from '../../variables'

import { StyledButton, StyledText, StyledNav, StyledTitle } from './Styled'

class Nav extends React.Component {
  _onPress() {
    console.log('Pressed')
  }
  render() {
    const theme = {
      main: COLORS.white,
    }
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
          <ThemeProvider theme={theme}>
            <StyledTitle>
              My Main Event
            </StyledTitle>
          </ThemeProvider>
        </View>
        <StyledButton primary onPress={this._onPress}>
          Add
        </StyledButton>
      </StyledNav>
    )
  }
}

export default Nav

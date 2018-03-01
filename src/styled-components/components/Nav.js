import React from 'react'
import { View } from 'react-native'
import { Link } from 'react-router-native'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors, box, text } from '../../variables'

import { StyledButton, StyledText } from './Styled'

const StyledView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.blue};
  padding: ${box.large}px ${box.small}px ${box.small}px ${box.small}px;
`

class Nav extends React.Component {
  _onPress() {
    console.log('Pressed')
  }
  render() {
    return(
      <StyledView>
        <View>
          <Icon.Button
            name="ios-arrow-back"
            size={20}
            color={colors.white}
            iconStyle={{marginRight: 5}}
            backgroundColor='transparent'>
            <Link to="/">
              <StyledText
                color={colors.white}
                size={text.large}>
                Events
              </StyledText>
            </Link>
          </Icon.Button>
        </View>
        <View>
          <StyledText
            color={colors.white}
            size={text.large}>
            My Main Event
          </StyledText>
        </View>
        <StyledButton primary onPress={this._onPress}>
          Add
        </StyledButton>
      </StyledView>
    )
  }
}

export default Nav

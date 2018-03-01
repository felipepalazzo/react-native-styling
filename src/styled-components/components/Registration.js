import React from 'react'
import { View, Text } from 'react-native'
import { TEXT } from '../../variables'
import { StyledCard, StyledText } from './Styled'

class Registration extends React.Component {
  render() {
    const {
      firstName,
      lastName,
      email,
    } = this.props
    return (
      <StyledCard>
        <View>
          <StyledText size={TEXT.large}>
            {firstName} {lastName}
          </StyledText>
        </View>
        <Text>{email}</Text>
      </StyledCard>
    )
  }
}

export default Registration

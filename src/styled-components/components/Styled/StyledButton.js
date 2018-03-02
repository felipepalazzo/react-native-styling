import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components'
import { COLORS } from '../../../variables'

const ButtonContainer = styled(TouchableOpacity)`
  background-color: ${props => props.primary ? COLORS.white : COLORS.blue};
  border-radius: 3px;
  width: 60px;
  padding-top: 10px;
  padding-bottom: 10px;
`

const Label = styled(Text)`
  text-align: center;
`

const StyledButton = props =>
  <ButtonContainer onPress={props.onPress} primary={props.primary}>
    <Label>{props.children}</Label>
  </ButtonContainer>

export default StyledButton

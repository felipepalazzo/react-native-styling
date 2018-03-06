import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components'
import { StyledDefaultButton } from './StyledDefaultButton'
import { COLORS } from '../../../variables'

const ButtonContainer = StyledDefaultButton.extend`
  background-color: ${props => props.primary ? COLORS.white : COLORS.blue};
  width: 60px;
`

const Label = styled(Text)`
  text-align: center;
`

const StyledButton = props =>
  <ButtonContainer onPress={props.onPress} primary={props.primary}>
    <Label>{props.children}</Label>
  </ButtonContainer>

export default StyledButton

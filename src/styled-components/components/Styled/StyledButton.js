import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../variables'

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => props.primary ? colors.white : colors.blue};
  border-radius: 3px;
  width: 60;
  padding: 10px 5px;
`

const Label = styled.Text`
  text-align: center;
`

const StyledButton = props =>
  <ButtonContainer onPress={props.onPress} primary={props.primary}>
    <Label>{props.children}</Label>
  </ButtonContainer>

export default StyledButton

import styled from 'styled-components'
import { Text } from 'react-native'
import { TEXT, COLORS } from '../../../variables'

const StyledText = styled(Text)`
  color: ${props => props.color || COLORS.black};
  font-size: ${props => props.size || TEXT.small};
`

export default StyledText

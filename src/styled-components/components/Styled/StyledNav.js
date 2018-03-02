import styled from 'styled-components'
import { View } from 'react-native'
import { COLORS, BOX } from '../../../variables'

const StyledNav = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.blue};
  padding: ${BOX.large}px ${BOX.small}px ${BOX.small}px;
`

export default StyledNav

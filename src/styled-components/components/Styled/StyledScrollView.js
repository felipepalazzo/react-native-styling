import styled from 'styled-components'
import { ScrollView } from 'react-native'
import { BOX, COLORS } from '../../../variables'

const StyledScrollView = styled(ScrollView)`
  background-color: ${COLORS.black};
  padding-left: ${BOX.small};
  padding-right: ${BOX.small};
  padding-top: ${BOX.medium};
`

export default StyledScrollView

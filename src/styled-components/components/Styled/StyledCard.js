import styled from 'styled-components'
import { View } from 'react-native'
import { COLORS, BOX } from '../../../variables'

const StyledCard = styled(View)`
  background-color: ${COLORS.snow};
  margin-bottom: ${BOX.small};
  padding-top: ${BOX.small};
  padding-right: ${BOX.small};
  padding-bottom: ${BOX.small};
  padding-left: ${BOX.small};
  border-radius: 3;
`

export default StyledCard

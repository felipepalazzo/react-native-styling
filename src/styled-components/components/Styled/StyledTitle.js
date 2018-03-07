import styled from 'styled-components'
import { Text } from 'react-native'
import { TEXT, COLORS } from '../../../variables'

const StyledTitle = styled(Text)`
  color: ${props => props.theme.main};
  font-size: ${TEXT.large};
`

StyledTitle.defaultProps = {
  theme: {
    main: 'lightsalmon',
  }
}

export default StyledTitle

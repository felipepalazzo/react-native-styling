import React from 'react'
import Registration from './Registration'
import { StyledScrollView } from './Styled'

class RegistrationList extends React.Component {
  render() {
    const { registers } = this.props
    return(
      <StyledScrollView>
        {registers.map(register => (
          <Registration
            key={register.id}
            firstName={register.first_name}
            lastName={register.last_name}
            email={register.email}
          />
        ))}
      </StyledScrollView>
    )
  }
}

export default RegistrationList

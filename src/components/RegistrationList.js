import React from 'react'
import { ScrollView } from 'react-native'
import Registration from './Registration'
import registers from '../data/registers.json'

class RegistrationList extends React.Component {
  render() {
    return(
      <ScrollView>
        {registers.map(register => (
          <Registration
            key={register.id}
            firstName={register.first_name}
            lastName={register.last_name}
            email={register.email}
          />
        ))}
      </ScrollView>
    )
  }
}

export default RegistrationList

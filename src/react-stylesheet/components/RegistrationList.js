import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { COLORS, BOX } from '../../variables'
import Registration from './Registration'

class RegistrationList extends React.Component {
  render() {
    return(
      <ScrollView style={styles.container}>
        {this.props.registers.map(register => (
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.black,
    paddingLeft: BOX.small,
    paddingRight: BOX.small,
    paddingTop: BOX.medium,
  },
})

export default RegistrationList

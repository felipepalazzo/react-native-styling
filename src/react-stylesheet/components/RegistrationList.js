import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { colors, box } from '../../variables'
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
    backgroundColor: colors.black,
    paddingLeft: box.small,
    paddingRight: box.small,
    paddingTop: box.medium,
  },
})

export default RegistrationList

/* globals it, expect, describe */
import React from 'react'
import StyledButton from '../components/Styled/StyledButton'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('StyledButton', () => {
  it('renders correctly', () => {
    const component = shallow(
      <StyledButton>
        Add
      </StyledButton>
    )
    expect(component).toMatchSnapshot()
  })
})

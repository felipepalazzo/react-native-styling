/* globals it, expect, describe */
import React from 'react'
import StyledButton from '../components/Styled/StyledButton'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

describe('StyledButton', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <StyledButton secondary>
        Add
      </StyledButton>
    ).toJSON()
    expect(component).toMatchSnapshot()
  })
})

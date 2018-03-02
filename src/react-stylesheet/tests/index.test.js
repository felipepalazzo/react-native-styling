/* globals it, expect, describe */
import React from 'react'
import Root from '../index'
import { MemoryRouter } from 'react-router-native'

import renderer from 'react-test-renderer'

describe('Root Component', () => {
  it('renders Root react-stylesheet', () => {
    const rendered = renderer.create(
      <MemoryRouter><Root /></MemoryRouter>
    ).toJSON()
    expect(rendered).toMatchSnapshot()
  })
})

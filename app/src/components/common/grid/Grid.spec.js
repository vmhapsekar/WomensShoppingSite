import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import {Grid, GRow, GCol} from './Grid.js'

describe('<Grid />', () => {
  it('WILL match snapshot: <Grid />', () => {
    const wrapper = renderer.create(<Grid fluid />)
    expect(wrapper).toMatchSnapshot()
  })
  it('WILL match snapshot: <GRow />', () => {
    const wrapper = renderer.create(<GRow />)
    expect(wrapper).toMatchSnapshot()
  })
  it('WILL match snapshot: <GCol />', () => {
    const wrapper = renderer.create(<GCol xs={12} sm={6} md={4} lg={3}>Text</GCol>)
    expect(wrapper).toMatchSnapshot()
  })
})

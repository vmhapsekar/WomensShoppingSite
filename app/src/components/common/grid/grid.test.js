import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import {AnzGrid, AnzRow, AnzCol} from './index.js'

describe('<AnzGrid />', () => {
  it('WILL match snapshot: <AnzGrid />', () => {
    const wrapper = renderer.create(<AnzGrid fluid />)
    expect(wrapper).toMatchSnapshot()
  })
  it('WILL match snapshot: <AnzRow />', () => {
    const wrapper = renderer.create(<AnzRow />)
    expect(wrapper).toMatchSnapshot()
  })
  it('WILL match snapshot: <AnzCol />', () => {
    const wrapper = renderer.create(<AnzCol xs={12} sm={6} md={4} lg={3}>Text</AnzCol>)
    expect(wrapper).toMatchSnapshot()
  })
})

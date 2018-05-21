import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import {SIZE_FILTER} from '../../../constants/appConstants'

import Header from './Header.js'

describe('<Header />', () => {
  it('WILL match snapshot: <Header />', () => {
    const wrapper = renderer.create(<Header title="Women's tops" filter={SIZE_FILTER} seetFilter={jest.fn()} />)
    expect(wrapper).toMatchSnapshot()
  })
})

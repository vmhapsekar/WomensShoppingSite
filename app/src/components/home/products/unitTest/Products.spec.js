import React from 'react'
import Products from '../Products'
import { shallowToJson } from 'enzyme-to-json'
import { shallow } from 'enzyme'
const products = require('../../../../assets/toolkit/data/products.json')

describe('<Products />', () => {
  test('Product with Exclusive Status', () => {
    const component = shallow(<Products products={products} />)
    expect(component).toBeDefined()
    expect(shallowToJson(component)).toMatchSnapshot()
  })
})

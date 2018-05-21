import React from 'react'
import {ProductStatus} from '../style'
import { shallowToJson } from 'enzyme-to-json'
import { shallow } from 'enzyme'
const products = require('../../../../assets/toolkit/data/products.json')

describe('<ProductStatus />', () => {
  test('Product with Exclusive Status', () => {
    const component = shallow(<ProductStatus isSale={true} />)
    expect(component).toBeDefined()
    expect(shallowToJson(component)).toMatchSnapshot()
  })
  test('Product with Exclusive Status', () => {
    const component = shallow(<ProductStatus isExclusive={true} />)
    expect(component).toBeDefined()
    expect(shallowToJson(component)).toMatchSnapshot()
  })
})

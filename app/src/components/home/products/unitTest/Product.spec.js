import React from 'react'
import Product from '../Product'
import { shallowToJson } from 'enzyme-to-json'
import { shallow } from 'enzyme'

describe('<Product />', () => {
  test('Product with Exclusive Status', () => {
    const initialProps = {
      image: 'product-1.jpg',
      name: 'Striped shirt',
      price: "$18.88",
      isExclusive: true,
      isSale: false
    }
    const component = shallow(<Product {...initialProps} />)
    expect(component).toBeDefined()
    expect(shallowToJson(component)).toMatchSnapshot()
  })

  test('Product with Sale Status', () => {
    const initialProps = {
      image: 'product-1.jpg',
      name: 'Striped shirt',
      price: "$18.88",
      isExclusive: false,
      isSale: true
    }
    const component = shallow(<Product {...initialProps} />)
    expect(component).toBeDefined()
    expect(shallowToJson(component)).toMatchSnapshot()
  })
})

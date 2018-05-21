import React from 'react'
import Landing from './Landing'
import {shallowToJson} from 'enzyme-to-json'
import Enzyme, {shallow} from 'enzyme'
const products = require('../../../assets/toolkit/data/products.json')

global.requestAnimationFrme = function (callback) {
  setTimeout(callback, 0)
}

describe('Landing', () => {

  const props = {
    fetchAllProductData: jest.fn(),
    productData: {productDataLoaded: false}
  }
  test(`should render <Header> and <Products>`, () => {
    const component = shallow(<Landing {...props} />)
    expect(shallowToJson(component)).toMatchSnapshot()
  })
  test(`if product data is loaded set products in state`, () => {
    const props1 = {
      fetchAllProductData: jest.fn(),
      productData: {productDataLoaded: true, fetchProductSuccess: true, products: ['product1', 'product2']}
    }
    const component = shallow(<Landing {...props} />)
    component.update()
    component.setProps(props1)
  })
  test(`if product data is loaded and if not do not render Products`, () => {
    const props1 = {
      fetchAllProductData: jest.fn(),
      productData: {productDataLoaded: false, fetchProductSuccess: false}
    }
    const component = shallow(<Landing {...props} />)
    component.update()
    component.setProps(props1)
  })
  test(`if products are filtered on change of size`, () => {
    const props1 = {
      fetchAllProductData: jest.fn(),
      productData: {productDataLoaded: true, fetchProductSuccess: true, products: products}
    }
    const setFilter = jest.spyOn(
      Landing.prototype,
      'setFilter'
    )
    const mockedEvent = {target: {value: "1"}}
    const component = shallow(<Landing {...props1} />)
    expect(component).toBeDefined()
    component.instance().setFilter(mockedEvent)
    expect(setFilter).toHaveBeenCalled()
  })
  test(`change the view when filter option set to 0`, () => {
    const props1 = {
      fetchAllProductData: jest.fn(),
      productData: {productDataLoaded: true, fetchProductSuccess: true, products: products}
    }
    const setFilter = jest.spyOn(
      Landing.prototype,
      'setFilter'
    )
    const mockedEvent = {target: {value: "0"}}
    const component = shallow(<Landing {...props1} />)
    expect(component).toBeDefined()
    component.instance().setFilter(mockedEvent)
    expect(setFilter).toHaveBeenCalled()
  })
})
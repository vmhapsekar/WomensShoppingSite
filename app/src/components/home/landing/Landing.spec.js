import React from 'react'
import Landing from './Landing'
import {shallowToJson} from 'enzyme-to-json'
import Enzyme, {shallow} from 'enzyme'

global.requestAnimationFrme = function (callback) {
  setTimeout(callback, 0)
}

describe('Landing', () => {
  beforeEach(() => {
    global.sessionStorage = jest.genMockFunction()
    global.sessionStorage.setItem = jest.genMockFunction()
    global.sessionStorage.getItem = jest.genMockFunction()
  })
  const props = {
    fetchAllProductData: jest.fn(),
    productDataCalled: false
  }
  test(`should render <Header> and <LookupCustomerContainer>`, () => {
    const component = shallow(<Landing {...props} />)
    expect(shallowToJson(component)).toMatchSnapshot()
  })
  test(`when authorisedPreviously is true, fetchAccessToken should not be called `, () => {
    const props1 = {
      fetchAllProductData: jest.fn(),
      productDataCalled: true
    }
    const component = shallow(<Landing {...props} />)
    component.update()
    component.setProps(props1)
  })

  test(`SearchCustomerContainer should not render when fetchAccessToken OR stiLoaded is false `, () => {
    const props = {
      fetchAllProductData: jest.fn(),
      productDataCalled: true
    }
  })
})
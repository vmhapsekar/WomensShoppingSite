
import React from 'react'
import {App} from './App'
import { shallowToJson } from 'enzyme-to-json'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

global.requestAnimationFrme = function (callback) {
  setTimeout(callback, 0)
}

describe('<App> should load', () => {
  test('snapshot test', () => {
    const component = shallow(<App />)
    const tree = shallowToJson(component)
    expect(tree).toMatchSnapshot()
  })

  test('Should render Router, Routes and ModalRoot', function () {
    const component = shallow(<App />)
    const hashRoute = component.find('Router')
    expect(hashRoute).toBeDefined()
    const route = component.find('Route')
    expect(route).toBeDefined()
    expect(route).toHaveLength(2)
  })
})

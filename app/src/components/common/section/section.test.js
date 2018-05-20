import React from 'react'
import { mount } from 'enzyme'
import { mountToJson } from 'enzyme-to-json'
import 'jest-styled-components'

import Section from './index.js'

describe('<Section />', () => {
  it('Should match snapshot', () => {
    const wrapper = mount(<Section>Text</Section>)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('Should match snapshot: internal', () => {
    const wrapper = mount(<Section variant='internal'>Text</Section>)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('Should match snapshot: internal & ocean-blue highlight', () => {
    const wrapper = mount(<Section variant='internal' highlight='ocean-blue'>Text</Section>)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })

  it('Should match snapshot: internal & seagrass highlight', () => {
    const wrapper = mount(<Section variant='internal' highlight='seagrass'>Text</Section>)
    const tree = mountToJson(wrapper)
    expect(tree).toMatchSnapshot()
  })
})

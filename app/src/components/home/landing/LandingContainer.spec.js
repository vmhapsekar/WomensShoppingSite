import React from 'react'
import { mapStateToProps, mapDispatchToProps } from './LandingContainer'
import {PRODUCT_FETCH_ALL_REQUEST } from '../../../constants/actions'
import configureMockStore from 'redux-mock-store'
import { isFunction } from 'lodash'

global.requestAnimationFrme = function (callback) {
  setTimeout(callback, 0)
}

describe('LandingContainer', () => {
  const mockStore = configureMockStore([])
  let store
  let combinedReducersState = {
    productData: {}
  }

  beforeEach(() => {
    store = mockStore(combinedReducersState)
  })

  test('should not throw error when props are not available in store', () => {
    expect(() => mapStateToProps({})).not.toThrow()
  })

  describe('mapStateToProps', () => {
    test('should return an object with values from state', () => {
      expect(mapStateToProps(combinedReducersState)).toEqual(
        {
          productData: {}
        }
      )
    })
  })

  describe('mapDispatchToProps', () => {
    test('should return a function called fetchAllProductData', () => {
      const dispatch = jest.fn()
      expect(mapDispatchToProps(dispatch).fetchAllProductData).toBeDefined()
      expect(isFunction(mapDispatchToProps(dispatch).fetchAllProductData)).toEqual(true)
    })
  })

  describe('mapDispatchToProps dispatches should be called', () => {
    test(`fetchAllProductData should call dispatch`, () => {
      const dispatch = jest.fn()
      mapDispatchToProps(dispatch).fetchAllProductData()
      expect(dispatch).toHaveBeenCalledWith({'type': PRODUCT_FETCH_ALL_REQUEST})
    })
  })
})

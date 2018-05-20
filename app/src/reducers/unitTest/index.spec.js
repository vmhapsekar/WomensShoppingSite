import rootReducer from '../index'

describe('Root Reducer', () => {
  'use strict'

  test('should combine reducers', () => {
    expect(rootReducer).toBeDefined()
    expect(rootReducer).toBeInstanceOf(Function)
  })
})

import productDataReducer, {
  fetchAllProductData,
  fetchAllProductDataSuccess,
  fetchAllProductDataFailure
} from '../productDataReducer'
import {PRODUCT_FETCH_ALL_REQUEST, PRODUCT_FETCH_ALL_SUCCESS, PRODUCT_FETCH_ALL_FAILURE} from '../../constants/actions'

const productServiceResponse = require('./data/productServiceResponse.json')
const initialState = {
  productDataLoaded: false,
  fetchProductError: '',
  fetchProductSuccess: false
}

describe('productDataReducer', () => {
  describe('for each action', () => {
    test('should return correct state object with initial values when no new state is supplied for action default', () => {
      expect(productDataReducer(undefined, {})).toEqual({...initialState})
    })
    test('should return correct state object with initial values when no new state is supplied for action PRODUCT_FETCH_ALL_REQUEST', () => {
      const action = {type: PRODUCT_FETCH_ALL_REQUEST}
      expect(productDataReducer(undefined, action)).toEqual({...initialState})
    })
    test('should return correct state object when new state is supplied for action PRODUCT_FETCH_ALL_SUCCESS', () => {
      const state = {test: 'test'}
      const action = {
        type: PRODUCT_FETCH_ALL_SUCCESS,
        payload: productServiceResponse
      }
      expect(productDataReducer(state, action)).toEqual({
        "fetchProductError": "",
        "fetchProductSuccess": true,
        "productDataLoaded": true,
        "products": {"count": 547, "results": [{"endDateTime": null}]},
        "test": "test"
      })
    })
    test('should return correct state object when new state is supplied for error action', () => {
      const state = {test: 'test'}
      const action = {type: PRODUCT_FETCH_ALL_FAILURE}
      expect(productDataReducer(state, action)).toEqual({
        ...state,
        fetchProductSuccess: false,
        productDataLoaded: true,
        fetchProductError: action.error
      })
    })
  })

  describe('action creators', () => {
    describe('fetchAllProductData', () => {
      test('action should return PRODUCT_FETCH_ALL_REQUEST', () => {
        expect(fetchAllProductData()).toEqual({
          type: PRODUCT_FETCH_ALL_REQUEST
        })
      })
    })

    describe('fetchAllProductDataSuccess', () => {
      test('action should return PRODUCT_FETCH_ALL_SUCCESS and payload attribute', () => {
        expect(fetchAllProductDataSuccess(productServiceResponse)).toEqual({
          type: PRODUCT_FETCH_ALL_SUCCESS,
          payload: productServiceResponse
        })
      })
    })

    describe('fetchAllProductDataFailure', () => {
      test('action should return PRODUCT_FETCH_ALL_FAILURE and error attribute', () => {
        const error = 'test error'
        expect(fetchAllProductDataFailure(error)).toEqual({
          type: PRODUCT_FETCH_ALL_FAILURE,
          error
        })
      })
    })
  })
})

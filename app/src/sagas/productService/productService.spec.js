import {put} from 'redux-saga/effects'
import * as ApiConfig from '../../utils/apiConfig'
import * as productServiceSaga from './productService'
import {APP_SERVICE_TIMEOUT} from '../../constants/appConstants'
import {PRODUCT_FETCH_ALL_SUCCESS} from '../../constants/actions'

describe('product service sagas', () => {
  const fetchAllProductDataGenerator = productServiceSaga.fetchAllProductData()
  const mockProductResponse = {'sample': 'response'}
  describe('fetchAllProductDataGenerator: success', () => {
    test('should yield a call to put({type: "PRODUCT/FETCH/SUCCESS", payload: payload})', () => {
      let result = fetchAllProductDataGenerator.next(mockProductResponse).value
      result = fetchAllProductDataGenerator.next(mockProductResponse)
      expect(result.value.PUT).toBeDefined()
      expect(result.value.PUT.action.type).toEqual(PRODUCT_FETCH_ALL_SUCCESS)
    })
  })

  describe('fetchAllProductDataGenerator: error', () => {
    const requestError = {
      error: {
        statusCode: 500
      }
    }
    test('should yield a call to put({type: "PRODUCT/FETCH/FAILURE", error: error})', () => {
      expect(fetchAllProductDataGenerator.throw(requestError).value).toEqual(
        put({type: 'PRODUCT/FETCH/FAILURE', error: requestError})
      )
    })
    test('should yield a call to done', () => {
      expect(fetchAllProductDataGenerator.next()).toEqual({
        value: undefined,
        done: true
      })
    })
  })

  describe('getProductData', () => {
    test('should call product service', () => {
      const getMock = jest.fn()
      ApiConfig.getApiConfig = jest.fn().mockReturnValue({
        get: getMock
      })
      productServiceSaga.getProductData()
      expect(ApiConfig.getApiConfig).toHaveBeenCalledWith('productService',
        {"Request-ID": undefined})
      expect(getMock).toHaveBeenCalledWith('products', {
        timeout: APP_SERVICE_TIMEOUT
      })
    })
  })
})

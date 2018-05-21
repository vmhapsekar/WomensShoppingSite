import * as ApiConfig from '../apiConfig'
const defaultHeaders = {
  'common': {
    'Content-Type': 'application/json',
    'APPLICATION-ID': 'Womens Shopping Site',
    'Application-Version': '0.1',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'SOURCE-IP': 'localhost'
  },
  'post': {
    'Content-Type': 'application/json'
  }
}

describe('Api Config Service', () => {
  'use strict'

  describe('getApiConfig', () => {
    test('should return the expected baseUrl for Product Service', () => {
      let expectedBaseUrl = '/data'
      const baseUrl = ApiConfig.getBaseUrl('productService')
      const apiConfig = ApiConfig.getApiConfig('referenceService')
      expect(apiConfig.defaults.headers).toMatchObject(defaultHeaders)
      expect(baseUrl).toEqual(expectedBaseUrl)
    })
    test('should return an empty string when a service Name is not provided', () => {
      let expectedBaseUrl = ''
      const baseUrl = ApiConfig.getBaseUrl()
      expect(baseUrl).toEqual(expectedBaseUrl)
    })
    test('should set both default and other API service headers when getApiConfig is called', () => {
      const headers = {'If-Match': 3}
      const apiConfig = ApiConfig.getApiConfig(
        'arrangementService',
        headers
      )
      expect(apiConfig.defaults.headers.common['If-Match']).toEqual(3)
    })
  })
})

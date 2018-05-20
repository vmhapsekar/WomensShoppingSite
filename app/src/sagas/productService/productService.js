import {call, put} from 'redux-saga/effects'
import * as ApiConfig from '../../utils/apiConfig'
import {fetchAllProductDataSuccess, fetchAllProductDataFailure} from '../../reducers/productDataReducer'
import uuid from 'uuid'
import {APP_SERVICE_TIMEOUT} from '../../constants/appConstants'

export function * fetchAllProductData () {
  try {
    const response = yield call(getProductData, uuid.v1()) // call the product service to get the products
    yield put(fetchAllProductDataSuccess(response.data)) // if success, dispatch the data to component for rendering
  } catch
    (error) {
    yield put(fetchAllProductDataFailure(error)) // if error, handle the error
  }
}

export function getProductData (UUID) {
  const productDataService = ApiConfig.getApiConfig('productService', {
    'Request-ID': UUID
  })
  return productDataService.get('products.json', {
    timeout: APP_SERVICE_TIMEOUT
  })
}

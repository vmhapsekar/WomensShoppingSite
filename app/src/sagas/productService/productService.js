import {call, put} from 'redux-saga/effects'
import * as ApiConfig from '../../utils/apiConfig'
import {fetchAllProductDataSuccess, fetchAllProductDataFailure} from '../../reducers/productDataReducer'
import uuid from 'uuid'
import {APP_SERVICE_TIMEOUT} from '../../constants/appConstants'

export function * fetchAllProductData () {
  try {
    const response = yield call(getProductData, uuid.v1())
    yield put(fetchAllProductDataSuccess(response.data))
  } catch
    (error) {
    yield put(fetchAllProductDataFailure(error))
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

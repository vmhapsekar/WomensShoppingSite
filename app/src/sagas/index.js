import {all, takeLatest} from 'redux-saga/effects'
import {
  PRODUCT_FETCH_ALL_REQUEST
} from '../constants/actions'
import {fetchAllProductData} from './productService/productService'

// single entry point to start all the sagas, our root saga, a generator function
export function * rootSaga () {
  yield all([
    takeLatest(PRODUCT_FETCH_ALL_REQUEST, fetchAllProductData)
  ])
}

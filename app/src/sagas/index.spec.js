import {
  PRODUCT_FETCH_ALL_REQUEST
} from '../constants/actions'
import * as indexSaga from './index'

describe('index sagas', () => {
  describe('rootSaga', () => {
    const rootSagaGenerator = indexSaga.rootSaga()
    test('should yield a call to takeLatest with the productService', () => {
      let result = rootSagaGenerator.next().value
      // this needs to be updated as we keep on increasing service calls
      expect(result.ALL.length).toBe(1)
      expect(result.ALL[0].FORK.args[0]).toBe(
        PRODUCT_FETCH_ALL_REQUEST
      )
    })
  })
})

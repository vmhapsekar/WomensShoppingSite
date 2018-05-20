import {combineReducers} from 'redux'
import productData from './productDataReducer'

const rootReducer = combineReducers(
  {
    productData
  }
)

export default rootReducer

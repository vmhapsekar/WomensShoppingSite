import {PRODUCT_FETCH_ALL_REQUEST, PRODUCT_FETCH_ALL_SUCCESS, PRODUCT_FETCH_ALL_FAILURE} from '../constants/actions'

const initialState = {
  productDataLoaded: false,
  fetchProductError: '',
  fetchProductSuccess: false
}

// Action Creators
export function fetchAllProductData () {
  return {type: PRODUCT_FETCH_ALL_REQUEST}
}

export function fetchAllProductDataSuccess (payload) {
  return {type: PRODUCT_FETCH_ALL_SUCCESS, payload}
}

export function fetchAllProductDataFailure (error) {
  return {type: PRODUCT_FETCH_ALL_FAILURE, error}
}

// reducer
export default function productDataReducer (state = initialState, action) {
  switch (action.type) {
    case PRODUCT_FETCH_ALL_REQUEST: {
      return {
        ...state,
        productDataLoaded: false
      }
    }
    case PRODUCT_FETCH_ALL_SUCCESS: {
      return {
        ...state,
        products: action.payload,
        fetchProductSuccess: true,
        productDataLoaded: true,
        fetchProductError: ''
      }
    }
    case PRODUCT_FETCH_ALL_FAILURE: {
      return {
        ...state,
        fetchProductSuccess: false,
        productDataLoaded: true,
        fetchProductError: action.error
      }
    }
    default:
      return state
  }
}

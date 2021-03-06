import Landing from './Landing'
import {connect} from 'react-redux'
import {fetchAllProductData} from '../../../reducers/productDataReducer'

export const mapStateToProps = ({productData = {}}) => {
  return {
    productData
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProductData: () => {
      dispatch(fetchAllProductData()) // dispatch action to fetch products data
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)

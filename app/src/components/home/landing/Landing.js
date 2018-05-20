import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Landing.css'

class Landing extends Component {
  constructor (props) {
    super(props)
    this.productDataCalled = false
  }

  componentDidMount () {

  }

  componentWillReceiveProps (nextProps) {
    if (!this.productDataCalled && !window.sessionStorage.getItem('IS_PRODUCT_DATA_SET')) { // Avoid this call on Refresh
      this.props.fetchAllProductData()
      this.productDataCalled = true
    }
  }

  render () {
    return (
      <div className='landing-section' />
    )
  }
}

Landing.propTypes = {
  fetchAllProductData: PropTypes.func.isRequired
}

export default Landing

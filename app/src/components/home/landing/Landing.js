import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Landing.css'
import {Grid, GRow, GCol} from '../../common/grid/Grid'
import Header from '../../common/header/Header'
import {SIZE_FILTER} from '../../../constants/appConstants'
import {filterProductsOnSize} from '../../../utils/productUtils'
import Products from '../products/Products'

class Landing extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: [],
      selectedSize: 0,
      filteredProducts: []
    }
    this.setFilter = this.setFilter.bind(this)
  }

  componentDidMount () {
    this.props.fetchAllProductData()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.productData.productDataLoaded && nextProps.productData.fetchProductSuccess) {
      this.setState({products: nextProps.productData.products})
    }
  }

  setFilter (event) {
    let selectedSize = parseInt(event.target.value)
    if (selectedSize === 0) {
      this.setState({selectedSize: selectedSize})
    } else {
      this.setState({
        filteredProducts: filterProductsOnSize(this.props.productData.products, SIZE_FILTER[selectedSize].label),
        selectedSize: selectedSize})
    }
  }

  render () {
    let products = (this.state.selectedSize !== 0) ? this.state.filteredProducts : this.state.products
    return (
      <Grid fluid>
        <GRow>
          <GCol xs={1}>
              <Header title="Women's tops" filter={SIZE_FILTER} setFilter={this.setFilter}/>
              {this.props.productData.productDataLoaded && this.props.productData.fetchProductSuccess ?
                <Products products={products}></Products> : null}
          </GCol>
        </GRow>
      </Grid>
    )
  }
}

Landing.propTypes = {
  fetchAllProductData: PropTypes.func.isRequired
}

export default Landing

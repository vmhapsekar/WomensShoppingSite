import React, {Component} from 'react'
import PropTypes from 'prop-types'
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
    //When component loads, call service to fetch product data
    this.props.fetchAllProductData()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.productData.productDataLoaded && nextProps.productData.fetchProductSuccess) {
      this.setState({products: nextProps.productData.products})
    }
  }

  //Handling On Change event when filter value is changed.
  setFilter (event) {
    let selectedSize = parseInt(event.target.value)
    if (selectedSize === 0) {
      this.setState({selectedSize: selectedSize})
    } else {
      this.setState({
        filteredProducts: filterProductsOnSize(this.props.productData.products, SIZE_FILTER[selectedSize].label), //get the filtered list and rerender
        selectedSize: selectedSize})
    }
  }

  render () {
    // if filter is set change the list to filtered list
    let products = (this.state.selectedSize !== 0) ? this.state.filteredProducts : this.state.products
    //prevent to display products until the data is fetched. Future Implementation: Loader/Spinner until data loads.
    let showProducts = this.props.productData.productDataLoaded && this.props.productData.fetchProductSuccess
    return (
      <Grid fluid>
        <GRow>
          <GCol xs={12} sm={12} md={12} lg={12}>
              <Header title="Women's tops" filter={SIZE_FILTER} setFilter={this.setFilter}/>
          </GCol>
          <GCol xs={12} sm={12} md={12} lg={12}>
            {showProducts ? <Products products={products}></Products> : null}
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

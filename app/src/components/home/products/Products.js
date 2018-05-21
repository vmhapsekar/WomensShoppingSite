import React from 'react'
import PropTypes from 'prop-types'
import {Grid, GRow, GCol} from '../../common/grid/Grid'
import Product from './Product'

// Pure Component which displays group of products
const Products = ({products}) => {
  return (
    <Grid>
      <GRow>
        {
          products.map((product, index) =>
            <GCol xs={12} sm={12} md={4} lg={3} key={`product-${index}`}>
              <Product image={product.productImage}
                name={product.productName}
                price={product.price}
                isExclusive={product.isExclusive}
                isSale={product.isSale} />
            </GCol>
          )
        }
      </GRow>
    </Grid>
  )
}

Products.propTypes = {
  products: PropTypes.array
}

export default Products

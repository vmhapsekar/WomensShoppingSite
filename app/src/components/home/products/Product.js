import React from 'react'
import PropTypes from 'prop-types'
import {IMAGES_URL} from '../../../constants/appUrls'
import {ProductStatus, ProductName, ProductPrice, ProductImage, ProductWrapper} from './style'
import {Grid, GRow, GCol} from '../../common/grid/Grid'

const Product = ({image, name, price, isExclusive, isSale}) => {
  return (
    <ProductWrapper>
      <Grid fluid>
        <GRow>
          <GCol xs={12}>
            <ProductImage src={`${IMAGES_URL}${image}`} />
          </GCol>
        </GRow>
        <GRow>
          <GCol xs={12} sm={12} md={5} lg={5}>
            <ProductStatus isExclusive={isExclusive} isSale={isSale}>
              {isExclusive ? 'Exclusive' : ''}
              {isSale ? 'Sale' : ''}
            </ProductStatus>
          </GCol>
        </GRow>
        <GRow>
          <GCol xs={12} sm={12} md={8} lg={8}>
            <ProductName>{name}</ProductName>
          </GCol>
          <GCol xs={12} sm={12} md={4} lg={4}>
            <ProductPrice>{price}</ProductPrice>
          </GCol>
        </GRow>
      </Grid>
    </ProductWrapper>
  )
}

Product.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  isExclusive: PropTypes.bool.isRequired,
  isSale: PropTypes.bool.isRequired
}

export default Product

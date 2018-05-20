import React from 'react'
import PropTypes from 'prop-types'
import {IMAGES_URL} from '../../../constants/appUrls'
import {ProductStatus, ProductName, ProductPrice} from './style'

const Product = ({image, name, price, isExclusive, isSale}) => {
  return (
    <div>
      <img src={`${IMAGES_URL}${image}`} />
      <ProductStatus isExclusive={isExclusive} isSale={isSale}>
        {isExclusive ? 'Exclusive' : ''}
        {isSale ? 'Sale' : ''}
      </ProductStatus>
      <ProductName>{name}</ProductName>
      <ProductPrice>{price}</ProductPrice>
    </div>
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

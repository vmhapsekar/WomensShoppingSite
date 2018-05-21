import * as productUtils from '../productUtils'
const products = require('../../assets/toolkit/data/products.json')

describe('Product Utils', () => {
  'use strict'

  describe('filterProductsOnSize', () => {
    test('should return the filtered products based on size', () => {
      const expectedFilteredList = [
        {
          "index": 0,
          "isSale": true,
          "isExclusive": false,
          "price": "$18.88",
          "productImage": "product-1.jpg",
          "productName": "Striped shirt",
          "size": ["XS", "S", "L", "XL"]
        },
        {
          "index": 3,
          "isSale": false,
          "isExclusive": false,
          "price": "$26.32",
          "productImage": "product-4.jpg",
          "productName": "Plain 3/4 sleeve cotton t-shirt",
          "size": ["XL"]
        },
        {
          "index": 6,
          "isSale": true,
          "isExclusive": false,
          "price": "$24.26",
          "productImage": "product-7.jpg",
          "productName": "Puffer Vest with Hood",
          "size": ["M", "L", "XL"]
        },
        {
          "index": 7,
          "isSale": false,
          "isExclusive": true,
          "price": "$17.73",
          "productImage": "product-8.jpg",
          "productName": "Funnel Neck Swing Top",
          "size": ["XS", "S", "XL"]
        }
      ]
      let filteredList = productUtils.filterProductsOnSize(products, 'XL')
      expect(filteredList).toEqual(expectedFilteredList)
    })
  })
})

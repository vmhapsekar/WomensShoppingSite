export const filterProductsOnSize = (products, size) => {
  let filteredProducts = []
  products.map((product) => {
    if (product.size.indexOf(size) !== -1) {
      filteredProducts.push(product)
    }
  })
  return filteredProducts
}
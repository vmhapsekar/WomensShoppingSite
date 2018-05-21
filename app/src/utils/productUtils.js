export const filterProductsOnSize = (products, size) => {
  let filteredProducts = []
  // filter the list based on the size selected
  products.map((product) => {
    if (product.size.indexOf(size) !== -1) {
      filteredProducts.push(product)
    }
  })
  return filteredProducts
}

import productModel from '../models/product.model'

export const getProductFromDB = async () => {
  productModel
    .find()
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const createProductToDB = async () => {
  const product = await productModel.create({
    name: 'test',
    price: 10000,
    size: 'L'
  })
  console.log(product)
}

import { Request, Response } from 'express'
import { logger } from '../utils/logger'
import { createProductValidation } from '../validations/product.validation'
import { getProductFromDB } from '../services/product.service'

export const createProduct = (req: Request, res: Response) => {
  const { error, value } = createProductValidation(req.body)
  if (error) {
    logger.error('Error add product', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} })
  }

  logger.info('Success add new product')
  return res.status(200).send({
    status: true,
    statusCode: 200,
    message: 'Add product success',
    data: value
  })
}

export const getProduct = async () => {
  // await createProductToDB()
  await getProductFromDB()
  // const product: any = await getProductFromDB()

  // const {
  //   params: { name }
  // } = req

  // if (name) {
  //   const filteredProduct = product.filter((product: any) => {
  //     return product.name === name
  //   })

  //   if (filteredProduct.length === 0) {
  //     return res.status(404).send({
  //       status: false,
  //       statuscode: 404,
  //       data: {}
  //     })
  //   }

  //   logger.info('Success get product')
  //   return res.status(200).send({
  //     status: true,
  //     statuscode: 200,
  //     data: filteredProduct[0]
  //   })
  // }

  // logger.info('Success get product')
  // return res.status(200).send({
  //   status: true,
  //   statuscode: 200,
  //   data: product
  // })
}

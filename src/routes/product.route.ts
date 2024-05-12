import { Router } from 'express'
import { createProduct, getProduct } from '../controller/product.controller'
import { requireUser } from '../middleware/auth'

export const ProductRouter: Router = Router()

ProductRouter.get('/', getProduct)
ProductRouter.get('/:name', getProduct)
ProductRouter.post('/', requireUser, createProduct)

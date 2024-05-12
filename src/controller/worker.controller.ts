import { Request, Response } from 'express'
import { logger } from '../utils/logger'
import { createWorkerValidation } from '../validations/worker.validation'
import { createWorkerToDB, getWorkerFromDB } from '../services/worker.service'

export const getWorker = async (req: Request, res: Response) => {
  const {
    params: { name }
  } = req
  if (name) {
    const filteredWorker = await getWorkerFromDB().then((data) => {
      return data?.filter((worker) => {
        return worker.name === name
      })
    })
    if (filteredWorker?.length === 0) {
      logger.warn('Worker not found')
      return res.status(404).send({
        status: false,
        statusCode: 404,
        data: {}
      })
    }
    logger.info('Success get worker')
    return res.status(200).send({
      status: true,
      statusCode: 200,
      data: filteredWorker ? filteredWorker[0] : undefined
    })
  }
  await getWorkerFromDB().then((data) => res.send({ status: true, statusCode: 200, data: data }))
}

export const createWorker = async (req: Request, res: Response) => {
  const { error, value } = createWorkerValidation(req.body)
  if (error) {
    logger.error('Error add worker', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} })
  }
  await createWorkerToDB(value)
  logger.info('Success add new worker')
  return res.status(200).send({
    status: true,
    statusCode: 200,
    message: 'Add worker success',
    data: value
  })
}

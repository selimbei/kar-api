import { Request, Response } from 'express'
import { logger } from '../utils/logger'
import { createUserValidation } from '../validations/user.validation'
import { createUserToDB } from '../services/auth.service'
import { v4 as uuidv4 } from 'uuid'
import { hashing } from '../utils/hashing'

export const createUser = (req: Request, res: Response) => {
  req.body.user_id = uuidv4()
  const { error, value } = createUserValidation(req.body)
  if (error) {
    logger.error('Error register user', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} })
  }

  try {
    value.password = `${hashing(value.password)}`
    createUserToDB(value)
    return res.status(200).send({ status: true, statusCode: 200, message: 'Register user success', data: value })
  } catch (error) {
    logger.error(error)
    return res.status(500).send({ status: false, statusCode: 500, message: 'Internal server error', data: {} })
  }
}

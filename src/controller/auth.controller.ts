/* eslint-disable  @typescript-eslint/no-explicit-any */

import { Request, Response } from 'express'
import { logger } from '../utils/logger'
import { createSessionValidation, createUserValidation, refreshSessionValidation } from '../validations/user.validation'
import { createUserToDB, getUserByUsername } from '../services/auth.service'
import { v4 as uuidv4 } from 'uuid'
import { checkPassword, hashing } from '../utils/hashing'
import { signJWT, verifyJwt } from '../utils/jwt'

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

export const createSession = async (req: Request, res: Response) => {
  const { error, value } = createSessionValidation(req.body)
  if (error) {
    logger.error('Error login user', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} })
  }
  logger.info('Success login user')
  try {
    const user: any = await getUserByUsername(value.username)
    const isValid = checkPassword(value.password, user.password)

    if (!isValid) {
      return res.status(401).send({ status: false, statusCode: 401, message: 'Invalid username or password', data: {} })
    }
    logger.info('logging in ...')
    const accessToken = signJWT({ ...user }, { expiresIn: '1d' })
    const refreshToken = signJWT({ ...user }, { expiresIn: '1y' })
    return res
      .status(200)
      .send({ status: true, statusCode: 200, message: 'Login user success', data: { accessToken, refreshToken, user } })
  } catch (error: any) {
    logger.error('Error login user2', error.message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.message, data: {} })
  }
}

export const refreshSession = async (req: Request, res: Response) => {
  const { error, value } = refreshSessionValidation(req.body)
  if (error) {
    logger.error('Error refresh session', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} })
  }

  try {
    const { decoded }: any = verifyJwt(value.refreshToken)
    const user = await getUserByUsername(decoded._doc.username)

    if (!user) return false
    const accessToken = signJWT({ ...user }, { expiresIn: '1d' })
    return res
      .status(200)
      .send({ status: true, statusCode: 200, message: 'Refresh session success', data: { accessToken } })
  } catch (error: any) {
    logger.error('Error refresh session', error.message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.message, data: {} })
  }
}

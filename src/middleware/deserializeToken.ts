/* eslint-disable  @typescript-eslint/no-explicit-any */

import { NextFunction, Request, Response } from 'express'
import { verifyJwt } from '../utils/jwt'

export const deserializeToken = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers.authorization?.replace(/^Bearer\s/, '')
  if (!accessToken) {
    return next()
  }
  const token: any = verifyJwt(accessToken)
  if (token.decoded) {
    res.locals.user = token.decoded
    return next()
  }
  if (token.expired) {
    return next()
  }
  return next()
}

export default deserializeToken

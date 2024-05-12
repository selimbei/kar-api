import { Request, Response, NextFunction } from 'express'

export const requireUser = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user
  if (!user) {
    return res.status(401).send({ status: false, statusCode: 401, message: 'Unauthorized', data: {} })
  }
  next()
}

export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user
  if (!user) {
    return res.status(401).send({ status: false, statusCode: 401, message: 'Unauthorized', data: {} })
  }
  if (user._doc.role !== 'admin') {
    return res.status(403).send({ status: false, statusCode: 403, message: 'Forbidden', data: {} })
  }
  next()
}

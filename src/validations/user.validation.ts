import joi from 'joi'
import { UserType } from '../interfaces/model.interface'

export const createUserValidation = (payload: UserType) => {
  const schema = joi.object({
    user_id: joi.string(),
    username: joi.string().required(),
    password: joi.string().required(),
    role: joi.string()
  })

  return schema.validate(payload)
}

export const createSessionValidation = (payload: UserType) => {
  const schema = joi.object({
    username: joi.string().required(),
    password: joi.string().required()
  })

  return schema.validate(payload)
}

export const refreshSessionValidation = (payload: UserType) => {
  const schema = joi.object({
    refreshToken: joi.string().required()
  })
  return schema.validate(payload)
}

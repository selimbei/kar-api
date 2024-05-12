import Joi from 'joi'
import { WorkerType } from '../interfaces/model.interface'

export const createWorkerValidation = (payload: WorkerType) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    isWork: Joi.boolean().required(),
    salary: Joi.number().required()
  })

  return schema.validate(payload)
}

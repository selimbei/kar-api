import { UserType } from '../interfaces/model.interface'
import userModel from '../models/user.model'

export const createUserToDB = async (payload: UserType) => {
  return await userModel.create(payload)
}

export const getUserByUsername = async (username: string) => {
  return await userModel.findOne({ username })
}

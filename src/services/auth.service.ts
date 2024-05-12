import { UserType } from '../interfaces/model.interface'
import userModel from '../models/user.model'

export const createUserToDB = async (payload: UserType) => {
  await userModel.create(payload)
}

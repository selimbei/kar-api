import { WorkerType } from '../interfaces/model.interface'
import workerModel from '../models/worker.model'

export const getWorkerFromDB = async () => {
  const data = await workerModel.find()
  if (data) {
    return data
  }
}

export const createWorkerToDB = async (data: WorkerType) => {
  await workerModel.create(data)
}

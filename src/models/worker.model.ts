import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const workerSchema = new Schema(
  {
    name: {
      type: String
    }
  },
  { timestamps: true }
)

const workerModel = mongoose.model('worker', workerSchema)

export default workerModel

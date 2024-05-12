import mongoose from 'mongoose'
import { Schema } from 'mongoose'

const workerSchema = new Schema(
  {
    name: {
      type: String
    },
    isWork: {
      type: Boolean
    },
    salary: {
      type: Number
    }
  },
  { timestamps: true }
)

const workerModel = mongoose.model('worker', workerSchema)

export default workerModel

import { Router } from 'express'
import { createWorker, getWorker } from '../controller/worker.controller'

export const WorkerRouter: Router = Router()

WorkerRouter.get('/', getWorker)
WorkerRouter.get('/:name', getWorker)
WorkerRouter.post('/', createWorker)
WorkerRouter.patch('/:name', createWorker)

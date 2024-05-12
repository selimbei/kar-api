import { Router } from 'express'
import { createWorker, getWorker } from '../controller/worker.controller'
import { requireAdmin } from '../middleware/auth'

export const WorkerRouter: Router = Router()

WorkerRouter.get('/', getWorker)
WorkerRouter.get('/:name', getWorker)
WorkerRouter.post('/', requireAdmin, createWorker)
WorkerRouter.patch('/:name', createWorker)

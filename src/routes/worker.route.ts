import { Router } from 'express'
import { createWorker, getWorker } from '../controller/worker.controller'
import { requireAdmin, requireUser } from '../middleware/auth'

export const WorkerRouter: Router = Router()

WorkerRouter.get('/', getWorker)
WorkerRouter.get('/:name', requireUser, getWorker)
WorkerRouter.post('/', requireAdmin, createWorker)
WorkerRouter.patch('/:name', createWorker)

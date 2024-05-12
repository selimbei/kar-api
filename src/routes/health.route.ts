import { Router } from 'express'
import { getWorker } from '../controller/worker.controller'

export const HealthRouter: Router = Router()

HealthRouter.get('/', getWorker)

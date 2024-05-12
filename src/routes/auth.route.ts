import { Router } from 'express'
import { createUser } from '../controller/auth.controller'

export const AuthRouter: Router = Router()

AuthRouter.post('/register', createUser)
// WorkerRouter.get('/:name', getWorker)
// WorkerRouter.post('/', createWorker)
// WorkerRouter.patch('/:name', createWorker)

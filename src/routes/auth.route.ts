import { Router } from 'express'
import { createUser, createSession, refreshSession } from '../controller/auth.controller'

export const AuthRouter: Router = Router()

AuthRouter.post('/register', createUser)
AuthRouter.post('/login', createSession)
AuthRouter.post('/refresh', refreshSession)

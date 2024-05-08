import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()
const port: number = 4000

app.use('/health', (req: Request, res: Response, next: NextFunction) => {
  res.status(400).send({ status: 400, data: 'iam sick' })
  next()
})

app.listen(port, () => console.log(`Server running on port ${port}`))

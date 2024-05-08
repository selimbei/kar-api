import express, { Application, Request, Response, NextFunction } from 'express'

const app: Application = express()
const port: Number = 4000

app.use('/health', (req: Request, res: Response, next: NextFunction) => {
  res.status(400).send({ status: 400, data: "i'am sick" })
})

app.listen(port, () => console.log(`Server running on port ${port}`))

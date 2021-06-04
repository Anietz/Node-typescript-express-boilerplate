import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import customerRoute from './routes/customer'

// Boot express
const app: Application = express()
const port = 5000

app.use(cors())
app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/customer', customerRoute)

// Application routing
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'Hello from Dev here new' })
})

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`))

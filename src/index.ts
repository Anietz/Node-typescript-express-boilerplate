import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import exampleRoute from './routes/example';
import dotenv from 'dotenv';
dotenv.config();

// Boot express
const app: Application = express()
const port = process.env.PORT

app.use(cors())
app.use(helmet())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', exampleRoute)

// Application routing
app.use('/', (req: Request, res: Response) => {
  res.status(200).send({ data: 'Hello from Dev here new' })
})

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`))

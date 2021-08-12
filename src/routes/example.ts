import express from 'express'
import { login,testAPi } from '../controller/example'

const router = express.Router()

router.post('/login', login)
router.get('/test', testAPi)

export default router

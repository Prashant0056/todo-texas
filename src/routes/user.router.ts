import { Router } from 'express'
import * as userController from '../controller/user.controller'
const router = Router()

router.post('/signup', userController.register)
router.post('/login')

export default router

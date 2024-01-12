import { Router } from 'express'
import * as TodoController from '../controllers/todos.controller'
const router = Router()

router.get('/', TodoController.getTodos)
router.post('/', TodoController.postTodos)

export default router

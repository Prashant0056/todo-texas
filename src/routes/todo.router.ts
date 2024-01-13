import { Router } from 'express'
import * as todoController from '../controller/todo.controller'
import { validate } from '../util/validate'
import { postTodoDTO } from '../validators/postTodo.validator'
const router = Router()

//POST to databse
router.post('/', validate(postTodoDTO), todoController.postTodos)

//GET todos by id
router.get('/:id', todoController.getTodosByID)

//DELETE by id
router.delete('/:id', todoController.deleteTodosByID)

//UPDATE by id
router.put('/:id', todoController.updateTodo)

export default router

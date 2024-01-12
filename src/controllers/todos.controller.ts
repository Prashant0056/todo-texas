import { NextFunction, Request, Response, response } from 'express'
import * as TodoService from '../services/todos.service'

export const getTodos = (req: Request, res: Response, next: NextFunction) => {
    const response = TodoService.getTodo()
    res.send(response)
}

export const postTodos = (req: Request, res: Response, next: NextFunction) => {
    const response = TodoService.postTodos(req.body)
    res.send(response)
}

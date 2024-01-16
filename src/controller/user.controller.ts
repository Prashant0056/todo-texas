import { Request, Response, NextFunction } from 'express'
import * as userService from '../service/user.service'
import { signupBodyDTO } from '../validators/signup.validator'

export const register = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const createdUser = await userService.signup(
            signupBodyDTO.parse(req.body)
        )
        res.status(201).json(createdUser)
    } catch (err) {
        next(err)
    }
}

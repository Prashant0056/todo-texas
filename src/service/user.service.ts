import Boom from '@hapi/boom'
import prisma from '../util/prisma'
import bcrypt from 'bcryptjs'
import { z } from 'zod'
import { signupBodyDTO } from '../validators/signup.validator'

export const signup = async (user: z.infer<typeof signupBodyDTO>) => {
    const { email, password } = user
    try {
        return await prisma.user.create({
            data: {
                email,
                password: await bcrypt.hash(password, 10),
            },
            select: {
                email: true,
                id: true,
            },
        })
    } catch (err: any) {
        console.log(err)
    }
}

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getTodo = () => {
    return [
        {
            id: 123,
            title: 'todo1',
        },
    ]
}

export const postTodos = async (body: any) => {
    const { title, status } = body
    return await prisma.todo.create({
        data: {
            title,
            status,
        },
    })
}

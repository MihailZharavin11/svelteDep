import {prisma} from "../../infrastructure/prisma/prismaClient";


export const postUser = async (dto: { id: number, name: string, email: string }) => {
    return prisma.user.create({
        data: {
            name: dto.name,
            email: dto.email
        }
    })
}


export const getUsers = async ()=>{
    return prisma.user.findMany();
}
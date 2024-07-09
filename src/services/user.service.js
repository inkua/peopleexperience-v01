import { prisma } from "@/libs/prisma";

export const getUserById = async (id) => {
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id),
        },
        select: {
            id: true,
            name: true,
            email: true,
            team: {
                select: {
                    id: true,
                    name: true
                }
            },
            assignments: {
                select: {
                    task: {
                        select: {
                            id: true,
                            name: true
                        }
                    },
                    status: {
                        select: {
                            id: true,
                            status: true
                        }
                    }
                }
            }
        },
    });

    return user;
}
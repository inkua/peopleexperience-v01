import { prisma } from "@/libs/prisma";

export const createUser = async (data) => {
    try {
        const newUser = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
                teamId: data.teamId,
                typeOfUser: data.typeOfUser || "USER",
            },
        });
        return newUser;
    } catch (error) {
        throw new Error("Failed to create user");
    }
};

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
};
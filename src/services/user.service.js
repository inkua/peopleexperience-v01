import { prisma } from "@/libs/prisma";

export const updateUser = async (id, data) => {
    try {
        const updatedUser = await prisma.user.update({
            where: { id: id },
            data: {
                ...(data.name && { name: data.name }),
                ...(data.email && { email: data.email }),
                ...(data.password && { password: data.password }),
                ...(data.teamId !== undefined && { teamId: Number(data.teamId) }),
                ...(data.typeOfUser && { typeOfUser: data.typeOfUser }),
            },
        });
        return updatedUser;
    } catch (error) {
        console.error("SERVICE: ", error);
        throw new Error("Failed to update user");
    }
};


export const createUser = async (data) => {
    
    try {
        const newUser = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
                teamId: Number(data.teamId),
                typeOfUser: data.typeOfUser,
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


export const deleteUser = async (id) => {
    try {
        const deletedUser = await prisma.user.delete({
            where: { id: parseInt(id) },
        });
        return deletedUser;
    } catch (error) {
        console.error("SERVICE: ", error);
        throw new Error("Failed to delete user");
    }
};
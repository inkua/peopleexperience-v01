import { prisma } from "@/libs/prisma";

export const getAllTeams = async () => {
    const teams = await prisma.team.findMany({
        include: {
            users: {
                select: {
                    name: true
                }
            }
        }
    });

    return teams;
}

export const getTeamById = async (id) => {
    const team = await prisma.team.findUnique({
        where: {
            id: parseInt(id),
        },
        include: {
            users: {
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            }
        }
    });

    return team;
}
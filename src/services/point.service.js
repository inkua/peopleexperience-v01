import { prisma } from "@/libs/prisma";

export const getRankingByTeamId = async (id) => {
    const users = await prisma.user.findMany({
        where: {
            teamId: parseInt(id),
        },
        select: {
            name: true,
            points: {
                select: {
                    points: true
                }
            }
        }
    });

    const formattedUsers = users.map(user => {
        const totalPoints = user.points.reduce((acc, point) => acc + point.points, 0);
        return {
            name: user.name,
            points: totalPoints || 0
        };
    });

    return formattedUsers;

}


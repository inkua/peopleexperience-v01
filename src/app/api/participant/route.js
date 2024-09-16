import { prisma } from "@/libs/prisma";
import { NextResponse } from "next/server";
import { createUser } from "@/services/user.service";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 3;

        const skip = (page - 1) * limit;
        const totalUsers = await prisma.user.count({
            where: {
                typeOfUser: 'USER'
            }
        });

        const users = await prisma.user.findMany({
            where: {
                typeOfUser: 'USER'
            },
            select: {
                id: true,
                name: true,
                email: true,
                teamId: true,
                totalPoints: true,
                typeOfUser: true
            },
            skip: skip,
            take: limit
        });

        const totalPages = Math.ceil(totalUsers / limit);
        const baseUrl = `${request.nextUrl.origin}${request.nextUrl.pathname}`;
        const nextPage = page < totalPages ? `${baseUrl}?page=${page + 1}&limit=${limit}` : null;
        const prevPage = page > 1 ? `${baseUrl}?page=${page - 1}&limit=${limit}` : null;

        const data = {
            info: {
                count: totalUsers,
                pages: totalPages,
                next: nextPage,
                prev: prevPage
            },
            results: users
        };

        return NextResponse.json(data);

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();

        if (body.typeOfUser !== 'USER') {
            return NextResponse.json({ error: 'Creating ADMIN users is not allowed.' }, { status: 403 });
        }

        const newUser = await createUser({
            name: body.name,
            email: body.email,
            password: body.password,
            teamId: body.teamId,
            typeOfUser: body.typeOfUser,
        });

        return NextResponse.json(newUser);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }
}
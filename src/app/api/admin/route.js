import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import { createUser } from "@/services/user.service";
import sendEmail from "@/services/send.email";
import randomPassword from "@/services/randomPassword.service";

export async function GET() {
    try {
        // Consulta para traer todos los usuarios que son administradores
        const admins = await prisma.user.findMany({
            where: {
                typeOfUser: "USER_ADMINISTRATOR",  // Filtra solo los administradores
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
            },
        });

        return NextResponse.json(admins);

    } catch (error) {
        console.error("Error fetching admins:", error);
        return NextResponse.json({ error: "Failed to fetch admins" }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const body = await request.json();
        const passwordRandom = randomPassword(8)
        const subject = "Este es tu Usuario: "
        const newUser = await createUser({
            name: body.name,
            email: body.email,
            password: passwordRandom,
            teamId: body.teamId,
            typeOfUser: "USER_ADMINISTRATOR",
        });
        const text = `Bienvenido estas son tus credenciales: Email: ${newUser.email} y esta es tu contraseña: ${passwordRandom}`
        sendEmail(newUser.email, subject, text);
        return NextResponse.json(newUser);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }
}







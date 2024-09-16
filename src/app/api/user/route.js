import { NextResponse } from "next/server";
import { createUser } from "@/services/user.service";

/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Crea un nuevo usuario
 *     description: Este endpoint permite crear un nuevo usuario en la base de datos.
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - teamId
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nombre del usuario
 *                 example: "Juan Pérez"
 *               email:
 *                 type: string
 *                 description: Email del usuario
 *                 example: "juan.perez@example.com"
 *               password:
 *                 type: string
 *                 description: Contraseña del usuario
 *                 example: "securePassword123"
 *               teamId:
 *                 type: integer
 *                 description: ID del equipo al que pertenece el usuario
 *                 example: 1
 *               typeOfUser:
 *                 type: string
 *                 description: Tipo de usuario (USER o USER_ADMINISTRATOR)
 *                 example: "USER"
 *     responses:
 *       200:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID del usuario creado
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: Nombre del usuario
 *                   example: "Juan Pérez"
 *                 email:
 *                   type: string
 *                   description: Email del usuario
 *                   example: "juan.perez@example.com"
 *                 teamId:
 *                   type: integer
 *                   description: ID del equipo al que pertenece el usuario
 *                   example: 1
 *                 typeOfUser:
 *                   type: string
 *                   description: Tipo de usuario
 *                   example: "USER"
 *       500:
 *         description: Error al crear el usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Mensaje de error
 *                   example: "Failed to create user"
 */
export async function POST(request) {
    try {
        const body = await request.json();
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
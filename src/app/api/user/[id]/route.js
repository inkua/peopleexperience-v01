import { NextResponse } from "next/server";
import { getUserById } from "@/services/user.service";

/**
 * @swagger
 * /api/user/{id}:
 *   get:
 *     summary: INFORMACIÓN DEL INTEGRANTE
 *     description: Recuperar un usuario por su ID junto con los detalles del equipo y las asignaciones de tareas.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: El ID del usuario a recuperar
 *     responses:
 *       200:
 *         description: Un usuario con detalles del equipo y asignaciones de tareas
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "John Doe"
 *                 email:
 *                   type: string
 *                   example: "johndoe@example.com"
 *                 team:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     name:
 *                       type: string
 *                       example: "Team A"
 *                 assignments:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       task:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             example: 1
 *                           name:
 *                             type: string
 *                             example: "Task A"
 *                       status:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: integer
 *                             example: 1
 *                           status:
 *                             type: string
 *                             example: "En Progreso"
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error interno del servidor
 */

export async function GET(request, { params }) {
    const { id } = params;

    try {
        const user = await getUserById(id);
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
import { NextResponse } from "next/server";
import { getTeamById } from "@/services/team.service";

/**
 * @swagger
 * /api/team/{id}:
 *   get:
 *     summary: PANTALLA TEAM
 *     description: Recuperar un equipo por su ID junto con los detalles de los usuarios.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: El ID del equipo a recuperar
 *     responses:
 *       200:
 *         description: Un equipo con detalles de los usuarios
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
 *                   example: "Equipo A"
 *                 users:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       name:
 *                         type: string
 *                         example: "John Doe"
 *                       email:
 *                         type: string
 *                         example: "johndoe@example.com"
 *       404:
 *         description: Equipo no encontrado
 *       500:
 *         description: Error interno del servidor
 */

export async function GET(request, { params }) {
    const { id } = params;

    try {
        const team = await getTeamById(id);

        if (!team) {
            return NextResponse.json({ error: "Equipo no encontrado" }, { status: 404 });
        }

        return NextResponse.json(team, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
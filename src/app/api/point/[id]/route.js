import { NextResponse } from "next/server";
import { getRankingByTeamId } from "@/services/point.service";

/**
 * @swagger
 * /api/point/{id}:
 *   get:
 *     summary: RANKING
 *     description: Recuperar todos los usuarios de un equipo por ID del equipo junto con sus puntos totales.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: El ID del equipo para recuperar usuarios
 *     responses:
 *       200:
 *         description: Una lista de usuarios con sus puntos totales
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: "John Doe"
 *                   points:
 *                     type: integer
 *                     example: 100
 *       404:
 *         description: Usuarios no encontrados para el ID de equipo dado
 *       500:
 *         description: Error interno del servidor
 */

export async function GET(request, { params }) {
    const { id } = params;

    try {
        const rankingByTeam = await getRankingByTeamId(id);

        return NextResponse.json(rankingByTeam, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
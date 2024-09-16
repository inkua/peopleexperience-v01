import { NextResponse } from "next/server";
import { getAllTeams } from "@/services/team.service";

/**
 * @swagger
 * /api/team:
 *   get:
 *     summary: HOME
 *     description: Recuperar todos los equipos junto con los nombres de sus usuarios.
 *     responses:
 *       200:
 *         description: Una lista de equipos con usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Equipo A"
 *                   users:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                           example: "John Doe"
 *       500:
 *         description: Error interno del servidor
 */

export async function GET(request) {
    try {
        const teams = await getAllTeams();

        return NextResponse.json(teams, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
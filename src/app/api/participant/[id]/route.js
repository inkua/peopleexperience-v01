import { NextResponse } from "next/server";
import { getUserById, updateUser } from "@/services/user.service";

export async function PUT(request, { params }) {
    try {
        const body = await request.json();
        const userId = Number(params.id)

        if (body.typeOfUser && body.typeOfUser !== 'USER') {
            return NextResponse.json({ error: 'Updating to ADMIN users is not allowed.' }, { status: 403 });
        }

        const updatedUser = await updateUser(userId, {
            name: body.name,
            email: body.email,
            password: body.password,
            teamId: body.teamId,
            typeOfUser: body.typeOfUser,
        });

        return NextResponse.json(updatedUser);

    } catch (error) {

        return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
    }

}

export async function GET(request, { params }) {
    const { id } = params;

    try {
        const user = await getUserById(id);
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json(user, { status: 200 });
    } catch (error) {
        console.log("ERROR: ",);

        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


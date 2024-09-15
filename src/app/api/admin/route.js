import { NextResponse } from "next/server";
import { createUser } from "@/services/user.service";

export async function POST(request) {
    try {
        const body = await request.json();
        const newUser = await createUser({
            name: body.name,
            email: body.email,
            password: body.password,
            teamId: body.teamId,
            typeOfUser: "USER_ADMINISTRATOR",
        });

        return NextResponse.json(newUser);
    } catch (error) {
        return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        const body = await request.json();
        const { id } = req.params
        const newUser = await updateUser( id , {
            name: body.name,
            email: body.email,
            password: body.password,
            teamId: body.teamId,
            typeOfUser: body.typeOfUser,
        });

        return NextResponse.json(newUser);
    } catch (error) {
        return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
    }
}


export async function DELETE(request) {
    try {
        const { id } = req.params
        const newUser = await deleteUser( id )
        return NextResponse.json(newUser);
    } catch (error) {
        return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
    }
}





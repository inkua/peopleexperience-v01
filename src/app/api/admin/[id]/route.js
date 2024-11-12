import { NextResponse } from "next/server";
import { updateUser, deleteUser, getUserById} from "@/services/user.service";


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

export async function PUT(request, { params }) {
    try {
        const body = await request.json();
        const { id } = params; 

        if (!id) {
            return NextResponse.json({ error: "Missing user ID" }, { status: 400 });
        }

        const updatedUser = await updateUser(Number(id), {
            name: body.name,
            email: body.email,
            password: body.password,
            teamId: body.teamId,
            typeOfUser: body.typeOfUser,
        });

        return NextResponse.json(updatedUser);

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}


export async function DELETE(request, { params }) {
    try {
        const { id } = params; 

        if (!id) {
            return NextResponse.json({ error: "Missing user ID" }, { status: 400 });
        }

        const deletedUser = await deleteUser(id);

        return NextResponse.json(deletedUser);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
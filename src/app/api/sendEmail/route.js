import sendEmail from "@/services/send.email";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        //URL DE LA API: http://localhost:3000/api/sendEmail
        // Leer el cuerpo como JSON directamente
        const { to, subject, text } = await request.json();

        // Llamar a la función de envío de email
        sendEmail(to, subject, text);

        return NextResponse.json({ status: 200, message: "Mensaje enviado" });
    } catch (error) {
        console.log(`ACA ESTA EL ERROR ${error}`);
        return NextResponse.json({ error: "Fallo al enviar el email" }, { status: 500 });
    }
}




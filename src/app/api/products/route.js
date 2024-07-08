import { getAllProducts } from "@/services/productos.service";
import { NextResponse } from "next/server";

export async function GET(){
    const data = getAllProducts()
    return NextResponse.json(data)
}







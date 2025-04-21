import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route.js";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);
    console.log("Sesión:", session);

    if (!session) {
      return NextResponse.json({ message: "No autorizado" }, { status: 401 });
    }

    const userEmail = session.user.email;

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    const { title, type } = await req.json();
    console.log("Datos recibidos:", { title, type });

    if (!title || !type) {
      return NextResponse.json(
        { error: "Faltan datos: title o type" },
        { status: 400 }
      );
    }

    console.log("Creando categoría...");
    const categoria = await prisma.category.create({
      data: {
        title,
        type,
        userId: user.id,
      },
    });

    return NextResponse.json(categoria, { status: 201 });
  } catch (error) {
    console.error("Error al crear categoría:", error);
    return NextResponse.json(
      { error: "No se pudo crear la categoría" },
      { status: 500 }
    );
  }
}

export async function GET(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "No autenticado" }, { status: 401 });
    }

    const userEmail = session.user.email;

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    const categorias = await prisma.categorias.findMany({
      where: { userId: user.id },
    });

    return NextResponse.json(categorias, { status: 200 });
  } catch (error) {
    console.error("Error al obtener las categorías:", error);
    return NextResponse.json(
      { error: "Error al obtener las categorías" },
      { status: 500 }
    );
  }
}

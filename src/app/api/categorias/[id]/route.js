import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

export async function PUT(req, context) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return new Response(JSON.stringify({ error: "No autorizado" }), {
      status: 401,
    });
  }

  const { id } = context.params; // 👈 ESTA es la forma correcta
  const body = await req.json();

  try {
    const categoria = await prisma.categorias.update({
      where: {
        id: parseInt(id),
        userId: (
          await prisma.user.findUnique({ where: { email: session.user.email } })
        ).id,
      },
      data: { title: body.name },
    });

    return new Response(JSON.stringify(categoria), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al actualizar categoría:", error);
    return new Response(
      JSON.stringify({ error: "No se pudo actualizar la categoría" }),
      { status: 500 }
    );
  }
}

export async function DELETE(req, context) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return new Response(JSON.stringify({ error: "No autorizado" }), {
      status: 401,
    });
  }

  const { params } = context;
  const id = params.id;

  if (!id) {
    return new Response(JSON.stringify({ error: "ID no proporcionado" }), {
      status: 400,
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return new Response(JSON.stringify({ error: "Usuario no encontrado" }), {
        status: 404,
      });
    }

    await prisma.category.delete({
      where: {
        id: parseInt(id),
        userId: user.id,
      },
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    console.error("Error al eliminar categoría:", error);
    return new Response(
      JSON.stringify({ error: "No se pudo eliminar la categoría" }),
      { status: 500 }
    );
  }
}

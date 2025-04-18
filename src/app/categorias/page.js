"use client";

import { useSession } from "next-auth/react";
import Sidebar from "@/components/Dashboard/Sidebar";
import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import AgregarCategoria from "@/components/Categorias/AgregarCategoria";
import ListarCategorias from "@/components/Categorias/ListarCategorias";

export default function CategoriasPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Cargando...</p>;

  return (
    <div className="flex flex-col h-full">
      <DashboardHeader userName={session?.user?.name} />
      <main className="flex min-h-screen">
        <Sidebar />
        <div className="flex-col p-4">
          <AgregarCategoria />
          <ListarCategorias />
        </div>
      </main>
    </div>
  );
}

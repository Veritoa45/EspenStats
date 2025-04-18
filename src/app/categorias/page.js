"use client";

import { useSession } from "next-auth/react";
import Sidebar from "@/components/Dashboard/Sidebar";
import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import AgregarCategoria from "@/components/Categorias/AgregarCategoria";
import ListarCategorias from "@/components/Categorias/ListarCategorias";
import Footer from "@/components/Landing/Footer";

export default function CategoriasPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Cargando...</p>;

  return (
    <div className="flex flex-col">
      <DashboardHeader userName={session?.user?.name} />
      <main className="flex min-h-[calc(100vh-140px)]">
        <Sidebar />
        <div className="flex-col p-4">
          <AgregarCategoria />
          <ListarCategorias />
        </div>
      </main>
      <Footer />
    </div>
  );
}

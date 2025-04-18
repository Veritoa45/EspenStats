"use client";

import { useSession } from "next-auth/react";
import Sidebar from "@/components/Dashboard/Sidebar";
import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import AgregarMovimiento from "@/components/Movimientos/AgregarMovimiento";
import ListarMovimientos from "@/components/Movimientos/ListarMovimientos";

export default function MovimientosPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Cargando...</p>;

  return (
    <div className="flex flex-col h-full">
      <DashboardHeader userName={session?.user?.name} />
      <main className="flex min-h-screen">
        <Sidebar />
        <div className="flex-col p-4">
          <AgregarMovimiento />
          <ListarMovimientos />
        </div>
      </main>
    </div>
  );
}

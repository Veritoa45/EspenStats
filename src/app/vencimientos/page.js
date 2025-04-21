"use client";

import { useSession } from "next-auth/react";
import Sidebar from "@/app/components/Dashboard/Sidebar";
import DashboardHeader from "@/app/components/Dashboard/DashboardHeader";
import AgregarVencimiento from "@/app/components/Vencimientos/AgregarVencimiento";
import ListarVencimientos from "@/app/components/Vencimientos/ListarVencimientos";
import Footer from "@/app/components/Landing/Footer";

const VencimientosPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Cargando...</p>;

  return (
    <div className="flex flex-col ">
      <DashboardHeader userName={session?.user?.name} />
      <main className="flex min-h-[calc(100vh-140px)]">
        <Sidebar />
        <div className="flex-col p-4">
          <AgregarVencimiento />
          <ListarVencimientos />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VencimientosPage;

"use client";

import { useSession } from "next-auth/react";
import Sidebar from "@/app/components/Dashboard/Sidebar";
import DashboardHeader from "@/app/components/Dashboard/DashboardHeader";
import StatsCards from "@/app/components/Dashboard/StatsCards";
import Footer from "@/app/components/Landing/Footer";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Cargando...</p>;

  return (
    <div className="flex flex-col">
      <DashboardHeader userName={session?.user?.name} />
      <main className="flex min-h-[calc(100vh-140px)]">
        <Sidebar />
        <StatsCards />
        {/* Aquí más adelante se pueden agregar los vencimientos y otros componentes */}
      </main>
      <Footer />
    </div>
  );
}

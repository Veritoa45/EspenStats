import Sidebar from "@/app/components/Sidebar";
import DashboardHeader from "@/app/components/DashboardHeader";
import StatsCards from "@/app/components/StatsCards";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50 min-h-screen">
        <DashboardHeader />
        <StatsCards />
        {/* Aquí más adelante se pueden agregar los vencimientos y otros componentes */}
      </main>
    </div>
  );
}

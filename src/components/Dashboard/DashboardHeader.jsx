"use client";

const DashboardHeader = ({ userName }) => {
  return (
    <header className="bg-purple-950 w-full flex justify-between items-center gap-4 text-white p-4">
      <h2 className="font-merienda font-semibold text-5xl">EspenStats</h2>
      <h3 className="text-2xl font-semibold">Bienvenid@ {userName}</h3>
    </header>
  );
};

export default DashboardHeader;

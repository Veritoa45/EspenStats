"use client";

import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-100 p-4 border-r">
      <h2 className="text-2xl font-bold mb-6">EspenStat</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="hover:text-blue-600">
          Resumen
        </Link>
        <Link href="/dashboard/movimientos" className="hover:text-blue-600">
          Ver movimientos
        </Link>
        <Link href="/dashboard/gasto" className="hover:text-blue-600">
          Agregar gasto
        </Link>
        <Link href="/dashboard/ingreso" className="hover:text-blue-600">
          Agregar ingreso
        </Link>
        <Link href="/dashboard/vencimiento" className="hover:text-blue-600">
          Agregar vencimiento
        </Link>
      </nav>
    </aside>
  );
}

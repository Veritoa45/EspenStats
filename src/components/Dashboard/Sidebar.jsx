"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();

  const handleSignOut = async () => {
    localStorage.clear();
    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <aside className="bg-fuchsia-400 flex flex-col gap-4 w-300 p-4">
      <h2 className="text-2xl font-bold mb-6">EspenStat</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="hover:text-blue-600">
          Inicio
        </Link>
        <Link href="/movimientos" className="hover:text-blue-600">
          Movimientos
        </Link>
        <Link href="/categorias" className="hover:text-blue-600">
          Categorías
        </Link>
        <Link href="/vencimientos" className="hover:text-blue-600">
          Vencimientos
        </Link>
      </nav>
      <button
        onClick={handleSignOut}
        className="bg-purple-700 px-4 py-2 rounded hover:bg-purple-600 mt-10"
      >
        Cerrar sesión
      </button>
    </aside>
  );
}

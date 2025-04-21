"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Sidebar = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    localStorage.clear();
    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <aside className="bg-fuchsia-400 flex flex-col w-300 min-h-[calc(100vh-160px)] p-4 justify-between ">
      <div>
        <Image
          src="/LogoPrueba.jpg"
          alt="Logo"
          width={64}
          height={64}
          className="rounded-full mx-auto mt-4 mb-[40px] object-cover"
        />
        <nav className="flex flex-col gap-[25px]">
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
      </div>
      <button
        onClick={handleSignOut}
        className="bg-purple-700 px-4 py-2 rounded hover:bg-purple-600"
      >
        Cerrar sesión
      </button>
    </aside>
  );
};

export default Sidebar;

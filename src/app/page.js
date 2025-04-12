"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginButton() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Si el usuario ya está autenticado, redirige al dashboard
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Cargando...</p>;
  }

  if (session) {
    return (
      <>
        <p>Bienvenido, {session.user.name}</p>
        <button onClick={() => signOut()}>Cerrar sesión</button>
      </>
    );
  }

  return (
    <button onClick={() => signIn("google")}>Iniciar sesión con Google</button>
  );
}

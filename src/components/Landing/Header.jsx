"use client";

import { useSession, signIn } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

const Header = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  if (status === "loading" || status === "authenticated") return null;

  return (
    <div className="bg-cyan-300 flex w-full justify-between items-center p-4">
      <h1 className="font-merienda font-semibold text-5xl">EspenStats</h1>
      <button
        className="bg-cyan-700 p-4 rounded-lg flex items-center gap-2 text-white hover:bg-cyan-600 transition-colors duration-300"
        onClick={() => signIn("google")}
      >
        <Icon icon="flat-color-icons:google" width="32" height="32" />
        <p className="text-lg">Sign in</p>
      </button>
    </div>
  );
};

export default Header;

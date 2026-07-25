"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="h-9 w-28 animate-pulse rounded-full bg-koko-border" />
    );
  }

  if (session?.user) {
    return (
      <button
        onClick={() => signOut()}
        className="flex items-center gap-2 rounded-full border border-koko-border bg-white/60 px-3 py-1.5 text-sm font-medium text-koko-text transition hover:bg-white"
      >
        {session.user.image && (
          <Image
            src={session.user.image}
            alt={session.user.name ?? "Usuario"}
            width={22}
            height={22}
            className="rounded-full"
          />
        )}
        <span className="max-w-[110px] truncate">{session.user.name}</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn("discord")}
      className="rounded-full border border-koko-coral/40 px-4 py-2 text-sm font-medium text-koko-coralDark transition hover:bg-koko-coral hover:text-white"
    >
      Iniciar Sesión
    </button>
  );
}

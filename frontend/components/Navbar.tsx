"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const { status } = useSession();

  return (
    <div className="fixed bottom-2 left-2 z-20 right-2 mx-auto bg-gray-300 py-3 rounded-xl max-w-sm">
      <div className="px-4 flex justify-between">
        <Link href="/">
          <Image
            src="/img/logo.svg"
            alt="Listo"
            width={60}
            height={25}
          />
        </Link>
        <div className="flex gap-4">
          {status !== "authenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <div
              onClick={() => signOut()}
              className="cursor-pointer">
              Logout
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

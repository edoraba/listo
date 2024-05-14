"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { data, status } = useSession();
  const router = useRouter();
  console.log(data, status);

  if (status === "loading") {
    return <div>Loading</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <main className="">
      <div>Login</div>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
    </main>
  );
}

"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";

import { signIn, signOut, useSession } from "next-auth/react";

const AuthButton = () => {
  const { data: session } = useSession();
  const router = useRouter();
  
    console.log(session?.user);

  const  signoutHandler = async () => {
    await signOut();
    await router.push("/api/auth/signin")
    
    

  }
  if (session) {
    return (
      <div>
        {session?.user?.name}
        <br />
        <button
          className="px-6 py-2 rounded-lg bg-green-900 "
          onClick={signoutHandler}
        >
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <div>
      Not Signed in <br />
      <button className="px-6 py-2  rounded-lg bg-green-700" onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

export default function NavMenu() {
  return (
    <div className="border">
      <AuthButton  />
    </div>
  );
}

import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const LogOut = () => {
  
  const router = useRouter();

  const signoutHandler = async () => {
    await signOut();
    await router.push("/api/auth/signin");
  };

  return (
    <div className="max-h-full max-w-full text-center flex justify-center items-center flex-col border">
      <h1> LogOutPage</h1>
      <button
        className="px-6 py-2 rounded-lg bg-green-900 "
        onClick={signoutHandler}
      >
        Sign Out
      </button>
    </div>
  );
};

export default LogOut;

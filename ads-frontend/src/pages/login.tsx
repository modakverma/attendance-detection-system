import { signIn } from "next-auth/react";
import Link from "next/link";
import React, { MouseEventHandler } from "react";

const Login = () => {
  const handleLoginClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    signIn();
  };
  return (
    <div className=" flex flex-col  gap-5 items-center justify-center w-full h-screen">
      <h1 className="text-2xl capitalize text-red-500">
        you are not authorised to access this page !
      </h1>
      <Link
        href={"/"}
        className="fixed top-8 right-8 bg-blue-400/20 px-10 py-4 hover:bg-bllue-200/10 rounded-lg transition text-white border border-slate-200/20"
      >
        Admin Dashboard
      </Link>
      <button
        onClick={handleLoginClick}
        className="bg-slate-400/20 px-10 py-4 hover:bg-slate-200/10 rounded-lg transition"
      >
        Login 🚀
      </button>
    </div>
  );
};

export default Login;

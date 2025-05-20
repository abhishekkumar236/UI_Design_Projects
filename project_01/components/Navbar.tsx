import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="h-14 w-full flex items-center justify-between px-14 fixed top-0 left-0 right-0 z-10 backdrop-blur-md">
      <h1 className="font-bold text-3xl cursor-pointer bg-gradient-to-r from bg-purple-600 to-purple-700 bg-clip-text text-transparent">
        AI.labs
      </h1>
      <div className="links flex items-center gap-5">
        <Link href={"/login"} className="font-semibold text-lg">
          Log In
        </Link>
        <Link
          href={"/signup"}
          className="font-semibold text-lg px-3 py-1 rounded-lg bg-purple-700 hover:bg-purple-900"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

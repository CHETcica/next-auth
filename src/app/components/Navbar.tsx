"use client"
import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
function navbar() {
  return (
    <nav className="bg-[#333] text-white p-5">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link href={"/"}>NEXT</Link>
          </div>
          <ul className="flex">
            <li className="mx-3">
              <Link href={"/login"}>Sign in</Link>
            </li>
            <li className="mx-3">
              <Link href={"/register"}>Sign up</Link>
            </li>
            <li className="mx-3">
              <a className="bg-red-500 text-white p-2 rounded-md" onClick={()=> signOut()}>SignOut</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default navbar;

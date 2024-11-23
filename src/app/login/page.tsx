"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { signIn } from 'next-auth/react';
import { redirect, useRouter } from "next/navigation";

function LoginPage() {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[error, setError] = useState("");

  const router = useRouter();
  const handleSubmit = async (e)=> {
    e.perventDefault();
    try {
      const res = await signIn("credentials",{
        email, password, redirect: false
      })
      if (res?.error) {
        setError("Invalid credentai")
      }
      router.replace("welcome");
        
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-5">
        <h3>Login page</h3>
        <hr />
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="w-fit bg-red-500 p-2 rounded-md text-white">
              {error}
            </div>
          )}
          <input  onChange={(e) => setEmail(e.target.value)}
            className="block bg-gray-300 my-2 rounded-md"
            type="email"
            placeholder="Enter your email"
          />
          <input onChange={(e) => setPassword(e.target.value)}
            className="block bg-gray-300 my-2 rounded-md"
            type="password"
            placeholder="Enter your password"
          />

          <button
            type="submit"
            className="bg-green-500 p-2 rounded-md text-white"
          >
            Sign in
          </button>
        </form>
        <hr />
        <p>
          Already have an account? go to{" "}
          <Link className="text-blue-500 hover:underline" href={"/register"}>
            Register
          </Link>{" "}
          Page
        </p>
      </div>
    </div>
  );
}

export default LoginPage;

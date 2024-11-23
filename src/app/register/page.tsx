"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpasword, setConfirmpasword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmpasword) {
      setError("Passwords do not match!");
      return;
    }
    if (!name || !email || !password || !confirmpasword) {
      setError("Please complete all input!");
      return;
    }
    try {
      const resCheckUser = await fetch("http://localhost:3000/api/checkUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resCheckUser.json();

      if (user) {
        setError("User already exists!");
        return;
      }

      const res = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (res.ok) {
        const form = e.target;
        setError("");
        setSuccess("User Registration Successfully");
        form.reset();
      } else {
        console.log("User registration failed.");
      }

      window.location.href = "/login"; // Redirect on success
    } catch (error) {
      console.log("Error during registration", error);
      setError("Something went wrong!");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-5">
        <h3>Register page</h3>
        <hr />
        <form className="my-5" onSubmit={handleSubmit}>
          {error && (
            <div className="w-fit bg-red-500 p-2 rounded-md text-white">
              {error}
            </div>
          )}
          {success && (
            <div className="w-fit bg-green-500 p-2 rounded-md text-white">
              {success}
            </div>
          )}
          <input
            onChange={(e) => setName(e.target.value)}
            className="block p-2 bg-gray-300 my-2 rounded-md"
            type="text"
            placeholder="Enter your name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="block p-2 bg-gray-300 my-2 rounded-md"
            type="email"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="block p-2 bg-gray-300 my-2 rounded-md"
            type="password"
            placeholder="Enter your password"
          />
          <input
            onChange={(e) => setConfirmpasword(e.target.value)}
            className="block p-2 bg-gray-300 my-2 rounded-md"
            type="password"
            placeholder="Confirm your password"
          />
          <button
            type="submit"
            className="bg-green-500 p-2 rounded-md text-white"
          >
            Sign up
          </button>
        </form>
        <hr />
        <p>
          Do not have an account? go to{" "}
          <Link className="text-blue-500 hover:underline" href={"/register"}>
            Login
          </Link>{" "}
          Page
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;

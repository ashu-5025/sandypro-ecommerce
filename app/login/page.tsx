"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {

  const [username,
    setUsername] =
    useState("");

  const [password,
    setPassword] =
    useState("");

  const handleLogin =
    async () => {

      const result =
        await signIn(
          "credentials",
          {
            username,
            password,
            redirect: false,
          }
        );

      if (!result?.error) {

        window.location.href =
          "/admin";

      } else {

        alert(
          "Invalid Credentials"
        );
      }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Admin Login
        </h1>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(
                e.target.value
              )
            }
            className="w-full border border-gray-300 rounded-2xl px-5 py-4"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full border border-gray-300 rounded-2xl px-5 py-4"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl text-xl font-semibold"
          >
            Login
          </button>

        </div>

      </div>

    </main>
  );
}
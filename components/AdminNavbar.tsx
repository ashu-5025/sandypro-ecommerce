"use client";

import Link from "next/link";

import { signOut } from "next-auth/react";

export default function AdminNavbar() {

  return (
    <nav className="bg-white shadow-md px-8 py-5 flex justify-between items-center rounded-2xl mb-10">

      <h1 className="text-3xl font-bold text-green-700">
        SANDYPRO Admin
      </h1>

      <div className="flex items-center gap-6">

        <Link
          href="/admin"
          className="font-semibold hover:text-green-700"
        >
          Products
        </Link>

        <Link
          href="/admin/orders"
          className="font-semibold hover:text-green-700"
        >
          Orders
        </Link>

        <button
          onClick={() =>
            signOut({
              callbackUrl: "/login",
            })
          }
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl"
        >
          Logout
        </button>

      </div>

    </nav>
  );
}
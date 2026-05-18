"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Navbar() {

  const { cart } = useCart();

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <h1 className="text-3xl font-bold tracking-wide cursor-pointer">
            SANDYPRO
          </h1>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex gap-8 text-lg">

          <Link href="/">
            <button className="hover:text-green-200 transition">
              Home
            </button>
          </Link>

          <button className="hover:text-green-200 transition">
            Products
          </button>

          <button className="hover:text-green-200 transition">
            About
          </button>

          <button className="hover:text-green-200 transition">
            Contact
          </button>
        </div>

        {/* Cart */}
        <Link href="/cart">
          <button className="bg-white text-green-700 px-5 py-2 rounded-xl font-semibold hover:bg-green-100 transition">
            Cart ({cart.length})
          </button>
        </Link>

      </div>
    </nav>
  );
}
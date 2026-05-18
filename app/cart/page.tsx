"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";

export default function CartPage() {

  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <main className="min-h-screen bg-gray-50">

      <Navbar />

      <div className="max-w-6xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold mb-12">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-2xl text-gray-500">
            Your cart is empty
          </div>
        ) : (

          <div className="grid lg:grid-cols-3 gap-10">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="bg-white rounded-3xl shadow-md p-6 flex gap-6 items-center"
                >

                  <div className="relative w-32 h-32">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div className="flex-1">

                    <h2 className="text-2xl font-bold">
                      {item.title}
                    </h2>

                    <p className="text-green-700 text-2xl font-bold mt-3">
                      ₹{item.price}
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-xl"
                  >
                    Remove
                  </button>

                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white rounded-3xl shadow-md p-8 h-fit">

              <h2 className="text-3xl font-bold mb-8">
                Order Summary
              </h2>

              <div className="flex justify-between text-xl mb-6">
                <span>Total</span>

                <span className="font-bold text-green-700">
                  ₹{totalPrice}
                </span>
              </div>

              <button className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl text-xl font-semibold">
                Checkout
              </button>

            </div>

          </div>
        )}

      </div>
    </main>
  );
}
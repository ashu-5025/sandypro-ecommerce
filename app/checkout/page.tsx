"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {

  const { cart } = useCart();
    const [customerName,
      setCustomerName] =
      useState("");

    const [email,
      setEmail] =
      useState("");

    const [phone,   
      setPhone] =
      useState("");

    const [address,
      setAddress] =
      useState("");
  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );
  const handleCheckout =
    async () => {

      const response =
        await fetch(
          "/api/orders",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({

              customerName,
              email,
              address,

              totalAmount:
                totalPrice,

              items: cart,
            }),
          }
        );

      if (response.ok) {

        alert(
          "Order Placed Successfully!"
        );

      } else {

        alert(
          "Checkout Failed"
        );
      }
  };
  return (
    <main className="min-h-screen bg-gray-50">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold mb-12">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Customer Form */}
          <div className="bg-white rounded-3xl shadow-md p-8">

            <h2 className="text-3xl font-bold mb-8">
              Customer Details
            </h2>

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                value={customerName}
                onChange={(e) =>
                  setCustomerName(
                  e.target.value
                  )
                }
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-700"
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-700"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) =>
                    setEmail(
                        e.target.value
                    )
                }
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-700"         
              />

              <input
                type="text"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) =>
                    setPhone(
                      e.target.value
                    )
                }
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-700"
              />

              <textarea
                placeholder="Delivery Address"
                rows={5}
                value={address}
                onChange={(e) =>
                    setAddress(
                      e.target.value
                    )
                }
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-700"
              />

            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-3xl shadow-md p-8 h-fit">

            <h2 className="text-3xl font-bold mb-8">
              Order Summary
            </h2>

            <div className="space-y-5">

              {cart.map((item) => (

                <div
                  key={item.id}
                  className="flex justify-between items-center border-b pb-4"
                >

                  <div>
                    <h3 className="font-semibold text-lg">
                      {item.title}
                    </h3>

                    <p className="text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-bold text-green-700">
                    ₹{item.price * item.quantity}
                  </p>

                </div>
              ))}

            </div>

            <div className="flex justify-between text-2xl font-bold mt-10">

              <span>Total</span>

              <span className="text-green-700">
                ₹{totalPrice}
              </span>

            </div>

            <button
              onClick={handleCheckout}
              className="w-full mt-10 bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl text-xl font-semibold shadow-lg"
            >
              Place Order
            </button>

          </div>

        </div>

      </div>

    </main>
  );
}
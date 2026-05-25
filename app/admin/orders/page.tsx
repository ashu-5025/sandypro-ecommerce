"use client";

import { useEffect, useState } from "react";
import AdminNavbar from "@/components/AdminNavbar";

export default function OrdersPage() {

  const [orders,
    setOrders] =
    useState<any[]>([]);

  useEffect(() => {

    fetchOrders();

  }, []);

  const fetchOrders =
    async () => {

      const response =
        await fetch(
          "/api/orders/all"
        );

      const data =
        await response.json();

      setOrders(data);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <AdminNavbar />

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-12">
          Customer Orders
        </h1>

        <div className="space-y-8">

          {orders.map((order) => (

            <div
              key={order.id}
              className="bg-white rounded-3xl shadow-lg p-8"
            >

              <div className="flex justify-between items-start mb-8">

                <div>

                  <h2 className="text-2xl font-bold">
                    {order.customerName}
                  </h2>

                  <p className="text-gray-600">
                    {order.email}
                  </p>

                  <p className="text-gray-600 mt-2">
                    {order.address}
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-2xl font-bold text-green-700">
                    ₹{order.totalAmount}
                  </p>

                  <p className="text-gray-500 mt-2">
                    {
                      new Date(
                        order.createdAt
                      ).toLocaleString()
                    }
                  </p>

                </div>

              </div>

              <div className="border-t pt-6">

                <h3 className="text-xl font-bold mb-4">
                  Ordered Products
                </h3>

                <div className="space-y-4">

                  {order.items.map(
                    (item: any) => (

                      <div
                        key={item.id}
                        className="flex justify-between items-center bg-gray-100 p-4 rounded-2xl"
                      >

                        <div>

                          <h4 className="font-bold">
                            {
                              item.product
                                .title
                            }
                          </h4>

                          <p className="text-gray-500">
                            Quantity:
                            {" "}
                            {item.quantity}
                          </p>

                        </div>

                        <p className="font-bold text-green-700">
                          ₹
                          {
                            item.product
                              .price *
                            item.quantity
                          }
                        </p>

                      </div>

                    )
                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}
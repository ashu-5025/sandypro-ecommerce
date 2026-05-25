"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {

  const [title, setTitle] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [image, setImage] =
    useState("");

  const [description,
    setDescription] =
    useState("");

  const [products,
    setProducts] =
    useState<any[]>([]);

  useEffect(() => {

    fetchProducts();

  }, []);

  const fetchProducts =
    async () => {

      const response =
        await fetch(
          "/api/products/all"
        );

      const data =
        await response.json();

      setProducts(data);
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    const response =
      await fetch(
        "/api/products",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            title,
            price: Number(price),
            image,
            description,
          }),
        }
      );

    if (response.ok) {

      alert("Product Added!");

      fetchProducts();

      setTitle("");
      setPrice("");
      setImage("");
      setDescription("");

    } else {

      alert(
        "Something went wrong"
      );

    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10">

        <h1 className="text-5xl font-bold mb-10">
          Admin Dashboard
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <input
            type="text"
            placeholder="Product Title"
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
            className="w-full border border-gray-300 rounded-2xl px-5 py-4"
            required
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) =>
              setPrice(
                e.target.value
              )
            }
            className="w-full border border-gray-300 rounded-2xl px-5 py-4"
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={async (e) => {

              const file =
                e.target.files?.[0];

              if (!file) return;

              const formData =
                new FormData();

              formData.append(
                "file",
                file
              );

              const response =
                await fetch(
                  "/api/upload",
                  {
                    method: "POST",
                    body: formData,
                  }
                );

              const data =
                await response.json();

              setImage(
                data.imageUrl
              );

              alert(
                "Image Uploaded Successfully"
              );

            }}
            className="w-full border border-gray-300 rounded-2xl px-5 py-4"
          />

          <textarea
            placeholder="Description"
            rows={5}
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className="w-full border border-gray-300 rounded-2xl px-5 py-4"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-2xl text-xl font-semibold"
          >
            Add Product
          </button>

        </form>

        <div className="mt-16">

          <h2 className="text-3xl font-bold mb-8">
            All Products
          </h2>

          <div className="space-y-4">

            {products.map((product) => (

              <div
                key={product.id}
                className="flex items-center justify-between bg-gray-100 p-4 rounded-2xl"
              >

                <div>

                  <h3 className="font-bold text-xl">
                    {product.title}
                  </h3>

                  <p>
                    ₹{product.price}
                  </p>

                </div>

                <button
                  onClick={async () => {

                    const response =
                      await fetch(
                        "/api/products",
                        {
                          method:
                            "DELETE",
                          headers: {
                            "Content-Type":
                              "application/json",
                          },
                          body: JSON.stringify({
                            id: product.id,
                          }),
                        }
                      );

                    if (response.ok) {

                      alert(
                        "Product Deleted"
                      );

                      fetchProducts();

                    }
                  }}
                  className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl"
                >
                  Delete
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </main>
  );
}
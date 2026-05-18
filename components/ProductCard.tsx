"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

type ProductCardProps = {
  id: string;
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({
  id,
  title,
  price,
  image,
}: ProductCardProps) {

  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden border border-gray-100">

      {/* Product Image Click */}
      <Link href={`/products/${id}`}>
        <div className="relative h-72 bg-gradient-to-b from-white to-gray-50 cursor-pointer">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-6"
          />
        </div>
      </Link>

      <div className="p-6">

        {/* Product Title Click */}
        <Link href={`/products/${id}`}>
          <h2 className="text-2xl font-bold text-gray-800 cursor-pointer hover:text-green-700">
            {title}
          </h2>
        </Link>

        <p className="text-green-700 text-3xl font-extrabold mt-4">
          ₹{price}
        </p>

        <button
          onClick={() => {
            addToCart({
              id,
              title,
              price,
              image,
            });

            alert(`${title} added to cart`);
          }}
          className="mt-6 w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-2xl text-lg font-semibold shadow-md"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}
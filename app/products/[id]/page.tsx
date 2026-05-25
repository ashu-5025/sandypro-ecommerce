import Image from "next/image";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    notFound();
  }
  
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        <div className="bg-white rounded-3xl shadow-lg p-10">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="object-contain mx-auto"
          />
        </div>

        <div>
          <h1 className="text-5xl font-bold text-gray-900">
            {product.title}
          </h1>

          <p className="text-green-700 text-4xl font-bold mt-6">
            ₹{product.price}
          </p>

          <p className="mt-8 text-gray-600 text-lg leading-relaxed">
            {product.description}
          </p>

          <button className="mt-10 bg-green-700 hover:bg-green-800 text-white px-10 py-4 rounded-2xl text-xl shadow-lg">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
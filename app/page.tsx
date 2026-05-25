import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { prisma } from "@/lib/prisma";

export default async function Home() {

  const products =
    await prisma.product.findMany();

  return (
    <main className="min-h-screen bg-gray-50">

      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-14">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (

            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />

          ))}

        </div>

      </section>

      <Footer />

    </main>
  );
}
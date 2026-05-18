import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

const products = [
  {
    id: "1",
    title: "Liquid Detergent",
    price: 299,
    image: "/products/detergent.jpg",
  },
  {
    id: "2",
    title: "Floor Cleaner",
    price: 199,
    image: "/products/floor-cleaner.jpg",
  },
  {
    id: "3",
    title: "Dish Wash Liquid",
    price: 149,
    image: "/products/dishwash.jpg",
  },
  {
    id: "4",
    title: "Glass Cleaner",
    price: 129,
    image: "/products/glass-cleaner.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Featured Products
          </h2>

          <p className="text-gray-600 mt-4">
            Powerful cleaning solutions for every need
          </p>
        </div>

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
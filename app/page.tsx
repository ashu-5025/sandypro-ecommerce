// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold text-center pt-20">
//         My E-Commerce Store
//       </h1>
//     </main>
//   );
// }
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="text-center pt-20">
        <h1 className="text-5xl font-bold">
          Welcome to My Store
        </h1>

        <p className="mt-4 text-gray-600">
          Buy amazing products online
        </p>
      </section>
    </main>
  );
}
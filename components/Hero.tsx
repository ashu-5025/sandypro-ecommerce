import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <p className="text-green-700 font-bold tracking-widest mb-4">
            CLEAN HOME • HAPPY LIFE
          </p>

          <h1 className="text-6xl font-extrabold leading-tight text-gray-900">
            Powerful Cleaning,
            <span className="block text-green-700">
              Trusted Every Day
            </span>
          </h1>

          <p className="mt-8 text-gray-600 text-xl leading-relaxed">
            SANDYPRO delivers premium cleaning
            solutions designed for modern homes,
            kitchens, and workplaces.
          </p>

          <div className="mt-10 flex gap-5">
            <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl text-lg shadow-lg">
              Shop Now
            </button>

            <button className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-2xl text-lg hover:bg-green-50">
              Explore Products
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative flex justify-center">
          <div className="absolute w-[500px] h-[500px] bg-green-200 rounded-full blur-3xl opacity-30"></div>

          <Image
            src="/products/floor-cleaner.jpg"
            alt="SANDYPRO Products"
            width={650}
            height={650}
            className="relative z-10 object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
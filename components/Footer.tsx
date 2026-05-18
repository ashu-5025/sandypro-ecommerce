export default function Footer() {
  return (
    <footer className="bg-green-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold">
            SANDYPRO
          </h2>

          <p className="mt-4 text-green-100 leading-relaxed">
            Premium cleaning products designed
            for homes, kitchens, offices,
            and commercial spaces.
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Products
          </h3>

          <ul className="space-y-3 text-green-100">
            <li>Floor Cleaner</li>
            <li>Glass Cleaner</li>
            <li>Dish Wash Liquid</li>
            <li>Liquid Detergent</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-green-100">
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <ul className="space-y-3 text-green-100">
            <li>Bangalore, India</li>
            <li>support@sandypro.com</li>
            <li>+91 9876543210</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-green-800 text-center py-5 text-green-200">
        © 2026 SANDYPRO. All rights reserved.
      </div>
    </footer>
  );
}
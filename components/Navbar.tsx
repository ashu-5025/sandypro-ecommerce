export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between">
        <h1 className="text-2xl font-bold">Shop</h1>

        <div className="flex gap-6">
          <button>Home</button>
          <button>Products</button>
          <button>Cart</button>
        </div>
      </div>
    </nav>
  );
}
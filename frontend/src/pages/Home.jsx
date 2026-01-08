import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  return (
    <div>

      {/* HERO */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-50 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4 text-amber-400">Shop Smart. Shop NeoCart.</h1>
        <p className="text-gray-300 text-lg">Best electronics, mobiles & accessories at best prices</p>
      </div>

      {/* PRODUCTS */}
      <div className="p-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-amber-400">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;

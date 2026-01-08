import products from "../data/products";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((p) => (
        <div key={p.id} className="border rounded shadow p-4 flex flex-col">
          <img
            src={p.image}
            alt={p.name}
            className="h-48 w-full object-cover mb-3"
          />

          <h2 className="font-bold">{p.name}</h2>
          <p className="text-gray-600">₹{p.price}</p>

          <Link
            to={`/product/${p.id}`}
            className="mt-auto text-center bg-black text-white py-2 rounded"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;

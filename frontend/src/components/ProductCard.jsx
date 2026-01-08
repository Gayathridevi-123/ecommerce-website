import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 bg-gray-800 text-gray-50 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="h-52 w-full object-cover rounded-t-lg"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
        <p className="text-lg font-bold mb-3 text-amber-400">₹{product.price}</p>
        <Link
          to={`/product/${product.id}`}
          className="mt-auto text-center bg-amber-500 text-gray-900 py-2 rounded hover:bg-amber-600 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;

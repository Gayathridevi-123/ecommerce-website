import { useParams } from "react-router-dom";
import products from "../data/products";
import { addToCart } from "../utils/cartUtils";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="p-6 text-center text-red-500 text-xl">
        Product not found
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-cover rounded shadow"
      />

      {/* Details */}
      <div>
        <h2 className="text-3xl font-bold">{product.name}</h2>
        <p className="text-gray-600 my-3">{product.description}</p>

        <p className="text-2xl font-semibold mb-4">
          ₹{product.price}
        </p>

        {/* Offers */}
        {product.offers && (
          <div className="mb-4">
            <h3 className="font-bold mb-2">Offers</h3>
            <div className="flex gap-2 flex-wrap">
              {product.offers.map((offer, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm"
                >
                  {offer}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* ✅ ADD TO CART */}
        <button
          onClick={() => {
            addToCart(product);
            alert("Added to cart");
          }}
          className="bg-black text-white px-6 py-3 rounded mt-4"
        >
          Add to Cart
        </button>
      </div>

      {/* Highlights */}
      {product.highlights && (
        <div className="md:col-span-2 mt-8">
          <h3 className="text-xl font-bold mb-2">Highlights</h3>
          <ul className="list-disc ml-6 text-gray-700">
            {product.highlights.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Specifications */}
      {product.specifications && (
        <div className="md:col-span-2 mt-6">
          <h3 className="text-xl font-bold mb-2">Specifications</h3>
          <table className="w-full border">
            <tbody>
              {Object.entries(product.specifications).map(
                ([key, value]) => (
                  <tr key={key} className="border-b">
                    <td className="p-2 font-semibold bg-gray-100">
                      {key}
                    </td>
                    <td className="p-2">{value}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;

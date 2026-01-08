import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCart, removeFromCart } from "../utils/cartUtils";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleRemove = (id) => {
    removeFromCart(id);
    setCart(getCart());
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Your Cart is Empty</h2>
        <Link to="/products" className="text-blue-600 underline">
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border-b py-3"
        >
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p>
              ₹{item.price} × {item.qty}
            </p>
          </div>

          <button
            onClick={() => handleRemove(item.id)}
            className="text-red-600"
          >
            Remove
          </button>
        </div>
      ))}

      <h3 className="text-xl font-bold mt-4">Total: ₹{total}</h3>

      <Link to="/checkout">
        <button className="bg-green-600 text-white px-6 py-3 mt-4 rounded">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}

export default Cart;

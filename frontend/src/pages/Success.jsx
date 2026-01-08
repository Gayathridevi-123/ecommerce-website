import { useEffect } from "react";
import { Link } from "react-router-dom";

function Success() {
  const orderId = localStorage.getItem("lastOrderId");

  useEffect(() => {
    // clear cart after order
    localStorage.removeItem("cart");
  }, []);

  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center px-6">
      {/* Green Tick */}
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-100 mb-4">
        <span className="text-4xl text-green-600">✔</span>
      </div>

      <h2 className="text-3xl font-bold text-green-600 mb-2">
        Order Received
      </h2>

      <p className="text-gray-600 mb-2">
        Payment completed successfully 🎉
      </p>

      <p className="text-sm text-gray-500 mb-6">
        <strong>Order ID:</strong> {orderId}
      </p>

      <Link
        to="/products"
        className="bg-amber-500 text-gray-900 px-6 py-3 rounded font-medium"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

export default Success;

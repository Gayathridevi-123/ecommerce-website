import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const handlePlaceOrder = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    if (!address || !city || !pincode) {
      alert("Please fill all address details");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    console.log("CART ITEMS 👉", cart); // ✅ products print

    try {
      const res = await fetch("${import.meta.env.REACT_APP_API_URL}/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          address,
          city,
          pincode,
          products: cart,
          paymentStatus: "PAID", // 🟢 fake payment
        }),
      });

      const data = await res.json();
      console.log("ORDER RESPONSE 👉", data);

      if (!res.ok) {
        alert("Order failed");
        return;
      }

      navigate("/success", {
        state: { orderId: data._id }, // 🟢 order id send
      });
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          Checkout
        </h2>

        <input
          type="text"
          placeholder="Full Address"
          className="border p-2 w-full rounded mb-3"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <input
          type="text"
          placeholder="City"
          className="border p-2 w-full rounded mb-3"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <input
          type="number"
          placeholder="Pincode"
          className="border p-2 w-full rounded mb-4"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />

        {/* Fake payment look */}
        <div className="border rounded p-3 mb-4 bg-green-50 text-green-700 text-sm">
          💳 Payment Mode: UPI (GPay) <br />
          Status: Ready to Pay
        </div>

        <button
          onClick={handlePlaceOrder}
          className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded font-semibold"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Checkout;

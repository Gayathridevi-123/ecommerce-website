import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-50 py-8 mt-10 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">

        {/* About */}
        <div>
          <h3 className="font-bold text-lg mb-2 text-amber-400">About NeoCart</h3>
          <p className="text-gray-300 text-sm">
            NeoCart is your go-to online store for electronics, accessories, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-2 text-amber-400">Quick Links</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li><Link to="/" className="hover:text-amber-400 transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-amber-400 transition">Products</Link></li>
            <li><Link to="/cart" className="hover:text-amber-400 transition">Cart</Link></li>
            <li><Link to="/login" className="hover:text-amber-400 transition">Login</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-2 text-amber-400">Contact Us</h3>
          <p className="text-gray-300 text-sm">Email: support@neocart.com</p>
          <p className="text-gray-300 text-sm">Phone: +91 98765 43210</p>
        </div>

      </div>

      <div className="text-center text-gray-400 text-sm mt-6">
        &copy; 2026 NeoCart. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

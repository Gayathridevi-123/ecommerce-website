import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // 🔑 check login status
  useEffect(() => {
    const checkLogin = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkLogin(); // initial check
    window.addEventListener("storage", checkLogin); // update across tabs

    return () => {
      window.removeEventListener("storage", checkLogin);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert("Logged out");

    // trigger Navbar update in same tab
    window.dispatchEvent(new Event("storage"));

    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-gray-50 px-6 py-4 sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide text-amber-400">NeoCart</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium items-center">
          <Link to="/" className="hover:text-amber-400">Home</Link>
          <Link to="/products" className="hover:text-amber-400">Products</Link>
          <Link to="/cart" className="hover:text-amber-400">Cart</Link>

          {!isLoggedIn ? (
            <>
              <Link to="/login" className="hover:text-amber-400">Login</Link>
              <Link to="/register" className="bg-amber-500 text-gray-900 px-3 py-1 rounded">Register</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="text-red-400 hover:text-red-500">Logout</button>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button onClick={() => setOpen(true)} className="md:hidden text-2xl">☰</button>
      </div>

      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-70 z-40 ${open ? "block" : "hidden"}`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 z-50 transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl text-amber-400 font-bold">Menu</h2>
          <button onClick={() => setOpen(false)}>✖</button>
        </div>

        <ul className="flex flex-col gap-4 p-4 text-lg">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setOpen(false)}>Products</Link>
          <Link to="/cart" onClick={() => setOpen(false)}>Cart</Link>

          {!isLoggedIn ? (
            <>
              <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="bg-amber-500 text-gray-900 px-3 py-1 rounded w-fit"
              >
                Register
              </Link>
            </>
          ) : (
            <button onClick={handleLogout} className="text-red-400 text-left">Logout</button>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

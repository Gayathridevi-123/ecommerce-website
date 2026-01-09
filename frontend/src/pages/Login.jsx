import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();
      console.log("LOGIN RESPONSE 👉", data);

      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));

      window.dispatchEvent(new Event("storage"));

      alert("Login successful");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-10 bg-gray-100 rounded shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Login</h2>

      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-amber-500 text-gray-900 w-full py-2 mt-3 rounded hover:bg-amber-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

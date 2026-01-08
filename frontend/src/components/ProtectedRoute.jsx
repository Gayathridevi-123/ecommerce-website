import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    // login illa
    return <Navigate to="/login" />;
  }

  // login iruku
  return children;
}

export default ProtectedRoute;

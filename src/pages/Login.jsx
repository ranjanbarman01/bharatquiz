import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
  e.preventDefault();

  if (!email || !password) {
    setError("All fields are required.");
    return;
  }

  if (!email.includes("@")) {
    setError("Please enter a valid email.");
    return;
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters.");
    return;
  }

  setError("");
  setIsLoggedIn(true);
  nav("/account");  
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-md p-10 rounded-3xl shadow-xl">

        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
              <p className="text-red-500 text-sm mt-2">
               {error}
             </p>
            )}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>

        </form>

      </div>
    </div>
  );
}

export default Login;

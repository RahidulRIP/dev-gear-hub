"use client"; 

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Mock Authentication Logic
    if (
      formData.email === "admin@devgear.com" &&
      formData.password === "admin123"
    ) {
      // Set Client-side Cookie
      document.cookie = "isLoggedIn=true; path=/; max-age=3600";

      alert("Login Successful!");

      // Redirect to protected route
      router.push("/");
      router.refresh();
    } else {
      setError(
        "Invalid email or password! (Hint: admin@devgear.com / admin123)"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Login
        </h2>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded-lg text-sm mb-4 text-center border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              required
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="admin@devgear.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              required
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 text-gray-400 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

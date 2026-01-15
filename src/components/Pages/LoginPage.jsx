"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (
      formData.email === "admin@devgear.com" &&
      formData.password === "admin123"
    ) {
      document.cookie = "isLoggedIn=true; path=/; max-age=3600";
      toast.success("Login Successful!");
      router.push("/items");
      router.refresh();
    } else {
      setError(
        "Invalid email or password! (Hint: admin@devgear.com / admin123)"
      );
    }
  };

  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/items" });
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

            <div className="relative mt-1">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                required
                onChange={handleChange}
                className="block w-full px-4 py-3 text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition pr-12"
                placeholder="••••••••"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
          >
            Sign In
          </button>
        </form>

        <div className="relative flex items-center my-6">
          <div className="grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">OR</span>
          <div className="grow border-t border-gray-300"></div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition"
        >
          <Image
            src="https://authjs.dev/img/providers/google.svg"
            alt="Google"
            className="w-5 h-5"
            width={20}
            height={20}
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";
// import Image from "next/image";
// import { signIn } from "next-auth/react";

// const LoginPage = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     setError("");

//     // Mock Authentication Logic
//     if (
//       formData.email === "admin@devgear.com" &&
//       formData.password === "admin123"
//     ) {
//       // Set Client-side Cookie
//       document.cookie = "isLoggedIn=true; path=/; max-age=3600";

//       toast.success("Login Successful!");

//       // Redirect to protected route
//       router.push("/items");
//       router.refresh();
//     } else {
//       setError(
//         "Invalid email or password! (Hint: admin@devgear.com / admin123)"
//       );
//     }
//   };

//   // --- নতুন গুগল লগইন ফাংশন ---
//   const handleGoogleLogin = async () => {
//     // এটি গুগল লগইন শুরু করবে এবং সাকসেস হলে /items এ নিয়ে যাবে
//     await signIn("google", { callbackUrl: "/items" });
//     // গুগল থেকে ফেরার পর মিডলওয়্যার চেক করার জন্য কুকি অলরেডি সেট হয়ে যাবে (ধাপ ১ অনুযায়ী)
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
//       <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
//         <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
//           Login
//         </h2>

//         {error && (
//           <div className="bg-red-100 text-red-600 p-3 rounded-lg text-sm mb-4 text-center border border-red-200">
//             {error}
//           </div>
//         )}

//         <form onSubmit={handleLogin} className="space-y-6">
//           <div>
//             <label className="block text-sm font-semibold text-gray-700">
//               Email Address
//             </label>
//             <input
//               name="email"
//               type="email"
//               required
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-3 text-black border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
//               placeholder="admin@devgear.com"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-semibold text-gray-700">
//               Password
//             </label>
//             <input
//               name="password"
//               type="password"
//               required
//               onChange={handleChange}
//               className="mt-1 block w-full px-4 py-3 text-gray-400 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
//               placeholder="••••••••"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200"
//           >
//             Sign In
//           </button>
//         </form>

//         <div className="relative flex items-center my-6">
//           <div className="grow border-t border-gray-300"></div>
//           <span className="mx-4 text-gray-500">OR</span>
//           <div className="grow border-t border-gray-300"></div>
//         </div>

//         {/* গুগল বাটন */}
//         <button
//           onClick={handleGoogleLogin}
//           className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 py-3 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition"
//         >
//           <Image
//             src="https://authjs.dev/img/providers/google.svg"
//             alt="Google"
//             className="w-5 h-5"
//             width={400}
//             height={400}
//           />
//           Continue with Google
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

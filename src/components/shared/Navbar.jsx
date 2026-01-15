"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const { data: session, status } = useSession();

  console.log(session?.user);

  // ১. শুধুমাত্র লগইন স্ট্যাটাস চেক করার জন্য ইফেক্ট
  useEffect(() => {
    const checkAuth = () => {
      const authCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("isLoggedIn=true"));
      setIsLoggedIn(!!authCookie);
    };
    checkAuth();
  }, [pathName]);

  // ২. যখনই কোনো লিঙ্কে ক্লিক করা হবে, তখনই মেনু বন্ধ করার জন্য একটি ফাংশন
  const closeMenu = () => setIsOpen(false);

  const handleLogout = async () => {
    document.cookie = "isLoggedIn=; path=/; max-age=0";
    setIsLoggedIn(false);
    closeMenu();
    router.push("/");
    router.refresh();

    await signOut({
      callbackUrl: "/",
      redirect: true,
    });
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0 flex items-center">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              DevGear Hub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/items"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Browse Items
            </Link>
            <Link
              href="/add-item"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              Add Item
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              About Us
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {status !== "loading" ? (
              <>
                {session || isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="px-5 py-2 text-sm font-semibold text-white bg-red-600 rounded-full hover:bg-red-700 transition"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition"
                  >
                    Get Started
                  </Link>
                )}
              </>
            ) : (
              <>
                <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              </>
            )}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2 outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {/* প্রতিটি লিঙ্কে onClick={closeMenu} যোগ করা হয়েছে */}
            <Link
              href="/"
              onClick={closeMenu}
              className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/items"
              onClick={closeMenu}
              className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
            >
              Browse Items
            </Link>
            <Link
              href="/add-item"
              onClick={closeMenu}
              className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
            >
              Browse Items
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className="block px-3 py-2 text-gray-600 hover:bg-blue-50 rounded-md"
            >
              About Us
            </Link>
            <div className="pt-4 border-t border-gray-100">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="w-full py-3 text-white bg-red-600 rounded-lg"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="block w-full py-3 text-center text-white bg-blue-600 rounded-lg"
                >
                  Log in
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const router = useRouter();
//   const pathName = usePathname();

//   useEffect(() => {
//     const checkAuth = () => {
//       const authCookie = document.cookie
//         .split("; ")
//         .find((row) => row.startsWith("isLoggedIn=true"));
//       setIsLoggedIn(!!authCookie);
//     };
//     checkAuth();
//   }, [pathName]);

//   const handleLogout = () => {
//     document.cookie = "isLoggedIn=; path=/; max-age=0";
//     setIsLoggedIn(false);
//     router.push("/login");
//     router.refresh();
//   };
//   return (
//     <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* 1. Logo Section */}
//           <div className="shrink-0 flex items-center">
//             <Link
//               href="/"
//               className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
//             >
//               DevGear Hub
//             </Link>
//           </div>

//           {/* 2. Navigation Links (Desktop) */}
//           <div className="hidden md:flex space-x-8 items-center">
//             <Link
//               href="/"
//               className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
//             >
//               Home
//             </Link>
//             <Link
//               href="/items"
//               className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
//             >
//               Browse Items
//             </Link>
//             <Link
//               href="/about"
//               className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
//             >
//               About Us
//             </Link>
//           </div>

//           {/* 3. Auth Buttons */}
//           <div className="flex items-center space-x-4">
//             {isLoggedIn ? (
//               <button
//                 onClick={handleLogout}
//                 className="px-5 py-2 text-sm font-semibold text-white bg-red-600 rounded-full hover:bg-red-700 shadow-md transition-all cursor-pointer"
//               >
//                 Logout
//               </button>
//             ) : (
//               <Link
//                 href="/login"
//                 className="px-5 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-all"
//               >
//                 Log in
//               </Link>
//             )}

//             {!isLoggedIn && (
//               <Link
//                 href="/login"
//                 className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 shadow-md shadow-blue-200 transition-all"
//               >
//                 Get Started
//               </Link>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

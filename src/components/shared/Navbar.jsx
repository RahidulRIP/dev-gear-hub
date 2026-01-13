"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const checkAuth = () => {
      const authCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("isLoggedIn=true"));
      setIsLoggedIn(!!authCookie);
    };
    checkAuth();
  }, [pathName]);

  const handleLogout = () => {
    document.cookie = "isLoggedIn=; path=/; max-age=0";
    setIsLoggedIn(false);
    router.push("/login");
    router.refresh();
  };
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* 1. Logo Section */}
          <div className="shrink-0 flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              DevGear Hub
            </Link>
          </div>

          {/* 2. Navigation Links (Desktop) */}
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
              href="/about"
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
            >
              About Us
            </Link>
          </div>

          {/* 3. Auth Buttons */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="px-5 py-2 text-sm font-semibold text-white bg-red-600 rounded-full hover:bg-red-700 shadow-md transition-all cursor-pointer"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="px-5 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 transition-all"
              >
                Log in
              </Link>
            )}

            <Link
              href="/login"
              className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 shadow-md shadow-blue-200 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

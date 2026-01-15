"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathName = usePathname();
  const { data: session, status } = useSession();

  useEffect(() => {
    const checkAuth = () => {
      const authCookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("isLoggedIn=true"));
      setIsLoggedIn(!!authCookie);
    };
    checkAuth();
  }, [pathName]);

  const closeMenu = () => setIsOpen(false);

  const isActive = (path) => pathName === path;

  const handleLogout = async () => {
    document.cookie = "isLoggedIn=; path=/; max-age=0";

    setIsLoggedIn(false);
    closeMenu();

    toast.success("Logged out successfully! See you soon.");

    router.refresh();

    await signOut({
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
            {[
              { label: "Home", href: "/" },
              { label: "Collection", href: "/items" },
              { label: "Add Gear", href: "/add-item" },
              { label: "About Us", href: "/about" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
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
              <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
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
            {[
              { label: "Home", href: "/" },
              { label: "Collection", href: "/items" },
              { label: "Add Gear", href: "/add-item" },
              { label: "About Us", href: "/about" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`block px-3 py-2 rounded-md transition-all ${
                  isActive(link.href)
                    ? "text-blue-600 bg-blue-50 font-bold"
                    : "text-gray-600 hover:bg-blue-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

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

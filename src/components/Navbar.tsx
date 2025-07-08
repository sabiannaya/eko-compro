"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar when route changes
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <nav className="w-full flex items-center justify-between shadow-[0_8px_8px_0] shadow-gray-100 px-3 sm:px-10 py-2 z-20 relative bg-white">
        <span>
          <Image
            src="/Logo.png"
            alt="Logo"
            className="w-[60px] h-[60px] sm:w-auto sm:h-auto"
            width={60}
            height={60}
            priority={true}
          />
        </span>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex-grow sm:flex sm:justify-center">
          {/* Changed space-x-4 to space-x-8 for more spacing */}
          <ul className="flex space-x-16 text-gray-700">
            <li>
              <Link
                href="/"
                className={`hover:text-gray-300 ${
                  pathname === "/" ? "font-semibold" : ""
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`hover:text-gray-300 ${
                  pathname === "/about" ? "font-semibold" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`hover:text-gray-300 ${
                  pathname === "/contact" ? "font-semibold" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={toggleSidebar}
          className="cursor-pointer sm:hidden p-2 hover:bg-gray-100 rounded-md transition-colors"
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-30 sm:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 sm:hidden ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button
            onClick={closeSidebar}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            aria-label="Close navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="p-4">
          <ul className="space-y-4">
            <li>
              <Link
                href="/"
                className={`block py-3 px-4 rounded-md transition-colors ${
                  pathname === "/"
                    ? "bg-gray-100 font-semibold text-gray-900"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block py-3 px-4 rounded-md transition-colors ${
                  pathname === "/about"
                    ? "bg-gray-100 font-semibold text-gray-900"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block py-3 px-4 rounded-md transition-colors ${
                  pathname === "/contact"
                    ? "bg-gray-100 font-semibold text-gray-900"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

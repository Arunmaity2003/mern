import React from "react";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sticky Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col justify-between h-screen sticky top-0">
        <div>
          {/* Logo */}
          <div className="p-6 flex items-center justify-center border-b">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Menu */}
          <nav className="mt-6">
            <NavLink
              to="/purchased"
              className={({ isActive }) =>
                `block px-6 py-3 text-gray-700 font-medium hover:bg-gray-100 ${
                  isActive ? "bg-gray-200" : ""
                }`
              }
            >
              Purchased Books
            </NavLink>
            <NavLink
              to="/new"
              className={({ isActive }) =>
                `block px-6 py-3 text-gray-700 font-medium hover:bg-gray-100 ${
                  isActive ? "bg-gray-200" : ""
                }`
              }
            >
              New Books
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                `block px-6 py-3 text-gray-700 font-medium hover:bg-gray-100 ${
                  isActive ? "bg-gray-200" : ""
                }`
              }
            >
              Categories
            </NavLink>
            <NavLink
              to="/offers"
              className={({ isActive }) =>
                `block px-6 py-3 text-gray-700 font-medium hover:bg-gray-100 ${
                  isActive ? "bg-gray-200" : ""
                }`
              }
            >
              Offers
            </NavLink>
          </nav>
        </div>

        {/* Logout */}
        <div className="p-6 border-t">
          <button className="w-full text-left text-red-600 font-medium hover:bg-red-50 px-4 py-2 rounded">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto max-h-screen">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">
            Welcome Back!
          </h1>
          <p className="text-gray-600 mt-1">
            Explore your library, discover new books, and stay updated.
          </p>
        </div>

        {/* Example Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Example Book Card */}
          <div className="bg-white shadow rounded-lg p-4 flex flex-col">
            <div className="h-40 bg-gray-200 rounded mb-4 flex items-center justify-center">
              <span className="text-gray-400">Book Cover</span>
            </div>
            <h2 className="font-semibold text-gray-800 mb-1">Book Title</h2>
            <p className="text-gray-500 text-sm mb-2">Author Name</p>
            <button className="mt-auto bg-indigo-600 text-white py-1 rounded hover:bg-indigo-700 transition">
              View
            </button>
          </div>
          {/* Duplicate similar cards dynamically in real app */}
        </div>
      </main>
    </div>
  );
}

export default Hero;

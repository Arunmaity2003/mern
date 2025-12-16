import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-zinc-800 text-white px-8 py-8 md:py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand Section */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Library App</h1>
          <p className="text-zinc-400">
            Discover a world of knowledge with our vast collection of books.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h1 className="text-xl font-semibold mb-4">Quick Links</h1>
          <div className="flex flex-col gap-2 font-medium">
            
            <Link 
              to="/about-us"
              className="text-zinc-400 hover:text-white transition-all duration-300"
            >
              About Us
            </Link>

            <Link 
              to="/all-books" 
              className="text-zinc-400 hover:text-white transition-all duration-300"
            >
              All Books
            </Link>

            <Link 
              to="/Cart" 
              className="text-zinc-400 hover:text-white transition-all duration-300"
            >
              Cart
            </Link>

            <Link 
              to="/Profile" 
              className="text-zinc-400 hover:text-white transition-all duration-300"
            >
              Profile
            </Link>
            
          </div>
        </div>

        {/* Developer Section */}
        <div className="flex flex-col justify-center items-center md:items-start">
          <h1 className="text-xl font-semibold mb-4">Developer</h1>
          <p className="text-xl font-medium">
            &copy; 2025 | Made with <span className="text-red-500 animate-pulse">&hearts;</span> By Arun
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
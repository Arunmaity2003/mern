import React from "react";
import { BookOpen, Facebook, Instagram, Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        
        <div>
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-yellow-400" />
            <h2 className="text-xl font-bold">BookVerse</h2>
          </div>
          <p className="text-sm text-gray-300">
            Discover, read, and manage your favorite books with ease. 
            A smarter way to connect readers and libraries.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/" className="hover:text-yellow-400">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="/help" className="hover:text-yellow-400">Help Center</a></li>
            <li><a href="/terms" className="hover:text-yellow-400">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-yellow-400">Privacy Policy</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-400">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-yellow-400">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} BookVerse. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

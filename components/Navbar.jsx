'use client';
import React from "react";
import {
  Globe,
  Menu,
  X,
} from "lucide-react";

const Navbar = (mobileMenuOpen, setMobileMenuOpen) => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Globe className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Eduvyn Education
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="/services"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="/universities"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Universities
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </a>
              <a href="/roadmap" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all">
                Get Started
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <a
                href="/"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                Home
              </a>
              <a
                href="/services"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                Services
              </a>
              <a
                href="/universities"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                Universities
              </a>
              <a
                href="/about"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                About
              </a>
              <a
                href="/contact"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                Contact
              </a>
              <a href="/roadmap" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full">
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
  );
}

export default Navbar;

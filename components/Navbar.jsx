"use client";
import React from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const pathname = usePathname();

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-1">
            <Image
              src="/images/logo.png"
              alt="Eduvyn Logo"
              width={230}
              height={230}
              className="rounded-xl"
            />
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
            <button
              onClick={() => toggleDropdown("universities")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Countries ▾
              {openDropdown === "universities" && (
                <div className="absolute mt-2 w-48 bg-white text-black rounded shadow-lg">
                  <Link
                    href="/universities/usa"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Study in USA
                  </Link>
                  <Link
                    href="/universities/uk"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Study in UK
                  </Link>
                  <Link
                    href="/universities/canada"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Study in Canada
                  </Link>
                  <Link
                    href="/universities/australia"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Study in Australia
                  </Link>
                  <Link
                    href="/universities/ireland"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Study in Ireland
                  </Link>
                  <Link
                    href="/universities/singapore"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Study in Singapore
                  </Link>
                  <Link
                    href="/universities/dubai"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Study in Dubai
                  </Link>
                  <Link
                    href="/universities/europe"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Study in Europe
                  </Link>
                </div>
              )}
            </button>
            <button
              href="/test-preparation"
              onClick={() => toggleDropdown("testprep")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Test Preparation ▾
              {openDropdown === "testprep" && (
                <div className="absolute mt-2 w-48 bg-white text-black rounded shadow-lg">
                  {/* <Link
                    href="/test-preparation/ielts"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    IELTS
                  </Link>
                  <Link
                    href="/test-preparation/gre"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    GRE
                  </Link> */}
                  <Link
                    href="/test-preparation/sat"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    SAT
                  </Link>
                  <Link
                    href="/test-preparation/ucat"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    UCAT
                  </Link>
                  {/* <Link
                    href="/test-preparation/gmat"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    GMAT
                  </Link>
                  <Link
                    href="/test-preparation/toefl"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    TOEFL
                  </Link>
                  <Link
                    href="/test-preparation/pte"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    PTE
                  </Link> */}
                </div>
              )}
            </button>
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
              href="/test-preparation"
              className="block text-gray-700 hover:text-blue-600 font-medium"
            >
              Test Preparation
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
            <a
              href="/roadmap"
              className="w-full bg-gradient-to-r from-indigo-900 to-sky-400

 text-white px-6 py-2 rounded-full"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

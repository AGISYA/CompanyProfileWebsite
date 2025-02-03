"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo di kiri */}
        <h1 className="text-xl font-bold">Company Name</h1>

        {/* Menu Tengah (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="/about" className="hover:text-gray-300">
              About Us
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="/solutions" className="hover:text-gray-300">
              Solutions
            </a>
          </li>
          <li>
            <a href="/partners" className="hover:text-gray-300">
              Partners
            </a>
          </li>
        </ul>

        {/* Tombol "Contact Us" di kanan (Desktop) */}
        <div className="hidden md:block">
          <a
            href="/contact"
            className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
          >
            Contact Us
          </a>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700 py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a href="/about" className="hover:text-gray-300">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="/solutions" className="hover:text-gray-300">
                Solutions
              </a>
            </li>
            <li>
              <a href="/partners" className="hover:text-gray-300">
                Partners
              </a>
            </li>
          </ul>
          {/* Tombol "Contact Us" untuk mobile */}
          <div className="mt-4 text-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

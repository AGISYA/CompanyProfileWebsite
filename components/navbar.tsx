"use client";

import { Leaf } from "lucide-react";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll direction and show/hide navbar
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // Scrolling down, hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up, show navbar
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white text-gray-800 p-4 z-10 fixed top-0 left-0 w-full transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-green-600" />
          <span className="text-xl font-bold text-gray-800">PupukPro</span>
        </div>
        {/* Menu Tengah (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#about" className="hover:text-green-600">
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-green-600">
              Services
            </a>
          </li>
          <li>
            <a href="#product" className="hover:text-green-600">
              Product
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-600">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Tombol "Contact Us" di kanan (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700"
          >
            Contact Us
          </a>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FiX size={24} className="text-green-600" />
          ) : (
            <FiMenu size={24} className="text-green-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <a href="#about" className="hover:text-green-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-green-600">
                Services
              </a>
            </li>
            <li>
              <a href="#product" className="hover:text-green-600">
                Product
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-600">
                Contact Us
              </a>
            </li>
          </ul>
          {/* Tombol "Contact Us" untuk mobile */}
          <div className="mt-4 text-center">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700"
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

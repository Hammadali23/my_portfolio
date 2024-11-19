"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); 
  };

  return (
    <nav className="bg-gray-800 text-white fixed top-0 left-0 w-full z-20">
      <div className="container mx-auto flex items-center justify-between p-4">
        
        <div className="text-2xl font-bold">
          <Link href="/">My Portfolio</Link>
        </div>

        {/* (Visible on Small Screens) */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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

        {/* Links Section */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex lg:space-x-8 absolute lg:static top-16 lg:top-auto left-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 p-4 lg:p-0">
            <li>
              <Link
                href="/"
                className="block text-lg hover:text-green-400 transform transition-transform duration-300 hover:scale-110"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-lg hover:text-green-400 transform transition-transform duration-300 hover:scale-110"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/skills"
                className="block text-lg hover:text-green-400 transform transition-transform duration-300 hover:scale-110"
                onClick={handleLinkClick}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="/experience"
                className="block text-lg hover:text-green-400 transform transition-transform duration-300 hover:scale-110"
                onClick={handleLinkClick}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/education"
                className="block text-lg hover:text-green-400 transform transition-transform duration-300 hover:scale-110"
                onClick={handleLinkClick}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-lg hover:text-green-400 transform transition-transform duration-300 hover:scale-110"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <header className="w-full bg-gray-100 text-gray-500 body-font pb-7 pt-2">
        {/* :DESKTOP MENU */}
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* ::Burger icon standard */}
          <button
            className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 rounded-md text-gray-600 bg-gradient-to-br from-transparent to-transparent hover:text-white hover:from-pink-500 hover:to-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* ::Avatar */}
          <div className="hidden sm:inline-flex mr-auto md:mr-4 ml-4 md:ml-0 cursor-pointer"></div>
          {/* ::Navbar */}
          <nav className="hidden md:mr-auto md:flex flex-wrap items-center justify-center text-base tracking-wide uppercase">
            <a href="#link" className="mr-5 text-indigo hover:text-orange">
              Home
            </a>
            <a href="#link" className="mr-5 text-indigo hover:text-orange">
              Advertiser
            </a>
            <a href="#link" className="mr-5 text-indigo hover:text-orange">
              Publisher
            </a>
            <a href="#link" className="mr-5 text-indigo hover:text-orange">
              Influencer
            </a>
            <a href="#link" className="mr-5 text-indigo hover:text-orange">
              Ad Formats
            </a>
            <a href="#link" className="mr-5 text-indigo hover:text-orange">
              Blog
            </a>
            <a href="#link" className="mr-5 text-indigo hover:text-orange">
              Contact Us
            </a>
          </nav>
          {/* ::Site logo and Name */}
          <a
            href="#link"
            className="flex flex-shrink-0 title-font font-medium items-center md:mb-0"
          >
            <div className="p-2 w-full sm:w-auto overflow-hidden bg-white rounded-full dark:bg-gray-800 shadow-md">
              <div className="space-y-2 sm:space-y-0 sm:flex sm:-mx-1">
                <button className="w-full px-4 py-1 text-white transition-colors duration-200 transform bg-blue-600 rounded-md focus:outline-none sm:w-auto sm:mx-1 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                  Login
                </button>

                <button className="w-full px-4 py-1 my-2 text-white  shadow-md bg-orange rounded-full focus:outline-none sm:w-auto sm:mx-1 ">
                  Sign Up
                </button>
              </div>
            </div>
          </a>
        </div>

        {/* :MOBILE MENU */}
        {isOpen && (
          <div className="w-full flex flex-col py-4 px-3 md:hidden bg-gray-200 text-base uppercase text-center font-semibold">
            <a
              href="#link"
              className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-700"
            >
              Home
            </a>
            <a
              href="#link"
              className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-700"
            >
              Advertiser
            </a>
            <a
              href="#link"
              className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-700"
            >
              Punlisher
            </a>
            <a
              href="#link"
              className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-700"
            >
              Influencer
            </a>
            <a
              href="#link"
              className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-700"
            >
              Ad Formats
            </a>
            <a
              href="#link"
              className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-700"
            >
              Blog
            </a>
            <a
              href="#link"
              className="block px-3 py-2 rounded-md text-gray-500 hover:text-white hover:bg-gray-700"
            >
              Contact Us
            </a>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;

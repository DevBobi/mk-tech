import React from "react";

const Header = () => {
  return (

      <header className="w-full bg-gray-50 text-gray-500 body-font">
        <div className="container mx-auto flex justify-between items-center py-7 px-4">
          {/* ::Site logo and Name */}
          <a
            href="#link"
            className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
          >
            <span className="ml-3 text-3xl font-semibold antialiased uppercase">
              Logo
            </span>
          </a>
        
          {/* ::Avatar */}
          <div className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer">
           <button><span className="text-dark hover:text-cyan">Bn </span> <span className="text-dark hover:text-cyan">/En</span></button>
          </div>
        </div>
      </header>
  );
};

export default Header;

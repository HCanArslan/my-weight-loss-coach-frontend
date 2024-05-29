import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow sticky top-0 z-50 w-screen">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">
            <h1 className="text-lg font-bold">weightcoachai</h1>
          </ScrollLink>
          <button className="md:hidden text-gray-600 focus:outline-none bg-white hover:bg-white hover:scale-110" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <nav className={`mt-4 md:mt-0 md:flex lg:space-x-4 md:space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ScrollLink to="how-it-works" smooth={true} duration={500} className="block md:inline-block cursor-pointer text-gray-600 hover:text-gray-900">
            How it Works
          </ScrollLink>
          <ScrollLink to="features" smooth={true} duration={500} className="block md:inline-block cursor-pointer text-gray-600 hover:text-gray-900">
            Features
          </ScrollLink>
          <ScrollLink to="pricing" smooth={true} duration={500} className="block md:inline-block cursor-pointer text-gray-600 hover:text-gray-900">
            Pricing
          </ScrollLink>
          <ScrollLink to="faq" smooth={true} duration={500} className="block md:inline-block cursor-pointer text-gray-600 hover:text-gray-900">
            F.A.Q
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="block md:inline-block cursor-pointer text-gray-600 hover:text-gray-900">
            Contact
          </ScrollLink>
        </nav>
        <div className={`mt-4 md:mt-0 md:flex space-x-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <a href="#">
            <button className="py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700">Get Started</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

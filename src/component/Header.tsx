'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-b from-yellow-100 to-yellow-300 text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <div className="flex items-center gap-2 text-2xl font-bold">
                <Image src="/images/sdc-logo.jpg" alt="Dogpe Static" width={70} height={70} className='rounded-lg shadow-md' />
                <h1 className='text-2xl md:text-4xl'>SIDE CHICK</h1>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#about" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#tokenomics" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Tokenomics</a>
            <a href="#roadmap" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">Roadmap</a>
            <a href="#howtobuy" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">How To Buy</a>
            <a href="#faq" className="hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">FAQ</a>
            <a href="#" className="bg-yellow-400 font-semibold px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-300">Whitepaper</a>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#tokenomics" className="block hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">Tokenomics</a>
            <a href="#roadmap" className="block hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">Roadmap</a>
            <a href="#howtobuy" className="block hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">How To Buy</a>
            <a href="#faq" className="block hover:text-gray-300 px-3 py-2 rounded-md text-base font-medium">FAQ</a>
            <a href="#" className="block bg-yellow-400 font-semibold px-3 py-2 rounded-full text-base font-medium hover:bg-yellow-300">Whitepaper</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
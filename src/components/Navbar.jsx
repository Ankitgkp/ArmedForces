import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mt-4 p-4 text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <button 
          className="md:hidden text-xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <div className="hidden md:flex space-x-8">
          <a href="/army" className="font-normal">Army</a>
          <a href="/navy" className="font-normal">Navy</a>
          <a href="/airforce" className="font-normal">Airforce</a>
          <a href="/shop" className="font-normal">Shop</a>
        </div>

        <a 
          href="https://joinindianarmy.nic.in/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="border border-[#D7D2CB] px-4 py-2 text-sm font-bold text-center"
        >
          LOOKING TO JOIN?
        </a>
      </div>

      {/* Mobile Menu (Left-aligned) */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-start space-y-3">
          <a href="/army" className="font-normal">Army</a>
          <a href="/navy" className="font-normal">Navy</a>
          <a href="/airforce" className="font-normal">Airforce</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

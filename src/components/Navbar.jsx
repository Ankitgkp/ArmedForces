import React, { useState } from 'react';
import { Link } from "react-router-dom";

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
          <Link to="/" className="font-normal">Home</Link>
          <Link to="/army" className="font-normal">Army</Link>
          <Link to="/navy" className="font-normal">Navy</Link>
          <Link to="/airforce" className="font-normal">Airforce</Link>
          {/* <Link to="/shop" className="font-normal">Shop</Link> */}
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
          <Link to="/army" className="font-normal">Army</Link>
          <Link to="/navy" className="font-normal">Navy</Link>
          <Link to="/airforce" className="font-normal">Airforce</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React from 'react';

const Navbar = () => {
  return (
    <nav className='mt-4 p-4'>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex space-x-15">
          <a href="/" className="text-white font-normal">Home</a>
          <a href="/army" className="text-white font-normal">Army</a>
          <a href="/navy" className="text-white font-normal">Navy</a>
          <a href="/airforce" className="text-white font-normal">Airforce</a>
        </div>
        <a 
          href="https://joinindianarmy.nic.in/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block"
        >
          <div className="text-white h-auto w-50 p-3 border border-[#D7D2CB] text-sm font-bold text-center cursor-pointer">
            LOOKING TO JOIN?
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

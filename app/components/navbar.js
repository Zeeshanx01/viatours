'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // icons for toggle (optional, install lucide-react)

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="backdrop-blurxs w-full bg-white/10  shadow-md py-4 px-8 flex justify-between items-center fixed top-0 z-50">
      
      {/* Logo and Links */}
      <div className="flex items-center space-x-8 ">
        <div>
          <img className="h-6" src="/assets/navbar/logo.png" alt="Logo" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex text-white/80 text-xs space-x-8 max-lg:space-x-4">
          <Link href="#" className="hover:text-orange-500 transition">Home</Link>
          <Link href="#" className="hover:text-orange-500 transition">Tours</Link>
          <Link href="#" className="hover:text-orange-500 transition">Destination</Link>
          <Link href="#" className="hover:text-orange-500 transition">Activities</Link>
          <Link href="#" className="hover:text-orange-500 transition">Pages</Link>
          <Link href="#" className="hover:text-orange-500 transition">Contact</Link>
        </div>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex text-white/80 space-x-6 max-lg:space-x-4 text-xs">
        <button>USD</button>
        <button>Sign up</button>
        <button className="border rounded-full px-4 py-2">Log in</button>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full  left-0 w-full bg-black/50 backdrop-blur-xs px-8 py-4 flex flex-col space-y-4 text-white text-sm md:hidden z-40">
          <Link href="#" className="hover:text-orange-500 transition">Home</Link>
          <Link href="#" className="hover:text-orange-500 transition">Tours</Link>
          <Link href="#" className="hover:text-orange-500 transition">Destination</Link>
          <Link href="#" className="hover:text-orange-500 transition">Activities</Link>
          <Link href="#" className="hover:text-orange-500 transition">Pages</Link>
          <Link href="#" className="hover:text-orange-500 transition">Contact</Link>

          <hr className="border-white/30" />

          <div className="flex  items-center space-x-3 ">
            <button>USD</button>
            <button>Sign up</button>
            <button className="border rounded-full px-4 py-2">Log in</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

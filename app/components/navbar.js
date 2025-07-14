'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // icons for toggle (optional, install lucide-react)
import Image from 'next/image';

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Tours", href: "#" },
  { label: "Destination", href: "#" },
  { label: "Activities", href: "#" },
  { label: "Pages", href: "#" },
  { label: "Contact", href: "#" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className=" w-full bgwhite/10  shadowmd py-4 px-12 flex justify-between items-center absolute top-0 z-50">
      
      {/* Logo and Links */}
      <div className="flex items-center space-x-8 ">
        <div>
          <Image className="h-7" src="/assets/navbar/logo.png" alt="Logo" width={112} height={28} />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex text-white/80 text-[0.75rem] space-x-10 max-lg:space-x-4">
          {navLinks.map(link => (
            <Link key={link.label} href={link.href} className="hover:text-viaOrange transition">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex text-white/80 space-x-7 max-lg:space-x-4 text-xs">
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
          {navLinks.map(link => (
            <Link key={link.label} href={link.href} className="hover:text-orange-500 transition">
              {link.label}
            </Link>
          ))}

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

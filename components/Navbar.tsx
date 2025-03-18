"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-50 py-4 transition-all duration-300 bg-black ${
      scrolled ? 'bg-black/10 backdrop-blur-sm   shadow-lg' : 'bg-transparent'
    }`}>
      
      <div className="max-w-[1800px] mx-auto px-6 flex justify-between items-center ">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center font-light text-xl">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Et.png"
                alt="Logo"
                width={65}
                height={65}
                className="cursor-pointer"
              />
              <span className="ml-2 text-white  text-[1.2em] font-light">Error Tech</span>
            </Link>
          </div>

        {/* Desktop Menu */}
        <div className={`hidden lg:flex items-center space-x-8 text-lg py-3 px-5 text-gray-300 font-light rounded-full ml-16 border transition-all duration-300 ${
          scrolled ? 'bg-[#0e0e0e]/80 border-[#212020]/50' : 'bg-[#0e0e0e] border-[#212020]'
        }`}>
          <Link href="/" className="hover:text-orange-400 transition">Home</Link>
          <Link href="/about" className="hover:text-orange-400 transition">About</Link>
          <Link href="/serviceq" className="hover:text-orange-400 transition">Services</Link>
          <Link href="/blog" className="hover:text-orange-400 transition">Blog</Link>

          {/* Product Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
              className="flex items-center hover:text-orange-400 transition"
            >
              Products <ChevronDown className="ml-1 w-5 h-5" />
            </button>
            {isProductDropdownOpen && (
              <div className={`absolute left-0 mt-4 w-48 text-gray-300 border shadow-lg rounded-lg py-2 transition-all duration-300 ${
                scrolled ? 'bg-[#0e0e0e]/90 backdrop-blur-md border-[#252525]/70' : 'bg-[#0e0e0e] border-[#252525]'
              }`}>
                <Link href="/products/billingpage" className="block px-4 py-2 hover:bg-[#1a1a1a]/70">Billing Software</Link>
                <Link href="/products/ai-model" className="block px-4 py-2 hover:bg-[#1a1a1a]/70">AI Model</Link>
              </div>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="hidden lg:flex space-x-4">
          <Link href="/contact">
            <button className={`px-6 py-2 text-lg border font-normal bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 ${
              scrolled ? 'border-[#212020]/50' : 'border-[#212020]'
            }`}>
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`lg:hidden text-white py-4 px-6 space-y-4 transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-black'
        }`}>
          <Link href="/" className="block hover:text-orange-400">Home</Link>
          <Link href="/about" className="block hover:text-orange-400">About</Link>
          <Link href="/contact" className="block hover:text-orange-400">Contact</Link>
          <Link href="/features" className="block hover:text-orange-400">Feature</Link>
          <Link href="/login" className="block hover:text-orange-400">Login</Link>
          <Link href="/get-started" className="block hover:text-orange-400">Get Started</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

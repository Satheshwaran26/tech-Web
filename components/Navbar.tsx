"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`sticky top-0 z-50 py-4  transition-all duration-300 ${
        scrolled ? "bg-black/10 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-xl blur group-hover:blur-xl transition-all duration-500"></div>
            <Image
              src="/images/Et.png"
              alt="Error Tech"
              width={64}
              height={64}
              className="relative w-12 h-12 rounded-xl transform group-hover:scale-105 transition-all duration-500"
            />
          </div>
          <h2 className="text-2xl font-light bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
            Error Tech
          </h2>
        </div>

        {/* Desktop Menu */}
        <div
          className={`hidden lg:flex items-center space-x-8 text-lg py-3 px-5 text-gray-300 font-light rounded-full border transition-all duration-300 ${
            scrolled ? "bg-[#0e0e0e]/80 border-[#212020]/50" : "bg-[#0e0e0e] border-[#212020]"
          }`}
        >
          {["/", "/about", "/services", "/blog ", "/products"].map((path, index) => (
            <Link
              key={index}
              href={path}
              className={`transition ${
                isActive(path)
                  ? "bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent font-normal"
                  : "hover:text-orange-400"
              }`}
            >
              {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}

          
        </div>

  
        <div className="hidden lg:flex space-x-4">
          <Link href="/contact">
            <button
              className={`px-6 py-2 text-xl border font-normal bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300 ${
                scrolled ? "border-[#212020]/50" : "border-[#212020]"
              }`}
            >
              Contact
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden ">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="relative w-10 h-10  focus:outline-none flex items-center justify-center overflow-hidden group"
            aria-label="Toggle menu"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              {/* Animated background */}
              <div className={`absolute inset-0 transition-all duration-300
                ${isOpen ? ' scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
              </div>
              
              {/* The hamburger icon */}
              <div className="relative z-10 flex flex-col items-center justify-center space-y-1.5 w-6">
                <span className={`block h-0.5 w-full transform transition-all duration-300 ease-in-out 
                  bg-gradient-to-r from-orange-400 to-red-500
                  ${isOpen ? 'rotate-45 translate-y-2' : ''}`}>
                </span>
                <span className={`block h-0.5 transition-all duration-300 ease-in-out
                  bg-gradient-to-r from-orange-400 to-red-500
                  ${isOpen ? 'w-0 opacity-0' : 'w-full opacity-100'}`}>
                </span>
                <span className={`block h-0.5 w-full transform transition-all duration-300 ease-in-out
                  bg-gradient-to-r from-orange-400 to-red-500
                  ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}>
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden text-white py-6 px-6 space-y-4 transition-all duration-300 bg-[#1212122d] backdrop-blur-md "
        >
          {["/", "/about", "/services", "/blog", "/products", "/contact"].map((path, index) => (
            <Link
              key={index}
              href={path}
              onClick={() => setIsOpen(false)}
              className={`block py-2 px-2 rounded transition-all duration-300 ${
                isActive(path)
                  ? "text-orange-400 font-normal"
                  : "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-orange-400/10 hover:to-red-500/10"
              }`}
            >
              {path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

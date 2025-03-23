import Image from "next/image";
import Link from "next/link";
import {  Linkedin, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#080808] text-[#9e9d9d] py-4 overflow-hidden border-t-2 border-[#111111] pb-6">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-gradient-to-br from-red-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1800px] mx-auto px-4 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-10 md:mb-16">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-4">
            <div className="flex items-center gap-4 mb-6 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-xl blur group-hover:blur-xl transition-all duration-500"></div>
                <Image
                  src="/images/Et.png"
                  alt="Error Tech"
                  width={48}
                  height={48}
                  className="relative w-12 h-12 rounded-xl transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <h2 className="text-2xl font-light bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Error Tech
              </h2>
            </div>
            <p className="text-[#9e9d9d] leading-relaxed mb-6 md:mb-8 max-w-md font-light">
              Discover innovative opportunities and connect with forward-thinking companies that shape tomorrow&apos;s technology landscape.
            </p>
            <div className="flex gap-4 mb-8 md:mb-0">
              {[
                { icon: Linkedin, href: "#", ariaLabel: "LinkedIn" },
                { icon: Instagram, href: "#", ariaLabel: "Instagram" },
                { icon: Github, href: "#", ariaLabel: "GitHub" }
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  aria-label={social.ariaLabel}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg bg-[#111111] 
                    relative overflow-hidden group
                    transform hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/30
                    transition-all duration-300`}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 scale-0 group-hover:scale-100 rounded-lg border border-orange-500/30 transition-transform duration-300"></div>
                  <social.icon 
                    size={16}
                    strokeWidth={1.75}
                    className="relative z-10 text-gray-400 group-hover:text-orange-500 transition-colors duration-300"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
            {[
              { 
                title: "Product",
                links: ["Remote Job", "Startup", "Investor & Board", "Company"]
              },
              { 
                title: "Features",
                links: ["For Candidate", "For Company", "Society"]
              },
              { 
                title: "About Us",
                links: ["Documentation", "Contact Us", "Career"]
              }
            ].map((column, index) => (
              <div key={index} className="relative">
                <h3 className="text-orange-500 font-extralight underline-offset-4 underline mb-4 text-lg">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href="#" 
                        className="group flex items-center font-light text-[#9e9d9d] hover:text-orange-400 transition-colors duration-300"
                      >
                        <span className="w-0 h-px bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-3 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative">
          <div className="absolute inset-0"></div>
          <div className="relative border-t border-orange-950/30 pt-6 md:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-center sm:text-left">
                © {new Date().getFullYear()} Error Tech. All rights reserved.
              </p>
              <div className="flex gap-4 sm:gap-8">
                {["Terms", "Privacy", "Refund Policy"].map((text, index) => (
                  <Link
                    key={index}
                    href={text === "Terms" ? "/terms" : text === "Privacy" ? "/privacy" : "/refund"}
                    className="text-sm hover:text-orange-400 transition-colors duration-300"
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

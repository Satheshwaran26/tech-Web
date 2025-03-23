"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const LandingHero: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
        
        {/* Gradient effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-red-500/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="flex justify-center mb-8">
            <span className="bg-[#111111]/60 border border-[#343434] rounded-full px-4 py-2 text-orange-500 text-sm">
              Services
            </span>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-light mb-6 leading-tight">
              Transform Your Business
              <br />
              <span className="block mt-2">With</span>
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent block mt-2 animate-gradient">
                Digital Excellence
              </span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl mb-10 font-light leading-relaxed max-w-3xl mx-auto">
              We deliver cutting-edge solutions that drive innovation and growth
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <Link href="#get-started">
                <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all hover:-translate-y-1 animate-gradient">
                  Get Started
                </button>
              </Link>
              <Link href="#learn-more">
                <button className="px-8 py-3 border border-orange-500/30 rounded-lg text-orange-400 hover:bg-orange-500/10 transition-all hover:-translate-y-1">
                  Learn More
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Center dot navigator */}
        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="animate-float"
          >
            <div className="w-12 h-12 rounded-full border-2 border-orange-500/30 flex items-center justify-center cursor-pointer hover:border-orange-500 transition-colors">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingHero; 
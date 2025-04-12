"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link';

const HeroSection: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = [
    "Tech Solutions",
    "Web Services",
    "Mobile Apps",
    "IT Service"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative bg-[#080808] ">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
        <div className="container mx-auto text-center pb-22 pt-[120px] px-4 relative z-10">
          <h3 className="mb-4 text-gray-200 font-extralight text-sm border bg-[#1212126e] border-[#343434] px-4 py-2 rounded-full inline-block">
            ✨ Welcom to Error Tech
          </h3>
        
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight  w-11/12 sm:w-10/12 mb-6 mx-auto text-center">
            Empowering Your <span></span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-extralight ml-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
                >
                  {words[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>{" "}
            Journey
          </h1>
          <p className="sm:text-lg text-[#767676] font-light mb-8 w-11/12 sm:w-7/12 mx-auto">
              From concept to creation, we deliver cutting-edge solutions that transform businesses. 
              Experience innovation with our comprehensive tech services and expert development team.
            </p>


          {/* Product Selector and Go Button */}
          <div className="flex flex-wrap justify-center gap-4 pb-6">
            {/* Get Started Button */}
            <Link href="/products">
              <button
                className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 px-4 py-2 text-base sm:text-lg flex items-center font-light transition-colors border-[#212020] border rounded-lg"
              >
                View Products
              </button>
            </Link>

            {/* View More Button */}
            <Link href="/about">
              <button
                className="font-extralight border-[#212020] border text-gray-200 px-6 py-2 text-base sm:text-lg rounded-lg flex items-center transition-colors"
              >
                About Us
              </button>
            </Link>
          </div>

          {/* Features List */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 text-base pb-16 text-gray-400 pt-6"
          >
            {[
              "No credit card required",
              "14-days free trial",
              "AI-powered solutions"
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center">
                  <FontAwesomeIcon icon={faCheck} className="text-orange-500 w-4 h-4" />
                </span>
                {feature}
              </div>
            ))}
          </motion.div>

        </div>

        {/* Floating 3D Images */}
        <div className="absolute inset-0 z-0">
          <Image
            alt="Floating 3D cube"
            height={50}
            src="/images/ss.png"
            width={80}
            className="absolute animate-float top-10 sm:top-20 left-10 sm:left-40"
          />
          <Image
            alt="Floating 3D oval"
            height={70}
            src="/images/sc.png"
            width={70}
            className="absolute animate-rotate top-5 sm:top-10 right-10 sm:right-40"
          />
          <Image
            alt="Floating 3D sphere"
            height={50}
            src="/images/scc.png"
            width={50}
            className="absolute animate-float bottom-2 sm:bottom-5 left-10 sm:left-60"
          />
          <Image
            alt="Floating 3D cube"
            height={70}
            src="/images/ss.png"
            width={70}
            className="absolute animate-float bottom-2 sm:bottom-5 right-10 sm:right-60"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
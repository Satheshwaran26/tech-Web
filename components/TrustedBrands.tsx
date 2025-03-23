"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TrustedBrands: React.FC = () => {
  const [logos, setLogos] = useState<{ src: string; alt: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        // Mock data (simulates API response)
        const response = {
          data: [
            { src: "/images/gg.png", alt: "Canva Logo" },
            { src: "/images/zoho.png", alt: "Adobe Logo" },
            { src: "/images/msi.png", alt: "Microsoft Logo" },
            { src: "/images/gg.png", alt: "Canva Logo" },
            { src: "/images/zoho.png", alt: "Adobe Logo" },
            { src: "/images/msi.png", alt: "Microsoft Logo" },
          ],
        };
        setLogos(response.data.slice(0, 6));
      } catch (error) {
        console.error("Error fetching logos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLogos();
  }, []);

  return (
    <section className="bg-transparent  pt-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-8">
        
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-4xl font-light"
          >
            Trusted by
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 ml-2">
              Industry Leaders
            </span>
          </motion.h2>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center">
            <div className="w-10 h-10 border-2 border-orange-500 rounded-full animate-spin border-t-transparent"></div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center p-2 rounded-xl"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={110}
                  height={110}
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TrustedBrands;
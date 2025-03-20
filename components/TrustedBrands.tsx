"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

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
        setLogos(response.data.slice(0, 6)); // Limit to 6 logos
      } catch (error) {
        console.error("Error fetching logos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLogos();
  }, []);

  return (
    <section className="bg-[#080808] py-12 sm:py-16 md:py-20 lg:py-28">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extralight mb-8 sm:mb-12 text-[#676767] text-center">
          Brands That Trust Us
        </h2>
        
        {isLoading ? (
          <p className="text-silver text-center">Loading logos...</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10">
            {logos.map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={90}
                  height={90}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  sizes="(max-width: 640px) 45vw, 
                         (max-width: 768px) 30vw,
                         (max-width: 1024px) 20vw,
                         15vw"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TrustedBrands;
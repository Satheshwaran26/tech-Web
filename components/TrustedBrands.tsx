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
    <section className="bg-[#080808] pt-28  ">
      
      <div className="max-w-screen-full mx-auto text-center">
        <h2 className="text-3xl font-extralight mb-6 text-[#676767]">Brands That Trust Us</h2>
        <div className="flex justify-center items-center gap-10">
          {isLoading ? (
            <p className="text-silver">Loading logos...</p>
          ) : (
            logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={115}
                  height={115}
                  className="object-contain grayscale"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee"; // Import react-fast-marquee

const TrustedBrands: React.FC = () => {
  const [logos, setLogos] = useState<{ src: string; alt: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLogos = async () => {
      try {
        // Mock data (simulates API response)
        const response = {
          data: [
            { src: "/images/canva.png", alt: "Canva Logo" },
            { src: "/images/canva.png", alt: "Adobe Logo" },
            { src: "/images/canva.png", alt: "Microsoft Logo" },
            { src: "/images/canva.png", alt: "Google Logo" },
            { src: "/images/canva.png", alt: "Apple Logo" },
            { src: "/images/canva.png", alt: "Amazon Logo" },
          ],
        };
        setLogos(response.data);
      } catch (error) {
        console.error("Error fetching logos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLogos();
  }, []);

  return (
    <section className=" py-16">
      <div className="max-w-screen-full mx-auto text-center">
        <h2 className="text-5xl font-medium mb-16 text-gray-800">Brands That Trust Us</h2>
        <div className="relative overflow-hidden">
          {isLoading ? (
            <p className="text-gray-600">Loading logos...</p>
          ) : (
            <Marquee speed={50} gradient={false} className="flex items-center">
              {/* Duplicate logos multiple times to ensure seamless scrolling */}
              {logos.concat(logos, logos).map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center mx-6"
                  style={{ flexShrink: 0 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </Marquee>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;

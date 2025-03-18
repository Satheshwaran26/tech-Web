"use client";

import React from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";

const worksData = [
  {
    title: "Demo Portal",
    description: "Screenshot of Demo Portal showing a calendar interface with various features.",
    img: "/images/site.png",
    tags: ["Realtime Matching", "Calendar sync", "Notifications", "Reports"],
  },
  {
    title: "Freelance Platform",
    description: "Screenshot of Freelance platform showing a dark-themed interface with various features.",
    img: "/images/site.png",
    tags: ["Freelance Directory", "Custom Quotation", "Track Progress", "Rating & Reviews"],
  },
  {
    title: "E-Learning Hub",
    description: "Screenshot of an E-Learning platform with interactive courses and user-friendly design.",
    img: "/images/site.png",
    tags: ["Interactive Courses", "User Tracking", "Video Tutorials", "Certifications"],
  },
  {
    title: "E-Commerce Store",
    description: "Screenshot of an online store featuring product listings and checkout functionality.",
    img: "/images/site.png",
    tags: ["Product Catalog", "Secure Payments", "Customer Reviews", "Order Tracking"],
  },
 
];

const Works = () => {
  return (
    
    <div className="bg-[#080808] py-28 relative overflow-hidden text-gray-300">
      <div className="text-center mb-12">
        <h1 className="text-6xl font-extralight text-gray-300">Our Works.</h1>
        <p className="text-gray-400 font-normal mt-2">
          Explore our featured projects and platforms
        </p>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-[150px]" />
      {/* Works Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto max-w-[1100px] px-4 relative">
        {worksData.map((work, index) => (
          <div key={index} className=" border border-gray-500/20 rounded-lg overflow-hidden">
            {/* Image Section */}
            <div className="relative p-6 pb-2">
              <Image
                src={work.img}
                alt={work.description}
                width={500}
                height={500}
                className="w-full h-68 object-cover rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div className="px-7 py-2 pb-4">
              <h2 className="text-2xl pb-1 font-semibold text-gray-300 mb-2">{work.title}</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {work.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-gray-400 rounded-full px-3 py-1 text-sm border border-gray-600/20">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 mb-4">{work.description}</p>

              <div className="flex">
                <button className="hover:shadow-xl bg-[#1f1f1f9b] text-white px-4 py-2 rounded-md transition-colors duration-300 border border-gray-600/20">
                  Demo
                </button>
                <button className="border border-gray-600/20 text-gray-300 px-4 py-2 rounded-md transition-colors duration-300 hover:shadow-md ml-4">
                  View More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Circles */}
     
    </div>
  );
};

export default Works;

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const worksData = [
  {
    title: "E-Commerce Store",
    description: "A modern e-commerce platform with seamless shopping experience and secure payment integration.",
    img: "/images/ecommerce.jpg",
    tags: ["Product Catalog", "Secure Payments", "Order Tracking", "Customer Reviews"],
  },
  {
    title: "E-Learning Platform",
    description: "An interactive learning management system with video courses and progress tracking.",
    img: "/images/elearning.jpg",
    tags: ["Video Courses", "Progress Tracking", "Certifications", "Interactive Quizzes"],
  },
  {
    title: "Resume Builder",
    description: "A professional resume creation tool with modern templates and AI-powered suggestions.",
    img: "/images/resumai.png",
    tags: ["AI Assistance", "Modern Templates", "Export Options", "ATS Optimization"],
  },
  {
    title: "Social Media Dashboard",
    description: "A comprehensive analytics dashboard for social media management and performance tracking.",
    img: "/images/dash.png",
    tags: ["Analytics", "Content Planning", "Engagement Metrics", "Performance Reports"],
  },
];

const Works = () => {
  return (
    <div className="bg-[#080808] py-24 relative overflow-hidden text-gray-300">
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block mb-4"
        >
          <span className="text-sm text-orange-400 tracking-wider bg-orange-500/5 px-4 py-2 rounded-full border border-orange-500/10">
            Our Works
          </span>
        </motion.div>
        <h1 className="text-6xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-orange-400  to-red-500 mb-4">
          Our Creative Works
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-400 text-lg font-light">
            Explore our innovative solutions and successful projects that showcase our expertise in digital transformation
          </p>
        </div>
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
            <h3 className="text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-400  to-red-600 mb-2 ">
                    {work.title}
                  </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {work.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10">
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

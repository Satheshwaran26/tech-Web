"use client";

import React from "react";
import Image from "next/image";

import Github from "./github.svg";
import Linkedin from "./linkedin.svg";
import Resume from "./resume.svg";
import SoftSkills from "./soft.svg";
import Interview from "./interview.svg";

const benefits = [
  { icon: Github, title: "Github profile", description: "Showcase your projects and contributions." },
  { icon: Linkedin, title: "LinkedIn profile", description: "Build your professional network." },
  { icon: Resume, title: "Resume writing", description: "Craft a compelling resume." },
  { icon: SoftSkills, title: "Soft skills", description: "Master communication and salary negotiation skills." },
  { icon: Interview, title: "Interview preparation", description: "Mock interviews and expert sessions." },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-12">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-extralight text-[#d0d0d0]">Benefits</h2>
        <p className="text-orange-400 underline underline-offset-4 mt-1">Beyond Learning</p>
      </div>

      {/* Two-Row Responsive Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {benefits.slice(0, 3).map((benefit, index) => (
          <div
            key={index}
            className="bg-[#080808]    border-2 border-[#212020] hover:shadow-lg transition-all p-6 rounded-xl flex flex-col items-center text-center"
          >
            <Image src={benefit.icon} alt={benefit.title} width={50} height={50} className="mb-4" />
            <h3 className="text-base sm:text-lg font-normal text-orange-400">{benefit.title}</h3>
            <p className="text-sm sm:text-sm text-[#9e9d9d] mt-1">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
        {benefits.slice(3).map((benefit, index) => (
          <div
            key={index}
            className="bg-[#080808]    border-2 border-[#212020] hover:shadow-lg transition-all p-6 rounded-xl flex flex-col items-center text-center"
          >
            <Image src={benefit.icon} alt={benefit.title} width={50} height={50} className="mb-4" />
            <h3 className="text-base sm:text-lg font-normal text-orange-400">{benefit.title}</h3>
            <p className="text-sm sm:text-sm text-[#9e9d9d] mt-1">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Terms & Conditions */}
      <p className="text-center  font-extralight text-xs sm:text-sm text-[#d0d0d0] mt-6">
        Any one of the benefits -{" "}
        <a href="/terms" className="text-orange-400">
          *T&C Applied
        </a>
      </p>
    </section>
  );
};

export default Benefits;

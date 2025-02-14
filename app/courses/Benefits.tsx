"use client";

import React from "react";
import Image from "next/image";
import Github from "./github.svg";
import Linkedin from "./linkedin.svg";
import Resume from "./resume.svg";
import SoftSkills from "./soft.svg";
import Interview from "./interview.svg";

// Define Benefit interface
interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: Github,
    title: "Github profile",
    description: "Showcase your projects and contributions.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn profile",
    description: "Build your professional network.",
  },
  {
    icon: Resume,
    title: "Resume writing",
    description: "Craft a compelling resume.",
  },
  {
    icon: SoftSkills,
    title: "Soft skills",
    description: "Master communication and salary negotiation skills.",
  },
  {
    icon: Interview,
    title: "Interview preparation",
    description: "Mock interviews and expert sessions.",
  },
];

const Benefits: React.FC = () => {
  return (
    <div id="benefits" className="px-2 lg:px-32 py-8">
      <h2 className="md:text-3xl text-3xl font-extralight text-[#d0d0d0d0] pl-[500px]">Benefits</h2>
      <p className="text-left text-sm text-orange-400 underline underline-offset-4 mb-6 pl-[500px]">Beyond Learning</p>
      
      {/* First Row - Three Items */}
      <div className="max-w-6xl  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4 ">
        {benefits.slice(0, 3).map((benefit, index) => (
          <div 
            key={index} 
            className="bg-[#080808] border-2 border-[#212020] hver:text-white transition-all duration-300 py-3 md:p-4 rounded-lg shadow-md flex flex-col items-start mb-4"
          >
            <Image src={benefit.icon} alt={benefit.title} width={48} height={48} className="mb-2" />
            <h3 className="md:text-lg text-sm font-extralight text-[#9e9d9d]">{benefit.title}</h3>
            <p className="hidden md:block text-sm text-white font-extralight">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Second Row - Two Items */}
      <div className="max-w-6xl  grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
        {benefits.slice(3).map((benefit, index) => (
          <div 
            key={index} 
            className="bg-[#0808080]  border-2 border-[#212020] p-3 md:p-4 rounded-lg shadow-md flex flex-col items-start mb-4"
          >
            <Image src={benefit.icon} alt={benefit.title} width={48} height={48} className="mb-2" />
            <h3 className="md:text-lg text-sm font-extralight text-[#9e9d9d]">{benefit.title}</h3>
            <p className="text-sm text-white font-extralight">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Terms & Conditions */}
      <p className="pl-[500px] text-[13px] text-[#9e9d9d] px-4">
        Any one of benefits - <a href="/terms" className="text-white"> *T&C Applied </a>
      </p>
    </div>
  );
};

export default Benefits;

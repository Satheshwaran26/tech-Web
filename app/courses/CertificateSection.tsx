"use client";

import React from "react";
import Image from "next/image";
import { FaCaretRight, FaLinkedin } from "react-icons/fa";
import CertificateImg from "./certificate.png"; // Ensure the correct path

const CertificateSection: React.FC = () => {
  return (
    <div id="certificate" className="lg:w-3/4 py-12 px-4 sm:px-6 lg:px-40">
      {/* Heading Section */}
      <div className="py-5 pt-5">
        <h2 className="py-4 text-left font-extralight text-[#9e9d9d] text-3xl md:text-4xl leading-tight">
          Let Your
  
             <span className=" text-orange-400 mr-2"> Certificates</span>

          
          Speak
        </h2>
      </div>

      {/* Certificate image and details section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side: Certificate image and shareable text */}
        <div>
          <div className="flex justify-center">
            <div className="border-2      border-[#212020] rounded-lg p-4 shadow-lg">
              <Image
                src={CertificateImg}
                alt="Certificate"
                className="w-full h-auto rounded-md"
                width={500} // Adjust as needed
                height={300} // Adjust as needed
                priority
              />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-base flex  font-extralight justify-center items-center text-[#d0d0d0]">
              Shareable on
              <span className="ml-2 font-normal text-orange-400 text-xl flex items-center">
                LinkedIn <FaLinkedin className="text-2xl text-orange-400 ml-2" />
              </span>
            </p>
          </div>
        </div>

        {/* Right side: Certificate details */}
        <div className="space-y-6 flex flex-col justify-center">
          {[
            "Certificate Provided by MSME Verified Institution.",
            "Certificates are globally recognized & they upgrade your programming profile.",
            "Certificates are generated after the completion of course.",
          ].map((text, index) => (
            <div key={index} className="flex items-start">
              <FaCaretRight className="text-orange-400 mr-3 mt-1 flex-shrink-0" />
              <p className="text-base font-extralight text-[#d0d0d0]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificateSection;

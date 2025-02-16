'use client';

import React from "react";
import { CheckCircle } from "lucide-react";
import courseData from "./courseData"; // Adjust the import path as needed

type AboutCourseProps = {
  courseId: string;
};

const AboutCourse: React.FC<AboutCourseProps> = ({ courseId }) => {
  const course = courseData.find((course) => course.id === Number(courseId));

  if (!course) {
    return <p className="text-red-500 font-semibold text-center mt-5">Course not found.</p>;
  }

  const coursePoints = [
    "Gain in-depth knowledge of core concepts and practical applications.",
    "Hands-on projects and real-world case studies.",
    "Expert mentorship and guidance throughout the course.",
    "Lifetime access to learning materials and recorded sessions.",
  ];

  return (
    <div id="about" className="mt-5 py-8 px-6 md:px-12 lg:px-40 bg-[#080808]  ">
      <div className=" mx-auto text-center md:text-left">
        <h1 className="font-extralight text-4xl md:text-5xl mt-6 pb-3  bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text ">
          Course Overview
        </h1>
        <p className="mt-6 text-lg text-[#9e9d9d] font-extralight leading-relaxed">{course.about}</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {coursePoints.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-lg border-2 border-[#212020] p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CheckCircle className="text-orange-400 w-6 h-6" />
              <span className="font-noraml text-[#9e9d9d]">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
// Add "use client" directive at the top
"use client";

import React from "react";
import CourseForm from "../CourseForm";
import Breadcrumb from "../Breadcrumb";
import AboutCourse from "../AboutCourse";
import courseData from "../courseData";
import { useRouter } from "next/navigation";
import CourseInfo from "../CourseInfo";
import CertificateSection from "../CertificateSection";
import CourseNavbar from "../CourseNavbar";
import Faq from "../FAQ";
import Benefits from "../Benefits";
import SyllabusAccordion from "../SyllabusAccordion";
import ToolsCovered from "../ToolsCovered";
import Link from "next/link"; // Import Link from next/link

interface Course {
  id: number;
  name: string;
  tagline: string;
  description: string;
  originalPrice: string;
  price: string;
  savings: string;
  salary?: string;
}

const Fullstack: React.FC = () => {
  const router = useRouter();
  const courseId = 1;
  const course: Course | undefined = courseData.find((c) => c.id === courseId);

  if (!course) {
    return (
      <div className="text-center text-2xl font-semibold py-8">
        Course not found - go to <Link href="/">Home Page</Link> {/* Use Link here */}
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Divine Infotech", isActive: false, link: "/" },
    { label: "Courses", isActive: false, link: "/courses" },
    { label: course.name, isActive: true, link: "#" },
  ];

  return (
    <div id="hero" className="flex flex-col relative bg-[#080808]">
      <div className="px-6 py-12 lg:pt-16 lg:px-28  relative ">
        {/* Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} marginX="md:mx-10" />

        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="lg:w-3/4 w-full md:px-10 lg:pt-8">
            <h1 className="text-xl lg:text-5xl font-semibold underline underline-offset-3 bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text leading-tight mb-2 md:mb-4">
              {course.name}
            </h1>
            <p
              className="md:text-xl text-sm font-extralight text-white mb-6"
              dangerouslySetInnerHTML={{ __html: course.tagline }}
            ></p>
            <p
              className="text-[#9e9d9d] mb-8 font-extralight md:text-xl md:w-[90%]"
              dangerouslySetInnerHTML={{ __html: course.description }}
            ></p>

            <h1 className="text-[#d0d0d0d0] text-xl md:text-2xl font-normal">Buy this course @</h1>
            <div className="text-xl md:text-2xl font-normal flex gap-2 md:gap-4">
              <h1 className="line-through ">{course.originalPrice}</h1>
              <span className=" bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text">{course.price}</span>
              <button className="bg-[#1c1c1c] border border-[#d0d0d0d0] text-[#9e9d9d] rounded-full text-xs md:text-base p-2 md:py-2 md:px-4">
                You save {course.savings}!
              </button>
            </div>
            <CourseInfo courseId="1" /> {/* Pass courseId as a prop */}
          </div>
        </div>
      </div>

      <div className="lg:w-1/4 w-full lg:ml-16 z-30 lg:fixed right-0 lg:right-10">
        <CourseForm courseName={course.name} coursePrice={course.price} />
      </div>

      <div className="bg-[#080808]">
        <CourseNavbar />

        <div className='lg:w-3/4'>
          <AboutCourse courseId="1" />
          <SyllabusAccordion courseId={1} />
<ToolsCovered courseId={1} />
          <Benefits />

        </div>
        <CertificateSection /></div>
      <div className='lg:w-3/4'>
        <Faq courseId="1" />

      <div className="flex justify-center items-center py-4 lg:w-3/4 gap-2">
        <button
          onClick={() => {
            if (window.innerWidth >= 1024) {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              const enrollElement = document.getElementById("enroll");
              if (enrollElement) {
                enrollElement.scrollIntoView({ behavior: "smooth" });
              }
            }
          }}
          className="   bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text  border-2  border-[#212020] px-4 py-2 transition-all duration-300 rounded-md"
        >
          Enroll Now
        </button>
        <button
          onClick={() => router.push("/contactform")}
          className="bg-transparent text-[#d0d0d0d0] font-extralight  border-2 transition-all duration-300 border-[#212020] px-4 py-2 rounded-md"
        >
          Request a Callback ?
        </button>
      </div>
    </div>
    </div >
  );
};

export default Fullstack;

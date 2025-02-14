import React, { useState } from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import courseData from './courseData';

interface TopicDetail {
  title: string;
  details: string[];
}

const SyllabusAccordion: React.FC<{ courseId: number }> = ({ courseId }) => {
  const course = courseData.find((course) => course.id === courseId);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!course) {
    return <div className="text-left text-gray-600 bg-[#080808] text-lg">Course not found</div>;
  }

  return (
    <div id="syllabus" className=" bg-[#080808] py-12 lg:px-40 text-left">
      <div className="mx-auto">
        <h2 className="font-extralight text-[#d0d0d0d0] text-4xl md:text-5xl mb-8">Topics You Will Learn</h2>
        <div className="space-y-6">
          {course.syllabus.map((phase: { phase: string; topics: TopicDetail[] }, index: number) => (
            <div key={index} className="border-2 border-[#212020] rounded-lg shadow-md overflow-hidden">
              <div
                className="flex justify-between items-center bg-[#080808] font-extralight  text-[#9e9d9d] px-6 py-4 cursor-pointer transition duration-300"
                onClick={() => toggleSection(index)}
              >
                <h3 className="text-lg md:text-xl  font-extralight">{phase.phase}</h3>
                <span className="text-xl">{openIndex === index ? <FaChevronUp /> : <FaChevronDown />}</span>
              </div>
              <div
                className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}
              >
                <div className="bg-[#080808] px-6 py-4">
                  {phase.topics.map((topic, idx) => (
                    <div key={idx} className="mb-4">
                      <h4 className="text-lg font-normal border-b pb-2 mb-2 text-[#d0d0d0d0]">{topic.title}</h4>
                      <ul className="list-disc list-inside space-y-2">
                        {topic.details.map((detail, i) => (
                          <li key={i} className="text-[#9e9d9d] font-extralight">{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SyllabusAccordion;

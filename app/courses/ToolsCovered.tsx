'use client';

import React, { useRef, useEffect, useState } from 'react';
import courseData from './courseData';
import Image from 'next/image';

interface Tool {
    name: string;
    logo: string;
}


interface ToolsCoveredProps {
    courseId: number;
}

const ToolsCovered: React.FC<ToolsCoveredProps> = ({ courseId }) => {
    const course = courseData.find((course) => course.id === courseId);
    const tools = course?.tools ?? [];

    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const scrollAmount = 150;

    const scrollToNext = () => {
        if (scrollRef.current && tools.length > 0) {
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            setCurrentIndex((prevIndex) => (prevIndex + 1) % tools.length);
        }
    };

    const scrollToIndex = (index: number) => {
        if (scrollRef.current && tools.length > 0) {
            scrollRef.current.scrollTo({ left: scrollAmount * index, behavior: 'smooth' });
            setCurrentIndex(index);
        }
    };

    useEffect(() => {
        if (tools.length === 0) return;
        const interval = setInterval(scrollToNext, 3000);
        return () => clearInterval(interval);
    }, [tools.length]);

    if (!course) {
        return <p className="text-center text-red-500">Course not found.</p>;
    }

    return (
        <div className="bg-[#080808] lg:px-32 mx-auto px-4 py-8">
            <h2 className="text-4xl font-extralight text-[#d0d0d0d0] text-center mb-6">Tools Covered</h2>
            <div className="flex overflow-hidden space-x-4 pb-4" ref={scrollRef}>
                {tools.map((tool, index) => (
                    <div 
                        key={index} 
                        className={`flex-shrink-0 h-24 md:h-40 w-32 flex flex-col items-center justify-center ${courseId !== 1 ? 'rounded-lg shadow-md' : ''}`}
                    >
                        <Image 
                            src={tool.logo} 
                            alt={tool.name} 
                            width={64} // Specify the actual width of your image
                            height={64} // Specify the actual height of your image
                            className={`mb-2 px-2 ${courseId !== 1 ? 'h-16' : ''}`} 
                        />
                        {courseId !== 1 && <p className="text-center px-2 text-xs">{tool.name}</p>}
                    </div>
                ))}
            </div>
            <div className="flex justify-center space-x-2 mt-4">
                {tools.slice(0, 4).map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-orange-400' : 'bg-[#9e9d9d]'} hover:bg-gray-400 focus:outline-none`}
                        onClick={() => scrollToIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ToolsCovered;
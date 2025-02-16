"use client";

import { useRouter } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons"; // Import the house icon
import React from "react";

// Define interfaces for props and items
interface BreadcrumbItem {
  label: string;
  link: string;
  isActive: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  marginX?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ 
  items,  
  marginX = "mx-6" 
}) => {
  const router = useRouter();

  const handleNavigation = (path: string): void => {
    router.push(path);
  };

  return (
    <div className={`flex items-center text-[10px] md:text-base ${marginX} mb-4 text-black`}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index === 0 && ( // Show home icon only for the first item
            <FontAwesomeIcon icon={faHouse} className="text-white mr-2" />
          )}
          <p
            onClick={() => !item.isActive && handleNavigation(item.link)}
            className={`font-extralight cursor-pointer transition text-[#d0d0d0] duration-300 ease-in-out ${
              item.isActive 
                ? "text-orange-400" 
                : "hover:text-[#d0d0d0] hover:underline underline-offset-2"
            }`}
          >
            {item.label}
          </p>
          {index < items.length - 1 && (
            <FaChevronRight className="md:mx-2 mx-1 text-white" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumb;

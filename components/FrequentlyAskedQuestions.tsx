"use client";
import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { 
    question: "What is Error Tech, and what services do you offer?", 
    answer: "Error Tech is a cutting-edge technology company specializing in web development, mobile solutions, and software engineering. We provide comprehensive digital solutions including custom software development, cloud services, digital transformation, and IT consulting to help businesses innovate and grow." 
  },
  { 
    question: "How can Error Tech's solutions benefit my business?", 
    answer: "Our solutions help streamline your business operations, enhance digital presence, and drive growth through innovative technology. We focus on delivering scalable, secure, and high-performance solutions that adapt to your business needs, improve efficiency, and provide competitive advantages in the digital marketplace." 
  },
  { 
    question: "What makes Error Tech different from other tech companies?", 
    answer: "We stand out through our commitment to innovation, custom-tailored solutions, and exceptional client service. Our team of expert developers and consultants combines cutting-edge technology with industry best practices to deliver solutions that exceed expectations. We prioritize long-term partnerships and ensure our solutions grow with your business." 
  },
  { 
    question: "What technologies and platforms do you work with?", 
    answer: "We work with a wide range of modern technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Azure. Our expertise spans across web development, mobile app development, cloud computing, AI/ML integration, and enterprise software solutions." 
  },
  { 
    question: "What kind of support and maintenance do you provide?", 
    answer: "We offer comprehensive support and maintenance services including 24/7 technical support, regular updates, performance monitoring, security patches, and continuous improvement recommendations. Our team ensures your solutions remain optimal, secure, and up-to-date with the latest technology trends." 
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: "auto",
    transition: {
      duration: 0.4,
      ease: [0.04, 0.62, 0.23, 0.98],
    }
  },
  exit: { 
    opacity: 0, 
    height: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    }
  }
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="flex justify-center items-center pt-16 bg-[#080808] px-4 relative overflow-hidden">
      {/* Orange gradient blur background */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-[150px]" />
      
      <div className="max-w-3xl w-full text-center relative z-10">
      <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block mb-4"
            >
              <span className="text-sm text-orange-400 tracking-wider  bg-orange-500/5 px-4 py-2 rounded-full border border-orange-500/10">
                FAQ
              </span>
            </motion.div>
        <motion.h1 
          className="text-5xl font-extralight text-[#d0d0d0] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.p 
          className="text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore our FAQs to learn more about how our product works, what it offers, and how it can help you achieve your team&apos;s goals.
        </motion.p>

        <motion.div 
          className="space-y-5"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`border border-[#1c1c1c] bg-transparent rounded-lg cursor-pointer transition-all px-4 py-5
                ${openIndex === index ? "bg-transparent": "bg-transparent"}`}
              onClick={() => toggleFAQ(index)}
              whileHover={{ 
               
                borderColor: "#2a2a2a",
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-[#d0d0d0] text-lg">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {openIndex === index ? (
                    <FaMinus className="text-[#d0d0d0] text-sm" />
                  ) : (
                    <FaPlus className="text-[#d0d0d0] text-sm" />
                  )}
                </motion.div>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <motion.p 
                      className="text-[#9e9d9d] mt-3 text-left"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
      
    </div>
    
  );
}

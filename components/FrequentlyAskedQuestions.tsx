"use client";
import { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "What is Divine Infotech, and what does it do?", answer: "Divine Infotech is a pioneering career education startup specializing in developing innovative solutions in Web applications, Android applications, and Data Science projects. Our programs offer advanced training, hands-on practice, and expert guidance to help individuals and businesses grow." },
  { question: "How can Divine Infotech technologies help my business?", answer: "We streamline your operations, enhance security, boost your online presence, and increase productivity, driving business growth." },
  { question: "How experienced is the Divine Infotech technologies team?", answer: "Our team consists of certified experts with extensive experience in various IT domains, ensuring top-notch service delivery." },
  { question: "What makes us different from other Service providers?", answer: "Our comprehensive offerings, experienced solutions, and commitment to excellence set us apart from other providers." },
  { question: "What kind of support does Divine Infotech technologies provide?", answer: "We offer 24/7 premium support to ensure seamless integration and continuous assistance for all our services." },
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
    <div className="flex justify-center items-center pt-16 bg-[#080808] px-4">
      <div className="max-w-3xl w-full text-center">
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
              className={`border border-[#1c1c1c] rounded-lg cursor-pointer transition-all px-4 py-5
                ${openIndex === index ? "bg-gradient-to-b from-[#101010] via-[#080808] to-[#080808]" : "bg-[#080808]"}`}
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

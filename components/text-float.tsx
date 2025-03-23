"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Globe, Code, ArrowRight, Check } from "lucide-react";


const services = [
  {
    id: 1,
    title: "App Development",
    description: "We build stunning mobile applications for iOS and Android with cutting-edge technologies and seamless user experiences.",
    icon: <Smartphone className="w-6 h-6" />,
    color: "text-blue-500",

    borderColor: "border-gray-500/20",
    features: ["Native & Cross-platform", "Intuitive UX/UI", "Scalable Architecture"]
  },
  {
    id: 2,
    title: "Web Development",
    description: "Create powerful web applications and sites with modern frameworks, responsive designs, and optimized performance.",
    icon: <Globe className="w-6 h-6" />,
    color: "text-orange-500",
 
    borderColor: "border-orange-500/20",
    features: ["Responsive Design", "SEO Optimization", "Performance Focused"]
  },
  {
    id: 3,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs with robust architecture and scalable infrastructure.",
    icon: <Code className="w-6 h-6" />,
    color: "text-purple-500",
    borderColor: "border-gray-500/20",

    features: ["Enterprise Solutions", "Cloud Integration", "Secure Architecture"]
  }
];

const ServiceSection: React.FC = () => {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background blur elements */}
    
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block mb-4"
            >
              <span className="text-sm text-orange-400 tracking-wider  bg-orange-500/5 px-4 py-2 rounded-full border border-orange-500/10">
                Our Services
              </span>
            </motion.div>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-light mb-6"
            >
              Transforming Ideas into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 ml-3">
                Digital Reality
              </span>
            </motion.h2>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              Comprehensive digital solutions tailored for modern businesses
            </motion.p>
          </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className={`h-full rounded-xl bg-gradient-to-br  backdrop-blur-sm border ${service.borderColor} overflow-hidden p-8 transition-all duration-300 hover:shadow-lg hover:shadow-${service.color.replace('text-', '')}/5 relative`}>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-[100px] -z-0" />
                
                {/* Icon with background */}
                <div className={`relative z-10 mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#1A1A1A] border ${service.borderColor}`}>
                  <div className={service.color}>
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-5 relative z-10">
                  <h3 className="text-2xl font-extralight text-white">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#909090] leading-relaxed font-light" >
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 pt-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-[#A0A0A0]">
                        <Check className={`w-4 h-4 ${service.color}`} />
                        <span className="font-light text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className={`flex items-center gap-2 ${service.color} mt-6 group-hover:opacity-90 transition-opacity`}
                  >
                    <span className="font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
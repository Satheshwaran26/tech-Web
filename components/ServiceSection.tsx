"use client";

import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Globe, Code, ArrowRight, Sparkles } from "lucide-react";


const services = [
  {
    id: 1,
    title: "App Development",
    description: "We build stunning mobile applications for iOS and Android with cutting-edge technologies and seamless user experiences.",
    icon: <Smartphone className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
    image: "/images/app-dev.jpg", // Add your image path
    features: ["Native & Cross-platform", "Intuitive UX/UI", "Scalable Architecture"]
  },
  {
    id: 2,
    title: "Web Development",
    description: "Create powerful web applications and sites with modern frameworks, responsive designs, and optimized performance.",
    icon: <Globe className="w-6 h-6" />,
    gradient: "from-orange-500 to-red-500",
    image: "/images/web-dev.jpg", // Add your image path
    features: ["Responsive Design", "SEO Optimization", "Performance Focused"]
  },
  {
    id: 3,
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs with robust architecture and scalable infrastructure.",
    icon: <Code className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500",
    image: "/images/software-dev.jpg", // Add your image path
    features: ["Enterprise Solutions", "Cloud Integration", "Secure Architecture"]
  }
];

const ServiceSection: React.FC = () => {
  return (
    <section className="relative py-32 bg-[#111111] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#808080]/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 space-y-4"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#252525] border border-[#333333]"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-[#C0C0C0]" />
            </motion.div>
            <span className="text-[#C0C0C0] text-sm font-medium">Our Services</span>
          </motion.div>
          
          <h2 className="text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] via-[#C0C0C0] to-[#A0A0A0]">
              Expert Solutions for Your Business
            </span>
          </h2>
          
          <p className="text-[#909090] text-lg max-w-2xl mx-auto">
            We deliver cutting-edge technology solutions tailored to your specific needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full rounded-2xl p-1 bg-gradient-to-r from-[#333333] to-[#252525] overflow-hidden">
                <div className="h-full rounded-xl bg-[#151515] overflow-hidden">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#151515] z-10" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20`} />
                    <div className="absolute top-4 left-4 z-20">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] to-[#C0C0C0]">
                      {service.title}
                    </h3>
                    
                    <p className="text-[#909090]">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-[#A0A0A0]">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#C0C0C0] to-[#808080]" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-[#C0C0C0] group-hover:text-white transition-colors duration-300 mt-4"
                    >
                      <span className="font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#333333] to-[#252525] rounded-xl text-[#FFFFFF] font-medium border border-[#404040] hover:border-[#C0C0C0] transition-all duration-300"
          >
            Explore All Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection; 
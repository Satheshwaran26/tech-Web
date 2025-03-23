/// <reference types="react" />
"use client";
import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCode, FaMobile, FaDesktop,  FaRocket, FaDatabase, FaCloud, FaShieldAlt, FaUsers, FaChartBar } from 'react-icons/fa';
import { Sparkles } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          
          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-orange-500/10 rounded-full blur-xl"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-5xl mx-auto"
          >
          <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-orange-500/5 border border-orange-500/20 backdrop-blur-sm mb-6"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-orange-500" />
              </motion.div>
              <span className="text-orange-500  text-xs sm:text-sm font-normal">Services</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-extralight mb-8"
            >
              Transform Your Business With
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 pb-2">
                Digital Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto font-extralight "
            >
              We deliver cutting-edge solutions that drive innovation and growth
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-transparent bg-clip-text  bg-gradient-to-r from-orange-400 to-red-500 rounded-full font-medium border hover:scale-105 hover:shadow-2xl  border-[#1c1c1c]"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4  rounded-full text-gray-400 font-extralight backdrop-blur-sm 
                         border border-white/10"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
          {/* Mouse Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-22 pt-16 -ml-7 left-1/2 transform -translate-x-1/2 z-50"
          >
            <motion.button
              onClick={() => {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth'
                });
              }}
              className="relative p-3 rounded-full border border-orange-500/20 bg-orange-500/5 
                   hover:border-orange-500/40 hover:bg-orange-500/10 
                   transition-all duration-300 group backdrop-blur-sm"
            >
              {/* Mouse outline */}
              <svg
                width="24"
                height="34"
                viewBox="0 0 24 34"
                className="text-orange-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Mouse body */}
                <rect x="1" y="1" width="22" height="32" rx="11" />
                {/* Scroll wheel/dot */}
                <motion.circle
                  cx="12"
                  cy="10"
                  r="2"
                  fill="currentColor"
                  animate={{
                    y: [0, 12, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
        
      </section>

      
      <section className="py-32 relative">


        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-orange-500"></span>
              <span className="text-orange-400 tracking-wider text-sm font-light">OUR SERVICES</span>
              <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-orange-500"></span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extralight mb-6"
            >
              Elevate Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400  to-red-600">
                Innovative Solutions
              </span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-red-600/10 rounded-3xl 
                              opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                
                {/* Card Content */}
                <div className="relative p-1 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent">
                  <div className="bg-[#0c0c0c] p-8 rounded-3xl border border-white/[0.05] h-full
                                backdrop-blur-3xl group-hover:border-orange-500/10 transition-all duration-500
                                shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] group-hover:shadow-[0_0_50px_-12px_rgba(251,146,60,0.3)]">
                    
                    {/* Icon */}
                    <div className="mb-8 relative">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10
                                    flex items-center justify-center relative z-10
                                    group-hover:from-orange-500/20 group-hover:to-red-500/20 transition-all duration-500">
                        {service.icon}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl blur-xl opacity-0 
                                    group-hover:opacity-50 transition-all duration-500" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-light text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text 
                                 group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-500 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 font-extralight mb-8 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="flex items-center gap-3 text-gray-400 group/feature"
                        >
                          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500/5 to-red-500/5 flex items-center justify-center
                                       group-hover/feature:from-orange-500/10 group-hover/feature:to-red-500/10 transition-all duration-300">
                            <FaRocket className="text-orange-400 text-xs group-hover/feature:scale-110 transition-transform duration-300" />
                          </span>
                          <span className="font-extralight text-sm group-hover/feature:text-gray-300 transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Hover Border Effect */}
                    <div className="absolute inset-0 rounded-3xl border border-orange-500/0 group-hover:border-orange-500/20 transition-all duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extralight mb-6"
            >
              Experience the Power and Versatility of the
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400  to-red-600 font-extralight my-4">
                Most Advanced
              </span>
              Technology Available.
            </motion.h2>
          </motion.div>

          {/* Tech Icons Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-12 md:gap-16 lg:gap-20 items-center justify-center max-w-7xl mx-auto px-8"
          >
            {[
              { name: "React", icon: "/images/react.png" },
              { name: "Figma", icon: "/images/flutter.png" },
              { name: "Swift", icon: "/images/java.png" },
              { name: "Flutter", icon:"/images/html.png" },
              { name: "Apple", icon: "/images/javascript.png" },
              { name: "Kotlin", icon: "/images/nodejs.png" },
              { name: "HTML5", icon: "/images/python.png" },
              { name: "Unity", icon: "/images/react.png" },
              { name: "AWS", icon: "/images/java.png" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="group relative"
              >
                <div className="relative w-full aspect-square flex items-center justify-center">
                  <div className="absolute inset-0 bg-white/[0.05] rounded-2xl group-hover:bg-white/[0.1] 
                                transition-all duration-300 border border-white/[0.05]" />
                  <div className="relative w-20  h-16 flex items-center justify-center ">
                    <Image
                      src={tech.icon}
                      alt={tech.name}
                      fill
                      className="object-contain p-3"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Simple Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0A0A0A] to-[#080808]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-orange-500"></span>
              <span className="text-orange-400 tracking-wider text-sm font-light">Our Works</span>
              <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-orange-500"></span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-extralight mb-6"
            >
              Our Latest
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-light mt-2">
                Creative Works
              </span>
            </motion.h2>
           
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-[#0c0c0c] rounded-2xl overflow-hidden border border-white/5"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-400  to-red-600 mb-2 ">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden bg-[#0c0c0c] border border-white/5">
            {/* Glow Effects */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-orange-500/20 rounded-full blur-[120px]" />
            
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
              
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center justify-center lg:justify-start gap-2 mb-6"
                >
                  <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-orange-500"></span>
                  <span className="text-orange-400 tracking-wider text-sm font-light">GET STARTED</span>
                  <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-orange-500"></span>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-extralight mb-6"
                >
                  Ready to Transform
                  <span className="block text-transparent pb-1 bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 font-light mt-2">
                    Your Digital Presence?
                  </span>
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-400 text-lg mb-8 font-extralight max-w-2xl mx-auto lg:mx-0"
                >
                  Let's collaborate to create something extraordinary that sets your business apart
                </motion.p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400  to-red-600 border border-white/10 font-medium  rounded-xl
                           hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  Start Your Project 
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 rounded-xl text-gray-300 font-light border border-white/10 
                           hover:bg-white/5 hover:border-orange-500/20 transition-all duration-300"
                >
                  Schedule a Call
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies",
    icon: <FaCode className="w-6 h-6 text-orange-400" />,
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "Performance Optimization"
    ]
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications",
    icon: <FaMobile className="w-6 h-6 text-orange-400" />,
    features: [
      "iOS Development",
      "Android Development",
      "Cross-platform Apps",
      "App Store Optimization"
    ]
  },
  {
    title: "Software Solutions",
    description: "Enterprise-grade software solutions",
    icon: <FaDesktop className="w-6 h-6 text-orange-400" />,
    features: [
      "Custom Software Development",
      "Enterprise Solutions",
      "Legacy System Migration",
      "API Integration"
    ]
  }
];

const projects = [
  {
    title: "E-commerce Platform",
    description: "Modern shopping experience with advanced features",
    image: "/images/website.jpg",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Mobile Banking App",
    description: "Secure and intuitive mobile banking solution",
    image: "/images/website.jpg",
    technologies: ["React Native", "Firebase", "Redux"]
  },
  {
    title: "Enterprise Dashboard",
    description: "Comprehensive analytics and management platform",
    image: "/images/website.jpg",
    technologies: ["Next.js", "TypeScript", "GraphQL"]
  }
];

const techCategories = [
  {
    title: "Frontend",
    icon: <FaCode className="w-6 h-6 text-orange-400" />,
    technologies: [
      { name: "React", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "TypeScript", icon: "/icons/typescript.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
      { name: "Vue.js", icon: "/icons/vue.svg" },
      { name: "Angular", icon: "/icons/angular.svg" }
    ]
  },
  {
    title: "Backend",
    icon: <FaDatabase className="w-6 h-6 text-orange-400" />,
    technologies: [
      { name: "Node.js", icon: "/icons/nodejs.svg" },
      { name: "Python", icon: "/icons/python.svg" },
      { name: "Java", icon: "/icons/java.svg" },
      { name: "PHP", icon: "/icons/php.svg" },
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "PostgreSQL", icon: "/icons/postgresql.svg" }
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: <FaCloud className="w-6 h-6 text-orange-400" />,
    technologies: [
      { name: "AWS", icon: "/icons/aws.svg" },
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "Kubernetes", icon: "/icons/kubernetes.svg" },
      { name: "GitHub", icon: "/icons/github.svg" },
      { name: "Jenkins", icon: "/icons/jenkins.svg" },
      { name: "Azure", icon: "/icons/azure.svg" }
    ]
  }
];

const techStats = [
  {
    value: "50+",
    label: "Technologies",
    icon: <FaCode className="w-6 h-6 text-orange-400" />
  },
  {
    value: "100%",
    label: "Code Coverage",
    icon: <FaShieldAlt className="w-6 h-6 text-orange-400" />
  },
  {
    value: "24/7",
    label: "Support",
    icon: <FaUsers className="w-6 h-6 text-orange-400" />
  },
  {
    value: "99.9%",
    label: "Uptime",
    icon: <FaChartBar className="w-6 h-6 text-orange-400" />
  }
];

export default ServicesPage;
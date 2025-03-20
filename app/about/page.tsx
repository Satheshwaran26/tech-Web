"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGlobe, FaMobile, FaLaptopCode, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#080808]">

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#080808]">
        {/* Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          <div className="max-w-5xl mx-auto text-center font-extralight">
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-8"
            >
              <span className="text-sm text-orange-400 tracking-wider uppercase bg-orange-500/5 px-4 py-2 rounded-full border border-orange-500/10">
                About Us
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-extralight mb-6 leading-tight">
                We Create Digital Excellence
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                  Digital Excellence
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-extralight" >
                Transforming ideas into innovative solutions since 2020.
                We specialize in cutting-edge software development.
              </p>
            </motion.div>

            {/* Simple Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16"
            >
              <div className="text-center">
                <motion.h3
                  className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2"

                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  500+
                </motion.h3>
                <p className="text-gray-400">Projects Delivered</p>
              </div>

              <div className="text-center">
                <motion.h3
                  className="text-4xl font-light text-[#343434] mb-2"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  15+
                </motion.h3>
                <p className="text-gray-400">Years Experience</p>
              </div>

              <div className="text-center md:col-span-1 col-span-2">
                <motion.h3
                  className="text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  200+
                </motion.h3>
                <p className="text-gray-400">Happy Clients</p>
              </div>
            </motion.div>
          </div>

          {/* Mouse Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20"
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
                   transition-all duration-300 group"
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

      {/* Owner Profile Section */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="container mx-auto px-6"
        >

          {/* Main Content */}
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Left Content - Quote */}
              <div className="lg:col-span-3 space-y-8 lg:pr-12">
                {/* Decorative Elements */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1 }}
                  className="h-px bg-gradient-to-r from-orange-500/50 to-transparent"
                />

                {/* Quote */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="relative"
                >
                  <div className="absolute -left-8 -top-6 text-6xl text-orange-500/20 font-serif">"</div>
                  <h2 className="text-3xl md:text-4xl font-light leading-relaxed text-gray-200/90">
                    We at Divine Infotech are committed to helping you
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                      {" "}streamline your operations{" "}
                    </span>
                    minimize complexity, and foster lasting customer satisfaction because
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                      {" "}your growth is our growth.
                    </span>
                  </h2>
                </motion.div>

                {/* Author Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center gap-6 pt-6"
                >
                  <div className="space-y-1">
                    <h3 className="text-2xl font-light">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                        Tino Britty J
                      </span>
                    </h3>
                    <p className="text-gray-400">Founder and CEO</p>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="group relative p-2 rounded-lg overflow-hidden bg-orange-500/5 
                                 hover:bg-orange-500/10 transition-colors duration-300"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 
                                      group-hover:opacity-100 transition-opacity duration-300" />
                      <svg className="w-5 h-5 text-orange-400 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="group relative p-2 rounded-lg overflow-hidden bg-orange-500/5 
                                 hover:bg-orange-500/10 transition-colors duration-300"
                    >

                      <svg className="w-5 h-5 text-orange-400 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right Content - Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="lg:col-span-2 relative"
              >
                <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
                  {/* Background Gradient */}
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ffd89b] to-[#ffb55f]" />
                    <div className="absolute top-0 left-0 w-1/2 h-full bg-[#19192E]" />
                  </div>

                  {/* Image */}
                  <Image
                    src="/images/tino.jpg"  // Make sure this path matches your image location
                    alt="Tino Britty J"
                    fill
                    className="object-cover relative z-10"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />

                  {/* Optional Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-20" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background Effects */}

        {/* Orange gradient blur background */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-[150px]" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="container mx-auto px-6 relative z-10"
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block mb-4"
            >
              <span className="text-sm text-orange-400 tracking-wider uppercase bg-orange-500/5 px-4 py-2 rounded-full border border-orange-500/10">
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
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative p-8 rounded-2xl bg-[#0a0a0a64] border border-orange-500/10 
                                 backdrop-blur-sm overflow-hidden transition-all duration-500
                                  hover:shadow-2xl hover:shadow-gray-900/10">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 " />

                  {/* Content */}
                  <div className="relative z-10 space-y-6">
                    {/* Icon */}
                    <div className="relative inline-flex">
                      <div className="w-16 h-16 rounded-xl bg-orange-500/10 flex items-center justify-center
                                      group-hover:bg-orange-500/20 transition-colors duration-300">
                        <div className="text-orange-400 text-2xl">
                          {service.icon}
                        </div>
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl blur opacity-0 
                                      group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-light text-white group-hover:text-transparent group-hover:bg-clip-text 
                                   group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-500 
                                   transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Link */}
                    <motion.a
                      href={service.link}
                      className="inline-flex items-center text-orange-400 hover:text-orange-300 
                                 transition-colors duration-300 group/link"
                    >
                      <span className="relative">
                        Learn More
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-orange-400 
                                        group-hover/link:w-full transition-all duration-300" />
                      </span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="container mx-auto px-6"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-sm text-orange-400 tracking-wider uppercase"
            >
              Our Team
            </motion.span>
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="text-3xl md:text-4xl font-light mt-4"
            >
              Meet Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 ml-2">
                Experts
              </span>
            </motion.h2>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                {/* Image Container with Cartoon Effect */}
                <div className="relative w-full mb-6">
                  {/* Background Shape */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-orange-500/10 
                                  rounded-3xl transform rotate-6 transition-transform duration-300 
                                  group-hover:rotate-12" />

                  {/* Main Image Container */}
                  <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br 
                                  from-orange-500/5 to-red-500/5 border border-orange-500/10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                      priority={index < 2}
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 
                                    opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full 
                                      group-hover:translate-y-0 transition-transform duration-300">
                        <div className="flex justify-center space-x-3">
                          {member.socialLinks.map((social, idx) => (
                            <a
                              key={idx}
                              href={social.link}
                              className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center 
                                         text-white hover:bg-orange-500/40 transition-all duration-300"
                            >
                              {social.icon}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="text-center relative z-10">
                  <h3 className="text-lg font-light text-gray-200 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-orange-400/80">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 relative overflow-hidden">
      

        <div className="container mx-auto px-6 relative z-10">
          {/* Clean Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <span className="text-sm text-orange-400 tracking-wider uppercase">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-light mt-4 mb-6">
              How We
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 ml-2">
                Work
              </span>
            </h2>
          </motion.div>

          {/* Process Steps Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {workSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Step Card */}
                <div className="p-8 rounded-2xl bg-[#0a0a0a58] border border-orange-500/10 
                                 hover:border-orange-500/20 transition-all duration-300">
                  {/* Step Number and Title */}
                  <div className="flex items-center gap-6 mb-6">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-orange-500/5 flex items-center justify-center">
                        <span className="text-2xl font-light text-transparent bg-clip-text 
                                         bg-gradient-to-r from-orange-400 to-red-500">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl text-gray-200 font-light group-hover:text-orange-400 
                                   transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-1 gap-3">
                    {step.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (idx * 0.1) }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-lg bg-orange-500/5 flex items-center 
                                        justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-orange-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-400/80 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>


                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="container mx-auto px-6 relative z-10"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="text-5xl font-light bg-gradient-to-r from-orange-400  to-red-500 text-transparent bg-clip-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400">
              Let&apos;s create something extraordinary together. Get in touch with us today.
            </p>

           
            <button className="relative py-4 px-8 text-xl font-normal rounded-full shadow-lg transition-all duration-300 transform border-[#1c1c1c] hover:scale-105 hover:shadow-2xl border">
          <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
          Start Your Journey
          </span>
          
        </button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

// Update the services array with the correct icons
const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies.",
    icon: <FaGlobe className="w-8 h-8 text-orange-400" />,
    link: "/services/web"
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: <FaMobile className="w-8 h-8 text-orange-400" />,
    link: "/services/mobile"
  },
  {
    title: "Software Solutions",
    description: "Custom software solutions tailored to your business needs.",
    icon: <FaLaptopCode className="w-8 h-8 text-orange-400" />,
    link: "/services/software"
  }
];

// Update the teamMembers array with the correct icons
const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Senior Developer",
    image: "/images/tino.jpg",
    socialLinks: [
      { icon: <FaLinkedin className="w-4 h-4" />, link: "#" },
      { icon: <FaTwitter className="w-4 h-4" />, link: "#" },
    ]
  },
  {
    name: "Michael Chen",
    role: "UI/UX Designer",
    image: "/images/tino.jpg",
    socialLinks: [
      { icon: <FaLinkedin className="w-4 h-4" />, link: "#" },
      { icon: <FaTwitter className="w-4 h-4" />, link: "#" },
    ]
  },
  {
    name: "Emily Rodriguez",
    role: "Full Stack Developer",
    image: "/images/tino.jpg",
    socialLinks: [
      { icon: <FaLinkedin className="w-4 h-4" />, link: "#" },
      { icon: <FaTwitter className="w-4 h-4" />, link: "#" },
    ]
  },
  {
    name: "David Kim",
    role: "Backend Developer",
    image: "/images/tino.jpg",
    socialLinks: [
      { icon: <FaLinkedin className="w-4 h-4" />, link: "#" },
      { icon: <FaTwitter className="w-4 h-4" />, link: "#" },
    ]
  }
];

// Add these right after the teamMembers array
const workSteps = [
  {
    title: "Discovery & Strategy",
    description: "We dive deep into understanding your vision and goals to create the perfect roadmap for success.",
    features: [
      "Project Analysis",
      "Market Research",
      "Goal Setting",
      "Strategy Planning"
    ]
  },
  {
    title: "Design & Planning",
    description: "Creating intuitive designs and robust architecture that align perfectly with your brand.",
    features: [
      "UI/UX Design",
      "Brand Integration",
      "User Research",
      "Prototype Development"
    ]
  },
  {
    title: "Development",
    description: "Bringing your vision to life with cutting-edge technologies and best practices.",
    features: [
      "Clean Code",
      "Quality Testing",
      "Performance Focus",
      "Security First"
    ]
  },
  {
    title: "Launch & Support",
    description: "Ensuring smooth deployment and providing ongoing support for your success.",
    features: [
      "Final Testing",
      "Deployment",
      "24/7 Support",
      "Regular Updates"
    ]
  }
];



export default AboutPage;
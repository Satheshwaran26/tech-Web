"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { FaGlobe, FaMobile, FaLaptopCode, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
const AboutPage = () => {
    return (
      <div className="min-h-screen bg-black">
        
{/* Hero Section */}
<section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black">
  {/* Updated Gradient Overlay with Silver, Orange, and Pink */}
  
  
  {/* Colorful Gradient Blurs */}
 
  
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
  </div>
  
  {/* Main Content Container */}
  <div className="container mx-auto px-6 relative z-10">
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
            className="text-4xl font-bold text-orange-400 mb-2"
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
            className="text-4xl font-bold text-pink-400 mb-2"
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
            className="text-4xl font-bold text-[#C0C0C0] mb-2"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            200+
          </motion.h3>
          <p className="text-gray-400">Happy Clients</p>
        </div>
      </motion.div>

      {/* Simple CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full text-white font-medium 
                   hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Simple Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 mx-auto w-24 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent"
      />
    </div>
  </div>

 
</section>

        {/* Owner Profile Section */}
        <section className="py-24 relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="container mx-auto px-6"
          >
            <div className="max-w-7xl mx-auto">
              <motion.div 
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative rounded-[2rem] overflow-hidden bg-gradient-to-br from-purple-900/20 via-black to-black border border-purple-500/20 p-8 md:p-12"
              >
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 blur-3xl" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                  <div className="space-y-8">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                        John Doe
                      </h2>
                      <p className="text-xl text-purple-400">Founder & CEO</p>
                    </motion.div>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="text-gray-400 leading-relaxed"
                    >
                      With over 15 years of experience in technology innovation, John has led Error Tech 
                      to become a leading force in digital transformation, helping businesses achieve their 
                      technological aspirations.
                    </motion.p>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="flex gap-6"
                    >
                      {/* Social Links */}
                      <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="relative aspect-square rounded-2xl overflow-hidden"
                  >
                    <Image
                      src="/images/a.jpg"
                      alt="John Doe"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
  
        {/* Services Section */}
        <section className="py-24 relative">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="container mx-auto px-6"
          >
            <div className="text-center mb-16 space-y-4">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
              >
                Our Services
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="text-gray-400"
              >
                Comprehensive digital solutions for modern businesses
              </motion.p>
            </div>
  
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="group relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 via-black to-black border border-purple-500/20 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <motion.a
                      href={service.link}
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.a>
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
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text mb-4"
              >
                Meet Our Team
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="text-gray-400"
              >
                The talented people behind our success
              </motion.p>
            </div>
  
            <div className="grid md:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex justify-center space-x-4">
                        {member.socialLinks.map((social, idx) => (
                          <a
                            key={idx}
                            href={social.link}
                            className="text-white hover:text-purple-400 transition-colors"
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-purple-400">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
  
        {/* How We Work Section */}
        <section className="py-32 relative overflow-hidden">
          {/* Dynamic Background */}
          <div className="absolute inset-0 bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] animate-pulse" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            {/* Stylish Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-24"
            >
              <span className="inline-block px-4 py-1 mb-6 rounded-full text-sm bg-purple-500/10 text-purple-400 border border-purple-500/20">
                Our Process
              </span>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400">
                  How We Work
                </span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Transforming ideas into reality through our proven process
              </p>
            </motion.div>

            {/* Process Steps Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {workSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="group relative"
                >
                  {/* Animated Card */}
                  <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 via-black to-black 
                                 border border-purple-500/20 backdrop-blur-xl relative overflow-hidden
                                 hover:border-purple-500/40 transition-all duration-500
                                 hover:shadow-2xl hover:shadow-purple-500/10">
                    
                    {/* Glowing Corner */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-[100px] 
                                  group-hover:bg-pink-500/20 transition-all duration-700" />

                    {/* Step Number */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center
                                      group-hover:bg-purple-500/20 transition-all duration-300">
                          <span className="text-3xl font-light text-purple-400 group-hover:scale-110 transition-transform duration-300">
                            {(index + 1).toString().padStart(2, '0')}
                          </span>
                        </div>
                        <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/50 to-pink-500/50 rounded-xl opacity-0 
                                      group-hover:opacity-20 blur transition-opacity duration-300" />
                      </div>
                      <div className="h-px flex-grow bg-gradient-to-r from-purple-500/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Features List */}
                      <div className="grid grid-cols-2 gap-4">
                        {step.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + (idx * 0.1) }}
                            className="flex items-center gap-3"
                          >
                            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0
                                          group-hover:bg-purple-500/20 transition-all duration-300">
                              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-400 text-sm">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-transparent rotate-45 transform origin-bottom-right" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Call to Action */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-black/20" />
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
              <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-400">
                Let's create something extraordinary together. Get in touch with us today.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium 
                           hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                Start Your Journey
              </motion.button>
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
    icon: <FaGlobe className="w-8 h-8 text-purple-400" />,
    link: "/services/web"
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: <FaMobile className="w-8 h-8 text-purple-400" />,
    link: "/services/mobile"
  },
  {
    title: "Software Solutions",
    description: "Custom software solutions tailored to your business needs.",
    icon: <FaLaptopCode className="w-8 h-8 text-purple-400" />,
    link: "/services/software"
  }
];

// Update the teamMembers array with the correct icons
const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Senior Developer",
    image: "/images/team/member1.jpg",
    socialLinks: [
      { icon: <FaLinkedin className="w-5 h-5" />, link: "#" },
      { icon: <FaTwitter className="w-5 h-5" />, link: "#" },
      { icon: <FaGithub className="w-5 h-5" />, link: "#" }
    ]
  },
  {
    name: "Michael Chen",
    role: "UI/UX Designer",
    image: "/images/team/member2.jpg",
    socialLinks: [
      { icon: <FaLinkedin className="w-5 h-5" />, link: "#" },
      { icon: <FaTwitter className="w-5 h-5" />, link: "#" },
      { icon: <FaGithub className="w-5 h-5" />, link: "#" }
    ]
  },
  {
    name: "Emily Rodriguez",
    role: "Full Stack Developer",
    image: "/images/team/member3.jpg",
    socialLinks: [
      { icon: <FaLinkedin className="w-5 h-5" />, link: "#" },
      { icon: <FaTwitter className="w-5 h-5" />, link: "#" },
      { icon: <FaGithub className="w-5 h-5" />, link: "#" }
    ]
  },
  {
    name: "David Kim",
    role: "Backend Developer",
    image: "/images/team/member4.jpg",
    socialLinks: [
      { icon: <FaLinkedin className="w-5 h-5" />, link: "#" },
      { icon: <FaTwitter className="w-5 h-5" />, link: "#" },
      { icon: <FaGithub className="w-5 h-5" />, link: "#" }
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

const keyFeatures = [
  {
    title: "Agile Methodology",
    description: "Flexible and iterative approach to project management and development.",
    icon: <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  },
  {
    title: "Quality Assurance",
    description: "Rigorous testing and quality control throughout the development process.",
    icon: <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  },
  {
    title: "24/7 Support",
    description: "Continuous support and maintenance after project delivery.",
    icon: <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  }
];
  
  export default AboutPage;
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Code, ShieldCheck,Sparkles, Zap, ChevronRight, Star, Settings, Cloud, BarChart3 } from "lucide-react";

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState("features");

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const products = [
    {
      id: 1,
      name: "Error Tech AI Model",
      description: "Advanced AI solution for predictive analytics and intelligent automation.",
      image: "/images/ai-model.jpg",
      price: "$499",
      features: ["Neural networks", "Machine learning", "Decision support", "Custom integrations"]
    },
    {
      id: 2,
      name: "Smart Analytics Dashboard",
      description: "Comprehensive data visualization and business intelligence platform.",
      image: "/images/analytics.jpg",
      price: "$399",
      features: ["Real-time metrics", "Interactive charts", "Custom reports", "Trend analysis"]
    },
    {
      id: 3,
      name: "Billing Software Suite",
      description: "Complete solution for invoicing, payments, and financial management.",
      image: "/images/billing.jpg",
      price: "$299",
      features: ["Automated invoicing", "Payment tracking", "Tax calculations", "Financial reports"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, InnovateTech",
      content: "Error Tech's AI Model has completely transformed our decision-making process. The predictive analytics capabilities are unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      position: "Product Manager, DataFlow",
      content: "The billing software has streamlined our entire financial operation. We've reduced processing time by 65%.",
      rating: 5
    },
    {
      name: "Priya Patel",
      position: "CEO, NextGen Solutions",
      content: "The analytics dashboard gives us insights we never had before. It's intuitive and powerful at the same time.",
      rating: 4
    }
  ];

  return (
    <div className=" text-white min-h-screen">
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
              <span className="text-orange-500  text-xs sm:text-sm font-normal">Products</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-extralight mb-8"
            >
            Innovative Solutions
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 pb-2">
              for Tomorrow's Challenges
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto font-extralight "
            >
      Discover our cutting-edge products designed to transform your business with the power of AI, analytics, and intelligent automation.

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
                Explore Products
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4  rounded-full text-gray-400 font-extralight backdrop-blur-sm 
                         border border-white/10"
              >
                Contact Sales
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


      {/* Product Showcase */}
      <section id="products" className="py-20 ">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Our <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Featured</span> Products
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our ecosystem of powerful solutions designed to solve complex business challenges and drive innovation.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={fadeIn}
                className="bg-[#111111] rounded-xl overflow-hidden border border-[#222] hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <div className="mb-6">
                    <span className="text-2xl text-white">{product.price}</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <ChevronRight size={16} className="text-orange-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/product/${product.id}`}>
                    <button className="w-full py-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-lg text-orange-400 hover:from-orange-500 hover:to-red-500 hover:text-white transition-all duration-300">
                      Learn More
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col md:flex-row items-start gap-12"
          >
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Powerful <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Features</span> That Make Us Different
              </h2>
              <p className="text-gray-400 mb-8">
                Our products are built with cutting-edge technology and designed with user experience in mind.
              </p>
              
              <div className="space-y-4">
                <button 
                  onClick={() => setActiveTab("features")}
                  className={`flex items-center w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeTab === "features" 
                      ? "bg-gradient-to-r from-orange-500/20 to-red-500/20 border-l-4 border-orange-500" 
                      : "hover:bg-[#111]"
                  }`}
                >
                  <Settings className={`mr-3 ${activeTab === "features" ? "text-orange-500" : "text-gray-500"}`} size={20} />
                  <span className={activeTab === "features" ? "text-white" : "text-gray-400"}>Core Features</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab("cloud")}
                  className={`flex items-center w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeTab === "cloud" 
                      ? "bg-gradient-to-r from-orange-500/20 to-red-500/20 border-l-4 border-orange-500" 
                      : "hover:bg-[#111]"
                  }`}
                >
                  <Cloud className={`mr-3 ${activeTab === "cloud" ? "text-orange-500" : "text-gray-500"}`} size={20} />
                  <span className={activeTab === "cloud" ? "text-white" : "text-gray-400"}>Cloud Integration</span>
                </button>
                
                <button 
                  onClick={() => setActiveTab("analytics")}
                  className={`flex items-center w-full text-left px-4 py-3 rounded-lg transition-all ${
                    activeTab === "analytics" 
                      ? "bg-gradient-to-r from-orange-500/20 to-red-500/20 border-l-4 border-orange-500" 
                      : "hover:bg-[#111]"
                  }`}
                >
                  <BarChart3 className={`mr-3 ${activeTab === "analytics" ? "text-orange-500" : "text-gray-500"}`} size={20} />
                  <span className={activeTab === "analytics" ? "text-white" : "text-gray-400"}>Advanced Analytics</span>
                </button>
              </div>
            </div>
            
            <div className="md:w-2/3 bg-[#111] p-8 rounded-xl border border-[#222]">
              {activeTab === "features" && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-light mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Core Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center">
                          <Compass size={20} className="text-orange-500" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white text-lg mb-2">Intuitive Interface</h4>
                        <p className="text-gray-400">User-centered design that makes complex tasks simple and accessible.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center">
                          <Code size={20} className="text-orange-500" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white text-lg mb-2">Customizable Workflow</h4>
                        <p className="text-gray-400">Tailor the system to match your unique business processes.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center">
                          <ShieldCheck size={20} className="text-orange-500" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white text-lg mb-2">Enhanced Security</h4>
                        <p className="text-gray-400">Enterprise-grade security with encryption and compliance measures.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="mr-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center">
                          <Zap size={20} className="text-orange-500" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white text-lg mb-2">Lightning Fast</h4>
                        <p className="text-gray-400">Optimized performance that handles complex operations with ease.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {activeTab === "cloud" && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-light mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Cloud Integration
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Seamlessly connect with all major cloud providers and leverage the power of distributed computing.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {["AWS", "Azure", "Google Cloud", "IBM Cloud"].map((provider, index) => (
                      <div key={index} className="bg-[#0a0a0a] p-4 rounded-lg border border-[#222] text-center">
                        <p className="text-gray-300">{provider}</p>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight size={18} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                      <p className="text-gray-400">Automatic syncing across multiple cloud platforms</p>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight size={18} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                      <p className="text-gray-400">Seamless data migration and backup solutions</p>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight size={18} className="text-orange-500 mt-1 mr-2 flex-shrink-0" />
                      <p className="text-gray-400">Scalable resources that grow with your business needs</p>
                    </li>
                  </ul>
                </motion.div>
              )}
              
              {activeTab === "analytics" && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-light mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                    Advanced Analytics
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Transform raw data into actionable insights with our powerful analytics engine.
                  </p>
                  <div className="relative h-[200px] mb-6 bg-[#0a0a0a] rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-gray-500">Interactive analytics dashboard preview</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#222]">
                      <h4 className="text-orange-400 mb-2">Predictive Modeling</h4>
                      <p className="text-gray-400 text-sm">Anticipate trends and make data-driven decisions</p>
                    </div>
                    <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#222]">
                      <h4 className="text-orange-400 mb-2">Real-time Processing</h4>
                      <p className="text-gray-400 text-sm">Analyze data as it arrives for immediate insights</p>
                    </div>
                    <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#222]">
                      <h4 className="text-orange-400 mb-2">Custom Reports</h4>
                      <p className="text-gray-400 text-sm">Create tailored reports for different stakeholders</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              What Our <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Clients</span> Say
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't take our word for it. Here's what industry leaders have to say about our products.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="bg-gradient-to-br from-[#111] to-[#0d0d0d] p-8 rounded-xl border border-[#222] relative"
              >
                <div className="mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      className={i < testimonial.rating ? "text-orange-500 inline-block" : "text-gray-600 inline-block"} 
                      fill={i < testimonial.rating ? "#f97316" : "none"}
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-medium">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="text-3xl md:text-5xl font-light mb-6">
              Ready to <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              Join thousands of forward-thinking companies who trust Error Tech to power their digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all hover:-translate-y-1">
                  Schedule a Demo
                </button>
              </Link>
              <Link href="/product/compare">
                <button className="px-8 py-4 border border-orange-500/30 rounded-lg text-orange-400 hover:bg-orange-500/10 transition-all hover:-translate-y-1">
                  Compare Plans
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 
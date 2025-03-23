'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaComment, FaPhone, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  // Smooth scroll function
  const smoothScrollToFAQ = (e: React.MouseEvent) => {
    e.preventDefault();
    // First navigate to the home page
    router.push('/');
    
    // Then scroll to the FAQ section after a short delay to ensure navigation completes
    setTimeout(() => {
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

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

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className=" min-h-screen">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>
      
      {/* Gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-24 relative">
        {/* Header section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <span className="bg-[#111111]/60 border border-[#343434] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-orange-500 text-xs sm:text-sm inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              Get In Touch
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white">
            Let's <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent animate-gradient">Connect</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Reach out to us with your questions, ideas, or needs. Our team is ready to provide the solutions and support your business deserves.
          </p>
        </motion.div>

        {/* Contact content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Contact information */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:w-2/5 space-y-6 md:space-y-8"
          >
            <motion.div 
              variants={itemVariant}
              className="bg-[#0a0a0a]/80 border border-[#222] p-6 sm:p-8 rounded-xl backdrop-blur-sm transition-all hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5"
            >
              <h2 className="text-xl sm:text-2xl font-light mb-6 text-white">Contact Information</h2>
              
              <div className="space-y-5 sm:space-y-6">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center mr-4 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all">
                    <FaPhone className="text-orange-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Phone</p>
                    <p className="text-white group-hover:text-orange-400 transition-colors">+1 (555) 123-4567</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center mr-4 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all">
                    <FaEnvelope className="text-orange-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                    <p className="text-white group-hover:text-orange-400 transition-colors">contact@errortech.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center mr-4 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all">
                    <FaMapMarkerAlt className="text-orange-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Address</p>
                    <p className="text-white group-hover:text-orange-400 transition-colors">123 Innovation Drive, Tech City, TC 10101</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center mr-4 group-hover:from-orange-500/30 group-hover:to-red-500/30 transition-all">
                    <FaClock className="text-orange-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs sm:text-sm">Business Hours</p>
                    <p className="text-white group-hover:text-orange-400 transition-colors">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={itemVariant}
              className="bg-[#0a0a0a]/80 border border-[#222] p-6 sm:p-8 rounded-xl backdrop-blur-sm relative overflow-hidden transition-all hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5"
            >
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-full blur-3xl"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 rounded-full border-2 border-orange-500/30 overflow-hidden mr-4 flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-r from-orange-500/50 to-red-500/50"></div>
                  </div>
                  <div>
                    <p className="text-white text-lg font-light">Satheshwaran V</p>
                    <p className="text-gray-400 text-xs sm:text-sm">Founder & CEO, Error Tech</p>
                  </div>
                </div>
                <p className="text-gray-300 italic text-sm sm:text-base">
                  "We're dedicated to transforming businesses through innovative digital solutions. Let's create something amazing together."
                </p>
              </div>
              
              <motion.div 
                whileHover={{ x: 5 }}
                className="mt-6 flex items-center text-orange-500 group cursor-pointer"
              >
                <Link href="/about" className="text-sm group-hover:text-orange-400 transition-colors flex items-center">
                  Learn more about our team
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Contact form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-3/5"
          >
            <div className="bg-[#0a0a0a]/80 border border-[#222] p-6 sm:p-8 rounded-xl backdrop-blur-sm relative overflow-hidden transition-all hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-500/5">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
              
              <h2 className="text-xl sm:text-2xl font-light mb-6 text-white relative z-10">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-6">
                  <div className="relative">
                    <FaUser className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focused === 'name' ? 'text-orange-500' : 'text-gray-500'}`} />
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Your Name" 
                      className="w-full py-3 px-12 bg-[#111]/70 border border-[#333] rounded-lg focus:outline-none focus:border-orange-500/50 text-white transition-all"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <FaEnvelope className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${focused === 'email' ? 'text-orange-500' : 'text-gray-500'}`} />
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Your Email" 
                      className="w-full py-3 px-12 bg-[#111]/70 border border-[#333] rounded-lg focus:outline-none focus:border-orange-500/50 text-white transition-all"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6 relative">
                  <FaComment className={`absolute left-4 top-6 transition-colors ${focused === 'message' ? 'text-orange-500' : 'text-gray-500'}`} />
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    rows={5}
                    className="w-full py-4 px-12 bg-[#111]/70 border border-[#333] rounded-lg focus:outline-none focus:border-orange-500/50 text-white transition-all resize-none"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    required
                  ></textarea>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-xs sm:text-sm text-gray-400">By submitting, you agree to our <span className="text-orange-500 cursor-pointer hover:underline">Terms of Service</span></p>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className={`relative px-6 sm:px-8 py-3 rounded-lg overflow-hidden group ${submitted ? 'bg-green-500' : 'bg-gradient-to-r from-orange-500 to-red-500 animate-gradient'} text-white font-medium transition-all`}
                  >
                    {submitted ? 'Message Sent!' : 'Send Message'}
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.button>
                </div>
              </form>
            </div>
            
            {/* FAQ Teaser */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-6 p-4 sm:p-6 bg-[#111]/40 border border-[#222] rounded-lg backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white text-sm sm:text-base font-light">Have questions before reaching out?</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Check our frequently asked questions for quick answers.</p>
                </div>
                <Link 
                  href="/#faq" 
                  onClick={smoothScrollToFAQ}
                >
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 sm:px-4 py-2 border border-orange-500/30 rounded-lg text-orange-400 text-xs sm:text-sm hover:bg-orange-500/10 transition-all"
                  >
                    View FAQs
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {  ArrowRight, Sparkles, MessageCircle, 
 Clock, Plus } from 'lucide-react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI Development",
      description: "Explore the latest developments in artificial intelligence and what's coming next...",
      category: "AI Development",
      readTime: "5 min",
      author: "John Doe",
      date: "Mar 15, 2024",
      image: "/images/blog/post-1.jpg"
    },
    {
      id: 2,
      title: "Machine Learning Algorithms",
      description: "Deep dive into the most effective machine learning algorithms and their applications...",
      category: "AI Development",
      readTime: "7 min",
      author: "Jane Smith",
      date: "Mar 14, 2024",
      image: "/images/blog/post-2.jpg"
    },
    {
      id: 3,
      title: "Web Development Trends",
      description: "Latest trends in web development that are shaping the future...",
      category: "Development",
      readTime: "4 min",
      author: "Mike Wilson",
      date: "Mar 13, 2024",
      image: "/images/blog/post-3.jpg"
    },
    {
      id: 4,
      title: "Neural Networks Explained",
      description: "A comprehensive guide to understanding neural networks in AI development...",
      category: "AI Development",
      readTime: "8 min",
      author: "Sarah Lee",
      date: "Mar 12, 2024",
      image: "/images/blog/post-4.jpg"
    },
    {
      id: 5,
      title: "UI Design Principles",
      description: "Essential principles for creating effective user interfaces...",
      category: "Design",
      readTime: "6 min",
      author: "Alex Brown",
      date: "Mar 11, 2024",
      image: "/images/blog/post-5.jpg"
    },
    {
      id: 6,
      title: "AI in Healthcare",
      description: "How artificial intelligence is revolutionizing the healthcare industry...",
      category: "AI Development",
      readTime: "9 min",
      author: "Emily Chen",
      date: "Mar 10, 2024",
      image: "/images/blog/post-6.jpg"
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center py-12 sm:py-16 md:py-20">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px]" /> */}
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8 px-4 sm:px-6 md:px-8">
          

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-orange-500/5 border border-orange-500/20 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-orange-500" />
              </motion.div>
              <span className="text-orange-500  text-xs sm:text-sm font-normal">Blogs</span>
            </motion.div>

            {/* Dynamic Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extralight leading-tight"
            >
              <span className="inline-block ">
                Discover
              </span>
              <br />
              <span className="inline-block pb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Amazing Stories
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-extralight px-4" 
            >
              Explore the latest in technology, AI development, and creative insights
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-4 sm:pt-6 md:pt-8 px-4"
            >
              <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white 
                               shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300
                               flex items-center justify-center gap-2 font-medium text-sm sm:text-base"
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                <span>Create Blog</span>
              </button>
              <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-white/5 border border-orange-500/20 rounded-xl text-white 
                               hover:bg-white/10 transition-all duration-300 backdrop-blur-sm
                               flex items-center justify-center gap-2 font-medium text-sm sm:text-base"
              >
                <span>Explore Articles</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
            
          </div>
              {/* Mouse Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-22 pt-24 -ml-8 left-1/2 transform -translate-x-1/2 z-50"
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

      {/* Enhanced Posts Section */}
      <section className="py-12 sm:py-16 md:py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Category Navigation */}
          <div className="max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-light text-center mb-8 sm:mb-12"
            >
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Featured Articles
              </span>
            </motion.h2>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
              {['All', 'AI Development', 'Development', 'Design'].map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 text-sm sm:text-base ${
                    category === selectedCategory
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/20'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-orange-500/20'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-10xl mx-auto px-2 sm:px-4">
            <AnimatePresence mode="wait">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group bg-[#111111] rounded-2xl overflow-hidden border border-orange-500/10 
                           hover:border-orange-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/5"
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/50 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 bg-orange-500/90 rounded-full text-sm text-white font-medium backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                      <Clock className="w-4 h-4 text-orange-500" />
                      {post.readTime}
                    </div>

                    <h3 className="text-lg sm:text-xl font-medium text-white group-hover:text-orange-500 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-orange-500/10">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="relative">
                          <Image
                            src="/images/avatars/author1.jpg"
                            alt={post.author}
                            width={32}
                            height={32}
                            className="rounded-full ring-2 ring-orange-500/20 sm:w-10 sm:h-10"
                          />
                          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[#111111]" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-medium text-white">{post.author}</p>
                          <p className="text-xs text-gray-400">{post.date}</p>
                        </div>
                      </div>
                      <button className="p-2 rounded-lg hover:bg-orange-500/10 transition-colors group/btn">
                        <ArrowRight className="w-5 h-5 text-orange-500 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Enhanced Newsletter Section */}
      <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
         <div className="absolute inset-0">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-xl mx-auto text-center space-y-4 sm:space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20"
            >
              <MessageCircle className="w-4 h-4 text-orange-500" />
              <span className="text-orange-500 text-sm font-medium">Join Our Community</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-light"
            >
              <span className="bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                Never Miss an Update
              </span>
            </motion.h2>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 p-1.5 bg-white/5 rounded-2xl border border-orange-500/20 backdrop-blur-sm"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-transparent rounded-xl
                         focus:outline-none focus:ring-0
                         text-white placeholder-gray-400 text-sm sm:text-base"
              />
              <button className="px-6 sm:px-8 py-3 sm:py-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 rounded-xl border border-[#373636]
                               shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all
                               flex items-center justify-center gap-2 font-medium group text-sm sm:text-base"
              >
                <span>Subscribe</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-orange-400 " />
              </button>
            </motion.form>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400">
              {[
                { icon: '🚀', text: 'Weekly Updates' },
                { icon: '🔒', text: 'No Spam' },
                { icon: '✨', text: 'Premium Content' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Sparkles, MessageCircle, 
         Heart, Bookmark, TrendingUp, Filter, Clock, Plus } from 'lucide-react';

const BlogPage = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
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

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#0e0e0e]">
         {/* Enhanced Hero Section */}
         <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background with Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-red-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/20 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-orange-500" />
              </motion.div>
              <span className="text-orange-500 text-sm font-medium">Trending Articles</span>
            </motion.div>

            {/* Dynamic Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl sm:text-7xl font-extralight leading-tight"
            >
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-red-400">
                Discover
              </span>
              <br />
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
                Amazing Stories
              </span>
            </motion.h1>

            {/* Animated Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Explore curated articles on technology, innovation, and creativity. 
              Join our community of forward-thinkers and innovators.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white font-medium 
                         shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300
                         flex items-center gap-2 group"
              >
               
                <span>Create Blog</span>
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 border border-orange-500/20 rounded-xl text-white font-medium 
                         hover:bg-white/10 transition-all duration-300 backdrop-blur-sm
                         flex items-center gap-2"
              >
                <span>Explore Articles</span>
                <Sparkles className="w-5 h-5 text-orange-500" />
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

      {/* Featured Posts Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="flex flex-col items-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text mb-4">
                Explore Articles
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {['All', 'AI Development', 'Development', 'Design'].map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      category === selectedCategory
                        ? 'bg-gradient-to-r from-[#f4722b] to-red-500 text-white shadow-lg shadow-orange-500/20'
                        : 'bg-[#161616] text-gray-300 hover:bg-[#1c1c1c] border border-[#ffffff1a]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="w-full flex items-center gap-4 before:flex-1 before:h-px before:bg-gradient-to-r before:from-transparent before:to-[#f4722b]/20 after:flex-1 after:h-px after:bg-gradient-to-r after:from-[#f4722b]/20 after:to-transparent">
                <span className="text-gray-400 text-sm font-medium">
                  {filteredPosts.length} articles found
                </span>
              </div>
            </div>
          </div>

          {/* Posts Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group bg-[#161616] rounded-2xl overflow-hidden border border-[#ffffff1a] hover:border-[#f4722b]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#f4722b]/5"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 rounded-full bg-[#f4722b]/10 text-[#f4722b] text-sm font-medium backdrop-blur-sm border border-[#f4722b]/10">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#f4722b]" />
                        <span className="text-sm text-gray-400">{post.readTime}</span>
                      </div>

                      <h3 className="text-xl font-semibold text-white group-hover:text-[#f4722b] transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-400 text-sm line-clamp-2">
                        {post.description}
                      </p>

                      <div className="pt-4 border-t border-[#ffffff1a]">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <Image
                                src="/images/avatars/author1.jpg"
                                alt={post.author}
                                width={36}
                                height={36}
                                className="rounded-full ring-2 ring-[#f4722b]/20"
                              />
                              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[#161616]" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-white">{post.author}</p>
                              <p className="text-xs text-gray-400">{post.date}</p>
                            </div>
                          </div>
                          <button className="p-2 rounded-lg hover:bg-[#f4722b]/10 transition-colors group">
                            <ArrowRight className="w-5 h-5 text-[#f4722b] transition-transform group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
      {/* Simple Interactive CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-orange-500/5" />
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent"
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            {/* Floating Icon */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex p-3 rounded-2xl bg-orange-500/10 backdrop-blur-sm mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-orange-500" />
              </motion.div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-red-400">
                Join Our Newsletter
              </span>
            </motion.h2>

            {/* Interactive Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative flex-1"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-6 py-4 bg-white/5 rounded-xl border border-white/10 focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 pl-12"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-500" />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white font-medium shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300"
              >
                Subscribe
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-400"
            >
              {[
                '✨ Weekly Updates',
                '🔒 No Spam',
                '💡 Exclusive Content'
              ].map((item, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05, color: '#f97316' }}
                  className="transition-colors duration-300"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
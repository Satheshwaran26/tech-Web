"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Sparkles, BookOpen, Share2, MessageCircle, 
         Heart, Bookmark, TrendingUp } from 'lucide-react';

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#0e0e0e]">
         {/* Enhanced Hero Section */}
         <section className="relative min-h-screen overflow-hidden">
        {/* Animated Background with Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
          {/* Gradient Orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]" />
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-400/20 to-purple-400/20 border border-orange-400/20 backdrop-blur-sm"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-orange-400" />
              </motion.div>
              <span className="text-orange-400 text-sm font-medium">Trending Articles</span>
            </motion.div>

            {/* Dynamic Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl sm:text-7xl font-bold leading-tight"
            >
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-purple-400">
                Discover
              </span>
              <br />
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">
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

            {/* Enhanced Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative max-w-2xl mx-auto group"
            >
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full px-8 py-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 focus:border-orange-400/50 transition-all duration-300 pl-14 pr-36 text-lg"
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 px-6 py-3 bg-gradient-to-r from-orange-400 to-purple-400 rounded-xl text-white font-medium group-hover:scale-105 transition-all duration-300">
                Search Now
              </button>
            </motion.div>

            {/* Interactive Topic Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 pt-8"
            >
              {['All', 'Technology', 'Development', 'AI', 'Design'].map((topic, index) => (
                <motion.button
                  key={topic}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    topic === 'All'
                      ? 'bg-gradient-to-r from-orange-400 to-purple-400 text-white shadow-lg shadow-orange-400/20'
                      : 'bg-white/5 text-gray-300 hover:bg-gradient-to-r hover:from-orange-400/10 hover:to-purple-400/10 hover:text-white border border-white/10'
                  }`}
                >
                  {topic}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { label: 'Articles', value: '2.5K+' },
              { label: 'Writers', value: '150+' },
              { label: 'Readers', value: '50K+' },
              { label: 'Categories', value: '25+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -5 }}
                className="text-center p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-purple-400">
                  {stat.value}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-400 font-medium">Scroll to explore</span>
          <div className="w-[2px] h-16 bg-gradient-to-b from-orange-400 via-purple-400 to-transparent" />
        </motion.div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-12"
          >
            <h2 className="text-4xl font-bold flex items-center gap-3">
              <TrendingUp className="text-orange-400" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-400">
                Trending Articles
              </span>
            </h2>
          </motion.div>

          {/* Featured Post Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#161616]/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-[#ffffff1a] hover:border-orange-400/50 transition-all duration-500"
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                <div className="relative h-64">
                  <Image
                    src={`/images/blog/post-${index + 1}.jpg`}
                    alt="Blog post"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent" />
                  
                  {/* Floating Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: hoveredCard === index ? 1 : 0, x: hoveredCard === index ? 0 : 20 }}
                    className="absolute right-4 top-4 flex flex-col gap-3"
                  >
                    {[
                      { icon: <Heart className="w-5 h-5" />, count: '2.1k' },
                      { icon: <Bookmark className="w-5 h-5" />, count: '234' },
                      { icon: <MessageCircle className="w-5 h-5" />, count: '89' }
                    ].map((action, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-black/50 backdrop-blur-md rounded-xl hover:bg-orange-400 transition-all duration-300"
                      >
                        {action.icon}
                      </motion.button>
                    ))}
                  </motion.div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-orange-400/10 text-orange-400 text-sm">
                      Technology
                    </span>
                    <span className="text-sm text-gray-400">5 min read</span>
                  </div>

                  <h3 className="text-xl font-semibold group-hover:text-orange-400 transition-colors">
                    The Future of AI Development
                  </h3>

                  <p className="text-gray-400 text-sm line-clamp-2">
                    Explore the latest developments in artificial intelligence and machine learning...
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-[#ffffff1a]">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Image
                          src="/images/avatars/author1.jpg"
                          alt="Author"
                          width={40}
                          height={40}
                          className="rounded-full ring-2 ring-orange-400"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#161616]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-xs text-gray-400">Mar 15, 2024</p>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="text-orange-400"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      {/* Simple Interactive CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-purple-500/5 to-orange-500/5" />
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
              className="inline-flex p-3 rounded-2xl bg-orange-400/10 backdrop-blur-sm mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-orange-400" />
              </motion.div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-200 to-purple-400">
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
                  className="w-full px-6 py-4 bg-white/5 rounded-xl border border-white/10 focus:border-orange-400/50 focus:ring-2 focus:ring-orange-400/20 transition-all duration-300 pl-12"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400" />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-400 to-purple-400 rounded-xl text-white font-medium shadow-lg shadow-orange-400/20 hover:shadow-orange-400/40 transition-all duration-300"
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
                  whileHover={{ scale: 1.05, color: '#fb923c' }}
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
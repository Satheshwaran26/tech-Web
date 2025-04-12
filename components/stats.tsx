'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Building, Award } from 'lucide-react';

const stats = [
  { value: 10, label: 'Employees', suffix: '+', icon: <Users className="w-6 h-6" /> },
  { value: 100, label: 'Users', suffix: '+', icon: <TrendingUp className="w-6 h-6" /> },
  { value: 300, label: 'Customers', suffix: '+', icon: <Building className="w-6 h-6" /> },
  { value: 10, label: 'Trainers', suffix: '', icon: <Award className="w-6 h-6" /> },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + increment;
        if (newCount >= end) {
          clearInterval(timer);
          return end;
        }
        return newCount;
      });
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {Math.floor(count).toLocaleString()}
      {suffix}
    </span>
  );
};

export default function StatsSection() {
  return (
    <section className="relative  py-24">
      {/* Metallic Grid Background */}
     


      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-6xl font-extralight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] via-[#C0C0C0] to-[#FF6B00]">
              Our Impact in Numbers
            </span>
          </h2>
          <p className="text-[#C0C0C0] text-lg  font-extralight mt-4 max-w-2xl mx-auto">
            Delivering excellence across industries with proven results
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="h-full p-[1px] rounded-2xl b overflow-hidden border border-[#3A3A3A]">
                <div className="h-full rounded-2xl  p-8 flex flex-col items-center text-center relative overflow-hidden">
                  {/* Icon */}
                  <div className="mb-4 p-3 rounded-full bg-[#1A1A1A] border border-[#3A3A3A] group-hover:border-[#FF6B00]/50 transition-colors duration-300">
                    <div className="text-[#D3D3D3] group-hover:text-[#FF6B00] transition-colors duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  
                  {/* Number */}
                  <p className="text-5xl font-bold mb-2 bg-gradient-to-r from-[#FFFFFF] via-[#C0C0C0] to-[#FF6B00] bg-clip-text text-transparent">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </p>
                  
                  {/* Label */}
                  <p className="text-[#A9A9A9] text-lg font-medium">{stat.label}</p>
                  
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FF6B00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

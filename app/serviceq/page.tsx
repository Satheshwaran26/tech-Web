"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCode, FaMobile, FaDesktop, FaRocket, FaDatabase, FaCloud, FaShieldAlt, FaUsers, FaChartBar } from 'react-icons/fa';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
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
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
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
            className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full text-sm bg-purple-500/10 text-purple-400 
                        border border-purple-500/20 mb-6"
            >
              Our Services
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-8"
            >
              Transform Your Business With
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-400">
                Digital Excellence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
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
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 rounded-full text-white font-medium backdrop-blur-sm 
                         border border-white/20"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Our Services
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 
                               group-hover:opacity-10 transition-opacity duration-500 blur-xl" />
                <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm 
                               group-hover:border-purple-500/20 transition-all duration-500">
                  <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 
                                group-hover:bg-purple-500/20 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-400">
                        <FaRocket className="text-purple-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Our Tech Stack
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We use cutting-edge technologies to build powerful and scalable solutions
            </p>
          </motion.div>

          {/* Tech Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {techCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 
                               group-hover:opacity-10 transition-opacity duration-500 blur-xl" />
                <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm 
                               hover:border-purple-500/20 transition-all duration-500 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {category.technologies.map((tech, idx) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="flex items-center gap-3 group/tech"
                      >
                        <div className="relative w-8 h-8 rounded-lg bg-white/5 p-1.5
                                      group-hover/tech:bg-white/10 transition-all duration-300">
                          <Image
                            src={tech.icon}
                            alt={tech.name}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <span className="text-gray-400 group-hover/tech:text-white transition-colors duration-300">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            {techStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-xl bg-purple-500/10 flex items-center justify-center"
                >
                  {stat.icon}
                </motion.div>
                <h4 className="text-3xl font-bold text-white mb-2">{stat.value}</h4>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Our Work
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our latest projects and success stories
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-cover aspect-[4/3] transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-sm bg-white/10 text-white border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="container mx-auto px-6"
        >
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-black/90" />
            </div>
            
            <div className="relative p-12 md:p-20">
              <div className="max-w-3xl">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-6"
                >
                  Ready to Transform Your Business?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-300 mb-10"
                >
                  Let's create something extraordinary together
                </motion.p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium 
                           hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  Start Your Project
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
    icon: <FaCode className="w-6 h-6 text-purple-400" />,
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
    icon: <FaMobile className="w-6 h-6 text-purple-400" />,
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
    icon: <FaDesktop className="w-6 h-6 text-purple-400" />,
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
    image: "/images/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Mobile Banking App",
    description: "Secure and intuitive mobile banking solution",
    image: "/images/projects/banking.jpg",
    technologies: ["React Native", "Firebase", "Redux"]
  },
  {
    title: "Enterprise Dashboard",
    description: "Comprehensive analytics and management platform",
    image: "/images/projects/dashboard.jpg",
    technologies: ["Next.js", "TypeScript", "GraphQL"]
  }
];

const techCategories = [
  {
    title: "Frontend",
    icon: <FaCode className="w-6 h-6 text-purple-400" />,
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
    icon: <FaDatabase className="w-6 h-6 text-purple-400" />,
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
    icon: <FaCloud className="w-6 h-6 text-purple-400" />,
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
    icon: <FaCode className="w-6 h-6 text-purple-400" />
  },
  {
    value: "100%",
    label: "Code Coverage",
    icon: <FaShieldAlt className="w-6 h-6 text-purple-400" />
  },
  {
    value: "24/7",
    label: "Support",
    icon: <FaUsers className="w-6 h-6 text-purple-400" />
  },
  {
    value: "99.9%",
    label: "Uptime",
    icon: <FaChartBar className="w-6 h-6 text-purple-400" />
  }
];

export default ServicesPage;
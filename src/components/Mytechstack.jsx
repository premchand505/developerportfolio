import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiJavascript, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiTensorflow, SiScikitlearn, SiPandas, SiVercel } from "react-icons/si";

import { TbApi } from "react-icons/tb"; // for REST API icon
const Mytechstack = () => {
  const categories = [
    {
      title: "Frontend",
      tech: [
        { name: "React", icon: <FaReact className="text-4xl text-blue-500" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-4xl text-black" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-4xl text-yellow-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-cyan-400" /> },
      ],
    },
    {
      title: "Backend",
      tech: [
        { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-4xl text-gray-700" /> },
        { name: "REST API", icon: <TbApi className="text-4xl text-orange-400" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-600" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-4xl text-blue-600" /> },
      ],
    },
    {
      title: "AI / ML",
      tech: [
        { name: "Python", icon: <FaPython className="text-4xl text-yellow-500" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="text-4xl text-orange-500" /> },
        { name: "scikit-learn", icon: <SiScikitlearn className="text-4xl text-blue-400" /> },
        { name: "Pandas", icon: <SiPandas className="text-4xl text-purple-500" /> },
      ],
    },
    {
      title: "Others",
      tech: [
        { name: "Git", icon: <FaGitAlt className="text-4xl text-red-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-4xl text-black" /> },
        { name: "Vercel", icon: <SiVercel className="text-4xl text-black" /> },
        { name: "Docker", icon: <FaDocker className="text-4xl text-blue-500" /> },
      ],
    },
  ];

  return (
    <section id="about" className="min-h-70vh bg-gradient-to-b from-black to-blue-900 p-6">
      <div className="flex flex-col pt-5 items-center justify-center">
        
        {/* Heading with underline animation */}
        <motion.h1 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 40,
            duration: 1.7
          }}
          className="relative inline-block text-5xl font-bold py-10 group"
        >
          My Tech Stack
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-0 left-0 h-2 rounded-lg bg-blue-600 group-hover:w-full transition-all duration-300"
          ></motion.span>
        </motion.h1>

        {/* Tech grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mt-10">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x:  -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                delay: index * 0.2,
                duration: 0.6,
              }}
              className="bg-blue-900/20 rounded-2xl shadow-lg hover:shadow-lg hover:shadow-blue-600/80 p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <h2 className="text-xl font-bold mb-6 text-center">{category.title}</h2>
              
              <div className="grid grid-cols-3 gap-4">
                {category.tech.map((tech, i) => (
                  <div 
                    key={i} 
                    className="flex flex-col items-center text-center hover:scale-110 transition-transform"
                  >
                    {tech.icon}
                    <span className="mt-2 text-sm">{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mytechstack;
import React from 'react'
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const projects = [
  {
    title: "Haptic Video Generator",
    description:
      "A full-stack web app that converts video audio into dynamic haptic feedback patterns. Built with React, FastAPI, FFmpeg, and Librosa. Users can preview haptics in-browser and download JSON/AHAP bundles.",
    image: "Cover-Page.png", // replace with your actual image
    link: "#"
  },
  {
    title: "AI Chatbot",
    description:
      "An intelligent chatbot powered by NLP and LLMs to answer queries, provide recommendations, and act as a personal assistant. Built with React, Node.js, and OpenAI API.",
    image: "Cover-Page.png",
    link: "#"
  },
  {
    title: "AI/ML Haptic Generation Model",
    description:
      "A research-driven ML model that maps emotions, intensity, and audio features to cinematic haptic patterns. Incorporates deep learning with TensorFlow & PyTorch for real-time haptic synthesis.",
    image: "Cover-Page.png",
    link: "#"
  },
  {
    title: "Portfolio Platform",
    description:
      "My personal developer portfolio showcasing projects, skills, and experiences. Built with React, TailwindCSS, Framer Motion, and deployed with Vercel.",
    image: "Cover-Page.png",
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id='myworkexperience' className='min-h-screen bg-gradient-to-b from-blue-900 to-black'>
      <div className="flex flex-col pt-5 items-center justify-center gap-6">
        
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
          className="relative inline-block text-5xl font-bold py-10 text-white group"
        >
          My Projects
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-0 left-0 h-2 rounded-lg bg-blue-600 group-hover:w-full transition-all duration-300"
          ></motion.span>
        </motion.h1>

        {/* Projects List */}
        <div className="max-w-6xl rounded-lg bg-white/5 backdrop-blur-sm w-full py-6 px-6 space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col md:gap-3 md:flex-row items-center md:space-x-8 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="rounded-2xl w-full md:w-2/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-2xl shadow-lg w-full h-auto object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-3 w-full md:w-3/5 mt-6 md:mt-0 text-white">
                <h2 className="text-3xl font-semibold mb-4">{project.title}</h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="flex justify-around items-center w-44 bg-white text-black px-5 py-2 rounded-xl shadow hover:scale-105 transition"
                >
                  View Project <FiArrowRight/>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects;

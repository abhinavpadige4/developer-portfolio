import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-sm text-slate-300 mb-6">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
        >
          Hi, I'm <span className="gradient-text">Alex Chen</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 mb-8"
        >
          Full-Stack Developer crafting beautiful, performant web experiences
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-500 max-w-2xl mx-auto mb-10"
        >
          I specialize in building modern web applications with React, Node.js, and cloud
          technologies. Passionate about clean code, great UX, and solving real-world problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg gradient-bg text-white font-semibold hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-slate-700 text-slate-200 font-semibold hover:bg-slate-800 transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <a href="#about" className="animate-float text-slate-500 hover:text-slate-300 transition-colors">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
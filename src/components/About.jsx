import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Happy Clients' },
  { value: '10+', label: 'Open Source' },
]

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              A passionate developer who loves building things for the web
            </h3>
            <p className="text-slate-400 mb-4 leading-relaxed">
              I'm a full-stack developer with over 5 years of experience building scalable web
              applications. My journey started with a curiosity for how websites work, and it
              evolved into a career dedicated to crafting exceptional digital experiences.
            </p>
            <p className="text-slate-400 mb-6 leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with the latest
              technologies. When I'm not coding, you'll find me contributing to open-source
              projects, writing technical blog posts, or exploring new frameworks.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
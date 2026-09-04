import React from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'Senior Full-Stack Developer',
    company: 'TechNova Solutions',
    period: '2022 — Present',
    description: 'Leading a team of 5 developers building enterprise web applications. Architected microservices and improved performance by 40%.',
    highlights: ['Led migration to microservices', 'Improved app performance by 40%', 'Mentored junior developers'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'CloudSphere Inc.',
    period: '2020 — 2022',
    description: 'Developed and maintained multiple client-facing applications. Implemented CI/CD pipelines and automated testing.',
    highlights: ['Built 10+ client applications', 'Implemented CI/CD pipelines', 'Reduced deployment time by 60%'],
  },
  {
    role: 'Frontend Developer',
    company: 'PixelWorks Studio',
    period: '2019 — 2020',
    description: 'Created responsive, accessible web interfaces for diverse clients. Collaborated with designers to bring concepts to life.',
    highlights: ['Delivered 20+ responsive sites', 'Improved accessibility scores', 'Won internal design award'],
  },
]

function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-700 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-6 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-2" />

              <div className="md:w-1/2 pl-10 md:pl-0 md:pr-8 md:text-right">
                <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-slate-300 flex items-center gap-2">
                        <span className="text-primary">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
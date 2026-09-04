import React from 'react'
import { motion } from 'framer-motion'

const skills = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'HTML5', level: 90 },
    { name: 'CSS3', level: 85 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Framer Motion', level: 75 },
    { name: 'Redux', level: 70 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Redis', level: 70 },
    { name: 'GraphQL', level: 70 },
    { name: 'REST APIs', level: 85 },
  ],
  devops: [
    { name: 'AWS', level: 80 },
    { name: 'Docker', level: 75 },
    { name: 'CI/CD', level: 70 },
    { name: 'Git', level: 90 },
    { name: 'Linux', level: 75 },
    { name: 'Nginx', level: 70 },
    { name: 'Vercel', level: 85 },
    { name: 'Heroku', level: 70 },
  ],
}

function SkillBar({ name, level }) {
  return (
    <div className="flex items-center mb-4">
      <div className="w-24 text-sm font-medium text-slate-300">{name}</div>
      <div className="flex-1 bg-slate-800 rounded-full h-2.5 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
          style={{ width: `${level}%` }}
        ></div>
      </div>
      <div className="w-8 text-right text-sm font-medium text-slate-200">{level}%</div>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Frontend</h3>
            <div className="space-y-4">
              {skills.frontend.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">Backend</h3>
            <div className="space-y-4">
              {skills.backend.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">DevOps & Tools</h3>
            <div className="space-y-4">
              {skills.devops.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills
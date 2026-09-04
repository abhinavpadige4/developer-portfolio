import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart, checkout, and payment integration.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    color: 'from-blue-500 to-purple-500',
    emoji: '🛒',
  },
  {
    title: 'AI Chat Assistant',
    description: 'Real-time chat application powered by AI with natural language processing and context awareness.',
    tech: ['Next.js', 'OpenAI', 'WebSocket', 'Redis'],
    color: 'from-purple-500 to-pink-500',
    emoji: '🤖',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management tool with real-time sync, drag-and-drop, and team workspaces.',
    tech: ['React', 'Firebase', 'Tailwind', 'DnD'],
    color: 'from-pink-500 to-red-500',
    emoji: '✅',
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard aggregating social media metrics with beautiful data visualizations.',
    tech: ['Vue.js', 'D3.js', 'Express', 'MongoDB'],
    color: 'from-green-500 to-teal-500',
    emoji: '📊',
  },
  {
    title: 'Fitness Tracker',
    description: 'Mobile-first fitness tracking app with workout logging, progress charts, and goal setting.',
    tech: ['React Native', 'GraphQL', 'PostgreSQL'],
    color: 'from-orange-500 to-yellow-500',
    emoji: '💪',
  },
  {
    title: 'DevOps Dashboard',
    description: 'Infrastructure monitoring dashboard with real-time metrics, alerts, and deployment tracking.',
    tech: ['React', 'Docker', 'AWS', 'Grafana'],
    color: 'from-cyan-500 to-blue-500',
    emoji: '🚀',
  },
]

function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            A selection of projects I've built that showcase my skills and passion for creating
            impactful software.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all"
            >
              <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <span className="text-6xl group-hover:scale-110 transition-transform">{project.emoji}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full bg-slate-700/50 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
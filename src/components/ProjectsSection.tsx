import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield, Webhook, Trash2, Link } from 'lucide-react';

interface Project {
  name: string;
  tech: string;
  description: string;
  highlights: string[];
  icon: React.ElementType;
  gradient: string;
}

const projects: Project[] = [
  {
    name: "SentinelAI",
    tech: "Go, AWS, CloudTrail, RAG AI, Next.Js",
    description: "Real-time Cloud security platform that detects misconfigurations and auto-generates fixes using AI",
    highlights: [
      "Integrated RAG-based LLM pipeline trained on CIS Benchmarks",
      "Built dynamic security graph UI with Next.js and Mermaid.js",
      "Automated remediations via AWS SDK and GitHub PRs",
    ],
    icon: Shield,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Hookit",
    tech: "Go, GoFr, NextJs",
    description: "SaaS platform for automating business workflows with data parsing across multiple formats",
    highlights: [
      "Handles CSV, SQL, NoSQL data transformation",
      "Real-time triggers and no-code iframe tools",
      "Webhooks and workflow customization for developers",
    ],
    icon: Webhook,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Trash Trace",
    tech: "Flutter, Flask, NextJs, C++, Arduino",
    description: "Complete platform built for effective waste management",
    highlights: [
      "TrashTag: Incentivized Disposal with IoT Integration",
      "BinOcculars: Find nearby Dustbins",
      "ReCyclX: Doorstep Recyclable Material Collection",
    ],
    icon: Trash2,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "ChETHFunds",
    tech: "NextJs, Solidity, Ganache, Viem, Hardhat",
    description: "Decentralized chit fund eliminating central management using blockchain",
    highlights: [
      "Automated fund operations with Solidity smart contracts",
      "Viem wrapper for seamless blockchain interaction",
      "Responsive UI with interactive features",
    ],
    icon: Link,
    gradient: "from-orange-500 to-red-500",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="project-card group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-gradient font-medium mb-3">{project.tech}</p>
              <p className="text-muted-foreground mb-4">{project.description}</p>

              <ul className="space-y-2">
                {project.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

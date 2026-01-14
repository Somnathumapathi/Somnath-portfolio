import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield, Webhook, Trash2, Link, Bot, HeartPulse, Briefcase } from 'lucide-react';

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
    gradient: "from-violet-500 to-purple-500",
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
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "n8n-whatsapp-hubspot-bot",
    tech: "n8n, WhatsApp API, HubSpot API, NodeJs, Python",
    description: "Automated WhatsApp bot integrated with HubSpot CRM for lead management and follow up",
    highlights: [
      "The bot goes through the lead details from HubSpot and initiates WhatsApp conversations",
      "Lead stastus, last follow up date, previou, responses are all taken as context",
      "Smart replies are generated using bot with context and business details sent to the lead",
    ],
    icon: Bot,
    gradient: "from-slate-700 to-sky-500",
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
    gradient: "from-orange-500 to-rose-500",
  },
  {
    name: "Medical-Assistant",
    tech: "Flutter, Firebase, Tensorflow, Google Teachable Machine",
    description: "Doctor and patient assistance and heart attack detection app",
    highlights: [
      "Listens to the doctor and patient conversation and helps in summarizing the diagnaosis",
      "Generates prescriptions based on the conversation and alerts the patient to take medicines on time",
      "Detects heart attack risk using ML model integrated with Flutter app",
    ],
    icon: HeartPulse,
    gradient: "from-rose-500 to-pink-500",
  },
  {
    name: "Worce",
    tech: "NextJs, Firebase, Solidity, Hardhat, Ethers.js",
    description: "Website for demand creator and supply provider contracts",
    highlights: [
      "Facilitates secure agreements between demand creators and supply providers using smart contracts",
      "Automated payment releases upon milestone completions",
      "User-friendly interface for contract management and tracking",
    ],
    icon: Briefcase,
    gradient: "from-yellow-500 to-amber-500",
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="section-title">Featured Projects</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="project-card group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}>
                <project.icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                  <Github className="w-4 h-4 text-white/60" />
                </button>
                <button className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                  <ExternalLink className="w-4 h-4 text-white/60" />
                </button>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mb-1">{project.name}</h3>
            <p className="text-sm text-blue-400 font-medium mb-2">{project.tech}</p>
            <p className="text-white/60 text-sm mb-4">{project.description}</p>

            <ul className="space-y-1.5">
              {project.highlights.map((highlight, hIndex) => (
                <li key={hIndex} className="flex items-start gap-2 text-xs text-white/50">
                  <span className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;

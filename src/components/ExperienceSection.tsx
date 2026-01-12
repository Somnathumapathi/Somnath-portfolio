import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  tech: string;
  highlights: string[];
}

const experiences: Experience[] = [
  {
    company: "Win Research Centre (WRC)",
    role: "Full Stack Developer, Team Leader",
    period: "May 2025 – Current",
    location: "Bangalore, KA",
    type: "Full-time",
    tech: "Go, Python, Flutter",
    highlights: [
      "Collaborated with cross-functional teams to deliver secure and efficient services",
      "Developed transcoding microservice pipeline using Python and FFmpeg",
      "Managed engineering team; set up CI/CD pipeline for app deployment",
    ],
  },
  {
    company: "Fit Choice World",
    role: "Full Stack Developer, Team Leader",
    period: "Sep 2024 – Current",
    location: "Remote",
    type: "Freelance",
    tech: "Flutter, ExpressJs, NextJs",
    highlights: [
      "Architected scalable backend system and database schemas",
      "Deployed APIs, Web and mobile app to Play Store and App Store",
      "Integrated payment gateways and enhanced software performance",
    ],
  },
  {
    company: "Zylu Business Solutions",
    role: "Product Engineer",
    period: "Jul 2022 – Sep 2025",
    location: "Bangalore, KA",
    type: "Hybrid",
    tech: "Flutter, Vue, Laravel, WordPress",
    highlights: [
      "Built scalable cross-platform applications improving product performance",
      "Automated workflow systems and implemented reusable components",
      "Collaborated with UI/UX and backend teams for production-ready features",
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="section-title">Experience</h2>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="experience-card"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
                <p className="text-blue-400 font-medium text-sm">{exp.role}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-white/50">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {exp.location}
                </span>
                <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10">
                  <Briefcase className="w-3 h-3" />
                  {exp.type}
                </span>
              </div>
            </div>

            <p className="text-xs text-white/40 mb-3">
              <span className="text-white/60">Tech:</span> {exp.tech}
            </p>

            <ul className="space-y-1.5">
              {exp.highlights.map((highlight, hIndex) => (
                <li key={hIndex} className="flex items-start gap-2 text-sm text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-1.5 flex-shrink-0" />
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

export default ExperienceSection;

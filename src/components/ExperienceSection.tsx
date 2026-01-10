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
      "Collaborated with cross-functional teams to deliver secure and efficient services on tight deadlines",
      "Developed transcoding microservice pipeline using Python and FFmpeg for Adaptive Bitrate Streaming",
      "Managed engineering team; set up CI/CD pipeline for app deployment and version control",
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
      "Architected scalable backend system and database schemas for seamless integration",
      "Deployed APIs, Web and mobile app to Play Store and App Store successfully",
      "Integrated payment gateways and enhanced software performance",
    ],
  },
  {
    company: "Yoga Clan",
    role: "Full Stack Developer",
    period: "Apr 2024 – Oct 2024",
    location: "Remote",
    type: "Freelance",
    tech: "Flutter, NextJs",
    highlights: [
      "Structured codebase using design patterns and SOLID principles",
      "Debugged and optimized code for bug-free environment and enhanced performance",
      "Assisted in UI/UX, integrated payment gateways and new features",
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
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          Experience
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="experience-card"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="text-primary font-medium">{exp.role}</p>
                </div>
                <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-secondary">
                    <Briefcase className="w-3 h-3" />
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-sm font-medium text-muted-foreground">Tech: </span>
                <span className="text-sm text-gradient font-medium">{exp.tech}</span>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full gradient-bg mt-2 flex-shrink-0" />
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

export default ExperienceSection;

import React from 'react';
import { motion } from 'framer-motion';
import MacWindow from './MacWindow';

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Dart", "Python", "JavaScript", "TypeScript", "Go", "Solidity", "PHP"],
  },
  {
    title: "Frameworks",
    skills: ["Flutter", "FastAPI", "Next.js", "Express.js", "Fiber", "Gin", "Laravel"],
  },
  {
    title: "Developer Tools",
    skills: ["VS Code", "Android Studio", "GitHub", "AWS", "Docker", "Kubernetes", "WordPress"],
  },
  {
    title: "Others",
    skills: ["OOP", "SOLID Principles", "Cloud", "SQL", "NoSQL", "CI/CD", "Microservices"],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <MacWindow key={category.title} title={`${category.title.toLowerCase()}.config`}>
              <h3 className="text-lg font-semibold mb-4 text-gradient">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </MacWindow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

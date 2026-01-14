import React from 'react';
import { motion } from 'framer-motion';
import {
  SiAndroidstudio,
  SiDart,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFlask,
  SiFlutter,
  SiGithub,
  SiGo,
  SiJavascript,
  SiKubernetes,
  SiLaravel,
  SiMongodb,
  SiNextdotjs,
  SiPhp,
  SiPython,
  SiSolidity,
  SiSupabase,
  SiTypescript,
  SiWordpress,
} from 'react-icons/si';
import { FaAws, FaJava } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Dart", "Python", "JavaScript", "TypeScript", "Go", "Java", "Solidity", "PHP"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frameworks",
    skills: ["Flutter", "FastAPI", "Flask", "Next.js", "Express.js", "Fiber", "Gin", "Laravel"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Developer Tools",
    skills: ["VS Code", "Android Studio", "GitHub", "Docker", "Kubernetes", "WordPress"],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Databases, Cloud and ORMs",
    skills: ["Firebase", "Supabase", "MongoDB", "SQLAlchemy", "AWS"],
    color: "from-yellow-500 to-amber-500",
  },
  {
    title: "Others",
    skills: ["OOPS", "SOLID Principles", "Cloud", "SQL", "NoSQL", "CI/CD", "Microservices"],
    color: "from-green-500 to-teal-500",
  },
];

const skillIcons: Record<string, { Icon: React.ElementType; color: string }> = {
  Dart: { Icon: SiDart, color: 'text-cyan-300' },
  Python: { Icon: SiPython, color: 'text-yellow-300' },
  JavaScript: { Icon: SiJavascript, color: 'text-yellow-400' },
  TypeScript: { Icon: SiTypescript, color: 'text-blue-400' },
  Go: { Icon: SiGo, color: 'text-cyan-400' },
  Java: { Icon: FaJava, color: 'text-red-400' },
  Solidity: { Icon: SiSolidity, color: 'text-white/80' },
  PHP: { Icon: SiPhp, color: 'text-indigo-300' },

  Flutter: { Icon: SiFlutter, color: 'text-blue-400' },
  FastAPI: { Icon: SiFastapi, color: 'text-emerald-300' },
  Flask: { Icon: SiFlask, color: 'text-white/80' },
  'Next.js': { Icon: SiNextdotjs, color: 'text-white' },
  'Express.js': { Icon: SiExpress, color: 'text-white/80' },
  Laravel: { Icon: SiLaravel, color: 'text-red-400' },

  'VS Code': { Icon: VscCode, color: 'text-blue-400' },
  'Android Studio': { Icon: SiAndroidstudio, color: 'text-green-400' },
  GitHub: { Icon: SiGithub, color: 'text-white/80' },
  Docker: { Icon: SiDocker, color: 'text-blue-400' },
  Kubernetes: { Icon: SiKubernetes, color: 'text-blue-300' },
  WordPress: { Icon: SiWordpress, color: 'text-sky-300' },

  Firebase: { Icon: SiFirebase, color: 'text-amber-400' },
  Supabase: { Icon: SiSupabase, color: 'text-emerald-400' },
  MongoDB: { Icon: SiMongodb, color: 'text-green-400' },
  AWS: { Icon: FaAws, color: 'text-orange-400' },
};

const SkillsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="section-title">Technical Skills</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.1 }}
            className="glass-panel p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${category.color}`} />
              <h3 className="text-white font-semibold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                (() => {
                  const icon = skillIcons[skill];
                  const Icon = icon?.Icon;

                  return (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: catIndex * 0.1 + skillIndex * 0.03 }}
                  className="skill-tag inline-flex items-center gap-2"
                >
                  {Icon ? <Icon className={`h-4 w-4 ${icon.color}`} aria-hidden="true" /> : null}
                  {skill}
                </motion.span>
                  );
                })()
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;

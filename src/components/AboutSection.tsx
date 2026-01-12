import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users } from 'lucide-react';

const AboutSection: React.FC = () => {
  const achievements = [
    "1st Place - Appify 2024, BMS College",
    "1st Place - HackOasis 2024",
    "Special Mention - GoFr.dev Hackathon",
    "3rd Place - HackRefine 2024",
  ];

  const leadership = [
    { role: "Bytexync Lead & Tech Lead", org: "DSCE" },
    { role: "Oscode Tech Team Member", org: "DSCE" },
  ];

  return (
    <div className="space-y-6">
      <h2 className="section-title">About Me</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Education */}
        <div className="glass-panel p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-semibold">Education</h3>
          </div>
          
          <div className="space-y-4">
            <div className="border-l-2 border-blue-500/50 pl-4">
              <h4 className="font-medium text-white">Dayananda Sagar College of Engineering</h4>
              <p className="text-white/60 text-sm">B.Sc in Computer Science</p>
              <p className="text-white/40 text-xs mt-1">Nov 2022 – Present • Bangalore</p>
            </div>
            <div className="border-l-2 border-purple-500/50 pl-4">
              <h4 className="font-medium text-white">Bishop Cotton Boys' School</h4>
              <p className="text-white/60 text-sm">ICSE and ISC</p>
              <p className="text-white/40 text-xs mt-1">2015 – 2022 • Bangalore</p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="glass-panel p-5">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-semibold">Achievements</h3>
          </div>
          
          <ul className="space-y-2.5">
            {achievements.map((achievement, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-br from-yellow-400 to-orange-400 flex-shrink-0" />
                <span className="text-white/70 text-sm">{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Leadership */}
        <div className="glass-panel p-5 md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-green-500 to-teal-500">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-white font-semibold">Leadership</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-3">
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10"
              >
                <span className="font-medium text-white text-sm">{item.role}</span>
                <span className="text-xs text-white/50">{item.org}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

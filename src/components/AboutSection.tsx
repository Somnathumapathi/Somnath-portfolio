import React from 'react';
import { motion } from 'framer-motion';
import MacWindow from './MacWindow';
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
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <MacWindow title="education.txt" className="h-fit">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl gradient-bg">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Dayananda Sagar College of Engineering</h3>
                <p className="text-muted-foreground">B.Sc in Computer Science</p>
                <p className="text-sm text-muted-foreground/70">Nov 2022 – Present • Bangalore</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-secondary">
                <GraduationCap className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Bishop Cotton Boys' School</h3>
                <p className="text-muted-foreground">ICSE and ISC</p>
                <p className="text-sm text-muted-foreground/70">2015 – 2022 • Bangalore</p>
              </div>
            </div>
          </MacWindow>

          <div className="space-y-8">
            <MacWindow title="achievements.md">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Achievements</h3>
              </div>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className="w-2 h-2 rounded-full gradient-bg flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </MacWindow>

            <MacWindow title="leadership.json">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Leadership</h3>
              </div>
              <div className="space-y-3">
                {leadership.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-xl bg-secondary/50"
                  >
                    <span className="font-medium">{item.role}</span>
                    <span className="text-sm text-muted-foreground">{item.org}</span>
                  </motion.div>
                ))}
              </div>
            </MacWindow>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

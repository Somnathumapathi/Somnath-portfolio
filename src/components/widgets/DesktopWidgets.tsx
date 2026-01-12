import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, MapPin } from 'lucide-react';

// Calendar Widget
export const CalendarWidget: React.FC = () => {
  const now = new Date();
  const dayName = now.toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
  const day = now.getDate();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="widget widget-small"
    >
      <div className="text-red-400 text-xs font-semibold mb-1">{dayName}</div>
      <div className="text-4xl font-light text-white">{day}</div>
      <div className="text-white/60 text-sm mt-2">No Events Today</div>
    </motion.div>
  );
};

// Weather Widget
export const WeatherWidget: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="widget widget-small bg-blue-400/80"
    >
      <div className="text-white font-medium text-sm">Bengaluru</div>
      <div className="text-4xl font-light text-white">26°</div>
      <div className="flex items-center gap-1 mt-1">
        <Cloud className="w-4 h-4 text-white/80" />
        <span className="text-white/80 text-xs">Mostly Cloudy</span>
      </div>
      <div className="text-white/60 text-xs mt-1">H:26° L:18°</div>
    </motion.div>
  );
};

// World Clock Widget
export const WorldClockWidget: React.FC = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const cities = [
    { name: 'Cupertino', offset: -8, label: 'Yesterday' },
    { name: 'Tokyo', offset: 9, label: 'Today' },
    { name: 'Sydney', offset: 11, label: 'Today' },
    { name: 'Paris', offset: 1, label: 'Today' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="widget widget-wide"
    >
      <div className="grid grid-cols-4 gap-3">
        {cities.map((city) => {
          const localTime = new Date(time.getTime() + (city.offset - 5.5) * 60 * 60 * 1000);
          const hours = localTime.getHours();
          const minutes = localTime.getMinutes();
          const rotation = (hours % 12) * 30 + minutes * 0.5;
          const minuteRotation = minutes * 6;
          
          return (
            <div key={city.name} className="flex flex-col items-center">
              <div className="relative w-12 h-12 rounded-full border-2 border-white/30 mb-2">
                {/* Clock face numbers */}
                <span className="absolute top-0.5 left-1/2 -translate-x-1/2 text-[8px] text-white/50">12</span>
                <span className="absolute right-0.5 top-1/2 -translate-y-1/2 text-[8px] text-white/50">3</span>
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 text-[8px] text-white/50">6</span>
                <span className="absolute left-0.5 top-1/2 -translate-y-1/2 text-[8px] text-white/50">9</span>
                {/* Hour hand */}
                <div
                  className="absolute top-1/2 left-1/2 w-0.5 h-3 bg-white rounded-full origin-bottom"
                  style={{ transform: `translate(-50%, -100%) rotate(${rotation}deg)` }}
                />
                {/* Minute hand */}
                <div
                  className="absolute top-1/2 left-1/2 w-0.5 h-4 bg-white/80 rounded-full origin-bottom"
                  style={{ transform: `translate(-50%, -100%) rotate(${minuteRotation}deg)` }}
                />
                {/* Center dot */}
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-orange-400 rounded-full -translate-x-1/2 -translate-y-1/2" />
              </div>
              <div className="text-white text-xs font-medium">{city.name}</div>
              <div className="text-white/50 text-[10px]">{city.label}</div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

// Profile Widget (custom for portfolio)
export const ProfileWidget: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="widget widget-medium cursor-pointer hover:scale-[1.02] transition-transform"
      onClick={onClick}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
          S
        </div>
        <div>
          <div className="text-white font-semibold">Somnath</div>
          <div className="text-white/60 text-sm">Full Stack Developer</div>
        </div>
      </div>
      <div className="flex items-center gap-1 text-white/50 text-xs">
        <MapPin className="w-3 h-3" />
        <span>Bangalore, India</span>
      </div>
      <div className="mt-3 pt-3 border-t border-white/10">
        <div className="text-white/60 text-xs">Click to view portfolio</div>
      </div>
    </motion.div>
  );
};

// Skills Stats Widget
export const SkillsWidget: React.FC = () => {
  const skills = [
    { name: 'Flutter', level: 90 },
    { name: 'Go', level: 85 },
    { name: 'NextJS', level: 88 },
    { name: 'Python', level: 80 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="widget widget-medium"
    >
      <div className="text-white/80 text-xs font-medium mb-3">TOP SKILLS</div>
      <div className="space-y-2">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-white/80">{skill.name}</span>
              <span className="text-white/50">{skill.level}%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ delay: 1, duration: 0.8 }}
                className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Experience Counter Widget
export const ExperienceWidget: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      className="widget widget-small"
    >
      <div className="text-5xl font-light text-white">2+</div>
      <div className="text-white/60 text-sm mt-1">Years Experience</div>
      <div className="flex gap-2 mt-3">
        <div className="text-center">
          <div className="text-lg font-semibold text-green-400">5+</div>
          <div className="text-[10px] text-white/50">Projects</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-blue-400">10+</div>
          <div className="text-[10px] text-white/50">Tech Stack</div>
        </div>
      </div>
    </motion.div>
  );
};

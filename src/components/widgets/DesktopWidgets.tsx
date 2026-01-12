import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, MapPin, Github, Coffee, Code2, TrendingUp, Zap, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
import { SiFlutter, SiGo, SiNextdotjs, SiPython, SiDocker } from 'react-icons/si';
import {FaAws} from 'react-icons/fa'
import somnathPhoto from '@/assets/somnath-photo.jpg';

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
      className="widget widget-medium cursor-pointer hover:scale-[1.02] transition-transform overflow-hidden"
      onClick={onClick}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/20">
          <img 
            src={somnathPhoto} 
            alt="Somnath" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="text-white font-semibold text-base">Somnath Umapathi</div>
          <div className="text-white/70 text-xs">Full Stack Developer</div>
        </div>
      </div>
      <div className="flex items-center gap-1 text-white/50 text-xs mb-2">
        <MapPin className="w-3 h-3" />
        <span>Bangalore, India</span>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1 text-green-400 text-xs">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span>Available for work</span>
        </div>
      </div>
      <div className="pt-2 border-t border-white/10">
        <div className="text-white/60 text-xs">🚀 Click to view portfolio</div>
      </div>
    </motion.div>
  );
};

// Skills Stats Widget
export const SkillsWidget: React.FC<{ onClick?: () => void }> = ({ onClick }) => {
  const skills = [
    { name: 'Flutter', icon: SiFlutter, color: 'text-blue-400' },
    { name: 'Go', icon: SiGo, color: 'text-cyan-400' },
    { name: 'NextJS', icon: SiNextdotjs, color: 'text-white' },
    { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
    { name: 'AWS', icon: FaAws, color: 'text-orange-400' },
    { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="widget widget-medium cursor-pointer hover:scale-[1.02] transition-all group"
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <div className="text-white/90 text-sm font-semibold">TECH STACK</div>
        </div>
        <motion.div 
          className="flex items-center gap-1 text-white/50 text-xs group-hover:text-white/80 transition-colors"
          whileHover={{ x: 3 }}
        >
          <span>View All</span>
          <ArrowRight className="w-3 h-3" />
        </motion.div>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mb-3">
        {skills.slice(0, 6).map((skill, index) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10 group-hover:border-white/20"
            >
              <IconComponent className={`w-7 h-7 mb-1.5 ${skill.color}`} />
              <div className="text-xs font-medium text-white/80">
                {skill.name}
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <div className="pt-2 border-t border-white/10">
        <div className="text-white/60 text-xs flex items-center gap-1">
          <span>+10 more technologies</span>
          <span className="text-purple-400">→</span>
        </div>
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

// GitHub Activity Widget
export const GitHubWidget: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="widget widget-small bg-gradient-to-br from-gray-800/80 to-gray-900/80"
    >
      <div className="flex items-center gap-2 mb-3">
        <Github className="w-4 h-4 text-white" />
        <span className="text-white text-xs font-semibold">GitHub</span>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-white/60 text-xs">Commits this week</span>
          <span className="text-green-400 font-semibold">24</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/60 text-xs">Current Streak</span>
          <span className="text-orange-400 font-semibold">12 days</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-white/60 text-xs">Public Repos</span>
          <span className="text-blue-400 font-semibold">18</span>
        </div>
      </div>
    </motion.div>
  );
};

// Current Activity Widget
export const ActivityWidget: React.FC = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 60000);
    return () => clearInterval(interval);
  }, []);

  const hour = time.getHours();
  const activity = hour >= 9 && hour < 18 
    ? { icon: Code2, text: "Deep Work Mode", color: "text-purple-400" }
    : hour >= 18 && hour < 22
    ? { icon: Coffee, text: "Learning Time", color: "text-orange-400" }
    : { icon: Zap, text: "Off Hours", color: "text-blue-400" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
      className="widget widget-small"
    >
      <div className="flex items-center gap-2 mb-2">
        <activity.icon className={`w-5 h-5 ${activity.color}`} />
        <span className="text-white font-medium text-sm">{activity.text}</span>
      </div>
      <div className="text-white/50 text-xs">
        {hour >= 9 && hour < 18 && "Building amazing things"}
        {hour >= 18 && hour < 22 && "Expanding knowledge"}
        {(hour >= 22 || hour < 9) && "Recharging batteries"}
      </div>
      <div className="mt-3 pt-2 border-t border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/60 text-[10px]">Active Now</span>
        </div>
      </div>
    </motion.div>
  );
};

// Quote/Inspiration Widget
export const QuoteWidget: React.FC = () => {
  const quotes = [
    { text: "Code is poetry", author: "Clean Code" },
    { text: "Make it work, make it right, make it fast", author: "Kent Beck" },
    { text: "Simplicity is the ultimate sophistication", author: "Da Vinci" },
    { text: "First, solve the problem. Then, write the code", author: "John Johnson" },
    { text: "The best way to predict the future is to invent it", author: "Alan Kay" },
  ];

  const [currentQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1 }}
      className="widget widget-medium bg-gradient-to-br from-indigo-500/20 to-purple-500/20"
    >
      <BookOpen className="w-4 h-4 text-purple-300 mb-3" />
      <div className="text-white/90 text-sm italic leading-relaxed mb-2">
        "{currentQuote.text}"
      </div>
      <div className="text-white/50 text-xs">
        — {currentQuote.author}
      </div>
    </motion.div>
  );
};

// Performance Stats Widget
export const PerformanceWidget: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      className="widget widget-small"
    >
      <div className="flex items-center gap-2 mb-3">
        <TrendingUp className="w-4 h-4 text-green-400" />
        <span className="text-white/80 text-xs font-semibold">PRODUCTIVITY</span>
      </div>
      <div className="space-y-2">
        <div>
          <div className="flex justify-between text-xs mb-1">
            <span className="text-white/70">This Week</span>
            <span className="text-green-400 font-semibold">+23%</span>
          </div>
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "76%" }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-3">
          <div className="text-center">
            <div className="text-xl font-semibold text-blue-400">32h</div>
            <div className="text-[10px] text-white/50">Coding</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-semibold text-purple-400">8h</div>
            <div className="text-[10px] text-white/50">Learning</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

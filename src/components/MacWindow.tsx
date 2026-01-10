import React from 'react';
import { motion } from 'framer-motion';

interface MacWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const MacWindow: React.FC<MacWindowProps> = ({ title, children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`glass-panel ${className}`}
    >
      {/* Window controls */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30">
        <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors cursor-pointer" />
        <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors cursor-pointer" />
        {title && (
          <span className="ml-4 text-sm font-medium text-muted-foreground">{title}</span>
        )}
      </div>
      <div className="p-6">
        {children}
      </div>
    </motion.div>
  );
};

export default MacWindow;

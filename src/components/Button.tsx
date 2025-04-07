import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  href: string;
  icon: React.ReactNode;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ href, icon, text }) => (
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-4 py-2 bg-police-blue hover:bg-police-blue-light text-white rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
  >
    {icon}
    <span className="ml-2">{text}</span>
  </motion.a>
);
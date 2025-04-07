import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  github: string;
  demo: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  github,
  demo,
}) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -5 }}
    transition={{ duration: 0.2 }}
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
  >
    <h3 className="text-xl font-bold mb-4 text-police-blue dark:text-white">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-6 min-h-[80px]">{description}</p>
    <div className="flex space-x-4">
      <Button
        href={github}
        icon={<Github className="h-5 w-5" />}
        text="GitHub"
      />
      <Button
        href={demo}
        icon={<ExternalLink className="h-5 w-5" />}
        text="Demo"
      />
    </div>
  </motion.div>
);
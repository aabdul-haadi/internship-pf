import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/aabdul-haadi",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/abdul-hadi-developer/",
      label: "LinkedIn"
    },
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://instagram.com/catalyst_zz",
      label: "Instagram"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      href: "https://haadi-s-portfolio.vercel.app/",
      label: "Portfolio"
    }
  ];

  return (
    <footer className="bg-white dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <img 
            src="https://www.pngaaa.com/api-download/4681127"
            alt="Sindh Police Logo"
            className="h-20 w-20 object-contain mb-6"
          />
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-police-blue hover:text-police-blue-light dark:text-gray-400 dark:hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Abdul Haadi
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              Frontend Developer Intern @ Sindh Police
            </p>
            <p className="text-gray-400 dark:text-gray-600 text-sm mt-4">
              © 2025 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
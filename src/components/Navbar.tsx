import React from 'react';
import { Link } from 'react-scroll';
import { Sun, Moon, Menu, X } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  toggleDarkMode,
  isMenuOpen,
  toggleMenu,
}) => {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
      <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src="https://www.pngaaa.com/api-download/4681127"
              alt="Sindh Police Logo"
              className="h-12 w-12 object-contain"
            />
            <span className="ml-3 font-bold text-police-blue dark:text-white">
              Sindh Police Internship
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <NavLinks />
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-police-blue dark:text-white hover:bg-police-blue/10 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-police-blue dark:text-white hover:bg-police-blue/10 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="relative md:hidden">
          <div className="absolute inset-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md -z-10"></div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLinks mobile onClick={() => toggleMenu()} />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ mobile, onClick }: { mobile?: boolean; onClick?: () => void }) => {
  const links = [
    { to: "home", text: "Home" },
    { to: "summary", text: "Summary" },
    { to: "projects", text: "Projects" },
    { to: "practice", text: "Practice" },
    { to: "concept", text: "Concept" },
  ];

  const baseClasses = mobile
    ? "block px-3 py-2 rounded-md text-base font-medium"
    : "px-3 py-2 rounded-md text-sm font-medium";

  const activeClasses = mobile
    ? "bg-police-blue text-white"
    : "bg-police-blue text-white";

  const inactiveClasses = mobile
    ? "text-police-blue hover:bg-police-blue/10 dark:text-white dark:hover:bg-white/10"
    : "text-police-blue hover:bg-police-blue/10 dark:text-white dark:hover:bg-white/10";

  return links.map((link) => (
    <Link
      key={link.to}
      to={link.to}
      smooth={true}
      duration={500}
      className={`${baseClasses} ${inactiveClasses} cursor-pointer transition-colors`}
      activeClass={activeClasses}
      spy={true}
      onClick={onClick}
    >
      {link.text}
    </Link>
  ));
};
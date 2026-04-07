import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Projects', href: '#projects' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'LeetCode', href: '#leetcode' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-[#0B0212]/30 backdrop-blur-md border-b border-gray-200 dark:border-white/5 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer hover:scale-105 transition-transform duration-300" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                        <img 
                            src="/logo.png" 
                            alt="Vishwa Patel Logo" 
                            className="h-16 w-auto object-contain dark:[mix-blend-mode:screen] dark:brightness-110 drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.style.display = 'none';
                                const span = document.createElement('span');
                                span.className = 'text-2xl font-black text-gradient px-3 py-1';
                                span.textContent = 'VP';
                                e.target.parentElement.appendChild(span);
                            }}
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-[#F472B6] transition-colors font-medium text-sm tracking-wide relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-pink-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                            >
                                {link.name}
                            </a>
                        ))}
                        
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? (
                                <Sun className="h-5 w-5 text-yellow-500" />
                            ) : (
                                <Moon className="h-5 w-5 text-blue-400" />
                            )}
                        </button>

                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleTheme}
                            className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? (
                                <Sun className="h-5 w-5 text-yellow-500" />
                            ) : (
                                <Moon className="h-5 w-5 text-blue-400" />
                            )}
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-md text-gray-600 hover:text-pink-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-pink-400 dark:hover:bg-gray-800 focus:outline-none"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-pink-500 hover:bg-pink-50 dark:hover:text-pink-400 dark:hover:bg-gray-800"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;

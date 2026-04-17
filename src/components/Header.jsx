import { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* ─────────────────────────────────────────────
   LogoCanvas
   Draws logo.png onto a <canvas>, then removes
   all near-white / near-pink background pixels
   so the logo floats transparently over any bg.
───────────────────────────────────────────── */
const LogoCanvas = ({ className }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        const img = new window.Image();
        img.src = '/logo.png';
        img.onload = () => {
            canvas.width  = img.naturalWidth;
            canvas.height = img.naturalHeight;
            ctx.drawImage(img, 0, 0);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const d = imageData.data;

            for (let i = 0; i < d.length; i += 4) {
                const r = d[i], g = d[i + 1], b = d[i + 2];
                // Light-pink / white detection:
                // high R, moderate-high G, moderate-high B  →  background
                const isLightBg = r > 200 && g > 180 && b > 185;
                if (isLightBg) {
                    // Fade out proportionally to how "background-like" the pixel is
                    const whiteness = Math.min(r, g, b);
                    d[i + 3] = Math.max(0, 255 - Math.round((whiteness - 160) * 3.5));
                }
            }

            ctx.putImageData(imageData, 0, 0);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={className}
            style={{ imageRendering: 'crisp-edges' }}
        />
    );
};

/* ─────────────────────────────────────────────
   Header
───────────────────────────────────────────── */
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home',         href: '#home' },
        { name: 'About',        href: '#about' },
        { name: 'Skills',       href: '#skills' },
        { name: 'Education',    href: '#education' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Projects',     href: '#projects' },
        { name: 'Certificates', href: '#certificates' },
        { name: 'Contact',      href: '#contact' },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/70 dark:bg-[#0B0212]/30 backdrop-blur-md border-b border-gray-200 dark:border-white/5 shadow-sm transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="flex items-center gap-4">
                        <div
                            className="flex-shrink-0 flex items-center cursor-pointer hover:scale-105 transition-transform duration-300"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <img src="/footer.jpg.jpeg" alt="Logo" className="h-12 w-12 rounded-full object-cover shadow-md border-2 border-white/10" />
                        </div>
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
                            aria-label="Toggle theme"
                            className="ml-2 p-2 rounded-full text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors duration-300"
                        >
                            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </button>

                        {/* Resume Buttons */}
                        <div className="hidden lg:flex items-center gap-3 ml-2">
                            <a 
                                href="https://drive.google.com/file/d/19Ol-sH44P-lWeZ0xxuPuS1Yk9m09GVlR/preview" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.05]" 
                                style={{ background: 'linear-gradient(135deg, #7c5cff 0%, #ec4899 100%)', boxShadow: '0 0 15px rgba(236,72,153,0.4)', color: '#fff' }}
                            >
                                View Resume
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
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
                        <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
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
                            <div className="mt-4 pt-4 px-3 border-t border-gray-100 dark:border-gray-800">
                                <a 
                                    href="https://drive.google.com/file/d/19Ol-sH44P-lWeZ0xxuPuS1Yk9m09GVlR/preview" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="block w-full text-center px-4 py-3 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md" 
                                    style={{ background: 'linear-gradient(135deg, #7c5cff 0%, #ec4899 100%)', color: '#fff' }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    View Resume
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;

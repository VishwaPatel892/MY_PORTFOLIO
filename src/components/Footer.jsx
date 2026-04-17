import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-transparent pt-20 px-4 md:px-8 pb-8 border-t border-white/5 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-24">
                {/* --- Main Footer Grid --- */}
                <div className="bg-white dark:bg-[#0B0F1A] border border-gray-200 dark:border-white/5 rounded-[2rem] p-8 md:p-14">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                        {/* Brand & Description */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="flex items-center gap-4">
                                <img 
                                    src="/footer.jpg.jpeg" 
                                    alt="Profile" 
                                    className="w-12 h-12 rounded-full object-cover shadow-lg shrink-0 object-top"
                                />
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-wider uppercase m-0">
                                    Vishwa
                                </h3>
                            </div>
                            <p className="text-[#888] text-sm leading-relaxed max-w-sm">
                                Building digital experiences that matter, one line of code at a time. Crafting interfaces that feel alive, solving problems that make a difference, and turning ideas into reality. Every pixel has a purpose. Every interaction tells a story.
                            </p>
                        </div>

                        {/* Links Columns */}
                        <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">

                            {/* General */}
                            <div className="space-y-6">
                                <h4 className="text-xs font-bold text-gray-900 dark:text-white tracking-widest uppercase">General</h4>
                                <ul className="space-y-4">
                                    <li><a href="#about" className="text-[#888] hover:text-gray-900 dark:hover:text-white text-sm transition-colors">Home</a></li>
                                    <li><a href="#skills" className="text-[#888] hover:text-gray-900 dark:hover:text-white text-sm transition-colors">Skills</a></li>
                                    <li><a href="#education" className="text-[#888] hover:text-gray-900 dark:hover:text-white text-sm transition-colors">Education</a></li>
                                    <li><a href="#certificates" className="text-[#888] hover:text-gray-900 dark:hover:text-white text-sm transition-colors">Certifications</a></li>
                                </ul>
                            </div>

                            {/* Portfolio */}
                            <div className="space-y-6">
                                <h4 className="text-xs font-bold text-gray-900 dark:text-white tracking-widest uppercase">Portfolio</h4>
                                <ul className="space-y-4">
                                    <li><a href="#projects" className="text-[#888] hover:text-gray-900 dark:hover:text-white text-sm transition-colors">Projects</a></li>
                                    <li><a href="#hackathons" className="text-[#888] hover:text-gray-900 dark:hover:text-white text-sm transition-colors">Hackathons</a></li>
                                    <li><a href="#leetcode" className="text-[#888] hover:text-gray-900 dark:hover:text-white text-sm transition-colors">LeetCode</a></li>
                                    <li><a href="#contact" className="text-[#888] hover:text-gray-900 dark:hover:text-white text-sm transition-colors">Contact</a></li>
                                </ul>
                            </div>

                            {/* Social */}
                            <div className="space-y-6">
                                <h4 className="text-xs font-bold text-gray-900 dark:text-white tracking-widest uppercase">Connect</h4>
                                <ul className="space-y-4">
                                    <li><a href="https://github.com/VishwaPatel892" target="_blank" rel="noreferrer" className="text-[#888] hover:text-gray-900 dark:hover:text-white text-sm transition-colors">GitHub</a></li>
                                    <li><a href="https://www.linkedin.com/in/vishwa-patel-9bab9639a/" target="_blank" rel="noreferrer" className="text-[#888] hover:text-gray-900 dark:hover:text-white text-sm transition-colors">LinkedIn</a></li>
                                    <li><a href="https://www.youtube.com/@VishwaPatel-vp" target="_blank" rel="noreferrer" className="text-[#888] hover:text-gray-900 dark:hover:text-white text-sm transition-colors">YouTube</a></li>
                                    <li><a href="mailto:vishwa.patel.cg@gmail.com" className="text-[#888] hover:text-gray-900 dark:hover:text-white text-sm transition-colors">Email</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[#666] text-sm">
                            © {new Date().getFullYear()} Vishwa Patel. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

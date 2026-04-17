import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Twitter, Code2, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
    const year = new Date().getFullYear();

    const generalLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Education', href: '#education' },
        { label: 'Certificates', href: '#certificates' },
    ];

    const portfolioLinks = [
        { label: 'Projects', href: '#projects' },
        { label: 'Figma Designs', href: '#figma-designs' },
        { label: 'Hackathons', href: '#hackathon' },
        { label: 'Achievements', href: '#achievements' },
        { label: 'LeetCode', href: '#leetcode' },
        { label: 'Resume', href: '#resume' },
    ];

    const socialLinks = [
        { label: 'GitHub', href: 'https://github.com/VishwaPatel892', icon: Github, color: '#e2e8f0' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vishwa-patel-9bab9639a', icon: Linkedin, color: '#0ea5e9' },
        { label: 'YouTube', href: 'https://www.youtube.com/@VishwaPatel-vp', icon: Youtube, color: '#ef4444' },
        { label: 'Twitter / X', href: 'https://x.com/vishwa_cg', icon: Twitter, color: '#e2e8f0' },
        { label: 'LeetCode', href: 'https://leetcode.com/u/vishwa0102/', icon: Code2, color: '#f59e0b' },
        { label: 'Email', href: 'mailto:Vishwa.patel.cg@gmail.com', icon: Mail, color: '#a855f7' },
    ];

    return (
        <footer className="bg-transparent pt-20 px-4 md:px-8 pb-8 border-t border-white/5 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-24">

                {/* --- Main Footer Grid --- */}
                <div className="bg-white dark:bg-[#0B0F1A] border border-gray-200 dark:border-white/5 rounded-[2rem] p-8 md:p-14">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                        {/* Brand & Description */}
                        <div className="lg:col-span-4 space-y-6">
                            <div className="flex items-center gap-4">
                                <h3 className="text-2xl font-black text-gray-900 dark:text-white tracking-wider uppercase m-0">
                                    Vishwa Patel
                                </h3>
                            </div>
                            <p className="text-[#888] text-sm leading-relaxed max-w-sm">
                                Full Stack Developer & UI/UX Designer from Ahmedabad, India. Building digital experiences that matter — one line of code at a time.
                            </p>


                        </div>

                        {/* Links Columns */}
                        <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">

                            {/* General */}
                            <div className="space-y-5">
                                <h4 className="text-xs font-bold text-gray-900 dark:text-white tracking-widest uppercase">General</h4>
                                <ul className="space-y-3">
                                    {generalLinks.map(({ label, href }) => (
                                        <li key={label}>
                                            <a href={href} className="text-[#888] hover:text-gray-900 dark:hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
                                                <span className="w-0 group-hover:w-2 h-[1px] bg-pink-500 transition-all duration-300 rounded-full" />
                                                {label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Portfolio */}
                            <div className="space-y-5">
                                <h4 className="text-xs font-bold text-gray-900 dark:text-white tracking-widest uppercase">Portfolio</h4>
                                <ul className="space-y-3">
                                    {portfolioLinks.map(({ label, href }) => (
                                        <li key={label}>
                                            <a href={href} className="text-[#888] hover:text-gray-900 dark:hover:text-white text-sm transition-colors flex items-center gap-1.5 group">
                                                <span className="w-0 group-hover:w-2 h-[1px] bg-purple-500 transition-all duration-300 rounded-full" />
                                                {label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Connect */}
                            <div className="space-y-5">
                                <h4 className="text-xs font-bold text-gray-900 dark:text-white tracking-widest uppercase">Connect</h4>
                                <ul className="space-y-3">
                                    {socialLinks.map(({ label, href, icon: Icon, color }) => (
                                        <li key={label}>
                                            <a
                                                href={href}
                                                target={href.startsWith('http') ? '_blank' : undefined}
                                                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                className="text-[#888] hover:text-white text-sm transition-colors flex items-center gap-2 group"
                                            >
                                                {label}
                                                <ExternalLink size={10} className="opacity-0 group-hover:opacity-60 transition-opacity ml-auto" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="mt-14 pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-[#666] text-sm">
                            © {year} Vishwa Patel. All rights reserved.
                        </p>
                        <p className="text-[#555] text-xs font-mono tracking-widest uppercase">
                            Built with React · Vite · Framer Motion
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

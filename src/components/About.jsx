import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Terminal, Rocket, Code2 } from 'lucide-react';

// Custom CountUp Component
const CountUp = ({ end, duration = 2, delay = 0 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;
        
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            // Ease out quad
            const easeOutProgress = progress * (2 - progress);
            setCount(Math.floor(easeOutProgress * end));
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        
        // Add delay before starting the animation
        const timeoutId = setTimeout(() => {
            window.requestAnimationFrame(step);
        }, delay * 1000);

        return () => clearTimeout(timeoutId);
    }, [isInView, end, duration, delay]);

    return <span ref={ref}>{count}</span>;
};

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section id="about" className="relative min-h-[90vh] py-24 flex items-center overflow-hidden bg-transparent">
            
            {/* --- Animated Background Elements --- */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[10%] left-[15%] w-[400px] h-[400px] bg-[#7C3AED] rounded-full blur-[150px] opacity-20 animate-pulse-slow"></div>
                <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[#EC4899] rounded-full blur-[150px] opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
                >
                    
                    {/* --- Left Column: Content --- */}
                    <div className="lg:col-span-7 space-y-8">
                        
                        <motion.div variants={itemVariants} className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                                <Terminal className="w-4 h-4 text-[#F472B6]" />
                                <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">Hello Output</span>
                            </div>
                            
                            <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-2 tracking-tight">
                                I'm <br />
                                <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#7C3AED,45%,#EC4899,55%,#7C3AED)] bg-[length:200%_100%] animate-shimmer">
                                    Vishwa Patel
                                </span>
                            </h2>
                            
                            <div className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400 flex items-center gap-3">
                                <Code2 className="w-8 h-8 text-[#7C3AED]" />
                                Full Stack Developer <span className="text-sm bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30 ml-2">MERN</span>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <MapPin className="w-5 h-5 text-rose-400" />
                            <span className="text-lg">Ahmedabad, India</span>
                        </motion.div>

                        <motion.div variants={itemVariants} className="glassmorphism-card p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base relative z-10">
                                I focus on building <strong className="text-gray-900 dark:text-white font-medium">modern, scalable, and user-friendly</strong> web applications with a strong emphasis on UI/UX excellence and deep performance optimization. Every project is crafted to turn complex problems into elegant digital solutions.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-4">
                            <a 
                                href="#projects" 
                                className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-[#0B0F1A] font-bold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
                            >
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                <span className="relative flex items-center gap-2">
                                    View Projects <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                            </a>

                            <div className="flex gap-4">
                                <SocialIcon href="https://github.com/VishwaPatel892" icon={<Github className="w-5 h-5" />} />
                                <SocialIcon href="https://www.linkedin.com/in/vishwa-patel-9bab9639a" icon={<Linkedin className="w-5 h-5" />} />
                                <SocialIcon href="mailto:Vishwa.patel.cg@gmail.com" icon={<Mail className="w-5 h-5" />} />
                            </div>
                        </motion.div>

                        {/* --- Stats Row --- */}
                        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200 dark:border-white/10 mt-8">
                            <StatBox number="10" suffix="+" label="Projects Built" delay={0.2} />
                            <StatBox number="20" suffix="+" label="Tech Skills" delay={0.4} />
                            <StatBox number="3" suffix="+" label="Hackathons" delay={0.6} />
                        </motion.div>

                    </div>


                    {/* --- Right Column: Image Profile --- */}
                    <div className="lg:col-span-5 relative mt-12 lg:mt-0 flex justify-center">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative z-10 w-full max-w-[420px]"
                        >
                            {/* Floating animation container */}
                            <motion.div
                                animate={{ y: [-15, 15, -15] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative"
                            >
                                {/* Glowing expanding background border */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#7C3AED] rounded-[2rem] blur-xl opacity-50 animate-pulse-slow"></div>
                                <div className="absolute -inset-[2px] bg-gradient-to-r from-[#7C3AED] via-[#EC4899] to-[#7C3AED] rounded-[2rem] opacity-70"></div>
                                
                                {/* Image Container */}
                                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-100 dark:bg-[#0a0f18] shadow-2xl">
                                    {/* Overlay Gradient for depth */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-[#0B0F1A]/80 via-transparent to-transparent z-10"></div>
                                    
                                    <img 
                                        src="/about.jpg.jpeg" 
                                        alt="Vishwa Patel" 
                                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                                    />
                                    

                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
};

// Social Icon Component
const SocialIcon = ({ href, icon }) => (
    <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-[#EC4899] hover:bg-[#EC4899]/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all duration-300"
    >
        {icon}
    </a>
);

// Stat Box Component
const StatBox = ({ number, suffix, label, delay }) => (
    <div className="flex flex-col items-start lg:items-center text-left lg:text-center">
        <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#EC4899] mb-1">
            <CountUp end={parseInt(number)} duration={2} delay={delay} />
            {suffix}
        </div>
        <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{label}</div>
    </div>
);

export default About;

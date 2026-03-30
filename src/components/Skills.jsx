import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import {
    FaHtml5, FaReact, FaGithub, FaServer,
    FaJs, FaNodeJs, FaCuttlefish, FaCss3Alt, FaGitAlt
} from 'react-icons/fa';
import { SiTailwindcss, SiCplusplus, SiMongodb, SiPostman, SiFigma } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const skillsList = [
    { title: 'MongoDB',     category: 'Database',       description: 'NoSQL Database',       icon: SiMongodb,     color: 'text-white' },
    { title: 'React.js',    category: 'Frontend',       description: 'UI Library',           icon: FaReact,       color: 'text-pink-300' },
    { title: 'Node.js',     category: 'Backend',        description: 'Server Runtime',       icon: FaNodeJs,      color: 'text-purple-300' },
    { title: 'Tailwind CSS',category: 'Web Styling',    description: 'Utility-first CSS',    icon: SiTailwindcss, color: 'text-white' },
    { title: 'HTML5',       category: 'Frontend',       description: 'Structural Markup',    icon: FaHtml5,       color: 'text-pink-400' },
    { title: 'CSS3',        category: 'Frontend',       description: 'Styling & Animations', icon: FaCss3Alt,     color: 'text-purple-300' },
    { title: 'JavaScript',  category: 'Frontend',       description: 'Logic & Interactivity',icon: FaJs,          color: 'text-purple-400' },
    { title: 'C',           category: 'Programming',    description: 'Systems Language',     icon: FaCuttlefish,  color: 'text-pink-200' },
    { title: 'C++',         category: 'Programming',    description: 'Object-Oriented',      icon: SiCplusplus,   color: 'text-purple-300' },
    { title: 'Postman',     category: 'Tools',          description: 'API Testing',          icon: SiPostman,     color: 'text-pink-400' },
    { title: 'GitHub',      category: 'Version Control',description: 'Code Hosting',         icon: FaGithub,      color: 'text-white' },
    { title: 'Git',         category: 'Version Control',description: 'Source Control',       icon: FaGitAlt,      color: 'text-pink-300' },
    { title: 'VS Code',     category: 'Editor',         description: 'Code Editor',          icon: VscVscode,     color: 'text-purple-400' },
    { title: 'Figma',       category: 'Design',         description: 'UI/UX Design',         icon: SiFigma,       color: 'text-pink-300' },
    { title: 'REST API',    category: 'Architecture',   description: 'Web Services',         icon: FaServer,      color: 'text-purple-300' },
];

// Unique float params per card so they all drift independently
const floatParams = skillsList.map((_, i) => ({
    y: [0, -10 - (i % 4) * 3, 0],
    duration: 2.8 + (i % 5) * 0.4,
    delay: (i * 0.18) % 2.5,
}));

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-24 bg-white dark:bg-[#0B0212] transition-colors duration-300 relative overflow-hidden"
        >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/5 to-transparent" />

            {/* Background blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-pink-500 dark:text-pink-400 font-semibold tracking-widest uppercase text-sm">
                        Expertise
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white">
                        Skills &{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 dark:from-[#F472B6] dark:to-[#A855F7]">
                            Technologies
                        </span>{' '}
                        <Wrench className="inline-block h-8 w-8 text-gray-400 dark:text-gray-500 animate-pulse ml-2" />
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
                        A comprehensive toolkit of modern technologies and frameworks that I use to bring ideas to life.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="flex flex-wrap justify-center gap-6">
                    {skillsList.map((skill, index) => (
                        <SkillCard
                            key={index}
                            skill={skill}
                            index={index}
                            float={floatParams[index]}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const SkillCard = ({ skill, index, float }) => {
    const Icon = skill.icon;

    return (
        // Outer: bubble pop entrance
        <motion.div
            initial={{ opacity: 0, scale: 0, y: 40 }}
            whileInView={{
                opacity: 1,
                scale: [0, 1.18, 0.94, 1.06, 1],
                y: 0,
            }}
            viewport={{ once: true }}
            transition={{
                delay: index * 0.07,
                duration: 0.65,
                ease: 'easeOut',
            }}
        >
            {/* Inner: continuous float */}
            <motion.div
                animate={{ y: float.y }}
                transition={{
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: float.duration,
                    delay: float.delay,
                    ease: 'easeInOut',
                }}
            >
                {/* Card: hover interaction */}
                <motion.div
                    whileHover={{ scale: 1.08, y: -8 }}
                    transition={{ type: 'spring', stiffness: 340, damping: 16 }}
                    className="group relative w-40 bg-white dark:bg-white/[0.04] border border-gray-200 dark:border-white/[0.08] rounded-2xl px-5 py-6 flex flex-col items-center text-center cursor-pointer hover:border-pink-500/50 dark:hover:border-pink-500/40 hover:shadow-2xl hover:shadow-pink-500/20 transition-colors duration-300"
                >
                    {/* Glow overlay on hover */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/0 to-purple-600/0 group-hover:from-pink-500/10 group-hover:to-purple-600/10 transition-all duration-300 pointer-events-none" />

                    {/* Subtle shimmer ring */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ boxShadow: 'inset 0 0 0 1px rgba(244,114,182,0.25)' }}
                    />

                    <div className={`mb-4 ${skill.color} transition-transform duration-300 group-hover:scale-110 relative z-10`}>
                        <Icon className="w-9 h-9" />
                    </div>
                    <h3 className="text-gray-900 dark:text-gray-100 font-bold text-sm mb-1 relative z-10">
                        {skill.title}
                    </h3>
                    <p className="text-pink-600 dark:text-pink-400/80 text-xs font-semibold mb-1 relative z-10">
                        {skill.category}
                    </p>
                    <p className="text-gray-400 dark:text-gray-500 text-xs relative z-10">
                        {skill.description}
                    </p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Skills;

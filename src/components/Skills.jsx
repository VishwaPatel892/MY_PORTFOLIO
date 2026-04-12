import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';
import {
    FaHtml5, FaReact, FaJs, FaNodeJs,
    FaCss3Alt, FaGitAlt, FaDocker
} from 'react-icons/fa';
import {
    SiTailwindcss, SiMongodb, SiFigma,
    SiRedis, SiNextdotjs, SiMui
} from 'react-icons/si';

// Tree structure: each row is a level
const treeRows = [
    [
        { title: 'HTML',       icon: FaHtml5,      color: '#E34F26' },
        { title: 'CSS',        icon: FaCss3Alt,    color: '#1572B6' },
    ],
    [
        { title: 'JavaScript', icon: FaJs,         color: '#F7DF1E' },
    ],
    [
        { title: 'React',      icon: FaReact,      color: '#61DAFB' },
        { title: 'Next.js',    icon: SiNextdotjs,  color: '#ffffff' },
        { title: 'Tailwind',   icon: SiTailwindcss,color: '#38BDF8' },
    ],
    [
        { title: 'Redis',      icon: SiRedis,      color: '#DC382D' },
        { title: 'MongoDB',    icon: SiMongodb,    color: '#4DB33D' },
        { title: 'Node.js',    icon: FaNodeJs,     color: '#339933' },
    ],
    [
        { title: 'Docker',     icon: FaDocker,     color: '#2496ED' },
        { title: 'Git',        icon: FaGitAlt,     color: '#F05032' },
        { title: 'Figma',      icon: SiFigma,      color: '#A259FF' },
        { title: 'Material UI',icon: SiMui,        color: '#007FFF' },
    ],
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-24 bg-gray-50 dark:bg-[#0B0212] transition-colors duration-300 relative overflow-hidden"
        >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/5 to-transparent" />

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
                        <span className="text-gradient">
                            Technologies
                        </span>{' '}
                        <Wrench className="inline-block h-8 w-8 text-gray-400 dark:text-gray-500 animate-pulse ml-2" />
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
                        A comprehensive toolkit of modern technologies and frameworks that I use to bring ideas to life.
                    </p>
                </motion.div>

                {/* Tech Tree */}
                <div className="flex flex-col items-center gap-0">
                    {treeRows.map((row, rowIndex) => (
                        <div key={rowIndex} className="flex flex-col items-center w-full">
                            {/* Connector line going down from previous row */}
                            {rowIndex > 0 && (
                                <motion.div
                                    initial={{ scaleY: 0, opacity: 0 }}
                                    whileInView={{ scaleY: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: rowIndex * 0.1 }}
                                    className="w-px h-10 bg-gradient-to-b from-pink-500/60 to-purple-500/60 origin-top"
                                />
                            )}

                            {/* Row of cards with horizontal connectors */}
                            <motion.div
                                className="flex items-center justify-center gap-0 flex-wrap"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: rowIndex * 0.12 }}
                            >
                                {row.map((skill, cardIndex) => (
                                    <div key={cardIndex} className="flex items-center">
                                        {/* Horizontal connector between cards */}
                                        {cardIndex > 0 && (
                                            <div className="w-6 md:w-10 h-px bg-gradient-to-r from-purple-500/50 to-pink-500/50" />
                                        )}
                                        <SkillCard skill={skill} rowIndex={rowIndex} cardIndex={cardIndex} />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SkillCard = ({ skill, rowIndex, cardIndex }) => {
    const Icon = skill.icon;

    return (
        <motion.div
            whileHover={{ scale: 1.08, y: -6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            className="group relative w-24 h-24 md:w-28 md:h-28 m-2
                bg-white dark:bg-[#1a1a2e]
                border border-gray-200 dark:border-white/10
                rounded-2xl flex flex-col items-center justify-center
                cursor-pointer shadow-md dark:shadow-none
                hover:border-pink-500/50 dark:hover:border-pink-500/40
                hover:shadow-xl hover:shadow-pink-500/20
                transition-all duration-300"
        >
            {/* Glow overlay on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-pink-500/0 to-purple-600/0 group-hover:from-pink-500/10 group-hover:to-purple-600/10 transition-all duration-300 pointer-events-none" />

            {/* Shimmer ring */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 0 1px rgba(244,114,182,0.3)' }}
            />

            <div
                className="mb-2 transition-transform duration-300 group-hover:scale-110 relative z-10"
                style={{ color: skill.color }}
            >
                <Icon className="w-9 h-9" />
            </div>
            <p className="text-gray-800 dark:text-gray-200 font-semibold text-xs text-center px-1 relative z-10 leading-tight">
                {skill.title}
            </p>
        </motion.div>
    );
};

export default Skills;

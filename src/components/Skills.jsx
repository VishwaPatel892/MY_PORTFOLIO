import { motion } from 'framer-motion';
import { Database, Globe, Server, Wrench } from 'lucide-react';

const skillsData = [
    {
        category: 'Frontend',
        icon: <Globe className="h-6 w-6 text-pink-500" />,
        skills: [
            { name: 'HTML', level: 95 },
            { name: 'CSS', level: 90 },
            { name: 'JavaScript', level: 90 },
            { name: 'React', level: 70 },
        ],
    },
    {
        category: 'Backend',
        icon: <Server className="h-6 w-6 text-purple-500" />,
        skills: [
            { name: 'Node.js', level: 85 },
            { name: 'Express.js', level: 80 },
            { name: 'REST APIs', level: 90 },
            { name: 'C', level: 80 },
            { name: 'C++', level: 85 },
        ],
    },
    {
        category: 'Database',
        icon: <Database className="h-6 w-6 text-green-500" />,
        skills: [
            { name: 'MongoDB', level: 85 },
            { name: 'GitHub', level: 95 },
            { name: 'Postman', level: 85 },
            { name: 'Redis', level: 75 },
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-4 md:px-8 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-pink-600 dark:text-pink-400 font-semibold tracking-widest uppercase text-sm">Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white">
                        Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Technologies</span> <Wrench className="inline-block h-8 w-8 text-gray-600 dark:text-gray-400 animate-pulse" />
                    </h2>
                    <p className="mt-4 text-gray-800 dark:text-gray-200 max-w-2xl mx-auto font-medium">
                        A comprehensive toolkit of morden technologies and frameworks that I use to bring ideas to life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, index) => (
                        <SkillCard key={index} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

import Tilt from 'react-parallax-tilt';

const SkillCard = ({ category, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
        >
            <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1500}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full"
            >
                <div className="flex items-center mb-6">
                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg mr-4">
                        {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{category.category}</h3>
                </div>

                <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                        <div key={idx}>
                            <div className="flex justify-between mb-1">
                                <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{skill.name}</span>
                                <span className="text-sm font-bold text-gray-600 dark:text-gray-400">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                <motion.div
                                    className={`h-2.5 rounded-full bg-gradient-to-r ${getGradient(category.category)}`}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                                ></motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </Tilt>
        </motion.div >
    );
};

const getGradient = (category) => {
    switch (category) {
        case 'Frontend': return 'from-pink-400 to-pink-600';
        case 'Backend': return 'from-purple-400 to-purple-600';
        case 'Database': return 'from-green-400 to-green-600';
        default: return 'from-gray-400 to-gray-600';
    }
};

export default Skills;

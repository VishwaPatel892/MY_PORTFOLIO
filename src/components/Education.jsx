import { motion } from 'framer-motion';
import { BookOpen, Calendar, GraduationCap } from 'lucide-react';

const educationData = [
    {
        id: 1,
        school: 'Swaminarayan University',
        degree: 'Bachelor of Technology', // Assuming B.Tech based on coding context
        date: '2025- 2029 - Present', // Approximate start based on "currently in college"
        description: 'Currently pursuing detailed studies in Computer Science and Engineering, focusing on advanced software development and system architecture.',
        location: 'Kalol, Gujarat',
        tags: ['Current Student', 'Computer Science', 'Software Engineering'],
    },
    {
        id: 2,
        school: 'H B Kapadia New High School',
        degree: 'Higher Secondary Education',
        date: 'Completed 2025', // Approximate completion
        description: 'Completed schooling with a strong foundation in core subjects, building the path towards an engineering career.',
        location: 'Ahmedabad, Gujarat', // Assuming location, can be updated
        tags: ['Schooling', 'Science Stream', 'Mathematics'],
    },
        {
        id: 3,
        school: 'H B Kapadia New High School',
        degree: ' Secondary Education',
        date: 'Completed 2023', // Approximate completion
        description: "Successfully completed SSC under GSEB with a strong academic foundation in Mathematics, Science, and core subjects.",
        location: 'Ahmedabad, Gujarat', // Assuming location, can be updated
        tags: ["SSC", "GSEB", "Mathematics", "Science"]
    },
];

const Education = () => {
    return (
        <section id="education" className="py-20 px-4 md:px-8 bg-pink-50/50 dark:bg-gray-800/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-pink-600 dark:text-pink-400 font-semibold tracking-widest uppercase text-sm">Background</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white">
                        Education & <span className="text-gradient">Learning</span> <BookOpen className="inline-block h-8 w-8 text-pink-500 animate-bounce" />
                    </h2>
                    <p className="mt-4 text-gray-800 dark:text-gray-200 max-w-2xl mx-auto font-medium">
                        My academic journey and the foundation of knowledge that drives my professional work.
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-pink-200 dark:bg-pink-900/50 rounded-full"></div>

                    <div className="space-y-12">
                        {educationData.map((item, index) => (
                            <TimelineItem key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

import Tilt from 'react-parallax-tilt';

const TimelineItem = ({ item, index }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''} relative`}>
            <div className="hidden md:block w-5/12"></div>

            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 border-4 border-white dark:border-gray-900 z-10 shadow-lg"></div>

            <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="w-full md:w-5/12 pl-12 md:pl-0"
            >
                <Tilt
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    perspective={1000}
                    scale={1.02}
                    transitionSpeed={1500}
                    className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                >
                    <div className="flex items-center text-sm text-pink-500 font-medium mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item.date}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{item.degree}</h3>
                    <h4 className="text-lg text-purple-700 dark:text-purple-400 font-bold mb-3 flex items-center">
                        <GraduationCap className="h-5 w-5 mr-2" /> {item.school}, {item.location}
                    </h4>
                    <p className="text-gray-800 dark:text-gray-200 mb-4 font-medium">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, idx) => (
                            <span key={idx} className="px-3 py-1 bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 rounded-full text-xs font-medium">
                                {tag}
                            </span>
                        ))}
                    </div>
                </Tilt>
            </motion.div>
        </div>
    );
};

export default Education;

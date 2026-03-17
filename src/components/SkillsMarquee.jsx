import { motion } from 'framer-motion';

const SkillsMarquee = ({ skills }) => {
    return (
        <div className="w-full overflow-hidden py-10 bg-white/5 dark:bg-black/20 backdrop-blur-sm">
            <motion.div
                className="flex"
                animate={{ x: [0, -1000] }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 30, // Adjust speed here
                        ease: "linear",
                    },
                }}
            >
                {/* Duplicate the skills list to create a seamless loop */}
                {[...skills, ...skills, ...skills].map((skill, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 mx-8 flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 min-w-[150px]"
                    >
                        <div className="text-4xl mb-4">{skill.icon}</div>
                        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{skill.name}</h3>
                        <p className="text-sm font-medium text-pink-500">{skill.level}%</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default SkillsMarquee;

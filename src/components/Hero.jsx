import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
    const [textOne, setTextOne] = useState('');
    const [textTwo, setTextTwo] = useState('');
    const [showHand, setShowHand] = useState(false);

    useEffect(() => {
        const fullTextOne = "Hello, I'm";
        const fullTextTwo = "Vishwa Patel";
        let i = 0;
        let j = 0;

        const typeOne = () => {
            if (i < fullTextOne.length) {
                setTextOne(fullTextOne.slice(0, i + 1));
                i++;
                setTimeout(typeOne, 100);
            } else {
                // Start typing second line after a small pause
                setTimeout(typeTwo, 500);
            }
        };

        const typeTwo = () => {
            if (j < fullTextTwo.length) {
                setTextTwo(fullTextTwo.slice(0, j + 1));
                j++;
                setTimeout(typeTwo, 100);
            } else {
                setShowHand(true);
            }
        };

        // Start typing immediately
        const timeoutId = setTimeout(typeOne, 500);

        return () => clearTimeout(timeoutId);
    }, []);
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-4 text-center overflow-hidden pt-20">
            {/* Background decorations */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-20 right-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="z-10 relative"
            >
                <div className="mb-8 mt-12 flex flex-col items-center">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative px-6 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 text-pink-500 dark:text-pink-300 text-sm font-medium tracking-[0.2em] uppercase backdrop-blur-sm"
                    >
                        <span className="mr-2">✨</span> Welcome to my portfolio <span className="ml-2">✨</span>
                    </motion.span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight min-h-[160px] md:min-h-[220px]">
                    {textOne}

                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient bg-300%">
                        {textTwo}
                    </span>
                    {showHand && (
                        <motion.span
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1, rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                            transition={{
                                scale: { duration: 0.5, type: "spring" },
                                opacity: { duration: 0.5 },
                                rotate: { duration: 2.5, repeat: Infinity, repeatDelay: 1, delay: 0.5 }
                            }}
                            className="ml-4 inline-block origin-bottom-right"
                        >👋</motion.span>
                    )}
                </h1>

                <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    A passionate <span className="text-pink-500 font-semibold">Full Stack Developer</span> crafting <span className="italic relative">
                        modern
                        <span className="absolute bottom-1 left-0 w-full h-1 bg-pink-500/30 -z-10"></span>
                    </span> digital experiences.
                </h2>



                <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
                >
                    View My Work
                    <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
                </motion.a>
            </motion.div>
        </section>
    );
};



export default Hero;

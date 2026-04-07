import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    const [textOne, setTextOne] = useState('');
    const [textTwo, setTextTwo] = useState('');
    const [showHand, setShowHand] = useState(false);

    useEffect(() => {
        let timeout1, timeout2;
        let i = 0;
        let j = 0;
        const fullTextOne = "Hello, I'm";
        const fullTextTwo = "Vishwa Patel";
        let cancelled = false;

        const typeOne = () => {
            if (cancelled) return;
            if (i < fullTextOne.length) {
                setTextOne(fullTextOne.slice(0, i + 1));
                i++;
                timeout1 = setTimeout(typeOne, 100);
            } else {
                timeout2 = setTimeout(typeTwo, 500);
            }
        };

        const typeTwo = () => {
            if (cancelled) return;
            if (j < fullTextTwo.length) {
                setTextTwo(fullTextTwo.slice(0, j + 1));
                j++;
                timeout2 = setTimeout(typeTwo, 100);
            } else {
                setShowHand(true);
            }
        };

        timeout1 = setTimeout(typeOne, 500);

        return () => {
            cancelled = true;
            clearTimeout(timeout1);
            clearTimeout(timeout2);
        };
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
                    {/* Welcome badge removed as requested */}
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight min-h-[160px] md:min-h-[220px]">
                    {textOne}

                    <br />
                    <span className="text-gradient">
                        {textTwo}
                    </span>
                </h1>

                <h2 className="text-2xl md:text-4xl font-medium text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed h-[50px]">
                    <TypeAnimation
                        sequence={[
                            'Backend Developer',
                            2000,
                            'Full Stack',
                            2000,
                            'Problem Solver',
                            2000
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        className="text-pink-500 font-semibold"
                    />
                </h2>



                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
                    >
                        View My Work
                        <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
                    </motion.a>
                    
                    <motion.a
                        href="https://drive.google.com/file/d/1BtgvGQhXhdvpQclUc1-CtHJU2P63bJIT/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-8 py-4 rounded-full border-2 border-pink-500 text-pink-500 dark:text-pink-400 font-bold hover:bg-pink-500/10 transition-all duration-300"
                    >
                        View Resume
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
};



export default Hero;

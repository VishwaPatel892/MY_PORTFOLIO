import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center relative px-4 overflow-hidden pt-10 pb-20">
            {/* Background decorations */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob pointer-events-none"></div>
            <div className="absolute top-40 right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-blob animation-delay-2000 pointer-events-none"></div>
            <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[150px] opacity-15 animate-blob animation-delay-4000 pointer-events-none"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="z-10 relative flex flex-col items-center w-full max-w-[1920px] mx-auto"
            >


                {/* Massive Name */}
                <div className="text-center w-full leading-[0.95] mb-12 mt-24 md:mt-32 select-none pointer-events-none flex flex-col items-center justify-center">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-[16vw] lg:text-[14vw] font-black tracking-tighter text-gray-900 dark:text-white uppercase m-0 w-full"
                    >
                        VISHWA
                    </motion.h1>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="text-[16vw] lg:text-[14vw] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] via-[#d946ef] to-[#a855f7] drop-shadow-[0_0_20px_rgba(217,70,239,0.3)] uppercase m-0 w-full"
                    >
                        PATEL
                    </motion.h1>
                </div>

                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-center flex flex-col items-center z-10"
                >
                    <p className="text-[10px] sm:text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-[#a3a3a3] mb-2 md:mb-3">
                        TRANSFORMING COMPLEX IDEAS INTO
                    </p>
                    <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-white font-serif italic drop-shadow-sm dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                        elegant digital experiences.
                    </p>
                    {/* Role tags */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                        {['Full Stack Developer', 'MERN Stack', 'UI/UX Designer'].map((tag) => (
                            <span key={tag} className="px-4 py-1.5 rounded-full text-xs font-mono font-semibold uppercase tracking-widest bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-purple-600 dark:text-[#a890ff]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;


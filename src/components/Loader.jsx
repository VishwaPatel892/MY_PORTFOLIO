import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onLoadingComplete, 500);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 15) + 5;
            });
        }, 150);

        return () => clearInterval(interval);
    }, [onLoadingComplete]);

    return (
        <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[9999] bg-[#0B0212] flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
                 <div className="w-[800px] h-[800px] bg-pink-500 rounded-full blur-[150px] mix-blend-screen animate-pulse"></div>
                 <div className="w-[600px] h-[600px] bg-purple-600 rounded-full blur-[150px] mix-blend-screen animate-pulse delay-700"></div>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 flex flex-col items-center"
            >
                {/* Logo or Name */}
                <h1 className="text-gradient text-5xl md:text-7xl font-black mb-8 tracking-tighter">
                    Vishwa Patel
                </h1>
                
                {/* Loader bar */}
                <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-gradient-to-r from-pink-500 to-purple-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(progress, 100)}%` }}
                        transition={{ ease: "easeOut" }}
                    />
                </div>
                
                <div className="mt-4 text-pink-400 font-mono text-sm">
                    {Math.min(progress, 100)}%
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Loader;

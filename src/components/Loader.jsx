import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LetterSpinner = ({ targetChar }) => {
    const [char, setChar] = useState('A');
    
    useEffect(() => {
        if (targetChar === ' ') {
            setChar(' ');
            return;
        }

        const targetCode = targetChar.toUpperCase().charCodeAt(0);
        if (targetCode < 65 || targetCode > 90) {
            setChar(targetChar);
            return;
        }

        let currCode = 65; // 'A'
        setChar('A');

        const interval = setInterval(() => {
            if (currCode >= targetCode) {
                clearInterval(interval);
            } else {
                currCode++;
                setChar(String.fromCharCode(currCode));
            }
        }, 70); // Timing adjustable for cool loading effect

        return () => clearInterval(interval);
    }, [targetChar]);

    return <>{char}</>;
};

const Loader = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false);
    const [showScanLine, setShowScanLine] = useState(false);

    useEffect(() => {
        // Mark text as visible after stagger finishes
        const textTimer = setTimeout(() => setIsTextVisible(true), 1500);
        
        const interval = setInterval(() => {
            setProgress(prev => {
                const newProgress = prev + (prev > 80 ? Math.random() * 2 + 1 : Math.random() * 8 + 3);
                
                if (newProgress >= 100) {
                    clearInterval(interval);
                    setIsLoaded(true);
                    setShowScanLine(true);
                    
                    // Allow time for exit animations
                    setTimeout(onLoadingComplete, 1600);
                    return 100;
                }
                return newProgress;
            });
        }, 120);

        return () => {
            clearInterval(interval);
            clearTimeout(textTimer);
        };
    }, [onLoadingComplete]);

    const firstName = "VISHWA".split('');
    const lastName = "PATEL".split('');

    const letterVariants = {
        hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
        visible: {
            opacity: [0, 0.4, 0, 1],
            x: [0, -3, 2, 0],
            y: [40, 10, 0],
            filter: ["blur(12px)", "blur(6px)", "blur(2px)", "blur(0px)"],
            transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1], times: [0, 0.1, 0.2, 1] }
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.2, ease: "easeInOut" } }}
            className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Subtle moving diagonal grid lines */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

            <motion.div 
                animate={isLoaded ? { scale: 1.1, opacity: 0 } : { scale: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: "easeInOut", delay: isLoaded ? 0.3 : 0 }}
                className="relative z-10 flex flex-col items-center w-full max-w-4xl"
            >
                {/* Horizontal Scan Line effect */}
                {showScanLine && (
                    <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none overflow-hidden z-20">
                        <div className="absolute top-[-20%] bottom-[-20%] w-[3px] bg-gradient-to-b from-transparent via-[#7c5cff] to-transparent shadow-[0_0_15px_#7c5cff] animate-scan-line"></div>
                    </div>
                )}

                {/* Animated Name */}
                <h1 className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-10 tracking-[0.2em] flex flex-col items-center justify-center gap-2 sm:gap-4 ${isTextVisible ? 'text-glow-pulse' : ''} transition-all duration-700`}>
                    <motion.div 
                        initial="hidden" 
                        animate="visible" 
                        variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
                        className="flex text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                    >
                        {firstName.map((letter, i) => (
                            <motion.span key={`first-${i}`} variants={letterVariants} className="inline-block relative min-w-[1.2ch] text-center">
                                <LetterSpinner targetChar={letter} />
                            </motion.span>
                        ))}
                    </motion.div>
                    
                    <motion.div 
                        initial="hidden" 
                        animate="visible" 
                        variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } } }}
                        className="flex"
                    >
                        {lastName.map((letter, i) => {
                            const colors = ['#ec4899', '#d946ef', '#c026d3', '#a855f7', '#9333ea'];
                            const glowColors = [
                                'rgba(236,72,153,0.8)',
                                'rgba(217,70,239,0.8)',
                                'rgba(192,38,211,0.7)',
                                'rgba(168,85,247,0.7)',
                                'rgba(147,51,234,0.7)'
                            ];
                            return (
                                <motion.span 
                                    key={`last-${i}`} 
                                    variants={letterVariants} 
                                    style={{ color: colors[i], textShadow: `0 0 15px ${glowColors[i]}` }}
                                    className="inline-block relative min-w-[1.2ch] text-center"
                                >
                                    <LetterSpinner targetChar={letter} />
                                </motion.span>
                            );
                        })}
                    </motion.div>
                </h1>
                
                {/* Thin loading bar */}
                <div className="w-48 md:w-80 h-[2px] bg-[#1a1a1a] rounded-full overflow-hidden shadow-[0_0_8px_rgba(168,85,247,0.2)] mt-6">
                    <motion.div 
                        className="h-full bg-gradient-to-r from-[#4a3a99] via-[#8B5CF6] to-[#a855f7] shadow-[0_0_15px_#8B5CF6]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear", duration: 0.15 }}
                    />
                </div>
            </motion.div>
            
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[50vh] bg-[#7c5cff] rounded-full blur-[250px] opacity-[0.04] pointer-events-none"></div>
            <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vh] bg-blue-600 rounded-full blur-[200px] opacity-[0.03] pointer-events-none"></div>
        </motion.div>
    );
};

export default Loader;

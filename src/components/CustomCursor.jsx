import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const hasTouch = (('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
            setIsMobile(hasTouch || window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    if (isMobile) return null;

    return (
        <>
            {/* Main Cursor Dot */}
            <motion.div
                className="hidden md:block fixed top-0 left-0 w-3 h-3 bg-pink-500 rounded-full pointer-events-none z-[9999] border border-white shadow-sm"
                animate={{
                    x: mousePosition.x - 6,
                    y: mousePosition.y - 6,
                    scale: isClicking ? 0.8 : (isHovering ? 1.2 : 1),
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />
            {/* Trailing Ring */}
            <motion.div
                className="hidden md:block fixed top-0 left-0 w-8 h-8 border-2 border-pink-400/50 rounded-full pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isClicking ? 0.5 : (isHovering ? 1.5 : 1),
                    opacity: isClicking ? 0.8 : (isHovering ? 0.5 : 0.3),
                    backgroundColor: isHovering ? 'rgba(236, 72, 153, 0.1)' : 'transparent',
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
            />
        </>
    );
};

export default CustomCursor;

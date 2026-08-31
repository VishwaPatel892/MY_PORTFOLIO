import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Award, ChevronLeft, ChevronRight } from 'lucide-react';

/* ── Carousel Component ── */
export const PhotoCarousel = ({ photos, alt, accentColor, objectFit, autoPlay = true, interval = 3500 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!autoPlay || !Array.isArray(photos) || photos.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % photos.length);
        }, interval);
        return () => clearInterval(timer);
    }, [photos, autoPlay, interval]);

    if (!Array.isArray(photos)) {
        return (
            <img
                src={photos}
                alt={alt}
                className="w-full h-full object-cover"
                style={{ minHeight: '320px' }}
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'; }}
            />
        );
    }

    const nextSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % photos.length);
    };

    const prevSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    };

    const currentPhoto = photos[currentIndex];
    const isUiImage = currentPhoto && (currentPhoto.includes('ui.png') || currentPhoto.includes('presentation.png'));
    const fitClass = objectFit || (isUiImage ? 'object-contain' : 'object-cover');

    return (
        <div className="relative w-full h-full min-h-[320px] overflow-hidden group bg-[#0B0B0F]">
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={currentPhoto}
                    alt={`${alt} - slide ${currentIndex + 1}`}
                    className={`absolute inset-0 w-full h-full ${fitClass}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'; }}
                />
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80 flex items-center justify-center border border-white/10"
                aria-label="Previous image"
            >
                <ChevronLeft size={16} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/80 flex items-center justify-center border border-white/10"
                aria-label="Next image"
            >
                <ChevronRight size={16} />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                {photos.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); setCurrentIndex(idx); }}
                        className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                        style={{
                            backgroundColor: idx === currentIndex ? accentColor : 'rgba(255,255,255,0.4)',
                            transform: idx === currentIndex ? 'scale(1.2)' : 'scale(1)',
                        }}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

/* ── Data ── */
const hackathons = [
    {
        id: 5,
        year: '2026',
        event: 'CodingGita',
        achievement: 'LAKSHYA — 1st Rank Winner',
        project: 'AI Browser Companion',
        description:
            'LAKSHYA is a next-generation AI Browser Companion that transforms the way users browse, learn, analyze, and interact with web content. Built during the CodingGita Hackathon, winning the 1st Rank.',
        tags: ['AI', 'React', 'Chrome Extension', 'Manifest V3', 'Node.js', 'Vercel'],
        github: 'https://github.com/VishwaPatel892/team_lakshya',
        live: 'https://team-lakshya1.vercel.app/',
        certificate: null,
        photo: [
            '/lakshya-ui.png',
            '/lakshya-team.png',
            '/lakshya-presentation.png',
            '/lakshya-award.png'
        ],
        badge: '🏆 1st Position',
        accentColor: '#3b82f6',
        glowColor: 'rgba(59,130,246,0.25)',
        photoRight: true,
    },
    {
        id: 1,
        year: '2026',
        event: 'Ganpat University',
        achievement: 'AI Cost Intelligence — 2nd Runner Up',
        project: 'AI Cost Intelligence Dashboard',
        description:
            'An intelligent dashboard designed to analyze and predict costs using AI models. Empowers businesses to make data-driven financial decisions with actionable insights. Built and deployed at Ganpat University hackathon, winning 2nd Runner Up.',
        tags: ['AI', 'React', 'Analytics', 'Vercel', 'Cost Intelligence'],
        github: 'https://github.com/VishwaPatel892/Al-Cost-Intelligence-Dashboard',
        live: 'https://al-cost-intelligence-dashboard.vercel.app/',
        certificate: null,
        photo: '/WhatsApp Image 2026-04-16 at 14.51.17.jpeg',
        badge: '🥉 2nd Runner Up',
        accentColor: '#a855f7',
        glowColor: 'rgba(168,85,247,0.25)',
        photoRight: false,
    },
    {
        id: 2,
        year: '2026',
        event: 'Sangam University',
        achievement: 'SmartAI Factory — Finalist',
        project: 'Smart Factory Management System',
        description:
            'An AI-powered smart factory management system representing Team Code Crusaders at Sangam University Hackathon 2026. Features real-time monitoring, predictive maintenance alerts, and machine performance dashboards for optimized industrial operations.',
        tags: ['React', 'AI', 'Dashboard', 'Real-time', 'Netlify'],
        github: 'https://github.com/VishwaPatel892/PS005-Codecrusaders',
        live: 'https://smartfactoryai.netlify.app/welcome',
        certificate: null,
        photo: '/WhatsApp Image 2026-04-07 at 18.33.31.jpeg',
        badge: '🏁 Finalist',
        accentColor: '#ec4899',
        glowColor: 'rgba(236,72,153,0.25)',
        photoRight: true,
    },
    {
        id: 3,
        year: '2025',
        event: 'Hackathon 2025',
        achievement: 'Fleet Management System — Hackathon',
        project: 'Smart Fleet Management',
        description:
            'A smart fleet management system built during a hackathon. Enables real-time vehicle tracking, route optimization, driver management, and fleet analytics for efficient logistics operations.',
        tags: ['React', 'Dashboard', 'Fleet', 'Analytics', 'Real-time'],
        github: 'https://github.com/VishwaPatel892/PS005-Codecrusaders',
        live: null,
        certificate: null,
        photo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
        badge: '🚀 Hackathon',
        accentColor: '#7c5cff',
        glowColor: 'rgba(124,92,255,0.25)',
        photoRight: false,
    },
    {
        id: 4,
        year: '2026',
        event: 'Hackathon 2026',
        achievement: 'AI Adaptive Onboarding — Featured',
        project: 'AI Adaptive Onboarding Platform',
        description:
            'An AI-powered onboarding platform that automatically personalizes the learning experience and adapts to user interaction, streamlining new user orientation for modern SaaS products.',
        tags: ['AI', 'React', 'Onboarding', 'Adaptive', 'Vercel'],
        github: 'https://github.com/VishwaPatel892/ai-adaptive-onboarding',
        live: 'https://ai-adaptive-onboarding-cb1e.vercel.app/',
        certificate: null,
        photo: 'https://images.unsplash.com/photo-1536412597336-aea7ddb2ee03?q=80&w=2070&auto=format&fit=crop',
        badge: '🌟 Featured',
        accentColor: '#f472b6',
        glowColor: 'rgba(244,114,182,0.25)',
        photoRight: true,
    },
];


/* ─── Single hackathon card ─── */
const HackathonCard = ({ hack, index }) => {
    const infoPanel = (
        <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
            {/* Year · Event */}
            <div className="flex items-center gap-2 mb-5">
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase" style={{ color: hack.accentColor }}>
                    {hack.year}
                </span>
                <span className="text-[#555] text-[10px] font-mono">·</span>
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#737373]">
                    {hack.event}
                </span>
            </div>

            {/* Achievement title */}
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-3 leading-tight">
                {hack.achievement}
            </h3>

            {/* Project name accent */}
            <p className="text-[10px] font-mono tracking-[0.15em] uppercase mb-5" style={{ color: hack.accentColor }}>
                {hack.project}
            </p>

            {/* Description */}
            <p className="text-[#a3a3a3] text-sm leading-relaxed mb-6 max-w-md">
                {hack.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-7">
                {hack.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-[9px] font-mono uppercase tracking-widest"
                        style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: `1px solid ${hack.accentColor}33`,
                            color: hack.accentColor,
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 max-w-xs">
                {hack.github && (
                    <a
                        href={hack.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest transition-all duration-300"
                        style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.15)', color: '#fff' }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = hack.accentColor; e.currentTarget.style.color = hack.accentColor; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#fff'; }}
                    >
                        <Github size={13} /> GitHub
                    </a>
                )}
                {hack.live && (
                    <a
                        href={hack.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest transition-all duration-300"
                        style={{ background: hack.accentColor, color: '#fff', boxShadow: `0 0 20px ${hack.glowColor}` }}
                        onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                    >
                        <ExternalLink size={13} /> Live Demo
                    </a>
                )}
                {hack.certificate && (
                    <a
                        href={hack.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest transition-all duration-300"
                        style={{ background: 'transparent', border: '1.5px solid rgba(34,197,94,0.4)', color: '#4ade80' }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(34,197,94,0.08)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                    >
                        <Award size={13} /> Certificate
                    </a>
                )}
            </div>
        </div>
    );



    return (
        <motion.div
            className="flex flex-col lg:flex-row rounded-3xl overflow-hidden"
            style={{
                background: 'rgba(11,11,15,0.85)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: `0 0 50px ${hack.glowColor}, 0 0 0 1px rgba(255,255,255,0.03)`,
                minHeight: '420px',
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Info panel */}
            <div
                className="flex-1 flex flex-col justify-center"
                style={{ order: hack.photoRight ? 1 : 2 }}
            >
                {infoPanel}
            </div>

            {/* Photo panel */}
            <div
                className="relative flex-shrink-0 min-h-[280px] w-full lg:w-[42%]"
                style={{
                    order: hack.photoRight ? 2 : 1,
                }}
            >
                {/* Badge */}
                <div className="absolute top-4 right-4 z-20">
                    <span
                        className="px-3 py-1.5 rounded-full text-[9px] font-mono tracking-[0.1em] uppercase backdrop-blur-md"
                        style={{ background: 'rgba(10,10,10,0.75)', border: `1px solid ${hack.accentColor}44`, color: hack.accentColor }}
                    >
                        ● Hackathon
                    </span>
                </div>

                {/* Photo */}
                <PhotoCarousel
                    photos={hack.photo}
                    alt={hack.achievement}
                    accentColor={hack.accentColor}
                />

                {/* Gradient overlay */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: hack.photoRight
                            ? 'linear-gradient(to right, rgba(11,11,15,0.5) 0%, transparent 35%)'
                            : 'linear-gradient(to left, rgba(11,11,15,0.5) 0%, transparent 35%)',
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/30 via-transparent to-transparent" />

                {/* Achievement badge bottom */}
                <div className="absolute bottom-4 left-4 z-20">
                    <span
                        className="px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md"
                        style={{ background: `${hack.accentColor}22`, border: `1px solid ${hack.accentColor}55`, color: '#fff' }}
                    >
                        {hack.badge}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

/* ─── Main Section ─── */
const Hackathon = () => {
    return (
        <section id="hackathon" className="relative overflow-hidden py-20 px-4 md:px-10">
            {/* Ambient glow */}
            <div
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 50% 40% at 80% 20%, rgba(168,85,247,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(236,72,153,0.05) 0%, transparent 70%)',
                }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <span
                        className="text-[10px] font-mono tracking-[0.35em] uppercase"
                        style={{ color: '#7c5cff', textShadow: '0 0 12px rgba(124,92,255,0.5)' }}
                    >
                        Competitive
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mt-3 tracking-tight">
                        Hackathon{' '}
                        <span
                            style={{
                                background: 'linear-gradient(to right, #ec4899, #a855f7)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                display: 'inline-block',
                            }}
                        >
                            Projects
                        </span>
                    </h2>
                    <p className="mt-4 text-sm text-[#a3a3a3] max-w-xl mx-auto font-light">
                        Projects built under pressure. Idea to deployment in hours — fast, collaborative, and impactful.
                    </p>
                </motion.div>

                {/* Stacked cards */}
                <div className="flex flex-col gap-8">
                    {hackathons.map((hack, i) => (
                        <HackathonCard key={hack.id} hack={hack} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hackathon;

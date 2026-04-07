import { motion } from 'framer-motion';
import { Trophy, ExternalLink, Github, Zap, Users, Calendar } from 'lucide-react';

const hackathons = [
    {
        id: 1,
        title: 'SmartAI Factory',
        event: 'Hackathon 2025',
        team: 'CodeCrusaders',
        date: '2025',
        description:
            'An AI-powered smart factory management system built during a hackathon. Features real-time monitoring, predictive maintenance alerts, and machine performance dashboards.',
        tags: ['React', 'AI', 'Dashboard', 'Real-time', 'Netlify'],
        github: 'https://github.com/VishwaPatel892/PS005-Codecrusaders',
        live: 'https://smartfactoryai.netlify.app/welcome',
        badge: '🏆 Hackathon',
        color: 'from-pink-500 via-purple-500 to-indigo-600',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    },
    {
        id: 2,
        title: 'Fleet Management System',
        event: 'Hackathon 2025',
        team: 'CodeCrusaders',
        date: '2025',
        description:
            'A smart fleet management system built during a hackathon. Enables real-time vehicle tracking, route optimization, driver management, and fleet analytics for efficient logistics operations.',
        tags: ['React', 'Dashboard', 'Fleet', 'Analytics', 'Real-time'],
        github: 'https://github.com/VishwaPatel892/PS005-Codecrusaders',
        live: null,
        badge: '🚀 Hackathon',
        color: 'from-purple-500 via-indigo-500 to-blue-600',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop',
        comingSoon: false,
    },
    {
        id: 3,
        title: 'AI Cost Intelligence Dashboard',
        event: 'Hackathon 2026',
        team: 'CodeCrusaders',
        date: '2026',
        description:
            'An intelligent dashboard designed to analyze and predict costs using AI models. Empowers businesses to make data-driven financial decisions with actionable insights.',
        tags: ['AI', 'React', 'Analytics', 'Vercel'],
        github: 'https://github.com/VishwaPatel892/Al-Cost-Intelligence-Dashboard',
        live: 'https://al-cost-intelligence-dashboard.vercel.app/',
        badge: '🏆 Winner',
        color: 'from-blue-600 via-teal-500 to-emerald-500',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
        comingSoon: false,
    },
    {
        id: 4,
        title: 'AI Adaptive Onboarding',
        event: 'Hackathon 2026',
        team: 'CodeCrusaders',
        date: '2026',
        description:
            'An AI-powered onboarding platform that automatically personalizes the learning experience and adapts to user interaction, streamlining new user orientation.',
        tags: ['AI', 'React', 'Onboarding', 'Adaptive'],
        github: 'https://github.com/VishwaPatel892/ai-adaptive-onboarding',
        live: 'https://ai-adaptive-onboarding-cb1e.vercel.app/',
        badge: '🌟 Featured',
        color: 'from-orange-500 via-red-500 to-pink-600',
        image: 'https://images.unsplash.com/photo-1536412597336-aea7ddb2ee03?q=80&w=2070&auto=format&fit=crop',
        comingSoon: false,
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.92 },
    visible: {
        opacity: 1, y: 0, scale: 1,
        transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
};

const Hackathon = () => {
    return (
        <section
            id="hackathon"
            className="py-24 px-4 md:px-8 bg-white dark:bg-[#0B0212] transition-colors duration-300 relative overflow-hidden"
        >
            {/* Top border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent" />

            {/* Blobs */}
            <div className="absolute top-10 left-20 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none" />
            <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-pink-500 dark:text-pink-400 font-semibold tracking-widest uppercase text-sm">
                        Competitive
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white">
                        Hackathon{' '}
                        <span className="text-gradient">
                            Projects
                        </span>{' '}
                        <Trophy className="inline-block h-9 w-9 text-yellow-400 animate-bounce ml-2" />
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
                        Projects built under pressure — from idea to deployment in hours. Fast, collaborative, and impactful.
                    </p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {hackathons.map((project) => (
                        <HackathonCard key={project.id} project={project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const HackathonCard = ({ project }) => {
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            className="group relative bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-pink-500/15 dark:hover:border-pink-500/30 transition-all duration-300"
        >
            {/* Gradient image banner */}
            <div className={`relative h-52 bg-gradient-to-br ${project.color} overflow-hidden`}>
                {project.image && (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-105 transition-all duration-500"
                    />
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Badge top-right */}
                <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1.5 bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-bold rounded-full tracking-wider">
                        {project.badge}
                    </span>
                </div>

                {/* Title over image */}
                <div className="absolute bottom-5 left-6 z-10">
                    <h3 className="text-2xl font-black text-white tracking-tight drop-shadow-lg">
                        {project.title}
                    </h3>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Meta info */}
                <div className="flex flex-wrap gap-4 mb-4 text-xs text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-pink-400" />
                        {project.date}
                    </span>
                    <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-purple-400" />
                        {project.team}
                    </span>
                    <span className="flex items-center gap-1">
                        <Zap className="w-3.5 h-3.5 text-yellow-400" />
                        {project.event}
                    </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-2.5 py-1 bg-pink-500/10 dark:bg-pink-500/10 border border-pink-500/20 text-pink-600 dark:text-pink-300 rounded-full text-xs font-semibold"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                {!project.comingSoon ? (
                    <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-white/5">
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold hover:opacity-90 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300"
                            >
                                <ExternalLink className="w-3.5 h-3.5" />
                                Live Demo
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-sm font-semibold hover:border-pink-500/40 hover:text-pink-500 dark:hover:text-pink-400 transition-all duration-300"
                            >
                                <Github className="w-3.5 h-3.5" />
                                Source Code
                            </a>
                        )}
                    </div>
                ) : (
                    <div className="pt-4 border-t border-gray-100 dark:border-white/5">
                        <span className="text-sm text-gray-400 dark:text-gray-500 italic">
                            🔨 Details coming soon...
                        </span>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Hackathon;

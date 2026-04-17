import { motion } from 'framer-motion';
import { Trophy, Star, Zap, Award, Medal, Target } from 'lucide-react';

const achievements = [
  {
    id: 1,
    icon: Trophy,
    color: '#a855f7',
    glow: 'rgba(168,85,247,0.3)',
    title: '2nd Runner Up — Ganpat University Hackathon',
    description: 'Won 2nd Runner Up position at Ganpat University Hackathon 2026 with the AI Cost Intelligence Dashboard — an analytics platform that uses AI to help businesses make smarter financial decisions.',
    tag: 'Hackathon Award',
    year: '2026',
  },
  {
    id: 2,
    icon: Medal,
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.3)',
    title: 'Finalist — Sangam University Hackathon',
    description: 'Reached Finalist position as part of Team Code Crusaders at Sangam University Hackathon 2026 with SmartAI Factory — an AI-powered industrial management system with real-time dashboards.',
    tag: 'Hackathon Finalist',
    year: '2026',
  },
  {
    id: 3,
    icon: Star,
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.3)',
    title: '10+ Projects Deployed & Live',
    description: 'Successfully designed, built, and deployed 10+ real-world projects spanning frontend clones, full-stack apps, games, and UI/UX prototypes — all accessible via live URLs.',
    tag: 'Development Milestone',
    year: '2025–2026',
  },
  {
    id: 4,
    icon: Zap,
    color: '#22c55e',
    glow: 'rgba(34,197,94,0.3)',
    title: 'Certified in 6+ Professional Courses',
    description: 'Earned certifications from Deloitte (Forage), Tata (Forage), HackerRank, Simplilearn, HP Life, Outskill, and Sololearn in areas including AI, Data Analytics, GitHub Copilot, and more.',
    tag: 'Professional Certification',
    year: '2025–2026',
  },
  {
    id: 5,
    icon: Target,
    color: '#3b82f6',
    glow: 'rgba(59,130,246,0.3)',
    title: 'ISC Bangalore 2025 — Event Attendee',
    description: 'Attended the India Startup Conference (ISC) in Bangalore, gaining exposure to emerging tech trends, startup ecosystems, and networking with industry leaders and innovators.',
    tag: 'Industry Event',
    year: '2025',
  },
  {
    id: 6,
    icon: Award,
    color: '#f472b6',
    glow: 'rgba(244,114,182,0.3)',
    title: 'MERN Stack Proficiency',
    description: 'Mastered the full MERN stack (MongoDB, Express, React, Node.js) along with modern tooling including Vite, Tailwind, Three.js, Framer Motion, and various APIs — delivering high-quality production-ready apps.',
    tag: 'Technical Achievement',
    year: '2024–2026',
  },
];

const AchievementCard = ({ item, index }) => {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="relative group rounded-2xl p-6 md:p-8 overflow-hidden cursor-default"
      style={{
        background: 'rgba(11,11,15,0.6)',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: `0 0 0 1px rgba(255,255,255,0.03)`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        style={{ background: `radial-gradient(circle at 30% 50%, ${item.glow} 0%, transparent 60%)` }}
      />

      {/* Top row */}
      <div className="flex items-start gap-4 mb-4 relative z-10">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: `${item.color}18`, border: `1px solid ${item.color}44` }}
        >
          <Icon size={22} style={{ color: item.color }} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span
              className="text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
              style={{ background: `${item.color}18`, color: item.color, border: `1px solid ${item.color}33` }}
            >
              {item.tag}
            </span>
            <span className="text-[#555] text-[10px] font-mono">{item.year}</span>
          </div>
          <h3 className="text-base md:text-lg font-black text-gray-900 dark:text-white leading-tight group-hover:text-pink-600 dark:group-hover:text-pink-300 transition-colors duration-300">
            {item.title}
          </h3>
        </div>
      </div>

      <p className="text-[#a3a3a3] text-sm leading-relaxed relative z-10">{item.description}</p>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
        style={{ background: `linear-gradient(to right, ${item.color}, transparent)` }}
      />
    </motion.div>
  );
};

const Achievements = () => (
  <section id="achievements" className="relative py-24 px-4 md:px-10 overflow-hidden">
    {/* Ambient glow */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          'radial-gradient(ellipse 50% 40% at 20% 30%, rgba(168,85,247,0.05) 0%, transparent 70%), radial-gradient(ellipse 40% 50% at 80% 70%, rgba(236,72,153,0.04) 0%, transparent 70%)',
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
          style={{ color: '#a855f7', textShadow: '0 0 12px rgba(168,85,247,0.5)' }}
        >
          Milestones
        </span>
        <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mt-3 tracking-tight">
          Achievements{' '}
          <span
            style={{
              background: 'linear-gradient(to right, #ec4899, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
            }}
          >
            &amp; Awards
          </span>
        </h2>
        <p className="mt-4 text-sm text-[#a3a3a3] max-w-xl mx-auto font-light">
          Recognition, wins, and milestones earned through consistent hard work and real-world impact.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {achievements.map((item, index) => (
          <AchievementCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;

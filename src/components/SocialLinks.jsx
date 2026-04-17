import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Twitter, Code2, ExternalLink } from 'lucide-react';

const socials = [
  {
    id: 'github',
    label: 'GitHub',
    handle: '@VishwaPatel892',
    description: 'Source code, open source projects, and repositories.',
    url: 'https://github.com/VishwaPatel892',
    icon: Github,
    color: '#e2e8f0',
    glow: 'rgba(226,232,240,0.15)',
    bg: 'rgba(226,232,240,0.04)',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'vishwa-patel-9bab9639a',
    description: 'Professional network, certifications and career updates.',
    url: 'https://www.linkedin.com/in/vishwa-patel-9bab9639a/',
    icon: Linkedin,
    color: '#0ea5e9',
    glow: 'rgba(14,165,233,0.2)',
    bg: 'rgba(14,165,233,0.05)',
  },
  {
    id: 'youtube',
    label: 'YouTube',
    handle: '@VishwaPatel-vp',
    description: 'Project demos, coding walkthroughs and tutorials.',
    url: 'https://www.youtube.com/@VishwaPatel-vp',
    icon: Youtube,
    color: '#ef4444',
    glow: 'rgba(239,68,68,0.2)',
    bg: 'rgba(239,68,68,0.05)',
  },
  {
    id: 'twitter',
    label: 'Twitter / X',
    handle: '@VishwaPatel_dev',
    description: 'Tech thoughts, dev updates and quick insights.',
    url: 'https://twitter.com/VishwaPatel_dev',
    icon: Twitter,
    color: '#e2e8f0',
    glow: 'rgba(226,232,240,0.15)',
    bg: 'rgba(226,232,240,0.04)',
  },
  {
    id: 'leetcode',
    label: 'LeetCode',
    handle: 'VishwaPatel',
    description: 'DSA practice, problem solving, and coding challenges.',
    url: 'https://leetcode.com/VishwaPatel892/',
    icon: Code2,
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.2)',
    bg: 'rgba(245,158,11,0.05)',
  },
];

const SocialCard = ({ social, index }) => {
  const Icon = social.icon;
  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      id={`social-${social.id}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative rounded-2xl p-6 overflow-hidden flex flex-col gap-4 cursor-pointer"
      style={{
        background: social.bg,
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: `0 0 0 1px rgba(255,255,255,0.02)`,
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 30px ${social.glow}`;
        e.currentTarget.style.borderColor = `${social.color}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 0 0 1px rgba(255,255,255,0.02)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
      }}
    >
      <div className="flex items-center justify-between">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: `${social.color}18`, border: `1px solid ${social.color}33` }}
        >
          <Icon size={22} style={{ color: social.color }} />
        </div>
        <ExternalLink
          size={16}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ color: social.color }}
        />
      </div>

      <div>
        <h3 className="text-lg font-black text-white mb-0.5">{social.label}</h3>
        <p className="text-[11px] font-mono tracking-wide mb-2" style={{ color: social.color }}>{social.handle}</p>
        <p className="text-sm text-[#737373] leading-relaxed">{social.description}</p>
      </div>

      {/* Bottom glow line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
        style={{ background: `linear-gradient(to right, ${social.color}, transparent)` }}
      />
    </motion.a>
  );
};

const SocialLinks = () => (
  <section id="social" className="relative py-24 px-4 md:px-10 overflow-hidden">
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(236,72,153,0.04) 0%, transparent 70%)',
      }}
    />

    <div className="max-w-6xl mx-auto relative z-10">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="text-[10px] font-mono tracking-[0.35em] uppercase" style={{ color: '#ec4899' }}>Let's connect</span>
        <h2 className="text-5xl md:text-7xl font-black text-white mt-3 tracking-tight">
          Find Me{' '}
          <span
            style={{
              background: 'linear-gradient(to right, #ec4899, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block',
            }}
          >
            Online
          </span>
        </h2>
        <p className="mt-4 text-sm text-[#a3a3a3] max-w-lg mx-auto font-light">
          Follow my journey across platforms — code, design, and everything in between.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {socials.map((social, index) => (
          <SocialCard key={social.id} social={social} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default SocialLinks;

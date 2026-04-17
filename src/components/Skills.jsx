import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaJs, FaNodeJs, FaCss3Alt, FaHtml5,
  FaGitAlt, FaGithub, FaDocker, FaNpm, FaPython,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiTypescript, SiNextdotjs, SiMongodb,
  SiExpress, SiPostman, SiVite, SiFirebase, SiVercel, SiFramer,
} from 'react-icons/si';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const CATEGORIES = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { title: 'HTML5',      icon: <FaHtml5 /> },
      { title: 'CSS3',       icon: <FaCss3Alt /> },
      { title: 'JavaScript', icon: <FaJs /> },
      { title: 'TypeScript', icon: <SiTypescript /> },
      { title: 'React',      icon: <FaReact /> },
      { title: 'Next.js',    icon: <SiNextdotjs /> },
      { title: 'Tailwind',   icon: <SiTailwindcss /> },
      { title: 'Framer',     icon: <SiFramer /> },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { title: 'Node.js',  icon: <FaNodeJs /> },
      { title: 'Express',  icon: <SiExpress /> },
      { title: 'MongoDB',  icon: <SiMongodb /> },
      { title: 'Firebase', icon: <SiFirebase /> },
      { title: 'Python',   icon: <FaPython /> },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { title: 'Git',     icon: <FaGitAlt /> },
      { title: 'GitHub',  icon: <FaGithub /> },
      { title: 'Docker',  icon: <FaDocker /> },
      { title: 'Vite',    icon: <SiVite /> },
      { title: 'Postman', icon: <SiPostman /> },
      { title: 'npm',     icon: <FaNpm /> },
      { title: 'Vercel',  icon: <SiVercel /> },
    ],
  },
];

/* ─────────────────────────────────────────────
   SINGLE ORBIT RING
   Each card is placed at: rotateY(angle) translateZ(radius)
   The whole ring spins via a CSS animation on the scene wrapper.
───────────────────────────────────────────── */
function OrbitRing({ category, sectionIndex }) {
  const [paused, setPaused] = useState(false);
  const n = category.skills.length;

  /* Radius scales with card count so cards never overlap */
  const radius = Math.round(80 + n * 14);
  const duration = 28 + sectionIndex * 4;

  return (
    <motion.div
      className="sk-column"
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.85, delay: sectionIndex * 0.18, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* ── Label ── */}
      <div className="sk-label-row">
        <span className="sk-label-text">{category.label}</span>
        <span className="sk-label-count">{n} tech</span>
      </div>

      {/* ── 3-D viewport ── */}
      <div
        className="sk-viewport"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ overflow: 'visible' }}
      >
        {/* Spinning ring — NO tilt, perfectly flat/straight */}
        <div
          className="sk-ring"
          style={{
            animationDuration: `${duration}s`,
            animationPlayState: paused ? 'paused' : 'running',
          }}
        >
          {category.skills.map((skill, i) => {
            const angleDeg = (360 / n) * i;
            return (
              <div
                key={skill.title}
                className="sk-card"
                style={{
                  transform: `rotateY(${angleDeg}deg) translateZ(${radius}px)`,
                  '--counter': `${-angleDeg}deg`,
                }}
              >
                <motion.div
                  className="sk-card-face"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                >
                  <span className="sk-icon">{skill.icon}</span>
                  <span className="sk-title">{skill.title}</span>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Central glow disc */}
        <div className="sk-disc" />

        {/* Pause badge */}
        <motion.div
          className="sk-pause-badge"
          animate={{ opacity: paused ? 1 : 0, y: paused ? 0 : 4 }}
          transition={{ duration: 0.25 }}
        >
          ⏸ paused
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   ROOT
───────────────────────────────────────────── */
export default function Skills() {
  return (
    <section id="skills" className="sk-root">
      {/* Ambient blobs only — no grid */}
      <div className="sk-blob sk-blob-1" />
      <div className="sk-blob sk-blob-2" />
      <div className="sk-blob sk-blob-3" />

      <div className="sk-inner">
        {/* ── Header ── */}
        <motion.header
          className="sk-header"
          initial={{ opacity: 0, y: -24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="sk-eyebrow">What I work with</p>
          <h2 className="sk-heading">
            My <span className="sk-gradient-text">Tech Stack</span>
          </h2>
          <p className="sk-sub">
            Three orbiting rings — each a layer of the stack
          </p>
        </motion.header>

        {/* ── Three rings ── */}
        <div className="sk-rings">
          {CATEGORIES.map((cat, i) => (
            <OrbitRing key={cat.id} category={cat} sectionIndex={i} />
          ))}
        </div>
      </div>

      {/* ══ ALL STYLES (scoped via sk- prefix) ══ */}
      <style>{`
        /* Google Font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        /* ── Keyframes ── */
        @keyframes orbitSpin {
          from { transform: rotateY(0deg); }
          to   { transform: rotateY(360deg); }
        }
        @keyframes blobPulse {
          0%, 100% { transform: scale(1);    opacity: 0.7; }
          50%       { transform: scale(1.12); opacity: 1;   }
        }

        /* ── Root section ── */
        .sk-root {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: transparent;
          overflow: hidden;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 7rem 1.5rem 11rem;
          box-sizing: border-box;
          font-family: 'Inter', system-ui, sans-serif;
        }


        /* ── Ambient blobs (subtle, so galaxy still shows) ── */
        .sk-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(130px);
          pointer-events: none;
          z-index: 0;
          animation: blobPulse var(--dur, 10s) ease-in-out infinite;
        }
        .sk-blob-1 {
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(124,92,255,0.07) 0%, transparent 70%);
          top: -150px; left: -200px;
          --dur: 12s;
        }
        .sk-blob-2 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 70%);
          top: 40%; right: -160px;
          --dur: 15s;
        }
        .sk-blob-3 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(217,70,239,0.04) 0%, transparent 70%);
          bottom: -120px; left: 30%;
          --dur: 9s;
        }

        /* ── Inner content ── */
        .sk-inner {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1280px;
        }

        /* ── Header ── */
        .sk-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .sk-eyebrow {
          font-size: 0.65rem;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #7c5cff;
          font-weight: 600;
          margin: 0 0 0.8rem;
          text-shadow: 0 0 12px rgba(124,92,255,0.5);
        }
        .sk-heading {
          font-size: clamp(2.6rem, 5vw, 4.5rem);
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 0.75rem;
          line-height: 1.06;
          letter-spacing: -0.04em;
        }
        .sk-gradient-text {
          background: linear-gradient(to right, #ec4899, #a855f7);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }
        .sk-sub {
          font-size: 0.75rem;
          color: rgba(163,163,163,0.7);
          margin: 0;
          letter-spacing: 0.08em;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          text-transform: uppercase;
        }

        /* ── Vertical Stack Layout ── */
        .sk-rings {
          display: flex;
          flex-direction: column;
          gap: 6rem;
          align-items: center;
          width: 100%;
        }

        /* ── One section ── */
        .sk-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          width: 100%;
          max-width: 800px;
        }

        /* ── Column label row ── */
        .sk-label-row {
          display: flex;
          align-items: baseline;
          gap: 0.6rem;
          margin-bottom: 0.5rem;
        }
        .sk-label-text {
          font-size: 1.1rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }
        .sk-label-count {
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(124,92,255,0.7);
          font-family: 'JetBrains Mono', monospace;
        }

        /* ── 3-D viewport (perspective) ── */
        .sk-viewport {
          position: relative;
          width: 100%;
          height: 340px;
          perspective: 820px;
          perspective-origin: 50% 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
        }

        /* ── Spinning ring ── */
        /* The viewport uses flex centering, so sk-ring sits at center.
           We do NOT use position:absolute with top/left — flex handles it. */
        .sk-ring {
          flex-shrink: 0;
          width: 1px;
          height: 1px;
          transform-style: preserve-3d;
          animation: orbitSpin linear infinite;
          /* duration set inline */
        }

        /* ── Each card slot ── */
        /* Cards radiate from the ring's 1×1 origin.
           Shift left and up by half card size so each card is
           centred ON its angle position, not offset from corner. */
        .sk-card {
          position: absolute;
          width: 96px;
          height: 112px;
          top: -56px;   /* -height/2 */
          left: -48px;  /* -width/2  */
          transform-style: preserve-3d;
          cursor: pointer;
        }

        /* ── Card face ── */
        .sk-card-face {
          width: 100%;
          height: 100%;
          transform: rotateY(var(--counter));
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 9px;

          /* Glassmorphism */
          background: rgba(11, 11, 15, 0.65);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 1px solid rgba(124,92,255,0.12);
          border-radius: 18px;
          box-shadow:
            0 4px 24px rgba(0,0,0,0.55),
            inset 0 1px 0 rgba(255,255,255,0.045);
          transition: border-color 0.35s ease, box-shadow 0.35s ease;

          /* Subtle top gloss */
          background-image: linear-gradient(
            to bottom,
            rgba(255,255,255,0.04) 0%,
            transparent 45%
          );
        }
        .sk-card:hover .sk-card-face {
          border-color: rgba(124,92,255,0.38);
          box-shadow:
            0 0 0 1px rgba(124,92,255,0.22),
            0 0 28px rgba(124,92,255,0.35),
            0 12px 40px rgba(0,0,0,0.7),
            inset 0 1px 0 rgba(255,255,255,0.08);
        }

        /* ── Icon ── */
        .sk-icon {
          font-size: 2.2rem;
          color: #a890ff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.3s ease, filter 0.3s ease;
        }
        .sk-card:hover .sk-icon {
          color: #d4c5ff;
          filter: drop-shadow(0 0 10px rgba(124,92,255,0.7));
        }

        /* ── Card title ── */
        .sk-title {
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #64748b;
          text-align: center;
          transition: color 0.3s ease;
        }
        .sk-card:hover .sk-title {
          color: #94a3b8;
        }

        /* ── Central glow disc ── */
        .sk-disc {
          position: absolute;
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(124,92,255,0.3) 0%, transparent 70%);
          box-shadow: 0 0 40px rgba(124,92,255,0.4), 0 0 80px rgba(168,85,247,0.15);
          pointer-events: none;
        }

        /* ── Pause badge ── */
        .sk-pause-badge {
          position: absolute;
          bottom: -2.4rem;
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(124,92,255,0.8);
          pointer-events: none;
          font-family: 'JetBrains Mono', monospace;
        }

        /* ── Mobile height adj ── */
        @media (max-width: 480px) {
          .sk-viewport { height: 280px; }
          .sk-root { padding: 5rem 1rem 9rem; }
          .sk-heading { font-size: 2.2rem; }
          .sk-card { width: 76px; height: 92px; }
          .sk-ring { margin-top: -46px; }
          .sk-icon { font-size: 1.7rem; }
        }
      `}</style>
    </section>
  );
}

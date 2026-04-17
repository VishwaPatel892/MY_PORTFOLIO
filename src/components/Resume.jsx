import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Eye, X, ExternalLink, Briefcase, GraduationCap, Code2, Award } from 'lucide-react';

const RESUME_PREVIEW = 'https://drive.google.com/file/d/19Ol-sH44P-lWeZ0xxuPuS1Yk9m09GVlR/preview';
const RESUME_DRIVE = 'https://drive.google.com/file/d/19Ol-sH44P-lWeZ0xxuPuS1Yk9m09GVlR/view?usp=sharing';

const highlights = [
  { icon: GraduationCap, color: '#a855f7', label: 'Education', value: 'B.Tech CSE (Pursuing)' },
  { icon: Code2, color: '#ec4899', label: 'Stack', value: 'MERN · React · Node.js' },
  { icon: Briefcase, color: '#3b82f6', label: 'Projects', value: '10+ Deployed Live' },
  { icon: Award, color: '#f59e0b', label: 'Hackathons', value: '4 Competed · 1 Podium' },
];

const Resume = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="resume" className="relative py-24 px-4 md:px-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(124,92,255,0.05) 0%, transparent 70%)' }} />
      <div className="max-w-5xl mx-auto relative z-10">

        <motion.div className="text-center mb-14" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <span className="text-[10px] font-mono tracking-[0.35em] uppercase" style={{ color: '#7c5cff' }}>My CV</span>
          <h2 className="text-5xl md:text-7xl font-black text-white mt-3 tracking-tight">
            My <span style={{ background: 'linear-gradient(to right, #ec4899, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'inline-block' }}>Resume</span>
          </h2>
          <p className="mt-4 text-sm text-[#a3a3a3] max-w-lg mx-auto font-light">A snapshot of my education, skills, and achievements. Click below to view the full resume.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl overflow-hidden"
          style={{ background: 'rgba(11,11,15,0.7)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 0 60px rgba(124,92,255,0.08)' }}
        >
          <div className="h-1 w-full" style={{ background: 'linear-gradient(to right, #7c5cff, #ec4899, #a855f7)' }} />
          <div className="p-8 md:p-12">

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(124,92,255,0.12)', border: '1px solid rgba(124,92,255,0.3)' }}>
                <FileText size={30} style={{ color: '#a890ff' }} />
              </div>
              <div>
                <p className="text-[10px] font-mono tracking-widest uppercase text-[#a3a3a3] mb-1">Vishwa Patel</p>
                <h3 className="text-2xl md:text-3xl font-black text-white">Full Stack Developer Resume</h3>
                <p className="text-sm text-[#737373] mt-1">Updated April 2026 · PDF Format</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {highlights.map(({ icon: Icon, color, label, value }) => (
                <div key={label} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <Icon size={18} style={{ color }} className="mb-2" />
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#555] mb-1">{label}</p>
                  <p className="text-sm font-bold text-white leading-snug">{value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                id="resume-view-btn"
                onClick={() => setOpen(true)}
                className="flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{ background: 'linear-gradient(135deg, #7c5cff 0%, #ec4899 100%)', boxShadow: '0 0 30px rgba(124,92,255,0.35)', color: '#fff' }}
              >
                <Eye size={18} /> View Resume
              </button>
              <a
                href={RESUME_DRIVE}
                target="_blank"
                rel="noopener noreferrer"
                id="resume-external-btn"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-[1.02]"
                style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.1)', color: '#fff' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(124,92,255,0.5)'; e.currentTarget.style.color = '#a890ff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff'; }}
              >
                <ExternalLink size={18} /> Open in Drive
              </a>
            </div>

            <p className="text-xs text-[#555] text-center mt-4 font-mono tracking-wider uppercase">⚠ Auto-download disabled · View only</p>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-6 lg:p-10"
            onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.93, opacity: 0 }}
              transition={{ duration: 0.3, type: 'spring', bounce: 0.15 }}
              className="relative w-full h-full max-w-5xl max-h-[92vh] bg-[#0B0B0F] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#111118] flex-shrink-0">
                <div className="flex items-center gap-3">
                  <FileText size={18} style={{ color: '#a890ff' }} />
                  <span className="text-white font-bold">Vishwa Patel — Resume</span>
                </div>
                <div className="flex items-center gap-2">
                  <a href={RESUME_DRIVE} target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs text-white/70 hover:text-white font-medium">
                    Open in Drive <ExternalLink size={12} />
                  </a>
                  <button onClick={() => setOpen(false)} className="p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors">
                    <X size={20} />
                  </button>
                </div>
              </div>
              <div className="flex-1 w-full bg-[#1a1a20] relative">
                <iframe src={RESUME_PREVIEW} title="Vishwa Patel Resume" className="absolute inset-0 w-full h-full border-0" allow="autoplay" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Resume;

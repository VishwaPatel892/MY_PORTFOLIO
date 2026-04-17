import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

/* ─── Certificate Data ─── */
const certificates = [
  {
    id: 1,
    title: 'Data Analytics',
    issuer: 'Deloitte (Forage)',
    category: 'PROFESSIONAL',
    badgeColor: '#a855f7',
    date: '2026',
    code: 'DELOITTE-2026',
    image: '/Deloitee-dataanalytics_page-0001.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Data Visualisation',
    issuer: 'Tata (Forage)',
    category: 'PROFESSIONAL',
    badgeColor: '#3b82f6',
    date: '2026',
    code: 'TATA-2026',
    image: '/1775565448344.jfif',
    link: '#',
  },
  {
    id: 3,
    title: 'Sangam Hackathon Participation',
    issuer: 'Sangam University',
    category: 'HACKATHON',
    badgeColor: '#22c55e',
    date: '2026',
    code: 'SANGAM-HACK-2026',
    image: '/WhatsApp Image 2026-04-07 at 18.28.11.jpeg',
    link: '#',
  },
  {
    id: 4,
    title: 'HackerRank Certificate',
    issuer: 'HackerRank',
    category: 'PROFESSIONAL',
    badgeColor: '#f43f5e',
    date: '2025-2026',
    code: 'HR-CERT-2026',
    image: 'https://raw.githubusercontent.com/Vishwa-156/CERTIFICATES/refs/heads/main/Screenshot%20(49).png',
    link: '/HACKERRANK-CERTIFICATE.pdf',
  },
  {
    id: 5,
    title: 'Generative AI',
    issuer: 'Outskill',
    category: 'COURSE',
    badgeColor: '#eab308',
    date: '2025-2026',
    code: 'OUTSKILL-2026',
    image: 'https://raw.githubusercontent.com/Vishwa-156/CERTIFICATES/refs/heads/main/Screenshot%20(51).png',
    link: '/OUTSKILL-CERTIFICATE.pdf',
  },
  {
    id: 6,
    title: 'Github Copilot Fundamentals',
    issuer: 'Simplilearn',
    category: 'COURSE',
    badgeColor: '#eab308',
    date: '2025-2026',
    code: 'SIMPLI-2026',
    image: 'https://raw.githubusercontent.com/Vishwa-156/CERTIFICATES/refs/heads/main/Screenshot%20(52).png',
    link: '/SIMPLELEARN-CERTIFICATE-MICROSOFT.pdf',
  },
  {
    id: 7,
    title: 'IT for Business Success',
    issuer: 'HP Life',
    category: 'COURSE',
    badgeColor: '#eab308',
    date: '2025-2026',
    code: 'HP-LIFE-2026',
    image: 'https://raw.githubusercontent.com/Vishwa-156/CERTIFICATES/refs/heads/main/Screenshot%20(50).png',
    link: '/IT-FOR-BUSINESS-SUCCESS.pdf',
  },
  {
    id: 8,
    title: 'Programming C Language',
    issuer: 'Sololearn',
    category: 'COURSE',
    badgeColor: '#eab308',
    date: '2025-2026',
    code: 'SOLO-2026',
    image: 'https://raw.githubusercontent.com/Vishwa-156/CERTIFICATES/refs/heads/main/SIMPLELEARN-CERTI.jpg',
    link: '/SOLOLEARN-CERTIFICATE.pdf',
  },
  {
    id: 9,
    title: 'Intro to Cyber Security',
    issuer: 'Vishwa',
    category: 'COURSE',
    badgeColor: '#eab308',
    date: '2025-2026',
    code: 'CYBER-2026',
    image: 'https://raw.githubusercontent.com/Vishwa-156/CERTIFICATES/refs/heads/main/Screenshot%20(53).png',
    link: '/VISHWA-CERTI.pdf',
  },
];

/* ─── Certificate Card ─── */
const CertificateCard = ({ cert }) => {
  return (
    <div
      onClick={() => window.open(cert.link && cert.link !== '#' ? cert.link : cert.image, '_blank')}
      className="relative flex-shrink-0 w-[340px] md:w-[380px] h-[480px] rounded-3xl overflow-hidden group snap-center cursor-pointer transition-transform duration-300 hover:-translate-y-2"
      style={{
        background: '#0B0B0F',
        border: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Top Image Area */}
      <div className="absolute top-0 left-0 w-full h-[55%]">
        <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1589330694653-efa64753ba13?q=80&w=2070&auto=format&fit=crop';
          }}
        />
        {/* Dark fade gradient to blend into the bottom solid color */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/60 to-transparent flex items-center justify-center">
             <div className="w-12 h-12 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-10">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
             </div>
        </div>
      </div>

      {/* Pill Badge Top Left */}
      <div className="absolute top-5 left-5 z-20">
        <span
          className="px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase backdrop-blur-md"
          style={{
            background: `${cert.badgeColor}22`,
            color: cert.badgeColor,
            border: `1px solid ${cert.badgeColor}44`,
          }}
        >
          {cert.category}
        </span>
      </div>

      {/* Card Content (Bottom Half positioned relative to root) */}
      <div className="absolute bottom-0 left-0 w-full h-[55%] p-6 md:p-8 flex flex-col justify-end">
        <div>
          <h3 className="text-2xl font-bold text-white leading-tight mb-2 group-hover:text-pink-400 transition-colors duration-300">
            {cert.title}
          </h3>
          <p className="text-[#a855f7] font-semibold text-sm tracking-wide">
            {cert.issuer}
          </p>
        </div>

        {/* Footer info underneath content */}
        <div className="mt-8 pt-6 flex items-center justify-between border-t border-white/5">
          <div className="flex items-center text-[#737373] text-xs font-mono">
            <Calendar size={14} className="mr-2" />
            {cert.date}
          </div>
          <span className="text-[#555] text-[10px] font-mono tracking-widest uppercase">
            {cert.code}
          </span>
        </div>
      </div>

      {/* Subtle hover ring */}
      <div className="absolute inset-0 border-[2px] border-transparent group-hover:border-pink-500/20 rounded-3xl pointer-events-none transition-colors duration-500" />
    </div>
  );
};

/* ─── Main Component ─── */
const Certificates = () => {
  const sliderRef = useRef(null);

  const slide = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 400 : 340;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="certificates" className="relative py-24 overflow-hidden bg-transparent">
      {/* Background Ambience */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 10% 20%, rgba(236,72,153,0.03) 0%, transparent 50%), radial-gradient(circle at 90% 80%, rgba(124,92,255,0.03) 0%, transparent 50%)',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6">
          <motion.h2
            className="text-5xl md:text-7xl font-black text-white tracking-tighter"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            The Proof <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#a855f7] tracking-normal font-medium">Behind</span>
          </motion.h2>

          {/* Navigation Arrows */}
          <motion.div
            className="flex gap-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => slide('left')}
              className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(236,72,153,0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            >
              <ChevronLeft size={20} color="#fff" />
            </button>
            <button
              onClick={() => slide('right')}
              className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(236,72,153,0.5)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            >
              <ChevronRight size={20} color="#fff" />
            </button>
          </motion.div>
        </div>

        {/* Carousel / Slider */}
        <motion.div
          ref={sliderRef}
          className="flex gap-6 md:gap-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbars cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} cert={cert} />
          ))}
        </motion.div>
        
        {/* Global style to hide webkit scrollbars for the slider */}
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbars::-webkit-scrollbar {
            display: none;
          }
        `}} />

      </div>
    </section>
  );
};

export default Certificates;

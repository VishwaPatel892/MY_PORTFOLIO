import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Github, ExternalLink } from 'lucide-react';
import { PhotoCarousel } from './Hackathon';

const POPUP_PHOTOS = [
  '/lakshya-team.png',
  '/lakshya-ui.png',
  '/lakshya-presentation.png',
  '/lakshya-award.png'
];

const HackathonPopup = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/10"
            style={{
              background: 'rgba(11, 11, 15, 0.95)',
              boxShadow: '0 0 60px rgba(59, 130, 246, 0.15)',
            }}
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 w-full h-1" style={{ background: 'linear-gradient(to right, #3b82f6, #ec4899)' }} />

            {/* Left side: Image Carousel */}
            <div className="relative w-full md:w-[50%] min-h-[280px] md:min-h-[500px] bg-[#0B0B0F] overflow-hidden flex-shrink-0">
              <PhotoCarousel
                photos={POPUP_PHOTOS}
                alt="Lakshya Project and Team"
                accentColor="#3b82f6"
                objectFit="contain"
              />
              {/* Overlay shadow */}
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />
              
              {/* Floating Winner Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 backdrop-blur-md text-amber-300 text-[10px] font-mono tracking-wider uppercase font-bold">
                <Trophy size={12} className="text-amber-400" /> 1st Position Winner
              </div>
            </div>

            {/* Right side: Content */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors z-30"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="mb-6">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#3b82f6]">CodingGita Hackathon</span>
                <h3 className="text-3xl font-black text-white mt-2 leading-tight">
                  LAKSHYA
                </h3>
                <p className="text-[10px] font-mono tracking-wider uppercase text-amber-400 mt-1 flex items-center gap-1">
                  <span>🏆 1st Rank Winning Project</span>
                </p>

                <p className="text-gray-300 text-sm mt-4 font-light leading-relaxed">
                  LAKSHYA is a next-generation AI Browser Companion that transforms the way users browse, learn, analyze, and interact with web content.
                </p>
                <p className="text-[#a3a3a3] text-xs mt-2 font-light leading-relaxed">
                  Built under pressure during the CodingGita Hackathon and awarded 1st Position.
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {['AI', 'React', 'Chrome Extension', 'Vercel'].map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase bg-white/5 text-white/60 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://team-lakshya1.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors duration-300"
                  style={{ boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)' }}
                >
                  Live Demo <ExternalLink size={12} />
                </a>
                <a
                  href="https://github.com/VishwaPatel892/team_lakshya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-xs uppercase tracking-wider transition-colors duration-300"
                >
                  <Github size={13} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default HackathonPopup;

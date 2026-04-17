import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star, Youtube } from "lucide-react";
import { projects } from "../data/projects";

/* ─── Bullet points per project ─── */
const projectBullets = {
  1: [
    "Vibrant, responsive landing page for a wellness brand",
    "Smooth UI animations and modern component design",
    "Deployed on Netlify with optimized performance",
  ],
  2: [
    "Clean activewear e-commerce interface",
    "Product grids with smooth hover interactions",
    "Tailwind-powered responsive layout system",
  ],
  3: [
    "Stylish sustainable drinkware product showcase",
    "Strong focus on visual brand identity",
    "Styled Components for scoped, reusable styles",
  ],
  4: [
    "Luxury e-commerce with organic bedding essentials",
    "Fully functional shopping cart experience",
    "Ethical sourcing & premium quality focus",
  ],
  5: [
    "Dark-mode video streaming platform interface",
    "Live movie data via TMDB API integration",
    "Responsive media carousels and grids",
  ],
  6: [
    "Interactive RGB color guessing game",
    "Instant feedback with score tracking",
    "Built with pure React and minimal dependencies",
  ],
  7: [
    "High-fidelity Figma design of the Coding Gita platform",
    "Clean dashboard layouts and modern EdTech UI components",
    "Course cards, navigation flows and responsive frames",
  ],
  8: [
    "Premium dark spa & wellness website Figma design",
    "Luxurious aesthetics with elegant typography",
    "Serene visual hierarchy and smooth layout composition",
  ],
  9: [
    "Bold luxury shopping website Figma design",
    "Immersive product showcase with dark e-commerce aesthetic",
    "Premium visual identity and interactive component system",
  ],
  10: [
    "Mobile UI kit for food delivery & restaurant discovery",
    "Digital voucher flows and vibrant screen designs",
    "Community Figma kit with intuitive user-friendly layouts",
  ],
};

/* ─── Right panel: premium single-image mockup ─── */
const MockupPanel = ({ project }) => (
  <div className="relative w-full h-full flex items-center justify-center p-4 lg:p-8">
    {/* Border frame */}
    <div
      className="absolute inset-4 lg:inset-8 rounded-2xl pointer-events-none z-0"
      style={{
        background: "linear-gradient(135deg, rgba(124,92,255,0.1) 0%, rgba(236,72,153,0.05) 100%)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "24px",
      }}
    />

    {/* Glow dot top-left of frame */}
    <div
      className="absolute top-8 left-8 z-30 w-2.5 h-2.5 rounded-full hidden lg:block"
      style={{ background: "#ec4899", boxShadow: "0 0 12px 4px rgba(236,72,153,0.4)" }}
    />
    
    {/* Glow dot bottom-right of frame */}
    <div
      className="absolute bottom-8 right-8 z-30 w-2.5 h-2.5 rounded-full hidden lg:block"
      style={{ background: "#a855f7", boxShadow: "0 0 12px 4px rgba(168,85,247,0.4)" }}
    />

    {/* Main screenshot */}
    <motion.div
      className="relative z-10 rounded-xl overflow-hidden shadow-2xl w-full max-w-[90%]"
      style={{
        aspectRatio: "16/10",
        border: "1px solid rgba(255,255,255,0.15)",
        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.8), 0 0 40px rgba(124,92,255,0.15)",
      }}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      key={`main-${project.id}`}
    >
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
        loading="lazy" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/80 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  </div>
);

/* ─── Numbered side nav (Timeline style) ─── */
const NavDots = ({ total, current, onSelect }) => (
  <div className="relative flex flex-col gap-8 py-4">
    {/* Continuous Vertical Line */}
    <div
      className="absolute left-[5px] w-[1px]"
      style={{
        top: "-10px",
        bottom: "-10px",
        background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15) 10%, rgba(255,255,255,0.15) 90%, transparent)",
      }}
    />

    {Array.from({ length: total }).map((_, i) => (
      <button
        key={i}
        onClick={() => onSelect(i)}
        aria-label={`Go to project ${i + 1}`}
        className="group relative flex items-center focus:outline-none h-6"
      >
        {/* Dot positioned over the line */}
        <div className="absolute left-[5.5px] -translate-x-1/2 flex items-center justify-center">
          {/* Active Aura/Halo */}
          {i === current && (
            <>
              <div className="absolute w-[45px] h-[45px] rounded-full bg-white opacity-[0.04] blur-md pointer-events-none" />
              <div className="absolute w-[20px] h-[20px] rounded-full bg-white opacity-[0.08] blur-[4px] pointer-events-none" />
            </>
          )}
          {/* Core Dot */}
          <span
            className="relative block rounded-full transition-all duration-300"
            style={{
              width: i === current ? "8px" : "6px",
              height: i === current ? "8px" : "6px",
              background: i === current ? "#fff" : "rgba(255,255,255,0.2)",
              boxShadow: i === current ? "0 0 12px 2px rgba(255,255,255,0.4)" : "none",
            }}
          />
        </div>
        
        {/* Label Text */}
        <span
          className="ml-8 text-[11px] font-black tracking-[0.2em] transition-colors duration-200 uppercase"
          style={{ 
            color: i === current ? "#fff" : "rgba(255,255,255,0.3)",
          }}
        >
          {String(i + 1).padStart(2, "0")}
        </span>
      </button>
    ))}
  </div>
);

/* ─── Main Projects Component ─── */
const categories = ['All', 'Clones', 'Games', 'UI/UX'];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative py-24 px-4 md:px-10 overflow-hidden"
      style={{ background: "transparent" }}
    >
      {/* Ambient glows */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(124,92,255,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(236,72,153,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
            Featured{" "}
            <span
              style={{
                background: "linear-gradient(to right, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              }}
            >
              Projects
            </span>
          </h2>
          <p className="mt-4 text-sm text-[#a3a3a3] max-w-xl mx-auto font-light leading-relaxed">
            A curated collection of work that showcases my skills in building impactful digital products.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-3 mb-20 lg:mb-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-8 py-3 rounded-full font-mono text-[10px] sm:text-xs font-black tracking-widest uppercase transition-all duration-300 ${activeCategory === cat ? 'text-white' : 'text-[#a3a3a3] hover:text-white hover:bg-white/5'}`}
              style={{
                background: activeCategory === cat ? "transparent" : "rgba(255,255,255,0.03)",
                border: `1px solid ${activeCategory === cat ? "transparent" : "rgba(255,255,255,0.1)"}`,
                boxShadow: activeCategory === cat ? "0 0 25px rgba(236,72,153,0.6), 0 0 50px rgba(168,85,247,0.4)" : "none",
              }}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute inset-0 rounded-full"
                  style={{ background: "linear-gradient(135deg, #ec4899 0%, #a855f7 100%)", zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Vertically Stacked Projects */}
        <div className="flex flex-col gap-32 lg:gap-40">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const bullets = projectBullets[project.id] || [];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
                >
                  {/* Text panel */}
                  <div className="flex-1 flex flex-col justify-center">
                    {/* Project Number & Title */}
                    <div className="flex items-center gap-4 mb-5">
                      <span className="text-3xl font-black text-gray-300 dark:text-white/10">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="block w-6 h-1 lg:w-8 rounded-full flex-shrink-0"
                        style={{ background: "linear-gradient(to right, #ec4899, #a855f7)" }}
                      />
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-[#a3a3a3] text-sm leading-relaxed mb-5 max-w-md">
                      <span style={{ color: "#ec4899", marginRight: "6px" }}>🚀</span>
                      {project.description}
                    </p>

                    {/* Bullet points */}
                    <ul className="space-y-2 mb-6">
                      {bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Star className="mt-0.5 shrink-0" size={14} style={{ color: "#a890ff" }} />
                          <span className="text-gray-700 dark:text-[#d4d4d4] text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags?.map((tag, i) => (
                        <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-white/5 rounded-full text-[10px] font-mono font-bold text-purple-600 dark:text-[#a890ff] uppercase tracking-widest border border-gray-200 dark:border-white/5">
                          {tag}
                        </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest font-mono transition-all duration-300"
                        style={{
                          background: "linear-gradient(to right, #ec4899, #a855f7)",
                          color: "#fff",
                          boxShadow: "0 0 20px rgba(236,72,153,0.35)",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 30px rgba(236,72,153,0.55)")}
                        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 20px rgba(236,72,153,0.35)")}
                      >
                        View Project
                        <ExternalLink size={13} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest font-mono transition-all duration-300"
                        style={{
                          background: "transparent",
                          border: "1.5px solid rgba(255,255,255,0.1)",
                          color: "#fff",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "rgba(124,92,255,0.5)";
                          e.currentTarget.style.color = "#a890ff";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                          e.currentTarget.style.color = "#fff";
                        }}
                      >
                        <Github size={13} />
                        Source Code
                      </a>
                    )}
                    {project.youtube && (
                      <a
                        href={project.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-[10px] uppercase tracking-widest font-mono transition-all duration-300"
                        style={{
                          background: "transparent",
                          border: "1.5px solid rgba(255,255,255,0.1)",
                          color: "#fff",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "rgba(239,68,68,0.5)";
                          e.currentTarget.style.color = "#f87171";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                          e.currentTarget.style.color = "#fff";
                        }}
                      >
                        <Youtube size={13} />
                        Watch Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Mockup panel */}
                <div className="relative flex-shrink-0 w-full lg:w-[48%]" style={{ minHeight: "340px" }}>
                  <MockupPanel project={project} />
                </div>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
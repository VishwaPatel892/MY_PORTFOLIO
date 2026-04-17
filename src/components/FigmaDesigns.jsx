import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ExternalLink } from 'lucide-react';

const figmaProjects = [
  {
    id: 1,
    title: "Alani Nu UI Clone",
    description: "A beautifully structured layout focusing on vibrant, modern e-commerce visual hierarchies.",
    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FztyL4bPvjVirM334v4HP30%2FUntitled%3Fnode-id%3D551-445%26t%3Dt0vCMvM0IwkdFium-1",
    link: "https://www.figma.com/design/ztyL4bPvjVirM334v4HP30/Untitled?node-id=551-445&t=t0vCMvM0IwkdFium-1",
    image: "/project-codinggita.png.png"
  },
  {
    id: 2,
    title: "Vuori Activewear Design",
    description: "An elegant, premium aesthetic designed for high-end athletic apparel and lifestyle branding.",
    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FztyL4bPvjVirM334v4HP30%2FUntitled%3Fnode-id%3D555-446%26t%3DUxanOkXZQgGGxbdZ-1",
    link: "https://www.figma.com/design/ztyL4bPvjVirM334v4HP30/Untitled?node-id=555-446&t=UxanOkXZQgGGxbdZ-1",
    image: "/project-spa.png.png"
  },
  {
    id: 3,
    title: "eCommerce Mobile UI Kit",
    description: "A comprehensive UI kit for an eCommerce mobile application showcasing seamless shopping flows and crisp visual components.",
    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FPNk8SnRkbc7JkEcJVQVkyO%2FeCommerce-App-UI-Kit---Case-Study-Ecommerce-Mobile-App-UI-kit--Community-%3Fnode-id%3D102-7911%26t%3DcaynxEyNlmkzwojh-1",
    link: "https://www.figma.com/design/PNk8SnRkbc7JkEcJVQVkyO/eCommerce-App-UI-Kit---Case-Study-Ecommerce-Mobile-App-UI-kit--Community-?node-id=102-7911&t=caynxEyNlmkzwojh-1",
    image: "/project-luxeshop.png.png"
  },
  {
    id: 4,
    title: "Food & Vouchers UI Kit",
    description: "A stylish and user-friendly mobile app interface centered around seamless food delivery, restaurant discovery, and digital vouchers.",
    url: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F2EF1CVoDUDaPjFRj9rKl9f%2FFood---Vouchers-Mobile-App-UI-Kit-App--FREE---Community-%3Fnode-id%3D102-19009%26t%3DysFAx7ZtheEHsmj1-1",
    link: "https://www.figma.com/design/2EF1CVoDUDaPjFRj9rKl9f/Food---Vouchers-Mobile-App-UI-Kit-App--FREE---Community-?node-id=102-19009&t=ysFAx7ZtheEHsmj1-1",
    image: "/project-fooddelivery.png.png"
  }
];

const FigmaDesigns = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="figma-designs" className="relative py-24 px-4 md:px-10 overflow-hidden" style={{ background: "transparent" }}>
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div
           className="text-center mb-16 lg:mb-20"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            UI/UX{" "}
            <span
              style={{
                background: "linear-gradient(to right, #ec4899, #a855f7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline-block",
              }}
            >
              Designs
            </span>
          </h2>
          <p className="mt-4 text-sm text-[#a3a3a3] max-w-xl mx-auto font-light leading-relaxed">
            Click on any card to explore the fully intractable interface directly inside Figma.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {figmaProjects.map((project, index) => (
            <motion.div
               key={project.id}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="group relative bg-[#0B0B0F] border border-white/5 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-white/20 hover:-translate-y-2 cursor-pointer"
               onClick={() => setSelectedProject(project)}
            >
              {/* Card Preview Area */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/50">
                 <img
                   src={project.image}
                   alt={project.title}
                   className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                 />
                 
                 {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-all duration-300 w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center">
                       <Maximize2 className="text-white w-6 h-6" />
                    </div>
                 </div>
              </div>

              {/* Card Content Area */}
              <div className="p-6 md:p-8 relative">
                 <div className="absolute top-0 left-8 w-12 h-[1px] bg-gradient-to-r from-[#ec4899] to-[#a855f7]" />
                 <h3 className="text-2xl font-black text-white tracking-tight mb-3">
                   {project.title}
                 </h3>
                 <p className="text-[#a3a3a3] text-sm leading-relaxed">
                   {project.description}
                 </p>
                 
                 <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#a855f7]">
                      Interactive Prototype
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#ec4899] transition-colors duration-300">
                      <ExternalLink className="w-3.5 h-3.5 text-white" />
                    </span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-6 lg:p-10"
          >
             <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
                className="relative w-full h-full max-w-7xl max-h-[90vh] bg-[#0B0B0F] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
             >
                {/* Modal Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#12121A]">
                   <div className="flex items-center gap-4">
                      <h3 className="text-white font-bold text-lg">{selectedProject.title}</h3>
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-xs text-white/70 hover:text-white font-medium"
                      >
                         Open in Figma <ExternalLink className="w-3 h-3" />
                      </a>
                   </div>
                   <button 
                     onClick={() => setSelectedProject(null)} 
                     className="p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                   >
                      <X className="w-5 h-5" />
                   </button>
                </div>
                
                {/* Modal Iframe Content */}
                <div className="flex-1 w-full bg-black relative">
                   <iframe 
                      src={selectedProject.url} 
                      className="absolute inset-0 w-full h-full border-0" 
                      allowFullScreen 
                   />
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default FigmaDesigns;

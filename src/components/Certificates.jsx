import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const certificates = [
  {
    id: 4,
    title: "HackerRank Certificate",
    issuer: "HackerRank",
    date: "2025-2026",
    link: "/HACKERRANK-CERTIFICATE.pdf",
    image:
      "https://raw.githubusercontent.com/Vishwa-156/CERTIFICATES/refs/heads/main/Screenshot%20(49).png",
  },
  {
    id: 5,
    title: "IT for Business Success",
    issuer: "HP Life",
    date: "2025-2026",
    link: "/IT-FOR-BUSINESS-SUCCESS.pdf",
    image:
      "https://raw.githubusercontent.com/Vishwa-156/CERTIFICATES/refs/heads/main/Screenshot%20(50).png",
  },
  {
    id: 6,
    title: "Generative Ai",
    issuer: "Outskill",
    date: "2025-2026",
    link: "/OUTSKILL-CERTIFICATE.pdf",
    image:
      "https://raw.githubusercontent.com/Vishwa-156/CERTIFICATES/refs/heads/main/Screenshot%20(51).png",
  },
  {
    id: 7,
    title: "Github Copilot Fundamentals",
    issuer: "Simplilearn",
    date: "2025-2026",
    link: "/SIMPLELEARN-CERTIFICATE-MICROSOFT.pdf",
    image:
      "https://raw.githubusercontent.com/Vishwa-156/CERTIFICATES/refs/heads/main/Screenshot%20(52).png",
  },
  {
    id: 8,
    title: "Programming C Language",
    issuer: "Sololearn",
    date: "2025-2026",
    link: "/SOLOLEARN-CERTIFICATE.pdf",
    image:
      "https://raw.githubusercontent.com/Vishwa-156/CERTIFICATES/refs/heads/main/SIMPLELEARN-CERTI.jpg",
  },
  {
    id: 9,
    title: "Intro to Cyber Security",
    issuer: "Vishwa",
    date: "2025-2026",
    link: "/VISHWA-CERTI.pdf",
    image:
      "https://raw.githubusercontent.com/Vishwa-156/CERTIFICATES/refs/heads/main/Screenshot%20(53).png", // Generic achievement/education image
  },

  {
    id: 10,
    title: "Certification Participation",
    issuer: "H & P Projects",
    date: "2025-2026",
    link: "https://raw.githubusercontent.com/Vishwa-156/CERTIFICATES/refs/heads/main/CERTIFICATE.png",
    image:
      "https://raw.githubusercontent.com/Vishwa-156/CERTIFICATES/refs/heads/main/CERTIFICATE.png",
  },

  {
    id: 10,
    title: "Certification Participation",
    issuer: "NIT Durgapur",
    date: "2025-2026",
    link: "https://raw.githubusercontent.com/Vishwa-156/CERTIFICATES/refs/heads/main/certificate.jpg",
    image:
      "https://raw.githubusercontent.com/Vishwa-156/CERTIFICATES/refs/heads/main/certificate.jpg",
  },

  {
    id: 10,
    title: "Certification Participation",
    issuer: "IIT GUHWATI",
    date: "2025-2026",
    link: "https://raw.githubusercontent.com/Vishwa-156/CERTIFICATES/refs/heads/main/a22ccdb0-23c1-44e3-a305-94909e1669d6%20(1).png",
    image:
      "https://raw.githubusercontent.com/Vishwa-156/CERTIFICATES/refs/heads/main/a22ccdb0-23c1-44e3-a305-94909e1669d6%20(1).png"
  }
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="py-20 px-4 md:px-8 relative bg-gray-50 dark:bg-[#0B0212] transition-colors duration-300"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-pink-600 dark:text-[#F472B6] font-semibold tracking-widest uppercase text-sm">
            Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white">
            Certifications{" "}
            <span className="text-gradient">
              &amp; Awards
            </span>{" "}
            <Award className="inline-block h-8 w-8 text-yellow-500 animate-pulse" />
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium">
            Recognition of my technical expertise and continuous learning
            journey.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id + index}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-white dark:bg-[#1a1025] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-pink-500/10 border border-gray-100 dark:border-white/5 dark:hover:border-pink-500/20 transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="px-3 py-1 bg-pink-500/20 backdrop-blur-md border border-pink-500/30 text-pink-500 dark:text-pink-300 text-xs font-bold rounded-full uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-[#F472B6] transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/5 flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Credential ID: XXXXXXXX
                  </span>
                  <a
                    href={cert.link}
                    className="inline-flex items-center text-pink-600 dark:text-[#F472B6] hover:text-purple-600 dark:hover:text-[#A855F7] font-semibold transition-colors text-sm"
                  >
                    Verify <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;

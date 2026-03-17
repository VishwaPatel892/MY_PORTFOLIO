import { motion } from "framer-motion";
import { Rocket, ExternalLink, Github } from "lucide-react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-pink-500 font-semibold tracking-widest uppercase text-sm">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-800 dark:text-white">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
              Projects
            </span>{" "}
            <Rocket className="inline-block h-8 w-8 text-pink-400 animate-pulse" />
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for
            building impactful digital solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -10 }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">

        {/* Image Section */}
        <div
          className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-pink-500 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags?.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links Section */}
          <div className="mt-auto flex flex-col gap-3">

            {/* Live Demo */}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-pink-500 font-medium hover:text-pink-600 transition-colors"
              >
                View Live Demo
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            )}

            {/* GitHub */}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-600 dark:text-gray-400 font-medium hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </a>
            )}

            {/* YouTube Demo */}
            {project.youtube && (
              <div className="mt-4">
                <iframe
                  className="w-full h-48 rounded-lg"
                  src={project.youtube}
                  title="Project Demo"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            )}

          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
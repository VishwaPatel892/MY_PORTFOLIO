import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Youtube } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import { Helmet } from "react-helmet";

const About = () => {
    return (
<>
              <Helmet>
        <title>Home - Vishwa Patel</title>
        <meta name="description" content="Vishwa Patel - Full Stack Developer" />
      </Helmet>
        <section id="about" className="py-20 px-4 md:px-8 relative bg-white dark:bg-[#0B0212] transition-colors duration-300">

            
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/5 to-transparent"></div>

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">

                    <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 dark:from-[#F472B6] dark:to-[#A855F7]">Me</span>
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Bio Content - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2 space-y-6 text-center md:text-left"
                    >
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            Hi there! I'm <span className="font-bold text-pink-600 dark:text-[#F472B6]">Vishwa Patel</span>, a passionate Full Stack Developer based in Ahmedabad, India.
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            I build morden, responsive, and scalable web applications with a focus on clean code and seamless user experience.
                           </p>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Passionate about continuous learning, I enjoy solving real-world problems and turning ideas into impactful digital solutions.
                        </p>

                        <div className="pt-8 flex justify-center md:justify-start space-x-6">
                            <SocialButton href="https://github.com/VishwaPatel892" icon={<Github className="w-6 h-6" />} label="GitHub" />
                            <SocialButton href="https://leetcode.com/u/vishwa0102/" icon={<SiLeetcode className="w-6 h-6" />} label="LeetCode" />
                            <SocialButton href="https://www.linkedin.com/in/vishwa-patel-9bab9639a" icon={<Linkedin className="w-6 h-6" />} label="LinkedIn" />
                            <SocialButton href="https://www.youtube.com/@VishwaPatel-vp" icon={<Youtube className="w-6 h-6" />} label="YouTube" />
                            <SocialButton href="mailto:vishwa.patel.cg@gmail.com" icon={<Mail className="w-6 h-6" />} label="Email" />
                        </div>
                    </motion.div>

                    {/* Profile Image - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full md:w-1/2 flex justify-center md:justify-end"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                            <img
                                src="https://avatars.githubusercontent.com/u/225901469?v=4"
                                alt="Vishwa Patel"
                                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800 transform group-hover:scale-[1.02] transition duration-300"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
        </>
    );
};

const SocialButton = ({ href, icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-pink-500 hover:text-white dark:hover:bg-[#F472B6] dark:hover:text-white transition-all duration-300 shadow-sm hover:shadow-pink-500/30 transform hover:-translate-y-1"
        aria-label={label}
    >
        {icon}
    </a>
)

export default About;

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowRight, Sparkles, X } from 'lucide-react';

const Contact = () => {
    const formRef = useRef(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const name    = data.get('name')    || '';
        const email   = data.get('email')   || '';
        const subject = data.get('subject') || 'Portfolio Inquiry';
        const message = data.get('message') || '';

        const body = `From: ${name}\nEmail: ${email}\n\n${message}`;
        const mailto = `mailto:vishwa.patel.cg@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailto;
        event.target.reset();
        setIsFormOpen(false); // Close form after sending
    };

    return (
        <section id="contact" className="pt-24 pb-12 px-4 md:px-8 relative z-20 w-full bg-transparent">
            <div className="max-w-7xl mx-auto">
                <AnimatePresence mode="wait">
                    {!isFormOpen ? (
                        /* --- The Pre-Footer CTA Banner State --- */
                        <motion.div 
                            key="cta-banner"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
                        >
                            <div className="flex items-center gap-6">
                                <img 
                                    src="/footer.jpg.jpeg" 
                                    alt="Profile" 
                                    className="w-14 h-14 rounded-full object-cover border border-white/10 shrink-0 object-top"
                                />
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white m-0 leading-tight">
                                    Let's build <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">something extraordinary.</span>
                                </h2>
                            </div>

                            <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
                                <button 
                                    onClick={() => setIsFormOpen(true)}
                                    className="relative group w-full md:w-auto cursor-pointer"
                                >
                                    {/* Glowing animated border effect */}
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-purple-500 to-blue-500 rounded-full opacity-70 group-hover:opacity-100 transition duration-500 blur-[2px]"></div>
                                    
                                    {/* Button Body */}
                                    <div className="relative px-8 py-4 bg-white dark:bg-[#080B10] rounded-full flex items-center justify-between md:justify-center gap-3 transition-transform hover:scale-[0.98]">
                                        <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse"></div>
                                        <span className="font-bold text-gray-900 dark:text-white tracking-widest text-sm uppercase">Let's Connect</span>
                                        <ArrowRight className="w-4 h-4 text-gray-900 dark:text-white transition-transform group-hover:translate-x-1" />
                                    </div>
                                </button>
                                <p className="text-[#888] text-xs font-medium tracking-widest uppercase flex items-center justify-center gap-1 mt-2">
                                    I'll reply within 24 hours <Sparkles className="w-3 h-3" />
                                </p>
                            </div>
                        </motion.div>
                    ) : (
                        /* --- The Expanded Contact Form State --- */
                        <motion.div
                            key="contact-form"
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-white dark:bg-[#0B0F1A] rounded-[2rem] border border-gray-200 dark:border-white/5 shadow-2xl p-8 md:p-12 relative max-w-4xl mx-auto w-full"
                        >
                            {/* Close Button */}
                            <button 
                                onClick={() => setIsFormOpen(false)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                            
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Send a Message</h3>

                            <form onSubmit={onSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 tracking-wider uppercase">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full px-5 py-4 bg-gray-50 dark:bg-[#121826] border border-gray-200 dark:border-white/5 rounded-xl focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 tracking-wider uppercase">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full px-5 py-4 bg-gray-50 dark:bg-[#121826] border border-gray-200 dark:border-white/5 rounded-xl focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 tracking-wider uppercase">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        required
                                        className="w-full px-5 py-4 bg-[#121826] border border-white/5 rounded-xl focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] outline-none transition-all text-white placeholder-gray-600"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 tracking-wider uppercase">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="5"
                                        className="w-full px-5 py-4 bg-[#121826] border border-white/5 rounded-xl focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] outline-none transition-all text-white resize-none placeholder-gray-600"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                <div className="pt-4 flex justify-end">
                                    <button
                                        type="submit"
                                        className="w-full md:w-auto px-10 py-4 rounded-xl text-white font-bold shadow-lg shadow-[#7C3AED]/20 transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:opacity-90 active:scale-[0.98]"
                                    >
                                        Send Message <Send className="w-5 h-5 ml-2" />
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Contact;

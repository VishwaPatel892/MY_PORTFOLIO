import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, ArrowRight, Sparkles, X, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

/*
  ── EmailJS Setup ──
  1. Create a free account at https://www.emailjs.com
  2. Add a Service (Gmail / Outlook etc.) → copy the Service ID below
  3. Create an Email Template → copy the Template ID below
  4. Copy your Public Key from Account → API Keys

  Template variables used: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
*/
const EMAILJS_SERVICE_ID = 'service_h3e7l5q';   // ← replace with yours
const EMAILJS_TEMPLATE_ID = 'template_hy8pi81';    // ← replace with yours
const EMAILJS_PUBLIC_KEY = 'BKa8inQWz7t11U65-';     // ← replace with yours

const Contact = () => {
    const formRef = useRef(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

    const onSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            formRef.current.reset();
            setTimeout(() => {
                setStatus('idle');
                setIsFormOpen(false);
            }, 3000);
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    const inputClass =
        'w-full px-5 py-4 bg-gray-50 dark:bg-[#121826] border border-gray-200 dark:border-white/5 rounded-xl focus:border-[#7C3AED] focus:ring-1 focus:ring-[#7C3AED] outline-none transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600';

    return (
        <section id="contact" className="pt-24 pb-12 px-4 md:px-8 relative z-20 w-full bg-transparent">
            <div className="max-w-7xl mx-auto">
                <AnimatePresence mode="wait">
                    {!isFormOpen ? (
                        /* ── CTA Banner ── */
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
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                                        something extraordinary.
                                    </span>
                                </h2>
                            </div>

                            <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
                                <button
                                    id="contact-open-btn"
                                    onClick={() => setIsFormOpen(true)}
                                    className="relative group w-full md:w-auto cursor-pointer"
                                >
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 via-purple-500 to-blue-500 rounded-full opacity-70 group-hover:opacity-100 transition duration-500 blur-[2px]" />
                                    <div className="relative px-8 py-4 bg-white dark:bg-[#080B10] rounded-full flex items-center justify-between md:justify-center gap-3 transition-transform hover:scale-[0.98]">
                                        <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse" />
                                        <span className="font-bold text-gray-900 dark:text-white tracking-widest text-sm uppercase">Let's Connect</span>
                                        <ArrowRight className="w-4 h-4 text-gray-900 dark:text-white transition-transform group-hover:translate-x-1" />
                                    </div>
                                </button>
                                <p className="text-[#888] text-xs font-medium tracking-widest uppercase flex items-center gap-1 mt-2">
                                    I'll reply within 24 hours <Sparkles className="w-3 h-3" />
                                </p>
                            </div>
                        </motion.div>
                    ) : (
                        /* ── Contact Form ── */
                        <motion.div
                            key="contact-form"
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            className="bg-white dark:bg-[#0B0F1A] rounded-[2rem] border border-gray-200 dark:border-white/5 shadow-2xl p-8 md:p-12 relative max-w-4xl mx-auto w-full"
                        >
                            <button
                                onClick={() => { setIsFormOpen(false); setStatus('idle'); }}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Send a Message</h3>
                            <p className="text-sm text-[#888] mb-8">I'll get back to you within 24 hours.</p>

                            {/* Status banners */}
                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                        className="flex items-center gap-3 p-4 rounded-xl mb-6 bg-green-500/10 border border-green-500/30 text-green-400"
                                    >
                                        <CheckCircle className="w-5 h-5 shrink-0" />
                                        <span className="text-sm font-medium">Message sent! I'll reply soon 🚀</span>
                                    </motion.div>
                                )}
                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                        className="flex items-center gap-3 p-4 rounded-xl mb-6 bg-red-500/10 border border-red-500/30 text-red-400"
                                    >
                                        <AlertCircle className="w-5 h-5 shrink-0" />
                                        <span className="text-sm font-medium">Something went wrong. Please try again or email directly.</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 tracking-wider uppercase">Name</label>
                                        <input type="text" name="from_name" required className={inputClass} placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 tracking-wider uppercase">Email</label>
                                        <input type="email" name="from_email" required className={inputClass} placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 tracking-wider uppercase">Subject</label>
                                    <input type="text" name="subject" required className={inputClass} placeholder="What's this about?" />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 tracking-wider uppercase">Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        rows="5"
                                        className={inputClass + ' resize-none'}
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <div className="pt-4 flex justify-end">
                                    <button
                                        id="contact-submit-btn"
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="w-full md:w-auto px-10 py-4 rounded-xl text-white font-bold shadow-lg shadow-[#7C3AED]/20 transition-all duration-300 flex items-center justify-center gap-2 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                                    >
                                        {status === 'loading' ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">Send Message <Send className="w-4 h-4" /></span>
                                        )}
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

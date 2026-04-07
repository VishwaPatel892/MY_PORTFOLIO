import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, Mail, User, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("Sending...");
        
        const formData = new FormData(event.target);

        // Required Web3Forms access key (user needs to replace this)
        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully! 🎉");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } catch (error) {
            console.error("Error", error);
            setResult("Failed to send message.");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setResult(""), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 px-4 md:px-8 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-pink-50/30 dark:from-gray-900 dark:to-gray-800/30 -z-10"></div>
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-pink-600 dark:text-pink-500 font-semibold tracking-widest uppercase text-sm">Say Hello</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white">
                        Let's <span className="text-gradient">Connect!</span> <MessageSquare className="inline-block h-8 w-8 text-purple-500 dark:text-purple-400 animate-bounce delay-100" />
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
                        I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hi~
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info Column */}
                    <div className="space-y-8">
                        <ContactCard
                            icon={<User className="h-6 w-6 text-pink-500" />}
                            title="My Name"
                            value="Vishwa Patel"
                            delay={0.1}
                        />
                        <ContactCard
                            icon={<Mail className="h-6 w-6 text-purple-500" />}
                            title="Email Me"
                            value="vishwa.patel.cg@gmail.com"
                            link="mailto:vishwa.patel.cg@gmail.com"
                            delay={0.2}
                        />
                        <ContactCard
                            icon={<Phone className="h-6 w-6 text-yellow-500" />}
                            title="Phone Number"
                            value="+91 99244 92482"
                            link="tel:+919924492482"
                            delay={0.3}
                        />
                        <ContactCard
                            icon={<MapPin className="h-6 w-6 text-green-500" />}
                            title="Location"
                            value="Ahmedabad, India"
                            delay={0.4}
                        />
                    </div>

                    {/* Contact Form Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100 dark:border-gray-700 relative"
                    >
                        {/* Corner decoration */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-2xl opacity-20"></div>

                        <form onSubmit={onSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                        Your Name <span className="text-yellow-400 ml-1">✨</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="What should I call you?"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:focus:ring-pink-900 outline-none transition-all text-gray-800 dark:text-white placeholder-gray-400"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                        Email Address <span className="text-blue-400 ml-1">📧</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        placeholder="your.email@example.com"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:focus:ring-pink-900 outline-none transition-all text-gray-800 dark:text-white placeholder-gray-400"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                    Subject <span className="text-purple-400 ml-1">📝</span>
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    required
                                    placeholder="What's this about?"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:focus:ring-pink-900 outline-none transition-all text-gray-800 dark:text-white placeholder-gray-400"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
                                    Your Message <span className="text-red-400 ml-1">💌</span>
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    placeholder="Tell me what's on your mind~"
                                    className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:focus:ring-pink-900 outline-none transition-all text-gray-800 dark:text-white placeholder-gray-400"
                                ></textarea>
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <p className={`text-sm font-medium transition-opacity duration-300 ${
                                    result.includes('successfully') ? 'text-green-500' : 
                                    result.includes('Failed') || result.includes('Error') ? 'text-red-500' : 'text-gray-500'
                                }`}>
                                    {result}
                                </p>
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                                    className={`px-8 py-3 rounded-full text-white font-bold shadow-lg transition-all duration-300 flex items-center space-x-2 ${
                                        isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-pink-500 to-rose-500 hover:shadow-pink-500/30'
                                    }`}
                                >
                                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                    <Send className="h-4 w-4" />
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const ContactCard = ({ icon, title, value, link, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
    >
        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-full mr-4">
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{title}</p>
            {link ? (
                <a href={link} className="text-lg font-bold text-gray-800 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
                    {value}
                </a>
            ) : (
                <p className="text-lg font-bold text-gray-800 dark:text-white">{value}</p>
            )}
        </div>
    </motion.div>
);

export default Contact;

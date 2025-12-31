import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { scrollReveal } from '../utils/motion';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer id="contact" className="section-padding section-container bg-white border-t border-neutral-200 relative overflow-hidden">
            {/* Decorative background */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 0.03, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-accent to-transparent rounded-full blur-3xl pointer-events-none"
            />

            <motion.div
                {...scrollReveal}
                className="max-w-4xl mx-auto text-center relative z-10"
            >
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="heading-md text-neutral-900 mb-6"
                >
                    Let's Connect
                </motion.h2>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-20 h-1 bg-accent mx-auto mb-6 origin-center"
                />

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="body-lg text-neutral-600 mb-12 max-w-2xl mx-auto"
                >
                    Open to new opportunities and collaborations. Let's discuss how I can help drive your digital initiatives forward.
                </motion.p>

                {/* Contact Information */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {[
                        { icon: Mail, label: 'Email', value: 'kpechtes@gmail.com', href: 'mailto:kpechtes@gmail.com' },
                        { icon: Phone, label: 'Phone', value: '310.467.9570', href: 'tel:310.467.9570' },
                        { icon: MapPin, label: 'Location', value: 'Los Angeles, CA', href: null }
                    ].map((item, index) => {
                        const Icon = item.icon;
                        const Component = item.href ? motion.a : motion.div;

                        return (
                            <Component
                                key={index}
                                href={item.href || undefined}
                                initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(3px)" }}
                                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.6 + index * 0.15,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                whileHover={item.href ? {
                                    scale: 1.08,
                                    y: -8,
                                    transition: { duration: 0.3 }
                                } : {}}
                                className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-neutral-50 transition-colors group relative overflow-hidden"
                            >
                                {/* Gradient overlay on hover */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 0.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 bg-gradient-to-br from-accent to-accent-light pointer-events-none"
                                />

                                <motion.div
                                    whileHover={item.href ? {
                                        rotate: [0, -15, 15, 0],
                                        scale: 1.1,
                                        transition: { duration: 0.6 }
                                    } : {}}
                                    className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors relative z-10"
                                >
                                    <Icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                                </motion.div>

                                <div className="relative z-10">
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                                        className="font-semibold text-neutral-900 mb-1"
                                    >
                                        {item.label}
                                    </motion.p>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.9 + index * 0.15 }}
                                        className="text-neutral-600 text-sm"
                                    >
                                        {item.value}
                                    </motion.p>
                                </div>

                                {/* Bottom accent line */}
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent origin-center"
                                />
                            </Component>
                        );
                    })}
                </div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-px bg-neutral-200 mb-8 origin-center"
                />

                {/* Footer Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col md:flex-row items-center justify-between gap-4 text-neutral-600 text-sm"
                >
                    <p>© {new Date().getFullYear()} Khara Pechtes. All rights reserved.</p>
                    <p className="font-medium">Remote Senior Digital Project Manager</p>
                </motion.div>
            </motion.div>

            {/* Scroll to top button */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                    scale: 1.1,
                    y: -4,
                    boxShadow: "0 10px 25px rgba(14, 165, 233, 0.2)",
                    transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="absolute bottom-8 right-8 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-20 group"
            >
                <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowUp className="w-5 h-5" />
                </motion.div>
            </motion.button>
        </footer>
    );
};

export default Footer;
